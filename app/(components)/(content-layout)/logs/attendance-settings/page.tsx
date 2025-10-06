'use client'
import { Fragment, useState } from 'react'
import { Card, Col, Row, Form, Dropdown } from 'react-bootstrap'
import SpkTables from '@/shared/@spk-reusable-components/reusable-tables/spk-tables'
import SpkBadge from '@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-badge'
import SpkButton from '@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-buttons'
import SpkDropdown from '@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-dropdown'

const AttendanceSettings = () => {
  const [sortConfig, setSortConfig] = useState<{key: string, direction: 'asc' | 'desc'} | null>(null)

  const handleSort = (key: string) => {
    let direction: 'asc' | 'desc' = 'asc'
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc'
    }
    setSortConfig({ key, direction })
  }

  const attendanceSettingsData = [
    { id: 1, businessName: 'ABC Properties', officeStartTime: '09:00', officeEndTime: '18:00', lateThreshold: '15 min', halfDayHours: '4 hours', status: 'Active', updatedDate: '2024-01-15', updatedBy: 'Admin' },
    { id: 2, businessName: 'XYZ Builders', officeStartTime: '08:30', officeEndTime: '17:30', lateThreshold: '10 min', halfDayHours: '4.5 hours', status: 'Active', updatedDate: '2024-01-14', updatedBy: 'HR Manager' },
    { id: 3, businessName: 'PQR Realty', officeStartTime: '09:30', officeEndTime: '18:30', lateThreshold: '20 min', halfDayHours: '4 hours', status: 'Active', updatedDate: '2024-01-13', updatedBy: 'Admin' },
    { id: 4, businessName: 'LMN Developers', officeStartTime: '10:00', officeEndTime: '19:00', lateThreshold: '30 min', halfDayHours: '4.5 hours', status: 'Inactive', updatedDate: '2024-01-12', updatedBy: 'HR Manager' },
    { id: 5, businessName: 'RST Holdings', officeStartTime: '08:00', officeEndTime: '17:00', lateThreshold: '15 min', halfDayHours: '4 hours', status: 'Active', updatedDate: '2024-01-11', updatedBy: 'Admin' }
  ]

  return (
    <Fragment>
      <div className="d-flex align-items-center justify-content-between mb-3 page-header-breadcrumb flex-wrap gap-2">
        <div>
          <h1 className="page-title fw-medium fs-20 mb-0">Attendance Settings</h1>
        </div>
        <div className="d-flex align-items-center gap-2 flex-wrap">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item"><a href="#!">Logs</a></li>
              <li className="breadcrumb-item active">Attendance Settings</li>
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
                    <Form.Control type="text" placeholder="Office Start Time" className="form-control-sm" style={{ width: '150px' }} />
                    <Form.Control type="text" placeholder="Office End Time" className="form-control-sm" style={{ width: '150px' }} />
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
                    { title: <div className="d-flex align-items-center justify-content-between" onClick={() => handleSort('businessName')} style={{cursor: 'pointer'}}>Business Name <i className="ri-arrow-up-down-line ms-1"></i></div> },
                    { title: <div className="d-flex align-items-center justify-content-between" onClick={() => handleSort('officeStartTime')} style={{cursor: 'pointer'}}>Office Start Time <i className="ri-arrow-up-down-line ms-1"></i></div> },
                    { title: <div className="d-flex align-items-center justify-content-between" onClick={() => handleSort('officeEndTime')} style={{cursor: 'pointer'}}>Office End Time <i className="ri-arrow-up-down-line ms-1"></i></div> },
                    { title: <div className="d-flex align-items-center justify-content-between" onClick={() => handleSort('lateThreshold')} style={{cursor: 'pointer'}}>Late Threshold <i className="ri-arrow-up-down-line ms-1"></i></div> },
                    { title: <div className="d-flex align-items-center justify-content-between" onClick={() => handleSort('halfDayHours')} style={{cursor: 'pointer'}}>Half Day Hours <i className="ri-arrow-up-down-line ms-1"></i></div> },
                    { title: <div className="d-flex align-items-center justify-content-between" onClick={() => handleSort('status')} style={{cursor: 'pointer'}}>Status <i className="ri-arrow-up-down-line ms-1"></i></div> },
                    { title: 'Actions' }
                  ]}
                >
                  {attendanceSettingsData.map((setting, index) => (
                    <tr key={index}>
                      <td><input className="form-check-input" type="checkbox" /></td>
                      <td className="fw-semibold">{setting.businessName}</td>
                      <td className="text-success fw-semibold">{setting.officeStartTime}</td>
                      <td className="text-danger fw-semibold">{setting.officeEndTime}</td>
                      <td className="text-warning">{setting.lateThreshold}</td>
                      <td className="text-info">{setting.halfDayHours}</td>
                      <td>
                        <SpkBadge variant="" Customclass={`badge bg-${setting.status === 'Active' ? 'success' : 'danger'}-transparent`}>
                          {setting.status}
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

export default AttendanceSettings