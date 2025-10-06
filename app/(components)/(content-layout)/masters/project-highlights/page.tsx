'use client'
import { Fragment } from 'react'
import MasterPageTemplate from '@/shared/@spk-reusable-components/reusable-pages/master-page-template'
import SpkBadge from '@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-badge'

const ProjectHighlights = () => {
  const data = [
    { id: 1, highlightName: 'Prime Location', description: 'Located in prime area', status: 'Active', createdDate: '2024-01-15' },
    { id: 2, highlightName: 'Modern Amenities', description: 'State-of-the-art facilities', status: 'Active', createdDate: '2024-01-14' },
    { id: 3, highlightName: 'Green Building', description: 'Eco-friendly construction', status: 'Active', createdDate: '2024-01-13' },
    { id: 4, highlightName: 'Security', description: '24/7 security system', status: 'Active', createdDate: '2024-01-12' },
    { id: 5, highlightName: 'Parking', description: 'Ample parking space', status: 'Inactive', createdDate: '2024-01-11' }
  ]

  const renderRow = (item: any) => (
    <Fragment>
      <td className="fw-semibold">{item.highlightName}</td>
      <td>{item.description}</td>
      <td><SpkBadge variant="" Customclass={`badge bg-${item.status === 'Active' ? 'success' : 'danger'}-transparent`}>{item.status}</SpkBadge></td>
      <td>{item.createdDate}</td>
    </Fragment>
  )

  return (
    <MasterPageTemplate
      title="Project Highlights"
      breadcrumbs={['Masters', 'Property & Project', 'Project Highlights']}
      searchFields={[{ placeholder: 'Highlight Name', width: '200px' }, { placeholder: 'Status', width: '150px' }]}
      tableHeaders={[
        { title: 'Highlight Name', sortKey: 'highlightName' },
        { title: 'Description', sortKey: 'description' },
        { title: 'Status', sortKey: 'status' },
        { title: 'Created Date', sortKey: 'createdDate' }
      ]}
      data={data}
      renderRow={renderRow}
      formFields={[
        { name: 'highlightName', label: 'Highlight Name', type: 'text' },
        { name: 'description', label: 'Description', type: 'textarea' },
        { name: 'status', label: 'Status', type: 'select', options: ['Active', 'Inactive'] }
      ]}
      onAdd={(data) => console.log('Add:', data)}
      onEdit={(id, data) => console.log('Edit:', id, data)}
      onDelete={(id) => console.log('Delete:', id)}
    />
  )
}

export default ProjectHighlights