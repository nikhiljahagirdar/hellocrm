"use client"

import React from 'react'
import { Card, Row, Col, Form, Dropdown } from 'react-bootstrap'
import SpkDropdown from '../reusable-uielements/spk-dropdown'
import SpkTables from '../../reusable-tables/spk-tables'

interface PageTemplateProps {
  title: string
  breadcrumbItems: { label: string; href?: string }[]
  tableHeaders: { title: string; sortable?: boolean }[]
  tableData: any[]
  searchPlaceholder?: string
  exportOptions?: string[]
  children?: React.ReactNode
}

const PageTemplate: React.FC<PageTemplateProps> = ({
  title,
  breadcrumbItems,
  tableHeaders,
  tableData,
  searchPlaceholder = "Search...",
  exportOptions = ["CSV", "Excel", "PDF"],
  children
}) => {
  return (
    <>
      <div className="d-flex align-items-center justify-content-between mb-3 page-header-breadcrumb flex-wrap gap-2">
        <div>
          <h1 className="page-title fw-medium fs-20 mb-0">{title}</h1>
        </div>
        <div className="d-flex align-items-center gap-2 flex-wrap">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb mb-0">
              {breadcrumbItems.map((item, index) => (
                <li key={index} className={`breadcrumb-item ${index === breadcrumbItems.length - 1 ? 'active' : ''}`}>
                  {item.href ? (
                    <a href={item.href}>{item.label}</a>
                  ) : (
                    item.label
                  )}
                </li>
              ))}
            </ol>
          </nav>
        </div>
      </div>

      {children}

      <Row>
        <Col xl={12}>
          <Card className="custom-card">
            <Card.Header className="justify-content-between">
              <div className="d-flex align-items-center gap-2">
                <Form.Control
                  type="text"
                  placeholder={searchPlaceholder}
                  className="form-control-sm"
                  style={{ width: '250px' }}
                />
              </div>
              <div>
                <SpkDropdown
                  Togglevariant=""
                  Toggletext="Export"
                  Arrowicon={true}
                  IconClass="ri-download-line me-1"
                  Customtoggleclass="btn btn-primary btn-sm"
                >
                  {exportOptions.map((option, index) => (
                    <Dropdown.Item key={index} href="#!">
                      {option}
                    </Dropdown.Item>
                  ))}
                </SpkDropdown>
              </div>
            </Card.Header>
            <Card.Body className="p-0">
              <div className="table-responsive">
                <SpkTables
                  tableClass="text-nowrap table-hover"
                  showCheckbox={true}
                  header={tableHeaders.map(header => ({
                    title: header.sortable !== false ? (
                      <div className="d-flex align-items-center justify-content-between">
                        {header.title}
                        <i className="ri-arrow-up-down-line ms-1"></i>
                      </div>
                    ) : header.title
                  }))}
                >
                  {tableData.map((row, index) => (
                    <tr key={index}>
                      <td>
                        <input className="form-check-input" type="checkbox" />
                      </td>
                      {Object.values(row).map((cell: any, cellIndex) => (
                        <td key={cellIndex}>{cell}</td>
                      ))}
                    </tr>
                  ))}
                </SpkTables>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default PageTemplate