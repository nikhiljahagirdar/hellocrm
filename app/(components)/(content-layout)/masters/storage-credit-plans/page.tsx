'use client'
import { Fragment } from 'react'
import MasterPageTemplate from '@/shared/@spk-reusable-components/reusable-pages/master-page-template'
import SpkBadge from '@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-badge'

const StorageCreditPlans = () => {
  const data = [
    { id: 1, planName: 'Basic Storage', storage: '10GB', price: '₹500', duration: '1 Month', pricePerGB: '₹50', status: 'Active', createdDate: '2024-01-15' },
    { id: 2, planName: 'Standard Storage', storage: '50GB', price: '₹2000', duration: '1 Month', pricePerGB: '₹40', status: 'Active', createdDate: '2024-01-14' },
    { id: 3, planName: 'Premium Storage', storage: '100GB', price: '₹3500', duration: '1 Month', pricePerGB: '₹35', status: 'Active', createdDate: '2024-01-13' },
    { id: 4, planName: 'Enterprise Storage', storage: '500GB', price: '₹15000', duration: '1 Month', pricePerGB: '₹30', status: 'Active', createdDate: '2024-01-12' },
    { id: 5, planName: 'Trial Storage', storage: '1GB', price: '₹0', duration: '7 Days', pricePerGB: '₹0', status: 'Inactive', createdDate: '2024-01-11' }
  ]

  const renderRow = (item: any) => (
    <Fragment>
      <td className="fw-semibold">{item.planName}</td>
      <td><SpkBadge variant="" Customclass="badge bg-info-transparent">{item.storage}</SpkBadge></td>
      <td><SpkBadge variant="" Customclass="badge bg-success-transparent">{item.price}</SpkBadge></td>
      <td><SpkBadge variant="" Customclass="badge bg-warning-transparent">{item.duration}</SpkBadge></td>
      <td>{item.pricePerGB}</td>
      <td><SpkBadge variant="" Customclass={`badge bg-${item.status === 'Active' ? 'success' : 'danger'}-transparent`}>{item.status}</SpkBadge></td>
      <td>{item.createdDate}</td>
    </Fragment>
  )

  return (
    <MasterPageTemplate
      title="Storage Credit Plans"
      breadcrumbs={['Masters', 'System & Credits', 'Storage Credit Plans']}
      searchFields={[{ placeholder: 'Plan Name', width: '200px' }, { placeholder: 'Status', width: '150px' }]}
      tableHeaders={[
        { title: 'Plan Name', sortKey: 'planName' },
        { title: 'Storage', sortKey: 'storage' },
        { title: 'Price', sortKey: 'price' },
        { title: 'Duration', sortKey: 'duration' },
        { title: 'Price Per GB', sortKey: 'pricePerGB' },
        { title: 'Status', sortKey: 'status' },
        { title: 'Created Date', sortKey: 'createdDate' }
      ]}
      data={data}
      renderRow={renderRow}
      formFields={[
        { name: 'planName', label: 'Plan Name', type: 'text' },
        { name: 'storage', label: 'Storage', type: 'text' },
        { name: 'price', label: 'Price', type: 'text' },
        { name: 'duration', label: 'Duration', type: 'text' },
        { name: 'pricePerGB', label: 'Price Per GB', type: 'text' },
        { name: 'status', label: 'Status', type: 'select', options: ['Active', 'Inactive'] }
      ]}
      onAdd={(data) => console.log('Add:', data)}
      onEdit={(id, data) => console.log('Edit:', id, data)}
      onDelete={(id) => console.log('Delete:', id)}
    />
  )
}

export default StorageCreditPlans