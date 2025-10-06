'use client'
import { Fragment } from 'react'
import MasterPageTemplate from '@/shared/@spk-reusable-components/reusable-pages/master-page-template'
import SpkBadge from '@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-badge'

const FurnishingTypes = () => {
  const data = [
    { id: 1, furnishingType: 'Fully Furnished', description: 'Complete furniture and appliances', status: 'Active', createdDate: '2024-01-15' },
    { id: 2, furnishingType: 'Semi Furnished', description: 'Basic furniture included', status: 'Active', createdDate: '2024-01-14' },
    { id: 3, furnishingType: 'Unfurnished', description: 'No furniture provided', status: 'Active', createdDate: '2024-01-13' },
    { id: 4, furnishingType: 'Modular Kitchen', description: 'Kitchen with modular fittings', status: 'Active', createdDate: '2024-01-12' },
    { id: 5, furnishingType: 'Luxury Furnished', description: 'Premium furniture and fittings', status: 'Inactive', createdDate: '2024-01-11' }
  ]

  const renderRow = (item: any) => (
    <Fragment>
      <td className="fw-semibold">{item.furnishingType}</td>
      <td>{item.description}</td>
      <td><SpkBadge variant="" Customclass={`badge bg-${item.status === 'Active' ? 'success' : 'danger'}-transparent`}>{item.status}</SpkBadge></td>
      <td>{item.createdDate}</td>
    </Fragment>
  )

  return (
    <MasterPageTemplate
      title="Furnishing Types"
      breadcrumbs={['Masters', 'Property & Project', 'Furnishing Types']}
      searchFields={[{ placeholder: 'Furnishing Type', width: '200px' }, { placeholder: 'Status', width: '150px' }]}
      tableHeaders={[
        { title: 'Furnishing Type', sortKey: 'furnishingType' },
        { title: 'Description', sortKey: 'description' },
        { title: 'Status', sortKey: 'status' },
        { title: 'Created Date', sortKey: 'createdDate' }
      ]}
      data={data}
      renderRow={renderRow}
      formFields={[
        { name: 'furnishingType', label: 'Furnishing Type', type: 'text' },
        { name: 'description', label: 'Description', type: 'textarea' },
        { name: 'status', label: 'Status', type: 'select', options: ['Active', 'Inactive'] }
      ]}
      onAdd={(data) => console.log('Add:', data)}
      onEdit={(id, data) => console.log('Edit:', id, data)}
      onDelete={(id) => console.log('Delete:', id)}
    />
  )
}

export default FurnishingTypes