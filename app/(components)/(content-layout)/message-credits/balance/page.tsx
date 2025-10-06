'use client'
import { Fragment, useState } from 'react'
import { Card, Col, Row, Form, Dropdown } from 'react-bootstrap'
import SpkTables from '@/shared/@spk-reusable-components/reusable-tables/spk-tables'
import SpkBadge from '@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-badge'
import SpkButton from '@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-buttons'
import SpkDropdown from '@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-dropdown'


const MessageCreditsBalance = () => {
  const [sortConfig, setSortConfig] = useState<{key: string, direction: 'asc' | 'desc'} | null>(null)
  const [unitsRange, setUnitsRange] = useState([0, 10000])

  const handleSort = (key: string) => {
    let direction: 'asc' | 'desc' = 'asc'
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc'
    }
    setSortConfig({ key, direction })
  }

  const balanceData = [
    { id: 1, business: 'ABC Properties', creditType: 'SMS Credits', totalPurchased: 5000, unitsUsed: 3200, unitsRemaining: 1800, lastUpdated: '2024-01-15 14:30:00', status: 'Active' },
    { id: 2, business: 'XYZ Builders', creditType: 'Email Credits', totalPurchased: 10000, unitsUsed: 7500, unitsRemaining: 2500, lastUpdated: '2024-01-14 16:45:00', status: 'Active' },
    { id: 3, business: 'PQR Realty', creditType: 'WhatsApp Credits', totalPurchased: 3000, unitsUsed: 2800, unitsRemaining: 200, lastUpdated: '2024-01-13 11:20:00', status: 'Low' },
    { id: 4, business: 'LMN Developers', creditType: 'SMS Credits', totalPurchased: 8000, unitsUsed: 4500, unitsRemaining: 3500, lastUpdated: '2024-01-12 09:15:00', status: 'Active' },
    { id: 5, business: 'RST Holdings', creditType: 'Email Credits', totalPurchased: 15000, unitsUsed: 12000, unitsRemaining: 3000, lastUpdated: '2024-01-11 13:30:00', status: 'Active' }
  ]

  return (
    <Fragment>
      <div className="d-flex align-items-center justify-content-between mb-3 page-header-breadcrumb flex-wrap gap-2">
        <div>
          <h1 className="page-title fw-medium fs-20 mb-0">Message Credits Balance</h1>
        </div>
        <div className="d-flex align-items-center gap-2 flex-wrap">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item"><a href="#!">Credits</a></li>
              <li className="breadcrumb-item"><a href="#!">Message Credits</a></li>
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
                    <Form.Select className="form-select-sm" style={{ width: '180px' }}>
                      <option>Credit Type</option>
                      <option>SMS Credits</option>
                      <option>Email Credits</option>
                      <option>WhatsApp Credits</option>
                    </Form.Select>
                    <div className="d-flex align-items-center gap-2">
                      <label className="form-label mb-0 text-nowrap">Units Remaining:</label>
                      <input 
                        type="range" 
                        className="form-range" 
                        min="0" 
                        max="10000" 
                        value={unitsRange[1]} 
                        onChange={(e) => setUnitsRange([unitsRange[0], parseInt(e.target.value)])}
                        style={{ width: '150px' }}
                      />
                      <span className="text-muted small">{unitsRange[0]} - {unitsRange[1]}</span>
                    </div>
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
                    { title: <div className="d-flex align-items-center justify-content-between" onClick={() => handleSort('creditType')} style={{cursor: 'pointer'}}>Credit Type <i className="ri-arrow-up-down-line ms-1"></i></div> },
                    { title: <div className="d-flex align-items-center justify-content-between" onClick={() => handleSort('totalPurchased')} style={{cursor: 'pointer'}}>Total Purchased <i className="ri-arrow-up-down-line ms-1"></i></div> },
                    { title: <div className="d-flex align-items-center justify-content-between" onClick={() => handleSort('unitsUsed')} style={{cursor: 'pointer'}}>Units Used <i className="ri-arrow-up-down-line ms-1"></i></div> },
                    { title: <div className="d-flex align-items-center justify-content-between" onClick={() => handleSort('unitsRemaining')} style={{cursor: 'pointer'}}>Units Remaining <i className="ri-arrow-up-down-line ms-1"></i></div> },
                    { title: <div className="d-flex align-items-center justify-content-between" onClick={() => handleSort('lastUpdated')} style={{cursor: 'pointer'}}>Last Updated <i className="ri-arrow-up-down-line ms-1"></i></div> },
                    { title: <div className="d-flex align-items-center justify-content-between" onClick={() => handleSort('status')} style={{cursor: 'pointer'}}>Status <i className="ri-arrow-up-down-line ms-1"></i></div> },
                    { title: 'Actions' }
                  ]}
                >
                  {balanceData.map((balance, index) => (
                    <tr key={index}>
                      <td><input className="form-check-input" type="checkbox" /></td>
                      <td className="fw-semibold">{balance.business}</td>
                      <td>
                        <SpkBadge variant="" Customclass="badge bg-info-transparent">
                          {balance.creditType}
                        </SpkBadge>
                      </td>
                      <td className="text-primary fw-semibold">{balance.totalPurchased.toLocaleString()}</td>
                      <td className="text-warning">{balance.unitsUsed.toLocaleString()}</td>
                      <td className={`fw-semibold ${balance.unitsRemaining < 500 ? 'text-danger' : 'text-success'}`}>
                        {balance.unitsRemaining.toLocaleString()}
                      </td>
                      <td className="text-muted">{balance.lastUpdated}</td>
                      <td>
                        <SpkBadge 
                          variant="" 
                          Customclass={`badge ${balance.status === 'Active' ? 'bg-success-transparent' : 'bg-warning-transparent'}`}
                        >
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

export default MessageCreditsBalance