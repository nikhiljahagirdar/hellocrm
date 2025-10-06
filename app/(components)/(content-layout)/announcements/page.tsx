"use client"

import React, { Fragment, useState } from 'react'
import { Card, Col, Form, Row, Dropdown } from 'react-bootstrap'
import SpkDropdown from '@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-dropdown'
import SpkTables from '@/shared/@spk-reusable-components/reusable-tables/spk-tables'
import SpkBadge from '@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-badge'
import SpkButton from '@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-buttons'
import SpkDatepickr from '@/shared/@spk-reusable-components/reusable-plugins/spk-datepicker'

interface AnnouncementsProps {}

const Announcements: React.FC<AnnouncementsProps> = () => {
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

  const announcementsData = [
    { id: 1, title: 'System Maintenance', audience: 'All', business: 'All Businesses', content: 'Scheduled maintenance on Sunday', status: 'Active', publishDate: '2024-01-15' },
    { id: 2, title: 'New Feature Release', audience: 'Business', business: 'ABC Properties', content: 'New analytics dashboard available', status: 'Active', publishDate: '2024-01-14' },
    { id: 3, title: 'Policy Update', audience: 'Users', business: 'XYZ Builders', content: 'Updated privacy policy', status: 'Inactive', publishDate: '2024-01-13' },
    { id: 4, title: 'Holiday Notice', audience: 'All', business: 'All Businesses', content: 'Office closed on national holiday', status: 'Active', publishDate: '2024-01-12' },
    { id: 5, title: 'Training Session', audience: 'Business', business: 'PQR Realty', content: 'Mandatory training for all users', status: 'Active', publishDate: '2024-01-11' }
  ]

  return (
    <Fragment>
      <div className="d-flex align-items-center justify-content-between mb-3 page-header-breadcrumb flex-wrap gap-2">
        <div>
          <h1 className="page-title fw-medium fs-20 mb-0">Announcements</h1>
        </div>
        <div className="d-flex align-items-center gap-2 flex-wrap">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item active">Announcements</li>
            </ol>
          </nav>
        </div>
      </div>

      <Row>
        <Col xl={12}>
          <Card className="custom-card w-100">
            <Card.Header>
              <div className="d-flex align-items-center justify-content-between w-100">
                <div className="d-flex align-items-center gap-2">
                  <div className="d-flex flex-wrap gap-3 align-items-center">
                    <Form.Select className="form-select-sm" style={{ width: '150px' }}>
                      <option>Audience</option>
                      <option>All</option>
                      <option>Business</option>
                      <option>Users</option>
                    </Form.Select>
                    <Form.Select className="form-select-sm" style={{ width: '200px' }}>
                      <option>Business Name</option>
                      <option>ABC Properties</option>
                      <option>XYZ Builders</option>
                      <option>PQR Realty</option>
                    </Form.Select>
                    <Form.Select className="form-select-sm" style={{ width: '120px' }}>
                      <option>Status</option>
                      <option>Active</option>
                      <option>Inactive</option>
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
                    { title: <div className="d-flex align-items-center justify-content-between" onClick={() => handleSort('title')} style={{cursor: 'pointer'}}>Title <i className="ri-arrow-up-down-line ms-1"></i></div> },
                    { title: <div className="d-flex align-items-center justify-content-between" onClick={() => handleSort('audience')} style={{cursor: 'pointer'}}>Audience <i className="ri-arrow-up-down-line ms-1"></i></div> },
                    { title: <div className="d-flex align-items-center justify-content-between" onClick={() => handleSort('business')} style={{cursor: 'pointer'}}>Business <i className="ri-arrow-up-down-line ms-1"></i></div> },
                    { title: <div className="d-flex align-items-center justify-content-between" onClick={() => handleSort('content')} style={{cursor: 'pointer'}}>Content <i className="ri-arrow-up-down-line ms-1"></i></div> },
                    { title: <div className="d-flex align-items-center justify-content-between" onClick={() => handleSort('status')} style={{cursor: 'pointer'}}>Status <i className="ri-arrow-up-down-line ms-1"></i></div> },
                    { title: <div className="d-flex align-items-center justify-content-between" onClick={() => handleSort('publishDate')} style={{cursor: 'pointer'}}>Publish Date <i className="ri-arrow-up-down-line ms-1"></i></div> },
                    { title: 'Actions' }
                  ]}
                >
                  {announcementsData.map((announcement, index) => (
                    <tr key={index}>
                      <td><input className="form-check-input" type="checkbox" /></td>
                      <td className="fw-semibold">{announcement.title}</td>
                      <td>
                        <SpkBadge variant="" Customclass={`badge bg-${announcement.audience === 'All' ? 'primary' : announcement.audience === 'Business' ? 'info' : 'secondary'}`}>
                          {announcement.audience}
                        </SpkBadge>
                      </td>
                      <td>{announcement.business}</td>
                      <td>{announcement.content}</td>
                      <td>
                        <SpkBadge variant="" Customclass={`badge bg-${announcement.status === 'Active' ? 'success' : 'danger'}`}>
                          {announcement.status}
                        </SpkBadge>
                      </td>
                      <td>{announcement.publishDate}</td>
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

export default Announcements