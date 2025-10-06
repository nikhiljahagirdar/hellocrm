'use client'
import { Fragment } from 'react'
import MasterPageTemplate from '@/shared/@spk-reusable-components/reusable-pages/master-page-template'
import SpkBadge from '@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-badge'

const ProjectTypes = () => {
  const projectTypesData = [
    { id: 1, typeName: 'Residential', description: 'Residential projects', status: 'Active', createdDate: '2024-01-15' },
    { id: 2, typeName: 'Commercial', description: 'Commercial projects', status: 'Active', createdDate: '2024-01-14' },
    { id: 3, typeName: 'Industrial', description: 'Industrial projects', status: 'Active', createdDate: '2024-01-13' },
    { id: 4, typeName: 'Mixed Use', description: 'Mixed use projects', status: 'Active', createdDate: '2024-01-12' },
    { id: 5, typeName: 'Infrastructure', description: 'Infrastructure projects', status: 'Inactive', createdDate: '2024-01-11' }
  ]

  const handleAdd = (data: any) => {
    console.log('Add:', data)
  }

  const handleEdit = (id: any, data: any) => {
    console.log('Edit:', id, data)
  }

  const handleDelete = (id: any) => {
    console.log('Delete:', id)
  }

  const renderRow = (projectType: any) => (
    <Fragment>
      <td className="fw-semibold">{projectType.typeName}</td>
      <td>{projectType.description}</td>
      <td>
        <SpkBadge variant="" Customclass={`badge bg-${projectType.status === 'Active' ? 'success' : 'danger'}-transparent`}>
          {projectType.status}
        </SpkBadge>
      </td>
      <td>{projectType.createdDate}</td>
    </Fragment>
  )

  return (
    <MasterPageTemplate
      title="Project Types"
      breadcrumbs={['Masters', 'Property & Project', 'Project Types']}
      searchFields={[
        { placeholder: 'Type Name', width: '200px' },
        { placeholder: 'Status', width: '150px' }
      ]}
      tableHeaders={[
        { title: 'Type Name', sortKey: 'typeName' },
        { title: 'Description', sortKey: 'description' },
        { title: 'Status', sortKey: 'status' },
        { title: 'Created Date', sortKey: 'createdDate' }
      ]}
      data={projectTypesData}
      renderRow={renderRow}
      formFields={[
        { name: 'typeName', label: 'Type Name', type: 'text' },
        { name: 'description', label: 'Description', type: 'textarea' },
        { name: 'status', label: 'Status', type: 'select', options: ['Active', 'Inactive'] }
      ]}
      onAdd={handleAdd}
      onEdit={handleEdit}
      onDelete={handleDelete}
    />
  )
}

export default ProjectTypes