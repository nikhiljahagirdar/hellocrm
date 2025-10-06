const fs = require('fs');
const path = require('path');

const generatePageTemplate = (config) => {
  const { title, breadcrumbPath, filters, sampleData, addButtonText = 'Add New' } = config;
  
  const filterFields = filters.map(filter => `
                    <Form.Select className="form-select-sm" style={{ width: '180px' }}>
                      <option>${filter}</option>
                    </Form.Select>`).join('');

  const tableHeaders = sampleData.headers.map(header => `
                    { title: <div className="d-flex align-items-center justify-content-between" onClick={() => handleSort('${header.key}')} style={{cursor: 'pointer'}}>${header.title} <i className="ri-arrow-up-down-line ms-1"></i></div> }`).join(',');

  const tableRows = sampleData.rows.map((row, idx) => `
                    <tr key={${idx}}>
                      <td><input className="form-check-input" type="checkbox" /></td>
                      ${row.map(cell => `<td>${cell}</td>`).join('')}
                      <td>
                        <div className="hstack gap-2 fs-15">
                          <a className="btn btn-icon btn-sm btn-success-light rounded-pill" href="#!">
                            <i className="ri-eye-line"></i>
                          </a>
                          <a className="btn btn-icon btn-sm btn-info-light rounded-pill" href="#!">
                            <i className="ri-edit-line"></i>
                          </a>
                          <a className="btn btn-icon btn-sm btn-danger-light rounded-pill" href="#!">
                            <i className="ri-delete-bin-line"></i>
                          </a>
                        </div>
                      </td>
                    </tr>`).join('');

  return `'use client'
import { Fragment, useState } from 'react'
import { Card, Col, Row, Form, Dropdown } from 'react-bootstrap'
import SpkTables from '@/shared/@spk-reusable-components/reusable-tables/spk-tables'
import SpkBadge from '@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-badge'
import SpkButton from '@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-buttons'
import SpkDropdown from '@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-dropdown'

const ${title.replace(/[^a-zA-Z0-9]/g, '')} = () => {
  const [sortConfig, setSortConfig] = useState<{key: string, direction: 'asc' | 'desc'} | null>(null)

  const handleSort = (key: string) => {
    let direction: 'asc' | 'desc' = 'asc'
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc'
    }
    setSortConfig({ key, direction })
  }

  return (
    <Fragment>
      <div className="d-flex align-items-center justify-content-between mb-3 page-header-breadcrumb flex-wrap gap-2">
        <div>
          <h1 className="page-title fw-medium fs-20 mb-0">${title}</h1>
        </div>
        <div className="d-flex align-items-center gap-2 flex-wrap">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb mb-0">
              ${breadcrumbPath.map((item, idx) => 
                idx === breadcrumbPath.length - 1 
                  ? `<li className="breadcrumb-item active">${item}</li>`
                  : `<li className="breadcrumb-item"><a href="#!">${item}</a></li>`
              ).join('')}
            </ol>
          </nav>
        </div>
      </div>

      <Row>
        <Col xl={12}>
          <Card className="custom-card">
            <Card.Header>
              <div className="d-flex align-items-center justify-content-between w-100">
                <div className="d-flex align-items-center gap-2">
                  <div className="d-flex flex-wrap gap-3 align-items-center">
                    ${filterFields}
                  </div>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <SpkDropdown
                    Togglevariant=""
                    Toggletext="Export"
                    Arrowicon={true}
                    IconClass="ri-download-line me-1"
                    Customtoggleclass="btn btn-primary btn-sm"
                  >
                    <Dropdown.Item>CSV</Dropdown.Item>
                    <Dropdown.Item>Excel</Dropdown.Item>
                    <Dropdown.Item>PDF</Dropdown.Item>
                  </SpkDropdown>
                  <SpkButton Buttonvariant="success" Size="sm">
                    ${addButtonText}
                  </SpkButton>
                </div>
              </div>
            </Card.Header>
            <Card.Body className="p-0">
              <div className="table-responsive">
                <SpkTables
                  tableClass="text-nowrap table-sm table"
                  showCheckbox={true}
                  header={[
                    ${tableHeaders},
                    { title: 'Actions' }
                  ]}
                >
                  ${tableRows}
                </SpkTables>
              </div>
            </Card.Body>
            <Card.Footer>
              <div className="d-flex align-items-center justify-content-between">
                <div>Showing 1 to 10 of 100 entries <i className="bi bi-arrow-right ms-2"></i></div>
                <div>
                  <nav>
                    <ul className="pagination pagination-sm mb-0">
                      <li className="page-item disabled"><a className="page-link">Previous</a></li>
                      <li className="page-item active"><a className="page-link">1</a></li>
                      <li className="page-item"><a className="page-link">2</a></li>
                      <li className="page-item"><a className="page-link">3</a></li>
                      <li className="page-item"><a className="page-link">Next</a></li>
                    </ul>
                  </nav>
                </div>
              </div>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Fragment>
  )
}

export default ${title.replace(/[^a-zA-Z0-9]/g, '')}`;
};

const pages = [
  {
    path: 'leads/list/page.tsx',
    title: 'All Leads',
    breadcrumbPath: ['Leads', 'All Leads'],
    filters: ['Stage', 'Source', 'Assigned To', 'Date Range', 'Status', 'Budget'],
    addButtonText: '+ Add Lead',
    sampleData: {
      headers: [
        { key: 'name', title: 'Lead Name' },
        { key: 'source', title: 'Source' },
        { key: 'stage', title: 'Stage' },
        { key: 'assignedTo', title: 'Assigned To' },
        { key: 'budget', title: 'Budget' },
        { key: 'status', title: 'Status' }
      ],
      rows: [
        ['John Doe', 'Website', '<SpkBadge variant="" Customclass="badge bg-primary-transparent">New</SpkBadge>', 'Agent 1', '₹50L', '<SpkBadge variant="" Customclass="badge bg-success-transparent">Active</SpkBadge>'],
        ['Jane Smith', 'Referral', '<SpkBadge variant="" Customclass="badge bg-warning-transparent">Contacted</SpkBadge>', 'Agent 2', '₹75L', '<SpkBadge variant="" Customclass="badge bg-success-transparent">Active</SpkBadge>']
      ]
    }
  },
  {
    path: 'leads/stage/new/page.tsx',
    title: 'New Leads',
    breadcrumbPath: ['Leads', 'New'],
    filters: ['Source', 'Assigned To', 'Date Range', 'Budget'],
    addButtonText: '+ Add Lead',
    sampleData: {
      headers: [
        { key: 'name', title: 'Lead Name' },
        { key: 'source', title: 'Source' },
        { key: 'assignedTo', title: 'Assigned To' },
        { key: 'budget', title: 'Budget' },
        { key: 'createdDate', title: 'Created Date' }
      ],
      rows: [
        ['John Doe', 'Website', 'Agent 1', '₹50L', '2024-01-15'],
        ['Mike Johnson', 'Social Media', 'Agent 3', '₹60L', '2024-01-14']
      ]
    }
  },
  {
    path: 'leads/stage/contacted/page.tsx',
    title: 'Contacted Leads',
    breadcrumbPath: ['Leads', 'Contacted'],
    filters: ['Source', 'Assigned To', 'Date Range', 'Next Follow-up'],
    addButtonText: '+ Add Lead',
    sampleData: {
      headers: [
        { key: 'name', title: 'Lead Name' },
        { key: 'source', title: 'Source' },
        { key: 'assignedTo', title: 'Assigned To' },
        { key: 'lastContact', title: 'Last Contact' },
        { key: 'nextFollowup', title: 'Next Follow-up' }
      ],
      rows: [
        ['Jane Smith', 'Referral', 'Agent 2', '2024-01-10', '2024-01-17'],
        ['Bob Wilson', 'Cold Call', 'Agent 1', '2024-01-12', '2024-01-19']
      ]
    }
  },
  {
    path: 'deals/list/page.tsx',
    title: 'All Deals',
    breadcrumbPath: ['Deals', 'All Deals'],
    filters: ['Stage', 'Project', 'Unit', 'Assigned To', 'Date Range', 'Payment Status'],
    addButtonText: '+ Add Deal',
    sampleData: {
      headers: [
        { key: 'dealId', title: 'Deal ID' },
        { key: 'customer', title: 'Customer' },
        { key: 'project', title: 'Project' },
        { key: 'unit', title: 'Unit' },
        { key: 'value', title: 'Deal Value' },
        { key: 'stage', title: 'Stage' }
      ],
      rows: [
        ['D001', 'John Doe', 'Sunrise Apartments', 'A-101', '₹75L', '<SpkBadge variant="" Customclass="badge bg-success-transparent">Token Paid</SpkBadge>'],
        ['D002', 'Jane Smith', 'Green Valley', 'B-205', '₹90L', '<SpkBadge variant="" Customclass="badge bg-warning-transparent">Agreement</SpkBadge>']
      ]
    }
  },
  {
    path: 'contacts/list/page.tsx',
    title: 'All Contacts',
    breadcrumbPath: ['Contacts', 'All Contacts'],
    filters: ['Type', 'Status', 'Source', 'Assigned To', 'Date Range'],
    addButtonText: '+ Add Contact',
    sampleData: {
      headers: [
        { key: 'name', title: 'Contact Name' },
        { key: 'phone', title: 'Phone' },
        { key: 'email', title: 'Email' },
        { key: 'type', title: 'Type' },
        { key: 'status', title: 'Status' }
      ],
      rows: [
        ['John Doe', '+91 9876543210', 'john@email.com', 'Lead', '<SpkBadge variant="" Customclass="badge bg-success-transparent">Active</SpkBadge>'],
        ['Jane Smith', '+91 9876543211', 'jane@email.com', 'Customer', '<SpkBadge variant="" Customclass="badge bg-success-transparent">Active</SpkBadge>']
      ]
    }
  },
  {
    path: 'projects/list/page.tsx',
    title: 'My Projects',
    breadcrumbPath: ['Projects', 'My Projects'],
    filters: ['Status', 'Location', 'Builder', 'Date Range'],
    addButtonText: '+ Add Project',
    sampleData: {
      headers: [
        { key: 'name', title: 'Project Name' },
        { key: 'location', title: 'Location' },
        { key: 'builder', title: 'Builder' },
        { key: 'units', title: 'Total Units' },
        { key: 'status', title: 'Status' }
      ],
      rows: [
        ['Sunrise Apartments', 'Gurgaon', 'ABC Builders', '200', '<SpkBadge variant="" Customclass="badge bg-success-transparent">Active</SpkBadge>'],
        ['Green Valley', 'Noida', 'XYZ Developers', '150', '<SpkBadge variant="" Customclass="badge bg-warning-transparent">Upcoming</SpkBadge>']
      ]
    }
  },
  {
    path: 'team/list/page.tsx',
    title: 'Staff Members',
    breadcrumbPath: ['Team', 'Staff Members'],
    filters: ['Status', 'Role', 'Joined Date'],
    addButtonText: '+ Add Staff',
    sampleData: {
      headers: [
        { key: 'name', title: 'Staff Name' },
        { key: 'role', title: 'Role' },
        { key: 'email', title: 'Email' },
        { key: 'joinedDate', title: 'Joined Date' },
        { key: 'status', title: 'Status' }
      ],
      rows: [
        ['Agent 1', 'Sales Agent', 'agent1@company.com', '2023-06-15', '<SpkBadge variant="" Customclass="badge bg-success-transparent">Active</SpkBadge>'],
        ['Manager 1', 'Sales Manager', 'manager1@company.com', '2023-01-10', '<SpkBadge variant="" Customclass="badge bg-success-transparent">Active</SpkBadge>']
      ]
    }
  },
  {
    path: 'brokers/list/page.tsx',
    title: 'My Brokers',
    breadcrumbPath: ['Brokers', 'My Brokers'],
    filters: ['Status', 'Location', 'Deals Count'],
    addButtonText: '+ Add Broker',
    sampleData: {
      headers: [
        { key: 'name', title: 'Broker Name' },
        { key: 'phone', title: 'Phone' },
        { key: 'location', title: 'Location' },
        { key: 'deals', title: 'Total Deals' },
        { key: 'status', title: 'Status' }
      ],
      rows: [
        ['Broker 1', '+91 9876543210', 'Gurgaon', '25', '<SpkBadge variant="" Customclass="badge bg-success-transparent">Active</SpkBadge>'],
        ['Broker 2', '+91 9876543211', 'Noida', '18', '<SpkBadge variant="" Customclass="badge bg-success-transparent">Active</SpkBadge>']
      ]
    }
  },
  {
    path: 'campaigns/list/page.tsx',
    title: 'Campaigns',
    breadcrumbPath: ['Campaigns', 'Campaigns'],
    filters: ['Campaign Type', 'Status', 'Date Range', 'Template'],
    addButtonText: '+ Create Campaign',
    sampleData: {
      headers: [
        { key: 'name', title: 'Campaign Name' },
        { key: 'type', title: 'Type' },
        { key: 'status', title: 'Status' },
        { key: 'sent', title: 'Messages Sent' },
        { key: 'delivered', title: 'Delivered' }
      ],
      rows: [
        ['New Year Offer', 'SMS', '<SpkBadge variant="" Customclass="badge bg-success-transparent">Completed</SpkBadge>', '1,500', '1,450'],
        ['Property Launch', 'Email', '<SpkBadge variant="" Customclass="badge bg-warning-transparent">Running</SpkBadge>', '2,000', '1,800']
      ]
    }
  },
  {
    path: 'reports/leads/page.tsx',
    title: 'Lead Reports',
    breadcrumbPath: ['Reports', 'Lead Reports'],
    filters: ['Date Range', 'Staff', 'Stage'],
    addButtonText: '+ Generate Report',
    sampleData: {
      headers: [
        { key: 'period', title: 'Period' },
        { key: 'totalLeads', title: 'Total Leads' },
        { key: 'converted', title: 'Converted' },
        { key: 'conversionRate', title: 'Conversion Rate' },
        { key: 'revenue', title: 'Revenue Generated' }
      ],
      rows: [
        ['Jan 2024', '150', '25', '16.7%', '₹2.5Cr'],
        ['Dec 2023', '120', '20', '16.7%', '₹2.0Cr']
      ]
    }
  }
];

// Generate all pages
const basePath = './app/(components)/(content-layout)';

pages.forEach(pageConfig => {
  const fullPath = path.join(basePath, pageConfig.path);
  const dir = path.dirname(fullPath);
  
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  
  fs.writeFileSync(fullPath, generatePageTemplate(pageConfig));
  console.log(`Updated: ${fullPath}`);
});

console.log('All pages updated successfully!');