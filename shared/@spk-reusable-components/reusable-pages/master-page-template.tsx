'use client'
import { Fragment, useState } from 'react'
import { Card, Col, Row, Form, Dropdown, Modal } from 'react-bootstrap'
import SpkTables from '@/shared/@spk-reusable-components/reusable-tables/spk-tables'
import SpkButton from '@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-buttons'
import SpkDropdown from '@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-dropdown'

interface MasterPageTemplateProps {
  title: string
  breadcrumbs: string[]
  searchFields: { placeholder: string, width?: string }[]
  tableHeaders: { title: string, sortKey?: string }[]
  data: any[]
  renderRow: (item: any, index: number) => JSX.Element
  formFields: { name: string, label: string, type: string, options?: string[] }[]
  onAdd: (data: any) => void
  onEdit: (id: any, data: any) => void
  onDelete: (id: any) => void
}

const MasterPageTemplate = ({
  title,
  breadcrumbs,
  searchFields,
  tableHeaders,
  data,
  renderRow,
  formFields,
  onAdd,
  onEdit,
  onDelete
}: MasterPageTemplateProps) => {
  const [showModal, setShowModal] = useState(false)
  const [editMode, setEditMode] = useState(false)
  const [currentItem, setCurrentItem] = useState<any>(null)
  const [formData, setFormData] = useState<any>({})
  const [sortConfig, setSortConfig] = useState<{key: string, direction: 'asc' | 'desc'} | null>(null)

  const handleSort = (key: string) => {
    let direction: 'asc' | 'desc' = 'asc'
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc'
    }
    setSortConfig({ key, direction })
  }

  const handleAdd = () => {
    setEditMode(false)
    setCurrentItem(null)
    setFormData({})
    setShowModal(true)
  }

  const handleEdit = (item: any) => {
    setEditMode(true)
    setCurrentItem(item)
    setFormData(item)
    setShowModal(true)
  }

  const handleSubmit = () => {
    if (editMode) {
      onEdit(currentItem.id, formData)
    } else {
      onAdd(formData)
    }
    setShowModal(false)
    setFormData({})
  }

  const handleInputChange = (name: string, value: any) => {
    setFormData({ ...formData, [name]: value })
  }

  return (
    <Fragment>
      <div className="d-flex align-items-center justify-content-between mb-3 page-header-breadcrumb flex-wrap gap-2">
        <div>
          <h1 className="page-title fw-medium fs-20 mb-0">{title}</h1>
        </div>
        <div className="d-flex align-items-center gap-2 flex-wrap">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb mb-0">
              {breadcrumbs.map((crumb, index) => (
                <li key={index} className={`breadcrumb-item ${index === breadcrumbs.length - 1 ? 'active' : ''}`}>
                  {index === breadcrumbs.length - 1 ? crumb : <a href="#!">{crumb}</a>}
                </li>
              ))}
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
                    {searchFields.map((field, index) => (
                      <Form.Control
                        key={index}
                        type="text"
                        placeholder={field.placeholder}
                        className="form-control-sm"
                        style={{ width: field.width || '200px' }}
                      />
                    ))}
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
                  <SpkButton Buttonvariant="success" Size="sm" onClick={handleAdd}>
                    <i className="ri-add-line"></i>
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
                    ...tableHeaders.map(header => ({
                      title: header.sortKey ? (
                        <div className="d-flex align-items-center justify-content-between" onClick={() => handleSort(header.sortKey!)} style={{cursor: 'pointer'}}>
                          {header.title} <i className="ri-arrow-up-down-line ms-1"></i>
                        </div>
                      ) : header.title
                    })),
                    { title: 'Actions' }
                  ]}
                >
                  {data.map((item, index) => (
                    <tr key={index}>
                      <td><input className="form-check-input" type="checkbox" /></td>
                      {renderRow(item, index)}
                      <td>
                        <div className="hstack gap-2 fs-15">
                          <a className="btn btn-icon btn-sm btn-success-light rounded-pill" href="#!" onClick={(e) => e.preventDefault()}>
                            <i className="ri-download-2-line"></i>
                          </a>
                          <a className="btn btn-icon btn-sm btn-info-light rounded-pill" href="#!" onClick={(e) => { e.preventDefault(); handleEdit(item); }}>
                            <i className="ri-edit-line"></i>
                          </a>
                          <a className="btn btn-icon btn-sm btn-danger-light rounded-pill" href="#!" onClick={(e) => { e.preventDefault(); onDelete(item.id); }}>
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
                <div>Showing 1 to {data.length} of {data.length} entries</div>
                <div>
                  <nav>
                    <ul className="pagination pagination-sm mb-0">
                      <li className="page-item disabled"><a className="page-link">Previous</a></li>
                      <li className="page-item active"><a className="page-link">1</a></li>
                      <li className="page-item"><a className="page-link">Next</a></li>
                    </ul>
                  </nav>
                </div>
              </div>
            </Card.Footer>
          </Card>
        </Col>
      </Row>

      <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{editMode ? 'Edit' : 'Add'} {title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row>
              {formFields.map((field, index) => (
                <Col md={6} key={index} className="mb-3">
                  <Form.Label>{field.label}</Form.Label>
                  {field.type === 'select' ? (
                    <Form.Select
                      value={formData[field.name] || ''}
                      onChange={(e) => handleInputChange(field.name, e.target.value)}
                    >
                      <option value="">Select {field.label}</option>
                      {field.options?.map((option, idx) => (
                        <option key={idx} value={option}>{option}</option>
                      ))}
                    </Form.Select>
                  ) : field.type === 'textarea' ? (
                    <Form.Control
                      as="textarea"
                      rows={3}
                      value={formData[field.name] || ''}
                      onChange={(e) => handleInputChange(field.name, e.target.value)}
                    />
                  ) : (
                    <Form.Control
                      type={field.type}
                      value={formData[field.name] || ''}
                      onChange={(e) => handleInputChange(field.name, e.target.value)}
                    />
                  )}
                </Col>
              ))}
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <SpkButton Buttonvariant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </SpkButton>
          <SpkButton Buttonvariant="primary" onClick={handleSubmit}>
            {editMode ? 'Update' : 'Save'}
          </SpkButton>
        </Modal.Footer>
      </Modal>
    </Fragment>
  )
}

export default MasterPageTemplate