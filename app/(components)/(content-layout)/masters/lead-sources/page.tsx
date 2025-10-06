'use client'
import { Fragment } from 'react'
import MasterPageTemplate from '@/shared/@spk-reusable-components/reusable-pages/master-page-template'
import SpkBadge from '@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-badge'

const LeadSources = () => {
  const data = [
    { id: 1, sourceName: 'Website', description: 'Leads from company website', status: 'Active', createdDate: '2024-01-15' },
    { id: 2, sourceName: 'Social Media', description: 'Facebook, Instagram, LinkedIn', status: 'Active', createdDate: '2024-01-14' },
    { id: 3, sourceName: 'Referral', description: 'Customer referrals', status: 'Active', createdDate: '2024-01-13' },
    { id: 4, sourceName: 'Cold Calling', description: 'Direct phone calls', status: 'Active', createdDate: '2024-01-12' },
    { id: 5, sourceName: 'Email Campaign', description: 'Email marketing campaigns', status: 'Inactive', createdDate: '2024-01-11' }
  ]

  const renderRow = (item: any) => (
    <Fragment>
      <td className="fw-semibold">{item.sourceName}</td>
      <td>{item.description}</td>
      <td><SpkBadge variant="" Customclass={`badge bg-${item.status === 'Active' ? 'success' : 'danger'}-transparent`}>{item.status}</SpkBadge></td>
      <td>{item.createdDate}</td>
    </Fragment>
  )

  return (
    <MasterPageTemplate
      title="Lead Sources"
      breadcrumbs={['Masters', 'CRM & Leads', 'Lead Sources']}
      searchFields={[{ placeholder: 'Source Name', width: '200px' }, { placeholder: 'Status', width: '150px' }]}
      tableHeaders={[
        { title: 'Source Name', sortKey: 'sourceName' },
        { title: 'Description', sortKey: 'description' },
        { title: 'Status', sortKey: 'status' },
        { title: 'Created Date', sortKey: 'createdDate' }
      ]}
      data={data}
      renderRow={renderRow}
      formFields={[
        { name: 'sourceName', label: 'Source Name', type: 'text' },
        { name: 'description', label: 'Description', type: 'textarea' },
        { name: 'status', label: 'Status', type: 'select', options: ['Active', 'Inactive'] }
      ]}
      onAdd={(data) => console.log('Add:', data)}
      onEdit={(id, data) => console.log('Edit:', id, data)}
      onDelete={(id) => console.log('Delete:', id)}
    />
  )
}

export default LeadSources