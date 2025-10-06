'use client'
import { Fragment } from 'react'
import MasterPageTemplate from '@/shared/@spk-reusable-components/reusable-pages/master-page-template'
import SpkBadge from '@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-badge'

const TaskTypes = () => {
  const data = [
    { id: 1, typeName: 'Follow Up Call', description: 'Call to follow up with lead', status: 'Active', createdDate: '2024-01-15' },
    { id: 2, typeName: 'Site Visit', description: 'Schedule property site visit', status: 'Active', createdDate: '2024-01-14' },
    { id: 3, typeName: 'Document Collection', description: 'Collect required documents', status: 'Active', createdDate: '2024-01-13' },
    { id: 4, typeName: 'Meeting', description: 'Schedule client meeting', status: 'Active', createdDate: '2024-01-12' },
    { id: 5, typeName: 'Email Campaign', description: 'Send marketing emails', status: 'Inactive', createdDate: '2024-01-11' }
  ]

  const renderRow = (item: any) => (
    <Fragment>
      <td className="fw-semibold">{item.typeName}</td>
      <td>{item.description}</td>
      <td><SpkBadge variant="" Customclass={`badge bg-${item.status === 'Active' ? 'success' : 'danger'}-transparent`}>{item.status}</SpkBadge></td>
      <td>{item.createdDate}</td>
    </Fragment>
  )

  return (
    <MasterPageTemplate
      title="Task Types"
      breadcrumbs={['Masters', 'CRM & Leads', 'Task Types']}
      searchFields={[{ placeholder: 'Type Name', width: '200px' }, { placeholder: 'Status', width: '150px' }]}
      tableHeaders={[
        { title: 'Type Name', sortKey: 'typeName' },
        { title: 'Description', sortKey: 'description' },
        { title: 'Status', sortKey: 'status' },
        { title: 'Created Date', sortKey: 'createdDate' }
      ]}
      data={data}
      renderRow={renderRow}
      formFields={[
        { name: 'typeName', label: 'Type Name', type: 'text' },
        { name: 'description', label: 'Description', type: 'textarea' },
        { name: 'status', label: 'Status', type: 'select', options: ['Active', 'Inactive'] }
      ]}
      onAdd={(data) => console.log('Add:', data)}
      onEdit={(id, data) => console.log('Edit:', id, data)}
      onDelete={(id) => console.log('Delete:', id)}
    />
  )
}

export default TaskTypes