'use client'
import { Fragment } from 'react'
import MasterPageTemplate from '@/shared/@spk-reusable-components/reusable-pages/master-page-template'
import SpkBadge from '@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-badge'

const MediaTypes = () => {
  const data = [
    { id: 1, typeName: 'Image', description: 'Image files (JPG, PNG, GIF)', extensions: 'jpg,png,gif', maxSize: '5MB', status: 'Active', createdDate: '2024-01-15' },
    { id: 2, typeName: 'Video', description: 'Video files (MP4, AVI, MOV)', extensions: 'mp4,avi,mov', maxSize: '100MB', status: 'Active', createdDate: '2024-01-14' },
    { id: 3, typeName: 'Document', description: 'Document files (PDF, DOC)', extensions: 'pdf,doc,docx', maxSize: '10MB', status: 'Active', createdDate: '2024-01-13' },
    { id: 4, typeName: 'Audio', description: 'Audio files (MP3, WAV)', extensions: 'mp3,wav', maxSize: '20MB', status: 'Active', createdDate: '2024-01-12' },
    { id: 5, typeName: 'Archive', description: 'Archive files (ZIP, RAR)', extensions: 'zip,rar', maxSize: '50MB', status: 'Inactive', createdDate: '2024-01-11' }
  ]

  const renderRow = (item: any) => (
    <Fragment>
      <td className="fw-semibold">{item.typeName}</td>
      <td>{item.description}</td>
      <td><SpkBadge variant="" Customclass="badge bg-info-transparent">{item.extensions}</SpkBadge></td>
      <td><SpkBadge variant="" Customclass="badge bg-warning-transparent">{item.maxSize}</SpkBadge></td>
      <td><SpkBadge variant="" Customclass={`badge bg-${item.status === 'Active' ? 'success' : 'danger'}-transparent`}>{item.status}</SpkBadge></td>
      <td>{item.createdDate}</td>
    </Fragment>
  )

  return (
    <MasterPageTemplate
      title="Media Types"
      breadcrumbs={['Masters', 'Media & User', 'Media Types']}
      searchFields={[{ placeholder: 'Type Name', width: '200px' }, { placeholder: 'Status', width: '150px' }]}
      tableHeaders={[
        { title: 'Type Name', sortKey: 'typeName' },
        { title: 'Description', sortKey: 'description' },
        { title: 'Extensions', sortKey: 'extensions' },
        { title: 'Max Size', sortKey: 'maxSize' },
        { title: 'Status', sortKey: 'status' },
        { title: 'Created Date', sortKey: 'createdDate' }
      ]}
      data={data}
      renderRow={renderRow}
      formFields={[
        { name: 'typeName', label: 'Type Name', type: 'text' },
        { name: 'description', label: 'Description', type: 'textarea' },
        { name: 'extensions', label: 'Extensions', type: 'text' },
        { name: 'maxSize', label: 'Max Size', type: 'text' },
        { name: 'status', label: 'Status', type: 'select', options: ['Active', 'Inactive'] }
      ]}
      onAdd={(data) => console.log('Add:', data)}
      onEdit={(id, data) => console.log('Edit:', id, data)}
      onDelete={(id) => console.log('Delete:', id)}
    />
  )
}

export default MediaTypes