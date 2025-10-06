"use client"

import React, { Fragment, useState } from 'react'
import { Card, Col, Form, Row, Dropdown } from 'react-bootstrap'
import SpkDropdown from '@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-dropdown'
import SpkTables from '@/shared/@spk-reusable-components/reusable-tables/spk-tables'
import SpkBadge from '@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-badge'
import SpkButton from '@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-buttons'
import SpkDatepickr from '@/shared/@spk-reusable-components/reusable-plugins/spk-datepicker'

interface SupportTicketsProps {}

const SupportTickets: React.FC<SupportTicketsProps> = () => {
  const [sortConfig, setSortConfig] = useState<{key: string, direction: 'asc' | 'desc'} | null>(null)
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([null, null])
  const [startDate, endDate] = dateRange

  const handleSort = (key: string) => {
    let direction: 'asc' | 'desc' = 'asc'
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc'
    }
    setSortConfig({ key, direction })
  }

  const ticketsData = [
    { id: 'TKT001', business: 'ABC Properties', user: 'John Doe', subject: 'Login Issue', status: 'Open', priority: 'High', createdDate: '2024-01-15', lastUpdate: '2024-01-15' },
    { id: 'TKT002', business: 'XYZ Builders', user: 'Jane Smith', subject: 'Payment Gateway Error', status: 'In Progress', priority: 'Medium', createdDate: '2024-01-14', lastUpdate: '2024-01-15' },
    { id: 'TKT003', business: 'PQR Realty', user: 'Mike Johnson', subject: 'Feature Request', status: 'Resolved', priority: 'Low', createdDate: '2024-01-13', lastUpdate: '2024-01-14' },
    { id: 'TKT004', business: 'LMN Developers', user: 'Sarah Wilson', subject: 'Data Export Issue', status: 'Open', priority: 'High', createdDate: '2024-01-12', lastUpdate: '2024-01-12' },
    { id: 'TKT005', business: 'RST Holdings', user: 'David Brown', subject: 'Account Settings', status: 'Closed', priority: 'Medium', createdDate: '2024-01-11', lastUpdate: '2024-01-13' }
  ]

  return (
    <Fragment>
      <div className="d-flex align-items-center justify-content-between mb-3 page-header-breadcrumb flex-wrap gap-2">
        <div>
          <h1 className="page-title fw-medium fs-20 mb-0">Support Tickets</h1>
        </div>
        <div className="d-flex align-items-center gap-2 flex-wrap">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item"><a href="#!">Support</a></li>
              <li className="breadcrumb-item active">Support Tickets</li>
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
                    <Form.Select className="form-select-sm" style={{ width: '200px' }}>
                      <option>Business Name</option>
                      <option>ABC Properties</option>
                      <option>XYZ Builders</option>
                      <option>PQR Realty</option>
                    </Form.Select>
                    <Form.Select className="form-select-sm" style={{ width: '150px' }}>
                      <option>User</option>
                      <option>John Doe</option>
                      <option>Jane Smith</option>
                      <option>Mike Johnson</option>
                    </Form.Select>
                    <Form.Select className="form-select-sm" style={{ width: '150px' }}>
                      <option>Status</option>
                      <option>Open</option>
                      <option>In Progress</option>
                      <option>Resolved</option>
                      <option>Closed</option>
                    </Form.Select>
                    <Form.Select className="form-select-sm" style={{ width: '120px' }}>
                      <option>Priority</option>
                      <option>Low</option>
                      <option>Medium</option>
                      <option>High</option>
                    </Form.Select>
                    <SpkDatepickr 
                      className="form-control form-control-sm" 
                      placeholderText="Date Range" 
                      startDate={startDate} 
                      endDate={endDate} 
                      selectsRange={true} 
                      onChange={(update: any) => setDateRange(update)}
                      style={{ width: '200px' }}
                    />
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
                    { title: <div className="d-flex align-items-center justify-content-between" onClick={() => handleSort('id')} style={{cursor: 'pointer'}}>Ticket ID <i className="ri-arrow-up-down-line ms-1"></i></div> },
                    { title: <div className="d-flex align-items-center justify-content-between" onClick={() => handleSort('business')} style={{cursor: 'pointer'}}>Business <i className="ri-arrow-up-down-line ms-1"></i></div> },
                    { title: <div className="d-flex align-items-center justify-content-between" onClick={() => handleSort('user')} style={{cursor: 'pointer'}}>User <i className="ri-arrow-up-down-line ms-1"></i></div> },
                    { title: <div className="d-flex align-items-center justify-content-between" onClick={() => handleSort('subject')} style={{cursor: 'pointer'}}>Subject <i className="ri-arrow-up-down-line ms-1"></i></div> },
                    { title: <div className="d-flex align-items-center justify-content-between" onClick={() => handleSort('status')} style={{cursor: 'pointer'}}>Status <i className="ri-arrow-up-down-line ms-1"></i></div> },
                    { title: <div className="d-flex align-items-center justify-content-between" onClick={() => handleSort('priority')} style={{cursor: 'pointer'}}>Priority <i className="ri-arrow-up-down-line ms-1"></i></div> },
                    { title: <div className="d-flex align-items-center justify-content-between" onClick={() => handleSort('createdDate')} style={{cursor: 'pointer'}}>Created Date <i className="ri-arrow-up-down-line ms-1"></i></div> },
                    { title: 'Actions' }
                  ]}
                >
                  {ticketsData.map((ticket, index) => (
                    <tr key={index}>
                      <td><input className="form-check-input" type="checkbox" /></td>
                      <td className="fw-semibold text-primary">{ticket.id}</td>
                      <td>{ticket.business}</td>
                      <td>{ticket.user}</td>
                      <td>{ticket.subject}</td>
                      <td>
                        <SpkBadge variant="" Customclass={`badge bg-${ticket.status === 'Open' ? 'danger' : ticket.status === 'In Progress' ? 'warning' : ticket.status === 'Resolved' ? 'success' : 'secondary'}`}>
                          {ticket.status}
                        </SpkBadge>
                      </td>
                      <td>
                        <SpkBadge variant="" Customclass={`badge bg-${ticket.priority === 'High' ? 'danger' : ticket.priority === 'Medium' ? 'warning' : 'info'}`}>
                          {ticket.priority}
                        </SpkBadge>
                      </td>
                      <td>{ticket.createdDate}</td>
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

export default SupportTickets