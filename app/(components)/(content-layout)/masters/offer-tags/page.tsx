'use client'
import { Fragment } from 'react'
import MasterPageTemplate from '@/shared/@spk-reusable-components/reusable-pages/master-page-template'
import SpkBadge from '@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-badge'

const OfferTags = () => {
  const data = [
    { id: 1, tagName: 'Limited Time', description: 'Time-limited offers', color: '#dc3545', status: 'Active', createdDate: '2024-01-15' },
    { id: 2, tagName: 'Best Deal', description: 'Best price offers', color: '#28a745', status: 'Active', createdDate: '2024-01-14' },
    { id: 3, tagName: 'Early Bird', description: 'Early booking offers', color: '#ffc107', status: 'Active', createdDate: '2024-01-13' },
    { id: 4, tagName: 'Exclusive', description: 'Exclusive member offers', color: '#6f42c1', status: 'Active', createdDate: '2024-01-12' },
    { id: 5, tagName: 'Seasonal', description: 'Seasonal promotional offers', color: '#17a2b8', status: 'Inactive', createdDate: '2024-01-11' }
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
      title="Offer Tags"
      breadcrumbs={['Masters', 'CRM & Leads', 'Offer Tags']}
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

export default OfferTags