'use client'
import { Fragment } from 'react'
import MasterPageTemplate from '@/shared/@spk-reusable-components/reusable-pages/master-page-template'
import SpkBadge from '@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-badge'

const PropertyConfigurations = () => {
  const data = [
    { id: 1, configName: '1 BHK', description: '1 Bedroom, Hall, Kitchen', area: '500-700 sqft', status: 'Active', createdDate: '2024-01-15' },
    { id: 2, configName: '2 BHK', description: '2 Bedroom, Hall, Kitchen', area: '800-1200 sqft', status: 'Active', createdDate: '2024-01-14' },
    { id: 3, configName: '3 BHK', description: '3 Bedroom, Hall, Kitchen', area: '1200-1800 sqft', status: 'Active', createdDate: '2024-01-13' },
    { id: 4, configName: '4 BHK', description: '4 Bedroom, Hall, Kitchen', area: '1800-2500 sqft', status: 'Active', createdDate: '2024-01-12' },
    { id: 5, configName: 'Studio', description: 'Single room apartment', area: '300-500 sqft', status: 'Inactive', createdDate: '2024-01-11' }
  ]

  const renderRow = (item: any) => (
    <Fragment>
      <td className="fw-semibold">{item.configName}</td>
      <td>{item.description}</td>
      <td>{item.area}</td>
      <td><SpkBadge variant="" Customclass={`badge bg-${item.status === 'Active' ? 'success' : 'danger'}-transparent`}>{item.status}</SpkBadge></td>
      <td>{item.createdDate}</td>
    </Fragment>
  )

  return (
    <MasterPageTemplate
      title="Property Configurations"
      breadcrumbs={['Masters', 'Property & Project', 'Property Configurations']}
      searchFields={[{ placeholder: 'Config Name', width: '200px' }, { placeholder: 'Status', width: '150px' }]}
      tableHeaders={[
        { title: 'Config Name', sortKey: 'configName' },
        { title: 'Description', sortKey: 'description' },
        { title: 'Area Range', sortKey: 'area' },
        { title: 'Status', sortKey: 'status' },
        { title: 'Created Date', sortKey: 'createdDate' }
      ]}
      data={data}
      renderRow={renderRow}
      formFields={[
        { name: 'configName', label: 'Configuration Name', type: 'text' },
        { name: 'description', label: 'Description', type: 'textarea' },
        { name: 'area', label: 'Area Range', type: 'text' },
        { name: 'status', label: 'Status', type: 'select', options: ['Active', 'Inactive'] }
      ]}
      onAdd={(data) => console.log('Add:', data)}
      onEdit={(id, data) => console.log('Edit:', id, data)}
      onDelete={(id) => console.log('Delete:', id)}
    />
  )
}

export default PropertyConfigurations