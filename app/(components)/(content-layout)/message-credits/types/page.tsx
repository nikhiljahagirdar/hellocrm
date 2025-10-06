"use client"

import React, { Fragment, useState } from 'react'
import { Card, Col, Form, Row, Dropdown } from 'react-bootstrap'
import SpkDropdown from '@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-dropdown'
import SpkTables from '@/shared/@spk-reusable-components/reusable-tables/spk-tables'
import SpkBadge from '@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-badge'
import SpkButton from '@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-buttons'

interface MessageCreditTypesProps {}

const MessageCreditTypes: React.FC<MessageCreditTypesProps> = () => {
  const [sortConfig, setSortConfig] = useState<{key: string, direction: 'asc' | 'desc'} | null>(null)

  const handleSort = (key: string) => {
    let direction: 'asc' | 'desc' = 'asc'
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc'
    }
    setSortConfig({ key, direction })
  }

  const creditTypesData = [
    { id: 1, creditType: 'SMS', description: 'SMS messaging credits', unitCost: '₹0.50', status: 'Active', createdDate: '2024-01-15' },
    { id: 2, creditType: 'Email', description: 'Email messaging credits', unitCost: '₹0.10', status: 'Active', createdDate: '2024-01-14' },
    { id: 3, creditType: 'WhatsApp', description: 'WhatsApp messaging credits', unitCost: '₹0.75', status: 'Active', createdDate: '2024-01-13' },
    { id: 4, creditType: 'Push Notification', description: 'Mobile push notification credits', unitCost: '₹0.05', status: 'Inactive', createdDate: '2024-01-12' },
    { id: 5, creditType: 'Voice Call', description: 'Voice call credits per minute', unitCost: '₹2.00', status: 'Active', createdDate: '2024-01-11' }
  ]

  return (
    <Fragment>
      <div className="d-flex align-items-center justify-content-between mb-3 page-header-breadcrumb flex-wrap gap-2">
        <div>
          <h1 className="page-title fw-medium fs-20 mb-0">Message Credit Types</h1>
        </div>
        <div className="d-flex align-items-center gap-2 flex-wrap">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item"><a href="#!">Credits</a></li>
              <li className="breadcrumb-item"><a href="#!">Message Credits</a></li>
              <li className="breadcrumb-item active">Credit Types</li>
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
                    <option>Credit Type</option>
                    <option>SMS</option>
                    <option>Email</option>
                    <option>WhatsApp</option>
                  </Form.Select>
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
                    { title: <div className="d-flex align-items-center justify-content-between" onClick={() => handleSort('creditType')} style={{cursor: 'pointer'}}>Credit Type <i className="ri-arrow-up-down-line ms-1"></i></div> },
                    { title: <div className="d-flex align-items-center justify-content-between" onClick={() => handleSort('description')} style={{cursor: 'pointer'}}>Description <i className="ri-arrow-up-down-line ms-1"></i></div> },
                    { title: <div className="d-flex align-items-center justify-content-between" onClick={() => handleSort('unitCost')} style={{cursor: 'pointer'}}>Unit Cost <i className="ri-arrow-up-down-line ms-1"></i></div> },
                    { title: <div className="d-flex align-items-center justify-content-between" onClick={() => handleSort('status')} style={{cursor: 'pointer'}}>Status <i className="ri-arrow-up-down-line ms-1"></i></div> },
                    { title: <div className="d-flex align-items-center justify-content-between" onClick={() => handleSort('createdDate')} style={{cursor: 'pointer'}}>Created Date <i className="ri-arrow-up-down-line ms-1"></i></div> },
                    { title: 'Actions' }
                  ]}
                >
                  {creditTypesData.map((creditType, index) => (
                    <tr key={index}>
                      <td><input className="form-check-input" type="checkbox" /></td>
                      <td>
                        <div className="d-flex align-items-center gap-2">
                          <SpkBadge variant="" Customclass={`badge bg-${creditType.creditType === 'SMS' ? 'primary' : creditType.creditType === 'Email' ? 'info' : creditType.creditType === 'WhatsApp' ? 'success' : 'secondary'}`}>
                            {creditType.creditType}
                          </SpkBadge>
                        </div>
                      </td>
                      <td>{creditType.description}</td>
                      <td className="fw-semibold text-primary">{creditType.unitCost}</td>
                      <td>
                        <SpkBadge variant="" Customclass={`badge bg-${creditType.status === 'Active' ? 'success' : 'danger'}`}>
                          {creditType.status}
                        </SpkBadge>
                      </td>
                      <td>{creditType.createdDate}</td>
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

export default MessageCreditTypes