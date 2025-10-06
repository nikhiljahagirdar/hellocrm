'use client'
import { Fragment } from 'react'
import MasterPageTemplate from '@/shared/@spk-reusable-components/reusable-pages/master-page-template'
import SpkBadge from '@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-badge'

const MessageCreditPricing = () => {
  const data = [
    { id: 1, planName: 'Basic SMS Plan', creditType: 'SMS', credits: 1000, price: '₹500', pricePerCredit: '₹0.50', status: 'Active', createdDate: '2024-01-15' },
    { id: 2, planName: 'Premium WhatsApp Plan', creditType: 'WhatsApp', credits: 5000, price: '₹1250', pricePerCredit: '₹0.25', status: 'Active', createdDate: '2024-01-14' },
    { id: 3, planName: 'Email Bulk Plan', creditType: 'Email', credits: 10000, price: '₹1000', pricePerCredit: '₹0.10', status: 'Active', createdDate: '2024-01-13' },
    { id: 4, planName: 'Voice Call Plan', creditType: 'Voice Call', credits: 500, price: '₹1000', pricePerCredit: '₹2.00', status: 'Active', createdDate: '2024-01-12' },
    { id: 5, planName: 'Push Notification Plan', creditType: 'Push Notification', credits: 20000, price: '₹1000', pricePerCredit: '₹0.05', status: 'Inactive', createdDate: '2024-01-11' }
  ]

  const renderRow = (item: any) => (
    <Fragment>
      <td className="fw-semibold">{item.planName}</td>
      <td><SpkBadge variant="" Customclass="badge bg-primary-transparent">{item.creditType}</SpkBadge></td>
      <td><SpkBadge variant="" Customclass="badge bg-info-transparent">{item.credits}</SpkBadge></td>
      <td><SpkBadge variant="" Customclass="badge bg-success-transparent">{item.price}</SpkBadge></td>
      <td>{item.pricePerCredit}</td>
      <td><SpkBadge variant="" Customclass={`badge bg-${item.status === 'Active' ? 'success' : 'danger'}-transparent`}>{item.status}</SpkBadge></td>
      <td>{item.createdDate}</td>
    </Fragment>
  )

  return (
    <MasterPageTemplate
      title="Message Credit Pricing"
      breadcrumbs={['Masters', 'System & Credits', 'Message Credit Pricing']}
      searchFields={[{ placeholder: 'Plan Name', width: '200px' }, { placeholder: 'Credit Type', width: '150px' }]}
      tableHeaders={[
        { title: 'Plan Name', sortKey: 'planName' },
        { title: 'Credit Type', sortKey: 'creditType' },
        { title: 'Credits', sortKey: 'credits' },
        { title: 'Price', sortKey: 'price' },
        { title: 'Price Per Credit', sortKey: 'pricePerCredit' },
        { title: 'Status', sortKey: 'status' },
        { title: 'Created Date', sortKey: 'createdDate' }
      ]}
      data={data}
      renderRow={renderRow}
      formFields={[
        { name: 'planName', label: 'Plan Name', type: 'text' },
        { name: 'creditType', label: 'Credit Type', type: 'select', options: ['SMS', 'WhatsApp', 'Email', 'Voice Call', 'Push Notification'] },
        { name: 'credits', label: 'Credits', type: 'number' },
        { name: 'price', label: 'Price', type: 'text' },
        { name: 'pricePerCredit', label: 'Price Per Credit', type: 'text' },
        { name: 'status', label: 'Status', type: 'select', options: ['Active', 'Inactive'] }
      ]}
      onAdd={(data) => console.log('Add:', data)}
      onEdit={(id, data) => console.log('Edit:', id, data)}
      onDelete={(id) => console.log('Delete:', id)}
    />
  )
}

export default MessageCreditPricing