'use client'
import { Fragment } from 'react'
import MasterPageTemplate from '@/shared/@spk-reusable-components/reusable-pages/master-page-template'
import SpkBadge from '@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-badge'

const PropertyTransactions = () => {
  const data = [
    { id: 1, transactionType: 'Sale', description: 'Property sale transaction', status: 'Active', createdDate: '2024-01-15' },
    { id: 2, transactionType: 'Rent', description: 'Property rental transaction', status: 'Active', createdDate: '2024-01-14' },
    { id: 3, transactionType: 'Lease', description: 'Property lease transaction', status: 'Active', createdDate: '2024-01-13' },
    { id: 4, transactionType: 'Exchange', description: 'Property exchange transaction', status: 'Active', createdDate: '2024-01-12' },
    { id: 5, transactionType: 'Mortgage', description: 'Property mortgage transaction', status: 'Inactive', createdDate: '2024-01-11' }
  ]

  const renderRow = (item: any) => (
    <Fragment>
      <td className="fw-semibold">{item.transactionType}</td>
      <td>{item.description}</td>
      <td><SpkBadge variant="" Customclass={`badge bg-${item.status === 'Active' ? 'success' : 'danger'}-transparent`}>{item.status}</SpkBadge></td>
      <td>{item.createdDate}</td>
    </Fragment>
  )

  return (
    <MasterPageTemplate
      title="Property Transactions"
      breadcrumbs={['Masters', 'Property & Project', 'Property Transactions']}
      searchFields={[{ placeholder: 'Transaction Type', width: '200px' }, { placeholder: 'Status', width: '150px' }]}
      tableHeaders={[
        { title: 'Transaction Type', sortKey: 'transactionType' },
        { title: 'Description', sortKey: 'description' },
        { title: 'Status', sortKey: 'status' },
        { title: 'Created Date', sortKey: 'createdDate' }
      ]}
      data={data}
      renderRow={renderRow}
      formFields={[
        { name: 'transactionType', label: 'Transaction Type', type: 'text' },
        { name: 'description', label: 'Description', type: 'textarea' },
        { name: 'status', label: 'Status', type: 'select', options: ['Active', 'Inactive'] }
      ]}
      onAdd={(data) => console.log('Add:', data)}
      onEdit={(id, data) => console.log('Edit:', id, data)}
      onDelete={(id) => console.log('Delete:', id)}
    />
  )
}

export default PropertyTransactions