'use client'
import { Fragment } from 'react'
import MasterPageTemplate from '@/shared/@spk-reusable-components/reusable-pages/master-page-template'
import SpkBadge from '@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-badge'

const Amenities = () => {
  const data = [
    { id: 1, amenityName: 'Swimming Pool', description: 'Community swimming pool', category: 'Recreation', status: 'Active', createdDate: '2024-01-15' },
    { id: 2, amenityName: 'Gym', description: 'Fitness center', category: 'Health', status: 'Active', createdDate: '2024-01-14' },
    { id: 3, amenityName: 'Parking', description: 'Covered parking space', category: 'Utility', status: 'Active', createdDate: '2024-01-13' },
    { id: 4, amenityName: 'Garden', description: 'Landscaped garden area', category: 'Recreation', status: 'Active', createdDate: '2024-01-12' },
    { id: 5, amenityName: 'Security', description: '24/7 security service', category: 'Safety', status: 'Inactive', createdDate: '2024-01-11' }
  ]

  const renderRow = (item: any) => (
    <Fragment>
      <td className="fw-semibold">{item.amenityName}</td>
      <td>{item.description}</td>
      <td><SpkBadge variant="" Customclass="badge bg-primary-transparent">{item.category}</SpkBadge></td>
      <td><SpkBadge variant="" Customclass={`badge bg-${item.status === 'Active' ? 'success' : 'danger'}-transparent`}>{item.status}</SpkBadge></td>
      <td>{item.createdDate}</td>
    </Fragment>
  )

  return (
    <MasterPageTemplate
      title="Amenities"
      breadcrumbs={['Masters', 'Media & User', 'Amenities']}
      searchFields={[{ placeholder: 'Amenity Name', width: '200px' }, { placeholder: 'Category', width: '150px' }]}
      tableHeaders={[
        { title: 'Amenity Name', sortKey: 'amenityName' },
        { title: 'Description', sortKey: 'description' },
        { title: 'Category', sortKey: 'category' },
        { title: 'Status', sortKey: 'status' },
        { title: 'Created Date', sortKey: 'createdDate' }
      ]}
      data={data}
      renderRow={renderRow}
      formFields={[
        { name: 'amenityName', label: 'Amenity Name', type: 'text' },
        { name: 'description', label: 'Description', type: 'textarea' },
        { name: 'category', label: 'Category', type: 'select', options: ['Recreation', 'Health', 'Utility', 'Safety', 'Entertainment'] },
        { name: 'status', label: 'Status', type: 'select', options: ['Active', 'Inactive'] }
      ]}
      onAdd={(data) => console.log('Add:', data)}
      onEdit={(id, data) => console.log('Edit:', id, data)}
      onDelete={(id) => console.log('Delete:', id)}
    />
  )
}

export default Amenities