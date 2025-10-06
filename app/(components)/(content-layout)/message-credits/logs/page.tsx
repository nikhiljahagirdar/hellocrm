'use client'
import { Fragment, useState } from 'react'
import { Card, Col, Row, Form, Dropdown } from 'react-bootstrap'
import SpkTables from '@/shared/@spk-reusable-components/reusable-tables/spk-tables'
import SpkBadge from '@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-badge'
import SpkButton from '@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-buttons'
import SpkDropdown from '@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-dropdown'
import SpkDatepickr from '@/shared/@spk-reusable-components/reusable-plugins/spk-datepicker'

const MessageCreditsLogs = () => {
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

  const logsData = [
    { id: 1, business: 'ABC Properties', user: 'John Doe', creditType: 'SMS Credits', usageType: 'SMS', creditsUsed: 50, description: 'Bulk SMS campaign', timestamp: '2024-01-15 14:30:00', status: 'Success' },
    { id: 2, business: 'XYZ Builders', user: 'Jane Smith', creditType: 'Email Credits', usageType: 'Email', creditsUsed: 100, description: 'Newsletter campaign', timestamp: '2024-01-14 16:45:00', status: 'Success' },
    { id: 3, business: 'PQR Realty', user: 'Mike Johnson', creditType: 'WhatsApp Credits', usageType: 'WhatsApp', creditsUsed: 25, description: 'Property updates', timestamp: '2024-01-13 11:20:00', status: 'Failed' },
    { id: 4, business: 'LMN Developers', user: 'Sarah Wilson', creditType: 'SMS Credits', usageType: 'SMS', creditsUsed: 75, description: 'Lead notifications', timestamp: '2024-01-12 09:15:00', status: 'Success' },
    { id: 5, business: 'RST Holdings', user: 'David Brown', creditType: 'Email Credits', usageType: 'Email', creditsUsed: 200, description: 'Marketing campaign', timestamp: '2024-01-11 13:30:00', status: 'Success' }
  ]

  return (
    <Fragment>
      <div className="d-flex align-items-center justify-content-between mb-3 page-header-breadcrumb flex-wrap gap-2">
        <div>
          <h1 className="page-title fw-medium fs-20 mb-0">Message Credits Logs</h1>
        </div>
        <div className="d-flex align-items-center gap-2 flex-wrap">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item"><a href="#!">Credits</a></li>
              <li className="breadcrumb-item"><a href="#!">Message Credits</a></li>
              <li className="breadcrumb-item active">Logs</li>
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
                      <option>LMN Developers</option>
                      <option>RST Holdings</option>
                    </Form.Select>
                    <Form.Select className="form-select-sm" style={{ width: '150px' }}>
                      <option>User</option>
                      <option>John Doe</option>
                      <option>Jane Smith</option>
                      <option>Mike Johnson</option>
                      <option>Sarah Wilson</option>
                      <option>David Brown</option>
                    </Form.Select>
                    <Form.Select className="form-select-sm" style={{ width: '180px' }}>
                      <option>Credit Type</option>
                      <option>SMS Credits</option>
                      <option>Email Credits</option>
                      <option>WhatsApp Credits</option>
                    </Form.Select>
                    <Form.Select className="form-select-sm" style={{ width: '150px' }}>
                      <option>Usage Type</option>
                      <option>SMS</option>
                      <option>Email</option>
                      <option>WhatsApp</option>
                    </Form.Select>
                    <SpkDatepickr 
                      className="form-control form-control-sm" 
                      placeholderText="Date Range" 
                      startDate={startDate} 
                      endDate={endDate} 
                      selectsRange={true} 
                      onChange={(update: any) => setDateRange(update)}
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
                    { title: <div className="d-flex align-items-center justify-content-between" onClick={() => handleSort('business')} style={{cursor: 'pointer'}}>Business <i className="ri-arrow-up-down-line ms-1"></i></div> },
                    { title: <div className="d-flex align-items-center justify-content-between" onClick={() => handleSort('user')} style={{cursor: 'pointer'}}>User <i className="ri-arrow-up-down-line ms-1"></i></div> },
                    { title: <div className="d-flex align-items-center justify-content-between" onClick={() => handleSort('creditType')} style={{cursor: 'pointer'}}>Credit Type <i className="ri-arrow-up-down-line ms-1"></i></div> },
                    { title: <div className="d-flex align-items-center justify-content-between" onClick={() => handleSort('usageType')} style={{cursor: 'pointer'}}>Usage Type <i className="ri-arrow-up-down-line ms-1"></i></div> },
                    { title: <div className="d-flex align-items-center justify-content-between" onClick={() => handleSort('creditsUsed')} style={{cursor: 'pointer'}}>Credits Used <i className="ri-arrow-up-down-line ms-1"></i></div> },
                    { title: <div className="d-flex align-items-center justify-content-between" onClick={() => handleSort('description')} style={{cursor: 'pointer'}}>Description <i className="ri-arrow-up-down-line ms-1"></i></div> },
                    { title: <div className="d-flex align-items-center justify-content-between" onClick={() => handleSort('timestamp')} style={{cursor: 'pointer'}}>Timestamp <i className="ri-arrow-up-down-line ms-1"></i></div> },
                    { title: <div className="d-flex align-items-center justify-content-between" onClick={() => handleSort('status')} style={{cursor: 'pointer'}}>Status <i className="ri-arrow-up-down-line ms-1"></i></div> },
                    { title: 'Actions' }
                  ]}
                >
                  {logsData.map((log, index) => (
                    <tr key={index}>
                      <td><input className="form-check-input" type="checkbox" /></td>
                      <td className="fw-semibold">{log.business}</td>
                      <td>{log.user}</td>
                      <td>
                        <SpkBadge variant="" Customclass="badge bg-info-transparent">
                          {log.creditType}
                        </SpkBadge>
                      </td>
                      <td>
                        <SpkBadge variant="" Customclass={`badge ${log.usageType === 'SMS' ? 'bg-primary-transparent' : log.usageType === 'Email' ? 'bg-success-transparent' : 'bg-warning-transparent'}`}>
                          {log.usageType}
                        </SpkBadge>
                      </td>
                      <td className="text-primary fw-semibold">{log.creditsUsed}</td>
                      <td className="text-muted">{log.description}</td>
                      <td>{log.timestamp}</td>
                      <td>
                        <SpkBadge 
                          variant="" 
                          Customclass={`badge ${log.status === 'Success' ? 'bg-success-transparent' : 'bg-danger-transparent'}`}
                        >
                          {log.status}
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

export default MessageCreditsLogs