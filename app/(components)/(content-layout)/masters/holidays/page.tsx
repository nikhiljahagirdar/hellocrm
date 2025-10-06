'use client'
import { Fragment } from 'react'
import MasterPageTemplate from '@/shared/@spk-reusable-components/reusable-pages/master-page-template'
import SpkBadge from '@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-badge'

const Holidays = () => {
  const data = [
    { id: 1, holidayName: 'New Year', date: '2024-01-01', type: 'National', description: 'New Year celebration', status: 'Active', createdDate: '2024-01-15' },
    { id: 2, holidayName: 'Republic Day', date: '2024-01-26', type: 'National', description: 'Republic Day of India', status: 'Active', createdDate: '2024-01-14' },
    { id: 3, holidayName: 'Holi', date: '2024-03-25', type: 'Festival', description: 'Festival of colors', status: 'Active', createdDate: '2024-01-13' },
    { id: 4, holidayName: 'Independence Day', date: '2024-08-15', type: 'National', description: 'Independence Day of India', status: 'Active', createdDate: '2024-01-12' },
    { id: 5, holidayName: 'Diwali', date: '2024-11-01', type: 'Festival', description: 'Festival of lights', status: 'Inactive', createdDate: '2024-01-11' }
  ]

  const renderRow = (item: any) => (
    <Fragment>
      <td className="fw-semibold">{item.holidayName}</td>
      <td>{item.date}</td>
      <td><SpkBadge variant="" Customclass={`badge bg-${item.type === 'National' ? 'primary' : 'warning'}-transparent`}>{item.type}</SpkBadge></td>
      <td>{item.description}</td>
      <td><SpkBadge variant="" Customclass={`badge bg-${item.status === 'Active' ? 'success' : 'danger'}-transparent`}>{item.status}</SpkBadge></td>
      <td>{item.createdDate}</td>
    </Fragment>
  )

  return (
    <MasterPageTemplate
      title="Holidays"
      breadcrumbs={['Masters', 'System & Credits', 'Holidays']}
      searchFields={[{ placeholder: 'Holiday Name', width: '200px' }, { placeholder: 'Type', width: '150px' }]}
      tableHeaders={[
        { title: 'Holiday Name', sortKey: 'holidayName' },
        { title: 'Date', sortKey: 'date' },
        { title: 'Type', sortKey: 'type' },
        { title: 'Description', sortKey: 'description' },
        { title: 'Status', sortKey: 'status' },
        { title: 'Created Date', sortKey: 'createdDate' }
      ]}
      data={data}
      renderRow={renderRow}
      formFields={[
        { name: 'holidayName', label: 'Holiday Name', type: 'text' },
        { name: 'date', label: 'Date', type: 'date' },
        { name: 'type', label: 'Type', type: 'select', options: ['National', 'Festival', 'Regional', 'Company'] },
        { name: 'description', label: 'Description', type: 'textarea' },
        { name: 'status', label: 'Status', type: 'select', options: ['Active', 'Inactive'] }
      ]}
      onAdd={(data) => console.log('Add:', data)}
      onEdit={(id, data) => console.log('Edit:', id, data)}
      onDelete={(id) => console.log('Delete:', id)}
    />
  )
}

export default Holidays