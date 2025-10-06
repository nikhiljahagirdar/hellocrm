'use client'
import { Fragment } from 'react'
import MasterPageTemplate from '@/shared/@spk-reusable-components/reusable-pages/master-page-template'
import SpkBadge from '@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-badge'

const PlanAddons = () => {
  const data = [
    { id: 1, addonName: 'Extra Storage', description: 'Additional 50GB storage', price: '₹500', type: 'Storage', status: 'Active', createdDate: '2024-01-15' },
    { id: 2, addonName: 'SMS Credits', description: '1000 additional SMS credits', price: '₹300', type: 'Communication', status: 'Active', createdDate: '2024-01-14' },
    { id: 3, addonName: 'Advanced Reports', description: 'Premium analytics and reports', price: '₹800', type: 'Analytics', status: 'Active', createdDate: '2024-01-13' },
    { id: 4, addonName: 'API Access', description: 'Third-party API integrations', price: '₹1200', type: 'Integration', status: 'Active', createdDate: '2024-01-12' },
    { id: 5, addonName: 'Priority Support', description: '24/7 priority customer support', price: '₹600', type: 'Support', status: 'Inactive', createdDate: '2024-01-11' }
  ]

  const renderRow = (item: any) => (
    <Fragment>
      <td className="fw-semibold">{item.addonName}</td>
      <td>{item.description}</td>
      <td><SpkBadge variant="" Customclass="badge bg-success-transparent">{item.price}</SpkBadge></td>
      <td><SpkBadge variant="" Customclass={`badge bg-${item.type === 'Storage' ? 'primary' : item.type === 'Communication' ? 'info' : item.type === 'Analytics' ? 'warning' : item.type === 'Integration' ? 'secondary' : 'dark'}-transparent`}>{item.type}</SpkBadge></td>
      <td><SpkBadge variant="" Customclass={`badge bg-${item.status === 'Active' ? 'success' : 'danger'}-transparent`}>{item.status}</SpkBadge></td>
      <td>{item.createdDate}</td>
    </Fragment>
  )

  return (
    <MasterPageTemplate
      title="Plan Addons Master"
      breadcrumbs={['Masters', 'System & Credits', 'Plan Addons Master']}
      searchFields={[{ placeholder: 'Addon Name', width: '200px' }, { placeholder: 'Type', width: '150px' }]}
      tableHeaders={[
        { title: 'Addon Name', sortKey: 'addonName' },
        { title: 'Description', sortKey: 'description' },
        { title: 'Price', sortKey: 'price' },
        { title: 'Type', sortKey: 'type' },
        { title: 'Status', sortKey: 'status' },
        { title: 'Created Date', sortKey: 'createdDate' }
      ]}
      data={data}
      renderRow={renderRow}
      formFields={[
        { name: 'addonName', label: 'Addon Name', type: 'text' },
        { name: 'description', label: 'Description', type: 'textarea' },
        { name: 'price', label: 'Price', type: 'text' },
        { name: 'type', label: 'Type', type: 'select', options: ['Storage', 'Communication', 'Analytics', 'Integration', 'Support'] },
        { name: 'status', label: 'Status', type: 'select', options: ['Active', 'Inactive'] }
      ]}
      onAdd={(data) => console.log('Add:', data)}
      onEdit={(id, data) => console.log('Edit:', id, data)}
      onDelete={(id) => console.log('Delete:', id)}
    />
  )
}

export default PlanAddons