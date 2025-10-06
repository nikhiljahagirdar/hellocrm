'use client'
import { Fragment } from 'react'
import MasterPageTemplate from '@/shared/@spk-reusable-components/reusable-pages/master-page-template'
import SpkBadge from '@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-badge'

const Priorities = () => {
  const data = [
    { id: 1, priorityName: 'High', description: 'High priority tasks', color: '#dc3545', level: 1, status: 'Active', createdDate: '2024-01-15' },
    { id: 2, priorityName: 'Medium', description: 'Medium priority tasks', color: '#ffc107', level: 2, status: 'Active', createdDate: '2024-01-14' },
    { id: 3, priorityName: 'Low', description: 'Low priority tasks', color: '#28a745', level: 3, status: 'Active', createdDate: '2024-01-13' },
    { id: 4, priorityName: 'Critical', description: 'Critical priority tasks', color: '#6f42c1', level: 0, status: 'Active', createdDate: '2024-01-12' },
    { id: 5, priorityName: 'Normal', description: 'Normal priority tasks', color: '#17a2b8', level: 4, status: 'Inactive', createdDate: '2024-01-11' }
  ]

  const renderRow = (item: any) => (
    <Fragment>
      <td className="fw-semibold">{item.priorityName}</td>
      <td>{item.description}</td>
      <td><div className="d-flex align-items-center gap-2"><div style={{ width: '20px', height: '20px', backgroundColor: item.color, borderRadius: '4px' }}></div><span>{item.color}</span></div></td>
      <td><SpkBadge variant="" Customclass="badge bg-info-transparent">{item.level}</SpkBadge></td>
      <td><SpkBadge variant="" Customclass={`badge bg-${item.status === 'Active' ? 'success' : 'danger'}-transparent`}>{item.status}</SpkBadge></td>
      <td>{item.createdDate}</td>
    </Fragment>
  )

  return (
    <MasterPageTemplate
      title="Priorities"
      breadcrumbs={['Masters', 'CRM & Leads', 'Priorities']}
      searchFields={[{ placeholder: 'Priority Name', width: '200px' }, { placeholder: 'Status', width: '150px' }]}
      tableHeaders={[
        { title: 'Priority Name', sortKey: 'priorityName' },
        { title: 'Description', sortKey: 'description' },
        { title: 'Color', sortKey: 'color' },
        { title: 'Level', sortKey: 'level' },
        { title: 'Status', sortKey: 'status' },
        { title: 'Created Date', sortKey: 'createdDate' }
      ]}
      data={data}
      renderRow={renderRow}
      formFields={[
        { name: 'priorityName', label: 'Priority Name', type: 'text' },
        { name: 'description', label: 'Description', type: 'textarea' },
        { name: 'color', label: 'Color', type: 'color' },
        { name: 'level', label: 'Level', type: 'number' },
        { name: 'status', label: 'Status', type: 'select', options: ['Active', 'Inactive'] }
      ]}
      onAdd={(data) => console.log('Add:', data)}
      onEdit={(id, data) => console.log('Edit:', id, data)}
      onDelete={(id) => console.log('Delete:', id)}
    />
  )
}

export default Priorities