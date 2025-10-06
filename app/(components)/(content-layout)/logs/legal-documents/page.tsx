'use client'
import { Fragment, useState } from 'react'
import { Card, Col, Row, Form, Dropdown } from 'react-bootstrap'
import SpkTables from '@/shared/@spk-reusable-components/reusable-tables/spk-tables'
import SpkBadge from '@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-badge'
import SpkButton from '@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-buttons'
import SpkDropdown from '@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-dropdown'
import SpkDatepickr from '@/shared/@spk-reusable-components/reusable-plugins/spk-datepicker'

const LegalDocuments = () => {
  const [sortConfig, setSortConfig] = useState<{key: string, direction: 'asc' | 'desc'} | null>(null)
  const [effectiveDate, setEffectiveDate] = useState<Date | null>(null)

  const handleSort = (key: string) => {
    let direction: 'asc' | 'desc' = 'asc'
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc'
    }
    setSortConfig({ key, direction })
  }

  const legalDocumentsData = [
    { id: 1, documentType: 'Terms', version: 'v2.1', title: 'Terms of Service', effectiveDate: '2024-01-15', status: 'Active', createdDate: '2024-01-10', updatedBy: 'Legal Team' },
    { id: 2, documentType: 'Privacy', version: 'v1.8', title: 'Privacy Policy', effectiveDate: '2024-01-10', status: 'Active', createdDate: '2024-01-05', updatedBy: 'Legal Team' },
    { id: 3, documentType: 'Cookie', version: 'v1.3', title: 'Cookie Policy', effectiveDate: '2024-01-08', status: 'Active', createdDate: '2024-01-03', updatedBy: 'Legal Team' },
    { id: 4, documentType: 'Terms', version: 'v2.0', title: 'Terms of Service', effectiveDate: '2023-12-01', status: 'Inactive', createdDate: '2023-11-25', updatedBy: 'Legal Team' },
    { id: 5, documentType: 'Privacy', version: 'v1.7', title: 'Privacy Policy', effectiveDate: '2023-11-15', status: 'Inactive', createdDate: '2023-11-10', updatedBy: 'Legal Team' }
  ]

  return (
    <Fragment>
      <div className="d-flex align-items-center justify-content-between mb-3 page-header-breadcrumb flex-wrap gap-2">
        <div>
          <h1 className="page-title fw-medium fs-20 mb-0">Legal Documents</h1>
        </div>
        <div className="d-flex align-items-center gap-2 flex-wrap">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item"><a href="#!">Logs</a></li>
              <li className="breadcrumb-item active">Legal Documents</li>
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
                    <Form.Control type="text" placeholder="Version" className="form-control-sm" style={{ width: '120px' }} />
                    <SpkDatepickr 
                      className="form-control form-control-sm" 
                      placeholderText="Effective Date" 
                      selected={effectiveDate} 
                      onChange={(date: Date | null) => setEffectiveDate(date)}
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
                    { title: <div className="d-flex align-items-center justify-content-between" onClick={() => handleSort('version')} style={{cursor: 'pointer'}}>Version <i className="ri-arrow-up-down-line ms-1"></i></div> },
                    { title: <div className="d-flex align-items-center justify-content-between" onClick={() => handleSort('title')} style={{cursor: 'pointer'}}>Title <i className="ri-arrow-up-down-line ms-1"></i></div> },
                    { title: <div className="d-flex align-items-center justify-content-between" onClick={() => handleSort('effectiveDate')} style={{cursor: 'pointer'}}>Effective Date <i className="ri-arrow-up-down-line ms-1"></i></div> },
                    { title: <div className="d-flex align-items-center justify-content-between" onClick={() => handleSort('status')} style={{cursor: 'pointer'}}>Status <i className="ri-arrow-up-down-line ms-1"></i></div> },
                    { title: <div className="d-flex align-items-center justify-content-between" onClick={() => handleSort('updatedBy')} style={{cursor: 'pointer'}}>Updated By <i className="ri-arrow-up-down-line ms-1"></i></div> },
                    { title: 'Actions' }
                  ]}
                >
                  {legalDocumentsData.map((doc, index) => (
                    <tr key={index}>
                      <td><input className="form-check-input" type="checkbox" /></td>
                      <td>
                        <SpkBadge variant="" Customclass={`badge bg-${doc.documentType === 'Terms' ? 'primary' : doc.documentType === 'Privacy' ? 'success' : 'warning'}-transparent`}>
                          {doc.documentType}
                        </SpkBadge>
                      </td>
                      <td className="fw-semibold text-info">{doc.version}</td>
                      <td className="fw-semibold">{doc.title}</td>
                      <td>{doc.effectiveDate}</td>
                      <td>
                        <SpkBadge variant="" Customclass={`badge bg-${doc.status === 'Active' ? 'success' : 'danger'}-transparent`}>
                          {doc.status}
                        </SpkBadge>
                      </td>
                      <td>{doc.updatedBy}</td>
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

export default LegalDocuments