'use client'
import { Fragment } from 'react'
import MasterPageTemplate from '@/shared/@spk-reusable-components/reusable-pages/master-page-template'
import SpkBadge from '@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-badge'

const LeadStatus = () => {
  const leadStatusData = [
    { id: 1, statusName: 'New', description: 'Newly generated lead', color: '#007bff', status: 'Active', createdDate: '2024-01-15' },
    { id: 2, statusName: 'Contacted', description: 'Lead has been contacted', color: '#28a745', status: 'Active', createdDate: '2024-01-14' },
    { id: 3, statusName: 'Qualified', description: 'Lead is qualified', color: '#ffc107', status: 'Active', createdDate: '2024-01-13' },
    { id: 4, statusName: 'Converted', description: 'Lead converted to customer', color: '#17a2b8', status: 'Active', createdDate: '2024-01-12' },
    { id: 5, statusName: 'Lost', description: 'Lead is lost', color: '#dc3545', status: 'Inactive', createdDate: '2024-01-11' }
  ]

  const handleAdd = (data: any) => {
    console.log('Add:', data)
  }

  const handleEdit = (id: any, data: any) => {
    console.log('Edit:', id, data)
  }

  const handleDelete = (id: any) => {
    console.log('Delete:', id)
  }

  const renderRow = (leadStatus: any) => (
    <Fragment>
      <td className="fw-semibold">{leadStatus.statusName}</td>
      <td>{leadStatus.description}</td>
      <td>
        <div className="d-flex align-items-center gap-2">
          <div style={{ width: '20px', height: '20px', backgroundColor: leadStatus.color, borderRadius: '4px' }}></div>
          <span>{leadStatus.color}</span>
        </div>
      </td>
      <td>
        <SpkBadge variant="" Customclass={`badge bg-${leadStatus.status === 'Active' ? 'success' : 'danger'}-transparent`}>
          {leadStatus.status}
        </SpkBadge>
      </td>
      <td>{leadStatus.createdDate}</td>
    </Fragment>
  )

  return (
    <MasterPageTemplate
      title="Lead Status"
      breadcrumbs={['Masters', 'CRM & Leads', 'Lead Status']}
      searchFields={[
        { placeholder: 'Status Name', width: '200px' },
        { placeholder: 'Status', width: '150px' }
      ]}
      tableHeaders={[
        { title: 'Status Name', sortKey: 'statusName' },
        { title: 'Description', sortKey: 'description' },
        { title: 'Color', sortKey: 'color' },
        { title: 'Status', sortKey: 'status' },
        { title: 'Created Date', sortKey: 'createdDate' }
      ]}
      data={leadStatusData}
      renderRow={renderRow}
      formFields={[
        { name: 'statusName', label: 'Status Name', type: 'text' },
        { name: 'description', label: 'Description', type: 'textarea' },
        { name: 'color', label: 'Color', type: 'color' },
        { name: 'status', label: 'Status', type: 'select', options: ['Active', 'Inactive'] }
      ]}
      onAdd={handleAdd}
      onEdit={handleEdit}
      onDelete={handleDelete}
    />
  )
}

export default LeadStatus