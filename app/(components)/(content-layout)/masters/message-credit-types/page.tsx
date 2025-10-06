'use client'
import { Fragment } from 'react'
import MasterPageTemplate from '@/shared/@spk-reusable-components/reusable-pages/master-page-template'
import SpkBadge from '@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-badge'

const MessageCreditTypes = () => {
  const data = [
    { id: 1, typeName: 'SMS', description: 'Text message credits', costPerCredit: '₹0.50', status: 'Active', createdDate: '2024-01-15' },
    { id: 2, typeName: 'WhatsApp', description: 'WhatsApp message credits', costPerCredit: '₹0.25', status: 'Active', createdDate: '2024-01-14' },
    { id: 3, typeName: 'Email', description: 'Email message credits', costPerCredit: '₹0.10', status: 'Active', createdDate: '2024-01-13' },
    { id: 4, typeName: 'Voice Call', description: 'Voice call credits', costPerCredit: '₹2.00', status: 'Active', createdDate: '2024-01-12' },
    { id: 5, typeName: 'Push Notification', description: 'Mobile push notification', costPerCredit: '₹0.05', status: 'Inactive', createdDate: '2024-01-11' }
  ]

  const renderRow = (item: any) => (
    <Fragment>
      <td className="fw-semibold">{item.typeName}</td>
      <td>{item.description}</td>
      <td><SpkBadge variant="" Customclass="badge bg-success-transparent">{item.costPerCredit}</SpkBadge></td>
      <td><SpkBadge variant="" Customclass={`badge bg-${item.status === 'Active' ? 'success' : 'danger'}-transparent`}>{item.status}</SpkBadge></td>
      <td>{item.createdDate}</td>
    </Fragment>
  )

  return (
    <MasterPageTemplate
      title="Message Credit Types"
      breadcrumbs={['Masters', 'System & Credits', 'Message Credit Types']}
      searchFields={[{ placeholder: 'Type Name', width: '200px' }, { placeholder: 'Status', width: '150px' }]}
      tableHeaders={[
        { title: 'Type Name', sortKey: 'typeName' },
        { title: 'Description', sortKey: 'description' },
        { title: 'Cost Per Credit', sortKey: 'costPerCredit' },
        { title: 'Status', sortKey: 'status' },
        { title: 'Created Date', sortKey: 'createdDate' }
      ]}
      data={data}
      renderRow={renderRow}
      formFields={[
        { name: 'typeName', label: 'Type Name', type: 'text' },
        { name: 'description', label: 'Description', type: 'textarea' },
        { name: 'costPerCredit', label: 'Cost Per Credit', type: 'text' },
        { name: 'status', label: 'Status', type: 'select', options: ['Active', 'Inactive'] }
      ]}
      onAdd={(data) => console.log('Add:', data)}
      onEdit={(id, data) => console.log('Edit:', id, data)}
      onDelete={(id) => console.log('Delete:', id)}
    />
  )
}

export default MessageCreditTypes