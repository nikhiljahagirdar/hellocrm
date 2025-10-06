'use client'
import { Fragment } from 'react'
import MasterPageTemplate from '@/shared/@spk-reusable-components/reusable-pages/master-page-template'
import SpkBadge from '@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-badge'

const LeadTags = () => {
  const data = [
    { id: 1, tagName: 'Hot Lead', description: 'High priority lead', color: '#dc3545', status: 'Active', createdDate: '2024-01-15' },
    { id: 2, tagName: 'Warm Lead', description: 'Medium priority lead', color: '#ffc107', status: 'Active', createdDate: '2024-01-14' },
    { id: 3, tagName: 'Cold Lead', description: 'Low priority lead', color: '#17a2b8', status: 'Active', createdDate: '2024-01-13' },
    { id: 4, tagName: 'VIP', description: 'Very important person', color: '#28a745', status: 'Active', createdDate: '2024-01-12' },
    { id: 5, tagName: 'Follow Up', description: 'Requires follow up', color: '#6f42c1', status: 'Inactive', createdDate: '2024-01-11' }
  ]

  const renderRow = (item: any) => (
    <Fragment>
      <td className="fw-semibold">{item.tagName}</td>
      <td>{item.description}</td>
      <td><div className="d-flex align-items-center gap-2"><div style={{ width: '20px', height: '20px', backgroundColor: item.color, borderRadius: '4px' }}></div><span>{item.color}</span></div></td>
      <td><SpkBadge variant="" Customclass={`badge bg-${item.status === 'Active' ? 'success' : 'danger'}-transparent`}>{item.status}</SpkBadge></td>
      <td>{item.createdDate}</td>
    </Fragment>
  )

  return (
    <MasterPageTemplate
      title="Lead Tags"
      breadcrumbs={['Masters', 'CRM & Leads', 'Lead Tags']}
      searchFields={[{ placeholder: 'Tag Name', width: '200px' }, { placeholder: 'Status', width: '150px' }]}
      tableHeaders={[
        { title: 'Tag Name', sortKey: 'tagName' },
        { title: 'Description', sortKey: 'description' },
        { title: 'Color', sortKey: 'color' },
        { title: 'Status', sortKey: 'status' },
        { title: 'Created Date', sortKey: 'createdDate' }
      ]}
      data={data}
      renderRow={renderRow}
      formFields={[
        { name: 'tagName', label: 'Tag Name', type: 'text' },
        { name: 'description', label: 'Description', type: 'textarea' },
        { name: 'color', label: 'Color', type: 'color' },
        { name: 'status', label: 'Status', type: 'select', options: ['Active', 'Inactive'] }
      ]}
      onAdd={(data) => console.log('Add:', data)}
      onEdit={(id, data) => console.log('Edit:', id, data)}
      onDelete={(id) => console.log('Delete:', id)}
    />
  )
}

export default LeadTags