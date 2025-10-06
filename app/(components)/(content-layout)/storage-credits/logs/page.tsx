"use client"

import React, { Fragment, useState } from 'react'
import { Card, Col, Form, Row, Dropdown } from 'react-bootstrap'
import SpkDropdown from '@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-dropdown'
import SpkTables from '@/shared/@spk-reusable-components/reusable-tables/spk-tables'
import SpkBadge from '@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-badge'
import SpkButton from '@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-buttons'
import SpkDatepickr from '@/shared/@spk-reusable-components/reusable-plugins/spk-datepicker'

interface StorageCreditsLogsProps {}

const StorageCreditsLogs: React.FC<StorageCreditsLogsProps> = () => {
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
    { id: 1, business: 'ABC Properties', user: 'John Doe', fileName: 'property_images.zip', fileType: 'ZIP', fileSize: '25MB', action: 'Upload', timestamp: '2024-01-15 10:30:00' },
    { id: 2, business: 'XYZ Builders', user: 'Jane Smith', fileName: 'floor_plans.pdf', fileType: 'PDF', fileSize: '5MB', action: 'Upload', timestamp: '2024-01-15 09:45:00' },
    { id: 3, business: 'PQR Realty', user: 'Mike Johnson', fileName: 'old_documents.docx', fileType: 'DOCX', fileSize: '2MB', action: 'Delete', timestamp: '2024-01-14 16:20:00' },
    { id: 4, business: 'LMN Developers', user: 'Sarah Wilson', fileName: 'project_videos.mp4', fileType: 'MP4', fileSize: '150MB', action: 'Upload', timestamp: '2024-01-14 14:15:00' },
    { id: 5, business: 'RST Holdings', user: 'David Brown', fileName: 'backup_files.rar', fileType: 'RAR', fileSize: '80MB', action: 'Delete', timestamp: '2024-01-13 11:30:00' }
  ]

  return (
    <Fragment>
      <div className="d-flex align-items-center justify-content-between mb-3 page-header-breadcrumb flex-wrap gap-2">
        <div>
          <h1 className="page-title fw-medium fs-20 mb-0">Storage Credits Usage Logs</h1>
        </div>
        <div className="d-flex align-items-center gap-2 flex-wrap">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item"><a href="#!">Credits</a></li>
              <li className="breadcrumb-item"><a href="#!">Storage Credits</a></li>
              <li className="breadcrumb-item active">Usage Logs</li>
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
                    <option>User</option>
                    <option>John Doe</option>
                    <option>Jane Smith</option>
                    <option>Mike Johnson</option>
                  </Form.Select>
                  <Form.Select className="form-select-sm" style={{ width: '120px' }}>
                    <option>File Type</option>
                    <option>PDF</option>
                    <option>ZIP</option>
                    <option>MP4</option>
                    <option>DOCX</option>
                  </Form.Select>
                  <Form.Select className="form-select-sm" style={{ width: '120px' }}>
                    <option>Action</option>
                    <option>Upload</option>
                    <option>Delete</option>
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
                    { title: <div className="d-flex align-items-center justify-content-between" onClick={() => handleSort('user')} style={{cursor: 'pointer'}}>User <i className="ri-arrow-up-down-line ms-1"></i></div> },
                    { title: <div className="d-flex align-items-center justify-content-between" onClick={() => handleSort('fileName')} style={{cursor: 'pointer'}}>File Name <i className="ri-arrow-up-down-line ms-1"></i></div> },
                    { title: <div className="d-flex align-items-center justify-content-between" onClick={() => handleSort('fileType')} style={{cursor: 'pointer'}}>File Type <i className="ri-arrow-up-down-line ms-1"></i></div> },
                    { title: <div className="d-flex align-items-center justify-content-between" onClick={() => handleSort('fileSize')} style={{cursor: 'pointer'}}>File Size <i className="ri-arrow-up-down-line ms-1"></i></div> },
                    { title: <div className="d-flex align-items-center justify-content-between" onClick={() => handleSort('action')} style={{cursor: 'pointer'}}>Action <i className="ri-arrow-up-down-line ms-1"></i></div> },
                    { title: <div className="d-flex align-items-center justify-content-between" onClick={() => handleSort('timestamp')} style={{cursor: 'pointer'}}>Timestamp <i className="ri-arrow-up-down-line ms-1"></i></div> },
                    { title: 'Actions' }
                  ]}
                >
                  {logsData.map((log, index) => (
                    <tr key={index}>
                      <td><input className="form-check-input" type="checkbox" /></td>
                      <td>{log.business}</td>
                      <td>{log.user}</td>
                      <td className="fw-semibold">{log.fileName}</td>
                      <td>
                        <SpkBadge variant="" Customclass="badge bg-info-transparent">
                          {log.fileType}
                        </SpkBadge>
                      </td>
                      <td className="text-muted">{log.fileSize}</td>
                      <td>
                        <SpkBadge variant="" Customclass={`badge bg-${log.action === 'Upload' ? 'success' : 'danger'}`}>
                          {log.action}
                        </SpkBadge>
                      </td>
                      <td>{log.timestamp}</td>
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

export default StorageCreditsLogs