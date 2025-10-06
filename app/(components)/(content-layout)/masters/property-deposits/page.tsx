'use client'
import { Fragment } from 'react'
import MasterPageTemplate from '@/shared/@spk-reusable-components/reusable-pages/master-page-template'
import SpkBadge from '@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-badge'

const PropertyDeposits = () => {
  const data = [
    { id: 1, depositType: 'Security Deposit', description: 'Refundable security amount', percentage: '10%', status: 'Active', createdDate: '2024-01-15' },
    { id: 2, depositType: 'Booking Amount', description: 'Initial booking payment', percentage: '5%', status: 'Active', createdDate: '2024-01-14' },
    { id: 3, depositType: 'Token Amount', description: 'Token money for property', percentage: '2%', status: 'Active', createdDate: '2024-01-13' },
    { id: 4, depositType: 'Advance Payment', description: 'Advance towards total cost', percentage: '20%', status: 'Active', createdDate: '2024-01-12' },
    { id: 5, depositType: 'Maintenance Deposit', description: 'Maintenance security deposit', percentage: '3%', status: 'Inactive', createdDate: '2024-01-11' }
  ]

  const renderRow = (item: any) => (
    <Fragment>
      <td className="fw-semibold">{item.depositType}</td>
      <td>{item.description}</td>
      <td><SpkBadge variant="" Customclass="badge bg-info-transparent">{item.percentage}</SpkBadge></td>
      <td><SpkBadge variant="" Customclass={`badge bg-${item.status === 'Active' ? 'success' : 'danger'}-transparent`}>{item.status}</SpkBadge></td>
      <td>{item.createdDate}</td>
    </Fragment>
  )

  return (
    <MasterPageTemplate
      title="Property Deposits"
      breadcrumbs={['Masters', 'Property & Project', 'Property Deposits']}
      searchFields={[{ placeholder: 'Deposit Type', width: '200px' }, { placeholder: 'Status', width: '150px' }]}
      tableHeaders={[
        { title: 'Deposit Type', sortKey: 'depositType' },
        { title: 'Description', sortKey: 'description' },
        { title: 'Percentage', sortKey: 'percentage' },
        { title: 'Status', sortKey: 'status' },
        { title: 'Created Date', sortKey: 'createdDate' }
      ]}
      data={data}
      renderRow={renderRow}
      formFields={[
        { name: 'depositType', label: 'Deposit Type', type: 'text' },
        { name: 'description', label: 'Description', type: 'textarea' },
        { name: 'percentage', label: 'Percentage', type: 'text' },
        { name: 'status', label: 'Status', type: 'select', options: ['Active', 'Inactive'] }
      ]}
      onAdd={(data) => console.log('Add:', data)}
      onEdit={(id, data) => console.log('Edit:', id, data)}
      onDelete={(id) => console.log('Delete:', id)}
    />
  )
}

export default PropertyDeposits