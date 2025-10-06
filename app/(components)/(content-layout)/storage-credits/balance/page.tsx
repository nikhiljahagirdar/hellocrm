"use client"

import React, { Fragment, useState } from 'react'
import { Card, Col, Form, Row, Dropdown } from 'react-bootstrap'
import SpkDropdown from '@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-dropdown'
import SpkTables from '@/shared/@spk-reusable-components/reusable-tables/spk-tables'
import SpkBadge from '@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-badge'
import SpkButton from '@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-buttons'

interface StorageCreditsBalanceProps {}

const StorageCreditsBalance: React.FC<StorageCreditsBalanceProps> = () => {
  const [sortConfig, setSortConfig] = useState<{key: string, direction: 'asc' | 'desc'} | null>(null)

  const handleSort = (key: string) => {
    let direction: 'asc' | 'desc' = 'asc'
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc'
    }
    setSortConfig({ key, direction })
  }

  const balanceData = [
    { id: 1, business: 'ABC Properties', totalStorage: '100GB', usedStorage: '65GB', remainingStorage: '35GB', usagePercent: 65, status: 'Active' },
    { id: 2, business: 'XYZ Builders', totalStorage: '1TB', usedStorage: '750GB', remainingStorage: '250GB', usagePercent: 75, status: 'Active' },
    { id: 3, business: 'PQR Realty', totalStorage: '50GB', usedStorage: '45GB', remainingStorage: '5GB', usagePercent: 90, status: 'Warning' },
    { id: 4, business: 'LMN Developers', totalStorage: '500GB', usedStorage: '200GB', remainingStorage: '300GB', usagePercent: 40, status: 'Active' },
    { id: 5, business: 'RST Holdings', totalStorage: '200GB', usedStorage: '180GB', remainingStorage: '20GB', usagePercent: 90, status: 'Warning' }
  ]

  return (
    <Fragment>
      <div className="d-flex align-items-center justify-content-between mb-3 page-header-breadcrumb flex-wrap gap-2">
        <div>
          <h1 className="page-title fw-medium fs-20 mb-0">Storage Credits Balance</h1>
        </div>
        <div className="d-flex align-items-center gap-2 flex-wrap">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item"><a href="#!">Credits</a></li>
              <li className="breadcrumb-item"><a href="#!">Storage Credits</a></li>
              <li className="breadcrumb-item active">Balance</li>
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
                  <div className="d-flex align-items-center gap-2">
                    <span className="text-muted fs-12">Storage Remaining:</span>
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
                    { title: <div className="d-flex align-items-center justify-content-between" onClick={() => handleSort('business')} style={{cursor: 'pointer'}}>Business <i className="ri-arrow-up-down-line ms-1"></i></div> },
                    { title: <div className="d-flex align-items-center justify-content-between" onClick={() => handleSort('totalStorage')} style={{cursor: 'pointer'}}>Total Storage <i className="ri-arrow-up-down-line ms-1"></i></div> },
                    { title: <div className="d-flex align-items-center justify-content-between" onClick={() => handleSort('usedStorage')} style={{cursor: 'pointer'}}>Used Storage <i className="ri-arrow-up-down-line ms-1"></i></div> },
                    { title: <div className="d-flex align-items-center justify-content-between" onClick={() => handleSort('remainingStorage')} style={{cursor: 'pointer'}}>Remaining Storage <i className="ri-arrow-up-down-line ms-1"></i></div> },
                    { title: <div className="d-flex align-items-center justify-content-between" onClick={() => handleSort('usagePercent')} style={{cursor: 'pointer'}}>Usage % <i className="ri-arrow-up-down-line ms-1"></i></div> },
                    { title: <div className="d-flex align-items-center justify-content-between" onClick={() => handleSort('status')} style={{cursor: 'pointer'}}>Status <i className="ri-arrow-up-down-line ms-1"></i></div> },
                    { title: 'Actions' }
                  ]}
                >
                  {balanceData.map((balance, index) => (
                    <tr key={index}>
                      <td><input className="form-check-input" type="checkbox" /></td>
                      <td className="fw-semibold">{balance.business}</td>
                      <td>{balance.totalStorage}</td>
                      <td>{balance.usedStorage}</td>
                      <td className="fw-semibold text-success">{balance.remainingStorage}</td>
                      <td>
                        <div className="d-flex align-items-center gap-2">
                          <div className="progress" style={{ width: '100px', height: '6px' }}>
                            <div 
                              className={`progress-bar bg-${balance.usagePercent > 80 ? 'danger' : balance.usagePercent > 60 ? 'warning' : 'success'}`}
                              style={{ width: `${balance.usagePercent}%` }}
                            ></div>
                          </div>
                          <span className="fs-12">{balance.usagePercent}%</span>
                        </div>
                      </td>
                      <td>
                        <SpkBadge variant="" Customclass={`badge bg-${balance.status === 'Active' ? 'success' : 'warning'}`}>
                          {balance.status}
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

export default StorageCreditsBalance