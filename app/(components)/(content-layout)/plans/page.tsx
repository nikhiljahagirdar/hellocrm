"use client"

import React, { Fragment, useState } from 'react'
import { Card, Col, Form, Row, Dropdown } from 'react-bootstrap'
import SpkDropdown from '@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-dropdown'
import SpkTables from '@/shared/@spk-reusable-components/reusable-tables/spk-tables'
import SpkBadge from '@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-badge'
import SpkButton from '@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-buttons'

interface PlansProps {}

const Plans: React.FC<PlansProps> = () => {
  const [sortConfig, setSortConfig] = useState<{key: string, direction: 'asc' | 'desc'} | null>(null)

  const handleSort = (key: string) => {
    let direction: 'asc' | 'desc' = 'asc'
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc'
    }
    setSortConfig({ key, direction })
  }

  const plansData = [
    { id: 1, name: 'Basic Plan', description: 'Basic features for small businesses', price: '₹999', duration: 'Monthly', status: 'Active', users: 5, storage: '10GB' },
    { id: 2, name: 'Professional Plan', description: 'Advanced features for growing businesses', price: '₹2999', duration: 'Monthly', status: 'Active', users: 25, storage: '100GB' },
    { id: 3, name: 'Enterprise Plan', description: 'Full features for large enterprises', price: '₹9999', duration: 'Monthly', status: 'Active', users: 100, storage: '1TB' },
    { id: 4, name: 'Starter Plan', description: 'Trial plan for new users', price: '₹499', duration: 'Monthly', status: 'Inactive', users: 2, storage: '5GB' },
    { id: 5, name: 'Premium Plan', description: 'Premium features with priority support', price: '₹4999', duration: 'Monthly', status: 'Active', users: 50, storage: '500GB' }
  ]

  return (
    <Fragment>
      <div className="d-flex align-items-center justify-content-between mb-3 page-header-breadcrumb flex-wrap gap-2">
        <div>
          <h1 className="page-title fw-medium fs-20 mb-0">Plans</h1>
        </div>
        <div className="d-flex align-items-center gap-2 flex-wrap">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item"><a href="#!">Plans</a></li>
              <li className="breadcrumb-item active">Plans</li>
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
                  <Form.Control type="text" placeholder="Plan Name" className="form-control-sm" style={{ width: '200px' }} />
                  <Form.Select className="form-select-sm" style={{ width: '150px' }}>
                    <option>Status</option>
                    <option>Active</option>
                    <option>Inactive</option>
                  </Form.Select>
                  <div className="d-flex align-items-center gap-2">
                    <span className="text-muted fs-12">Price Range:</span>
                    <Form.Range className="form-range" style={{ width: '150px' }} />
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
                    +
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
                    { title: <div className="d-flex align-items-center justify-content-between" onClick={() => handleSort('name')} style={{cursor: 'pointer'}}>Plan Name <i className="ri-arrow-up-down-line ms-1"></i></div> },
                    { title: <div className="d-flex align-items-center justify-content-between" onClick={() => handleSort('price')} style={{cursor: 'pointer'}}>Price <i className="ri-arrow-up-down-line ms-1"></i></div> },
                    { title: <div className="d-flex align-items-center justify-content-between" onClick={() => handleSort('duration')} style={{cursor: 'pointer'}}>Duration <i className="ri-arrow-up-down-line ms-1"></i></div> },
                    { title: <div className="d-flex align-items-center justify-content-between" onClick={() => handleSort('users')} style={{cursor: 'pointer'}}>Max Users <i className="ri-arrow-up-down-line ms-1"></i></div> },
                    { title: <div className="d-flex align-items-center justify-content-between" onClick={() => handleSort('storage')} style={{cursor: 'pointer'}}>Storage <i className="ri-arrow-up-down-line ms-1"></i></div> },
                    { title: <div className="d-flex align-items-center justify-content-between" onClick={() => handleSort('status')} style={{cursor: 'pointer'}}>Status <i className="ri-arrow-up-down-line ms-1"></i></div> },
                    { title: 'Actions' }
                  ]}
                >
                  {plansData.map((plan, index) => (
                    <tr key={index}>
                      <td><input className="form-check-input" type="checkbox" /></td>
                      <td>
                        <div>
                          <div className="fw-semibold">{plan.name}</div>
                          <div className="text-muted fs-12">{plan.description}</div>
                        </div>
                      </td>
                      <td className="fw-semibold text-primary">{plan.price}</td>
                      <td>{plan.duration}</td>
                      <td>{plan.users}</td>
                      <td>{plan.storage}</td>
                      <td>
                        <SpkBadge variant="" Customclass={`badge bg-${plan.status === 'Active' ? 'success' : 'danger'}`}>
                          {plan.status}
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

export default Plans