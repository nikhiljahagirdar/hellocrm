"use client"

import React, { Fragment, useState } from 'react'
import { Card, Col, Form, Row, Dropdown } from 'react-bootstrap'
import SpkDropdown from '@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-dropdown'
import SpkTables from '@/shared/@spk-reusable-components/reusable-tables/spk-tables'
import SpkBadge from '@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-badge'
import SpkButton from '@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-buttons'
import SpkDatepickr from '@/shared/@spk-reusable-components/reusable-plugins/spk-datepicker'

interface AdminImpersonationLogsProps {}

const AdminImpersonationLogs: React.FC<AdminImpersonationLogsProps> = () => {
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

  const impersonationData = [
    { id: 1, business: 'ABC Properties', superAdmin: 'Admin User', user: 'John Doe', startTime: '2024-01-15 10:30:00', endTime: '2024-01-15 11:15:00', duration: '45 min', ipAddress: '192.168.1.1' },
    { id: 2, business: 'XYZ Builders', superAdmin: 'Admin User', user: 'Jane Smith', startTime: '2024-01-14 14:20:00', endTime: '2024-01-14 14:45:00', duration: '25 min', ipAddress: '192.168.1.2' },
    { id: 3, business: 'PQR Realty', superAdmin: 'Super Admin', user: 'Mike Johnson', startTime: '2024-01-13 09:15:00', endTime: '2024-01-13 10:30:00', duration: '75 min', ipAddress: '192.168.1.3' },
    { id: 4, business: 'LMN Developers', superAdmin: 'Admin User', user: 'Sarah Wilson', startTime: '2024-01-12 16:00:00', endTime: '2024-01-12 16:20:00', duration: '20 min', ipAddress: '192.168.1.4' },
    { id: 5, business: 'RST Holdings', superAdmin: 'Super Admin', user: 'David Brown', startTime: '2024-01-11 11:45:00', endTime: '2024-01-11 12:30:00', duration: '45 min', ipAddress: '192.168.1.5' }
  ]

  return (
    <Fragment>
      <div className="d-flex align-items-center justify-content-between mb-3 page-header-breadcrumb flex-wrap gap-2">
        <div>
          <h1 className="page-title fw-medium fs-20 mb-0">Admin Impersonation Logs</h1>
        </div>
        <div className="d-flex align-items-center gap-2 flex-wrap">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item"><a href="#!">Logs & Monitoring</a></li>
              <li className="breadcrumb-item active">Admin Impersonation Logs</li>
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
                    <option>Super Admin</option>
                    <option>Admin User</option>
                    <option>Super Admin</option>
                  </Form.Select>
                  <Form.Select className="form-select-sm" style={{ width: '150px' }}>
                    <option>User</option>
                    <option>John Doe</option>
                    <option>Jane Smith</option>
                    <option>Mike Johnson</option>
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
                    { title: <div className="d-flex align-items-center justify-content-between" onClick={() => handleSort('business')} style={{cursor: 'pointer'}}>Business <i className="ri-arrow-up-down-line ms-1"></i></div> },
                    { title: <div className="d-flex align-items-center justify-content-between" onClick={() => handleSort('superAdmin')} style={{cursor: 'pointer'}}>Super Admin <i className="ri-arrow-up-down-line ms-1"></i></div> },
                    { title: <div className="d-flex align-items-center justify-content-between" onClick={() => handleSort('user')} style={{cursor: 'pointer'}}>User <i className="ri-arrow-up-down-line ms-1"></i></div> },
                    { title: <div className="d-flex align-items-center justify-content-between" onClick={() => handleSort('startTime')} style={{cursor: 'pointer'}}>Start Time <i className="ri-arrow-up-down-line ms-1"></i></div> },
                    { title: <div className="d-flex align-items-center justify-content-between" onClick={() => handleSort('endTime')} style={{cursor: 'pointer'}}>End Time <i className="ri-arrow-up-down-line ms-1"></i></div> },
                    { title: <div className="d-flex align-items-center justify-content-between" onClick={() => handleSort('duration')} style={{cursor: 'pointer'}}>Duration <i className="ri-arrow-up-down-line ms-1"></i></div> },
                    { title: <div className="d-flex align-items-center justify-content-between" onClick={() => handleSort('ipAddress')} style={{cursor: 'pointer'}}>IP Address <i className="ri-arrow-up-down-line ms-1"></i></div> },
                    { title: 'Actions' }
                  ]}
                >
                  {impersonationData.map((log, index) => (
                    <tr key={index}>
                      <td><input className="form-check-input" type="checkbox" /></td>
                      <td>{log.business}</td>
                      <td>
                        <SpkBadge variant="" Customclass="badge bg-primary-transparent">
                          {log.superAdmin}
                        </SpkBadge>
                      </td>
                      <td>{log.user}</td>
                      <td>{log.startTime}</td>
                      <td>{log.endTime}</td>
                      <td className="fw-semibold text-info">{log.duration}</td>
                      <td className="text-muted">{log.ipAddress}</td>
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

export default AdminImpersonationLogs