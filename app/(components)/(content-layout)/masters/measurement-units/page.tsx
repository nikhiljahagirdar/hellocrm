'use client'
import { Fragment } from 'react'
import MasterPageTemplate from '@/shared/@spk-reusable-components/reusable-pages/master-page-template'
import SpkBadge from '@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-badge'

const MeasurementUnits = () => {
  const data = [
    { id: 1, unitName: 'Square Feet', abbreviation: 'sqft', description: 'Area measurement unit', status: 'Active', createdDate: '2024-01-15' },
    { id: 2, unitName: 'Square Meter', abbreviation: 'sqm', description: 'Metric area measurement', status: 'Active', createdDate: '2024-01-14' },
    { id: 3, unitName: 'Acre', abbreviation: 'acre', description: 'Large area measurement', status: 'Active', createdDate: '2024-01-13' },
    { id: 4, unitName: 'Hectare', abbreviation: 'ha', description: 'Metric large area unit', status: 'Active', createdDate: '2024-01-12' },
    { id: 5, unitName: 'Guntha', abbreviation: 'guntha', description: 'Regional area measurement', status: 'Inactive', createdDate: '2024-01-11' }
  ]

  const renderRow = (item: any) => (
    <Fragment>
      <td className="fw-semibold">{item.unitName}</td>
      <td><SpkBadge variant="" Customclass="badge bg-primary-transparent">{item.abbreviation}</SpkBadge></td>
      <td>{item.description}</td>
      <td><SpkBadge variant="" Customclass={`badge bg-${item.status === 'Active' ? 'success' : 'danger'}-transparent`}>{item.status}</SpkBadge></td>
      <td>{item.createdDate}</td>
    </Fragment>
  )

  return (
    <MasterPageTemplate
      title="Measurement Units"
      breadcrumbs={['Masters', 'Property & Project', 'Measurement Units']}
      searchFields={[{ placeholder: 'Unit Name', width: '200px' }, { placeholder: 'Status', width: '150px' }]}
      tableHeaders={[
        { title: 'Unit Name', sortKey: 'unitName' },
        { title: 'Abbreviation', sortKey: 'abbreviation' },
        { title: 'Description', sortKey: 'description' },
        { title: 'Status', sortKey: 'status' },
        { title: 'Created Date', sortKey: 'createdDate' }
      ]}
      data={data}
      renderRow={renderRow}
      formFields={[
        { name: 'unitName', label: 'Unit Name', type: 'text' },
        { name: 'abbreviation', label: 'Abbreviation', type: 'text' },
        { name: 'description', label: 'Description', type: 'textarea' },
        { name: 'status', label: 'Status', type: 'select', options: ['Active', 'Inactive'] }
      ]}
      onAdd={(data) => console.log('Add:', data)}
      onEdit={(id, data) => console.log('Edit:', id, data)}
      onDelete={(id) => console.log('Delete:', id)}
    />
  )
}

export default MeasurementUnits