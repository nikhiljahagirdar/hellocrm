'use client'
import { Fragment } from 'react'
import MasterPageTemplate from '@/shared/@spk-reusable-components/reusable-pages/master-page-template'
import SpkBadge from '@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-badge'

const BuildingTypes = () => {
  const data = [
    { id: 1, typeName: 'Apartment', description: 'Multi-unit residential building', status: 'Active', createdDate: '2024-01-15' },
    { id: 2, typeName: 'Villa', description: 'Independent house', status: 'Active', createdDate: '2024-01-14' },
    { id: 3, typeName: 'Office', description: 'Commercial office space', status: 'Active', createdDate: '2024-01-13' },
    { id: 4, typeName: 'Retail', description: 'Retail commercial space', status: 'Active', createdDate: '2024-01-12' },
    { id: 5, typeName: 'Warehouse', description: 'Industrial storage facility', status: 'Inactive', createdDate: '2024-01-11' }
  ]

  const renderRow = (item: any) => (
    <Fragment>
      <td className="fw-semibold">{item.typeName}</td>
      <td>{item.description}</td>
      <td><SpkBadge variant="" Customclass={`badge bg-${item.status === 'Active' ? 'success' : 'danger'}-transparent`}>{item.status}</SpkBadge></td>
      <td>{item.createdDate}</td>
    </Fragment>
  )

  return (
    <MasterPageTemplate
      title="Building Types"
      breadcrumbs={['Masters', 'Property & Project', 'Building Types']}
      searchFields={[{ placeholder: 'Type Name', width: '200px' }, { placeholder: 'Status', width: '150px' }]}
      tableHeaders={[
        { title: 'Type Name', sortKey: 'typeName' },
        { title: 'Description', sortKey: 'description' },
        { title: 'Status', sortKey: 'status' },
        { title: 'Created Date', sortKey: 'createdDate' }
      ]}
      data={data}
      renderRow={renderRow}
      formFields={[
        { name: 'typeName', label: 'Type Name', type: 'text' },
        { name: 'description', label: 'Description', type: 'textarea' },
        { name: 'status', label: 'Status', type: 'select', options: ['Active', 'Inactive'] }
      ]}
      onAdd={(data) => console.log('Add:', data)}
      onEdit={(id, data) => console.log('Edit:', id, data)}
      onDelete={(id) => console.log('Delete:', id)}
    />
  )
}

export default BuildingTypes