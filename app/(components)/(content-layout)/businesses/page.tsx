"use client"

import React, { Fragment, useState } from 'react'
import { Card, Col, Form, Row, Dropdown } from 'react-bootstrap'
import SpkDropdown from '@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-dropdown'
import SpkTables from '@/shared/@spk-reusable-components/reusable-tables/spk-tables'
import SpkBadge from '@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-badge'
import SpkButton from '@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-buttons'

interface BusinessesProps {}

const Businesses: React.FC<BusinessesProps> = () => {
  const [sortConfig, setSortConfig] = useState<{key: string, direction: 'asc' | 'desc'} | null>(null)

  const handleSort = (key: string) => {
    let direction: 'asc' | 'desc' = 'asc'
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc'
    }
    setSortConfig({ key, direction })
  }

  const businessData = [
    { id: 1, name: 'ABC Properties', type: 'Real Estate', city: 'Mumbai', state: 'Maharashtra', status: 'Active', owner: 'John Doe', email: 'john@abc.com', phone: '+91 9876543210' },
    { id: 2, name: 'XYZ Builders', type: 'Construction', city: 'Delhi', state: 'Delhi', status: 'Active', owner: 'Jane Smith', email: 'jane@xyz.com', phone: '+91 9876543211' },
    { id: 3, name: 'PQR Realty', type: 'Real Estate', city: 'Bangalore', state: 'Karnataka', status: 'Inactive', owner: 'Mike Johnson', email: 'mike@pqr.com', phone: '+91 9876543212' },
    { id: 4, name: 'LMN Developers', type: 'Development', city: 'Chennai', state: 'Tamil Nadu', status: 'Active', owner: 'Sarah Wilson', email: 'sarah@lmn.com', phone: '+91 9876543213' },
    { id: 5, name: 'RST Holdings', type: 'Investment', city: 'Pune', state: 'Maharashtra', status: 'Active', owner: 'David Brown', email: 'david@rst.com', phone: '+91 9876543214' }
  ]

  return (
    <Fragment>
      <div className="d-flex align-items-center justify-content-between mb-3 page-header-breadcrumb flex-wrap gap-2">
        <div>
          <h1 className="page-title fw-medium fs-20 mb-0">Manage Businesses</h1>
        </div>
        <div className="d-flex align-items-center gap-2 flex-wrap">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item"><a href="#!">Businesses</a></li>
              <li className="breadcrumb-item active">Manage Businesses</li>
            </ol>
          </nav>
        </div>
      </div>

      <Row>
        <Col xl={12}>
          <Card className="custom-card">
            <Card.Header>
              <div className="d-flex align-items-center justify-content-between w-100">
                <div className="d-flex flex-wrap gap-3 align-items-center">
                  <Form.Select className="form-select-sm" style={{ width: '200px' }}>
                    <option>Business Name</option>
                    <option>ABC Properties</option>
                    <option>XYZ Builders</option>
                    <option>PQR Realty</option>
                  </Form.Select>
                  <Form.Select className="form-select-sm" style={{ width: '150px' }}>
                    <option>Business Type</option>
                    <option>Real Estate</option>
                    <option>Construction</option>
                    <option>Development</option>
                    <option>Investment</option>
                  </Form.Select>
                  <Form.Control type="text" placeholder="City" className="form-control-sm" style={{ width: '120px' }} />
                  <Form.Control type="text" placeholder="State" className="form-control-sm" style={{ width: '120px' }} />
                  <Form.Select className="form-select-sm" style={{ width: '120px' }}>
                    <option>Status</option>
                    <option>Active</option>
                    <option>Inactive</option>
                  </Form.Select>
                  <Form.Control type="text" placeholder="Owner Name" className="form-control-sm" style={{ width: '150px' }} />
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
                    +
                  </SpkButton>
                </div>
              </div>
            </Card.Header>
            <Card.Body className="p-0">
              <div className="table-responsive">
                <SpkTables
                  tableClass="text-nowrap table-sm"
                  showCheckbox={true}
                  header={[
                    { title: <div className="d-flex align-items-center justify-content-between" onClick={() => handleSort('name')} style={{cursor: 'pointer'}}>Business Name <i className="ri-arrow-up-down-line ms-1"></i></div> },
                    { title: <div className="d-flex align-items-center justify-content-between" onClick={() => handleSort('type')} style={{cursor: 'pointer'}}>Type <i className="ri-arrow-up-down-line ms-1"></i></div> },
                    { title: <div className="d-flex align-items-center justify-content-between" onClick={() => handleSort('city')} style={{cursor: 'pointer'}}>City <i className="ri-arrow-up-down-line ms-1"></i></div> },
                    { title: <div className="d-flex align-items-center justify-content-between" onClick={() => handleSort('state')} style={{cursor: 'pointer'}}>State <i className="ri-arrow-up-down-line ms-1"></i></div> },
                    { title: <div className="d-flex align-items-center justify-content-between" onClick={() => handleSort('owner')} style={{cursor: 'pointer'}}>Owner <i className="ri-arrow-up-down-line ms-1"></i></div> },
                    { title: <div className="d-flex align-items-center justify-content-between" onClick={() => handleSort('status')} style={{cursor: 'pointer'}}>Status <i className="ri-arrow-up-down-line ms-1"></i></div> },
                    { title: 'Actions' }
                  ]}
                >
                  {businessData.map((business, index) => (
                    <tr key={index}>
                      <td><input className="form-check-input" type="checkbox" /></td>
                      <td>
                        <div>
                          <div className="fw-semibold">{business.name}</div>
                          <div className="text-muted fs-12">{business.email}</div>
                        </div>
                      </td>
                      <td>{business.type}</td>
                      <td>{business.city}</td>
                      <td>{business.state}</td>
                      <td>{business.owner}</td>
                      <td>
                        <SpkBadge variant="" Customclass={`badge bg-${business.status === 'Active' ? 'success' : 'danger'}`}>
                          {business.status}
                        </SpkBadge>
                      </td>
                      <td>
                        <div className="hstack gap-2 fs-15">
                          <a className="btn btn-icon btn-sm btn-success-light rounded-pill" href="#!">
                            <i className="ri-download-2-line"></i>
                          </a>
                          <a className="btn btn-icon btn-sm btn-info-light rounded-pill" href="#!">
                            <i className="ri-edit-line"></i>
                          </a>
                          <a className="btn btn-icon btn-sm btn-danger-light rounded-pill" href="#!">
                            <i className="ri-delete-bin-line"></i>
                          </a>
                        </div>
                      </td>
                    </tr>
                  ))}
                </SpkTables>
              </div>
            </Card.Body>
            <Card.Footer>
              <div className="d-flex align-items-center justify-content-between">
                <div>Showing 1 to 5 of 100 entries <i className="bi bi-arrow-right ms-2"></i></div>
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

export default Businesses