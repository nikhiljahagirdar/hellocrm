const fs = require('fs');
const path = require('path');

const generatePageTemplate = (config) => {
  const { title, breadcrumbPath, filters, sampleData, addButtonText = '+ Add New' } = config;
  
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

const remainingPages = [
  {
    path: 'calls/records/page.tsx',
    title: 'Call Records',
    breadcrumbPath: ['Calls', 'Call Records'],
    filters: ['Call Type', 'Status', 'Duration', 'Staff', 'Date Range'],
    addButtonText: '+ Add Record',
    sampleData: {
      headers: [
        { key: 'callId', title: 'Call ID' },
        { key: 'contact', title: 'Contact' },
        { key: 'type', title: 'Call Type' },
        { key: 'duration', title: 'Duration' },
        { key: 'status', title: 'Status' }
      ],
      rows: [
        ['C001', 'John Doe', 'Outbound', '5:30', '<SpkBadge variant="" Customclass="badge bg-success-transparent">Completed</SpkBadge>'],
        ['C002', 'Jane Smith', 'Inbound', '3:45', '<SpkBadge variant="" Customclass="badge bg-warning-transparent">Missed</SpkBadge>']
      ]
    }
  },
  {
    path: 'tasks/list/page.tsx',
    title: 'Tasks',
    breadcrumbPath: ['Tasks', 'Tasks'],
    filters: ['Assigned To', 'Status', 'Task Type', 'Date Range'],
    addButtonText: '+ Add Task',
    sampleData: {
      headers: [
        { key: 'title', title: 'Task Title' },
        { key: 'assignedTo', title: 'Assigned To' },
        { key: 'priority', title: 'Priority' },
        { key: 'dueDate', title: 'Due Date' },
        { key: 'status', title: 'Status' }
      ],
      rows: [
        ['Follow up with lead', 'Agent 1', '<SpkBadge variant="" Customclass="badge bg-danger-transparent">High</SpkBadge>', '2024-01-20', '<SpkBadge variant="" Customclass="badge bg-warning-transparent">Pending</SpkBadge>'],
        ['Site visit preparation', 'Agent 2', '<SpkBadge variant="" Customclass="badge bg-success-transparent">Medium</SpkBadge>', '2024-01-18', '<SpkBadge variant="" Customclass="badge bg-success-transparent">Completed</SpkBadge>']
      ]
    }
  },
  {
    path: 'notes/list/page.tsx',
    title: 'Notes',
    breadcrumbPath: ['Notes'],
    filters: ['Assigned To', 'Date Range', 'Linked Module'],
    addButtonText: '+ Add Note',
    sampleData: {
      headers: [
        { key: 'title', title: 'Note Title' },
        { key: 'linkedTo', title: 'Linked To' },
        { key: 'createdBy', title: 'Created By' },
        { key: 'createdDate', title: 'Created Date' },
        { key: 'type', title: 'Type' }
      ],
      rows: [
        ['Customer requirements', 'Lead: John Doe', 'Agent 1', '2024-01-15', '<SpkBadge variant="" Customclass="badge bg-info-transparent">Lead</SpkBadge>'],
        ['Project discussion', 'Deal: D001', 'Manager 1', '2024-01-14', '<SpkBadge variant="" Customclass="badge bg-success-transparent">Deal</SpkBadge>']
      ]
    }
  },
  {
    path: 'resale/properties/page.tsx',
    title: 'Resale Properties',
    breadcrumbPath: ['Resale', 'Properties'],
    filters: ['Type', 'Status', 'Price Range', 'Locality'],
    addButtonText: '+ Add Property',
    sampleData: {
      headers: [
        { key: 'title', title: 'Property Title' },
        { key: 'type', title: 'Type' },
        { key: 'location', title: 'Location' },
        { key: 'price', title: 'Price' },
        { key: 'status', title: 'Status' }
      ],
      rows: [
        ['3BHK Apartment', 'Flat', 'Gurgaon Sector 45', '₹85L', '<SpkBadge variant="" Customclass="badge bg-success-transparent">Available</SpkBadge>'],
        ['2BHK Villa', 'Villa', 'Noida Extension', '₹1.2Cr', '<SpkBadge variant="" Customclass="badge bg-danger-transparent">Sold</SpkBadge>']
      ]
    }
  },
  {
    path: 'builders/list/page.tsx',
    title: 'My Builders',
    breadcrumbPath: ['Builders', 'My Builders'],
    filters: ['Status', 'Location', 'No. of Projects'],
    addButtonText: '+ Add Builder',
    sampleData: {
      headers: [
        { key: 'name', title: 'Builder Name' },
        { key: 'location', title: 'Location' },
        { key: 'projects', title: 'Projects' },
        { key: 'contact', title: 'Contact Person' },
        { key: 'status', title: 'Status' }
      ],
      rows: [
        ['ABC Builders', 'Gurgaon', '5', 'Mr. Sharma', '<SpkBadge variant="" Customclass="badge bg-success-transparent">Active</SpkBadge>'],
        ['XYZ Developers', 'Noida', '3', 'Ms. Gupta', '<SpkBadge variant="" Customclass="badge bg-success-transparent">Active</SpkBadge>']
      ]
    }
  },
  {
    path: 'audit/logs/page.tsx',
    title: 'Audit Logs',
    breadcrumbPath: ['Audit Logs'],
    filters: ['Module', 'Action', 'User', 'Date Range'],
    addButtonText: '',
    sampleData: {
      headers: [
        { key: 'timestamp', title: 'Timestamp' },
        { key: 'user', title: 'User' },
        { key: 'action', title: 'Action' },
        { key: 'module', title: 'Module' },
        { key: 'details', title: 'Details' }
      ],
      rows: [
        ['2024-01-15 14:30:00', 'Agent 1', 'CREATE', 'Leads', 'Created new lead: John Doe'],
        ['2024-01-15 14:25:00', 'Manager 1', 'UPDATE', 'Deals', 'Updated deal status: D001']
      ]
    }
  },
  {
    path: 'notifications/page.tsx',
    title: 'Notifications',
    breadcrumbPath: ['Notifications'],
    filters: ['Type', 'Status', 'Date Range', 'User'],
    addButtonText: '+ Create Notification',
    sampleData: {
      headers: [
        { key: 'title', title: 'Title' },
        { key: 'type', title: 'Type' },
        { key: 'recipient', title: 'Recipient' },
        { key: 'date', title: 'Date' },
        { key: 'status', title: 'Status' }
      ],
      rows: [
        ['New lead assigned', 'Lead Assignment', 'Agent 1', '2024-01-15', '<SpkBadge variant="" Customclass="badge bg-success-transparent">Read</SpkBadge>'],
        ['Payment reminder', 'Payment', 'Customer', '2024-01-14', '<SpkBadge variant="" Customclass="badge bg-warning-transparent">Unread</SpkBadge>']
      ]
    }
  },
  {
    path: 'settings/company/page.tsx',
    title: 'Company Profile',
    breadcrumbPath: ['Settings', 'Company Profile'],
    filters: [],
    addButtonText: '+ Update Profile',
    sampleData: {
      headers: [
        { key: 'field', title: 'Field' },
        { key: 'value', title: 'Current Value' },
        { key: 'lastUpdated', title: 'Last Updated' },
        { key: 'updatedBy', title: 'Updated By' }
      ],
      rows: [
        ['Company Name', 'ABC Real Estate', '2024-01-10', 'Admin'],
        ['Contact Email', 'info@abcrealestate.com', '2024-01-05', 'Admin']
      ]
    }
  },
  {
    path: 'subscription/plan/page.tsx',
    title: 'My Plan',
    breadcrumbPath: ['Subscription', 'My Plan'],
    filters: [],
    addButtonText: '+ Upgrade Plan',
    sampleData: {
      headers: [
        { key: 'feature', title: 'Feature' },
        { key: 'current', title: 'Current Plan' },
        { key: 'used', title: 'Used' },
        { key: 'limit', title: 'Limit' },
        { key: 'status', title: 'Status' }
      ],
      rows: [
        ['Users', 'Professional', '8', '10', '<SpkBadge variant="" Customclass="badge bg-success-transparent">Active</SpkBadge>'],
        ['Storage', 'Professional', '15GB', '50GB', '<SpkBadge variant="" Customclass="badge bg-success-transparent">Active</SpkBadge>']
      ]
    }
  },
  {
    path: 'credits/messaging/page.tsx',
    title: 'Messaging Credits',
    breadcrumbPath: ['Credits', 'Messaging Credits'],
    filters: ['Channel', 'Status', 'Date Range'],
    addButtonText: '+ Purchase Credits',
    sampleData: {
      headers: [
        { key: 'channel', title: 'Channel' },
        { key: 'purchased', title: 'Purchased' },
        { key: 'used', title: 'Used' },
        { key: 'remaining', title: 'Remaining' },
        { key: 'status', title: 'Status' }
      ],
      rows: [
        ['SMS', '5,000', '3,200', '1,800', '<SpkBadge variant="" Customclass="badge bg-success-transparent">Active</SpkBadge>'],
        ['Email', '10,000', '7,500', '2,500', '<SpkBadge variant="" Customclass="badge bg-success-transparent">Active</SpkBadge>']
      ]
    }
  },
  {
    path: 'support/tickets/page.tsx',
    title: 'Support Tickets',
    breadcrumbPath: ['Support', 'Support Tickets'],
    filters: ['Status', 'Priority', 'Assigned Staff', 'Date Range'],
    addButtonText: '+ Create Ticket',
    sampleData: {
      headers: [
        { key: 'ticketId', title: 'Ticket ID' },
        { key: 'subject', title: 'Subject' },
        { key: 'priority', title: 'Priority' },
        { key: 'assignedTo', title: 'Assigned To' },
        { key: 'status', title: 'Status' }
      ],
      rows: [
        ['T001', 'Login issue', '<SpkBadge variant="" Customclass="badge bg-danger-transparent">High</SpkBadge>', 'Support Team', '<SpkBadge variant="" Customclass="badge bg-warning-transparent">Open</SpkBadge>'],
        ['T002', 'Feature request', '<SpkBadge variant="" Customclass="badge bg-info-transparent">Low</SpkBadge>', 'Dev Team', '<SpkBadge variant="" Customclass="badge bg-success-transparent">Resolved</SpkBadge>']
      ]
    }
  }
];

// Generate remaining pages
const basePath = './app/(components)/(content-layout)';

remainingPages.forEach(pageConfig => {
  const fullPath = path.join(basePath, pageConfig.path);
  const dir = path.dirname(fullPath);
  
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  
  fs.writeFileSync(fullPath, generatePageTemplate(pageConfig));
  console.log(`Updated: ${fullPath}`);
});

console.log('All remaining pages updated successfully!');