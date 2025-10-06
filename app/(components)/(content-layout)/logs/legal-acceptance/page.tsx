'use client'
import { Fragment, useState } from 'react'
import { Card, Col, Row, Form, Dropdown } from 'react-bootstrap'
import SpkTables from '@/shared/@spk-reusable-components/reusable-tables/spk-tables'
import SpkBadge from '@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-badge'
import SpkButton from '@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-buttons'
import SpkDropdown from '@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-dropdown'
import SpkDatepickr from '@/shared/@spk-reusable-components/reusable-plugins/spk-datepicker'

const LegalAcceptanceLogs = () => {
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

  const acceptanceLogsData = [
    { id: 1, documentType: 'Terms', businessName: 'ABC Properties', user: 'John Doe', version: 'v2.1', acceptedDate: '2024-01-15 14:30:00', ipAddress: '192.168.1.1', userAgent: 'Chrome 120.0' },
    { id: 2, documentType: 'Privacy', businessName: 'XYZ Builders', user: 'Jane Smith', version: 'v1.8', acceptedDate: '2024-01-14 16:45:00', ipAddress: '192.168.1.2', userAgent: 'Firefox 121.0' },
    { id: 3, documentType: 'Cookie', businessName: 'PQR Realty', user: 'Mike Johnson', version: 'v1.3', acceptedDate: '2024-01-13 11:20:00', ipAddress: '192.168.1.3', userAgent: 'Safari 17.0' },
    { id: 4, documentType: 'Terms', businessName: 'LMN Developers', user: 'Sarah Wilson', version: 'v2.1', acceptedDate: '2024-01-12 09:15:00', ipAddress: '192.168.1.4', userAgent: 'Chrome 120.0' },
    { id: 5, documentType: 'Privacy', businessName: 'RST Holdings', user: 'David Brown', version: 'v1.8', acceptedDate: '2024-01-11 13:30:00', ipAddress: '192.168.1.5', userAgent: 'Edge 120.0' }
  ]

  return (
    <Fragment>
      <div className="d-flex align-items-center justify-content-between mb-3 page-header-breadcrumb flex-wrap gap-2">
        <div>
          <h1 className="page-title fw-medium fs-20 mb-0">Legal Acceptance Logs</h1>
        </div>
        <div className="d-flex align-items-center gap-2 flex-wrap">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item"><a href="#!">Logs</a></li>
              <li className="breadcrumb-item active">Legal Acceptance</li>
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
                    <Form.Select className="form-select-sm" style={{ width: '150px' }}>
                      <option>Document Type</option>
                      <option>Terms</option>
                      <option>Privacy</option>
                      <option>Cookie</option>
                    </Form.Select>
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
                    { title: <div className="d-flex align-items-center justify-content-between" onClick={() => handleSort('documentType')} style={{cursor: 'pointer'}}>Document Type <i className="ri-arrow-up-down-line ms-1"></i></div> },
                    { title: <div className="d-flex align-items-center justify-content-between" onClick={() => handleSort('businessName')} style={{cursor: 'pointer'}}>Business Name <i className="ri-arrow-up-down-line ms-1"></i></div> },
                    { title: <div className="d-flex align-items-center justify-content-between" onClick={() => handleSort('user')} style={{cursor: 'pointer'}}>User <i className="ri-arrow-up-down-line ms-1"></i></div> },
                    { title: <div className="d-flex align-items-center justify-content-between" onClick={() => handleSort('version')} style={{cursor: 'pointer'}}>Version <i className="ri-arrow-up-down-line ms-1"></i></div> },
                    { title: <div className="d-flex align-items-center justify-content-between" onClick={() => handleSort('acceptedDate')} style={{cursor: 'pointer'}}>Accepted Date <i className="ri-arrow-up-down-line ms-1"></i></div> },
                    { title: <div className="d-flex align-items-center justify-content-between" onClick={() => handleSort('ipAddress')} style={{cursor: 'pointer'}}>IP Address <i className="ri-arrow-up-down-line ms-1"></i></div> },
                    { title: 'Actions' }
                  ]}
                >
                  {acceptanceLogsData.map((log, index) => (
                    <tr key={index}>
                      <td><input className="form-check-input" type="checkbox" /></td>
                      <td>
                        <SpkBadge variant="" Customclass={`badge bg-${log.documentType === 'Terms' ? 'primary' : log.documentType === 'Privacy' ? 'success' : 'warning'}-transparent`}>
                          {log.documentType}
                        </SpkBadge>
                      </td>
                      <td className="fw-semibold">{log.businessName}</td>
                      <td>{log.user}</td>
                      <td className="text-info fw-semibold">{log.version}</td>
                      <td>{log.acceptedDate}</td>
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

export default LegalAcceptanceLogs