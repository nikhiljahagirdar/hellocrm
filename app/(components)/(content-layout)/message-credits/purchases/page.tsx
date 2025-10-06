"use client"

import React, { Fragment, useState } from 'react'
import { Card, Col, Form, Row, Dropdown } from 'react-bootstrap'
import SpkDropdown from '@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-dropdown'
import SpkTables from '@/shared/@spk-reusable-components/reusable-tables/spk-tables'
import SpkBadge from '@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-badge'
import SpkButton from '@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-buttons'
import SpkDatepickr from '@/shared/@spk-reusable-components/reusable-plugins/spk-datepicker'

interface MessageCreditsPurchasesProps {}

const MessageCreditsPurchases: React.FC<MessageCreditsPurchasesProps> = () => {
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

  const purchasesData = [
    { id: 1, business: 'ABC Properties', creditType: 'SMS', amount: '₹500', credits: '1000', purchaseDate: '2024-01-15', paymentStatus: 'Completed', transactionId: 'TXN001' },
    { id: 2, business: 'XYZ Builders', creditType: 'Email', amount: '₹100', credits: '1000', purchaseDate: '2024-01-14', paymentStatus: 'Completed', transactionId: 'TXN002' },
    { id: 3, business: 'PQR Realty', creditType: 'WhatsApp', amount: '₹750', credits: '1000', purchaseDate: '2024-01-13', paymentStatus: 'Pending', transactionId: 'TXN003' },
    { id: 4, business: 'LMN Developers', creditType: 'SMS', amount: '₹500', credits: '1000', purchaseDate: '2024-01-12', paymentStatus: 'Completed', transactionId: 'TXN004' },
    { id: 5, business: 'RST Holdings', creditType: 'Email', amount: '₹100', credits: '1000', purchaseDate: '2024-01-11', paymentStatus: 'Failed', transactionId: 'TXN005' }
  ]

  return (
    <Fragment>
      <div className="d-flex align-items-center justify-content-between mb-3 page-header-breadcrumb flex-wrap gap-2">
        <div>
          <h1 className="page-title fw-medium fs-20 mb-0">Message Credits Purchases</h1>
        </div>
        <div className="d-flex align-items-center gap-2 flex-wrap">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item"><a href="#!">Credits</a></li>
              <li className="breadcrumb-item"><a href="#!">Message Credits</a></li>
              <li className="breadcrumb-item active">Purchases</li>
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
                    <option>Credit Type</option>
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
                    style={{ width: '200px' }}
                  />
                  <Form.Select className="form-select-sm" style={{ width: '150px' }}>
                    <option>Payment Status</option>
                    <option>Completed</option>
                    <option>Pending</option>
                    <option>Failed</option>
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
                    { title: <div className="d-flex align-items-center justify-content-between" onClick={() => handleSort('business')} style={{cursor: 'pointer'}}>Business <i className="ri-arrow-up-down-line ms-1"></i></div> },
                    { title: <div className="d-flex align-items-center justify-content-between" onClick={() => handleSort('creditType')} style={{cursor: 'pointer'}}>Credit Type <i className="ri-arrow-up-down-line ms-1"></i></div> },
                    { title: <div className="d-flex align-items-center justify-content-between" onClick={() => handleSort('amount')} style={{cursor: 'pointer'}}>Amount <i className="ri-arrow-up-down-line ms-1"></i></div> },
                    { title: <div className="d-flex align-items-center justify-content-between" onClick={() => handleSort('credits')} style={{cursor: 'pointer'}}>Credits <i className="ri-arrow-up-down-line ms-1"></i></div> },
                    { title: <div className="d-flex align-items-center justify-content-between" onClick={() => handleSort('purchaseDate')} style={{cursor: 'pointer'}}>Purchase Date <i className="ri-arrow-up-down-line ms-1"></i></div> },
                    { title: <div className="d-flex align-items-center justify-content-between" onClick={() => handleSort('paymentStatus')} style={{cursor: 'pointer'}}>Payment Status <i className="ri-arrow-up-down-line ms-1"></i></div> },
                    { title: 'Actions' }
                  ]}
                >
                  {purchasesData.map((purchase, index) => (
                    <tr key={index}>
                      <td><input className="form-check-input" type="checkbox" /></td>
                      <td className="fw-semibold">{purchase.business}</td>
                      <td>
                        <SpkBadge variant="" Customclass={`badge bg-${purchase.creditType === 'SMS' ? 'primary' : purchase.creditType === 'Email' ? 'info' : 'success'}`}>
                          {purchase.creditType}
                        </SpkBadge>
                      </td>
                      <td className="fw-semibold text-primary">{purchase.amount}</td>
                      <td>{purchase.credits}</td>
                      <td>{purchase.purchaseDate}</td>
                      <td>
                        <SpkBadge variant="" Customclass={`badge bg-${purchase.paymentStatus === 'Completed' ? 'success' : purchase.paymentStatus === 'Pending' ? 'warning' : 'danger'}`}>
                          {purchase.paymentStatus}
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

export default MessageCreditsPurchases