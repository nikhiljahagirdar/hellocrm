'use client'
import { Fragment } from 'react'
import MasterPageTemplate from '@/shared/@spk-reusable-components/reusable-pages/master-page-template'
import SpkBadge from '@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-badge'

const ProjectAuthorities = () => {
  const data = [
    { id: 1, authorityName: 'RERA', description: 'Real Estate Regulatory Authority', contact: '+91-9876543210', status: 'Active', createdDate: '2024-01-15' },
    { id: 2, authorityName: 'Municipal Corporation', description: 'Local municipal authority', contact: '+91-9876543211', status: 'Active', createdDate: '2024-01-14' },
    { id: 3, authorityName: 'Fire Department', description: 'Fire safety authority', contact: '+91-9876543212', status: 'Active', createdDate: '2024-01-13' },
    { id: 4, authorityName: 'Pollution Board', description: 'Environmental authority', contact: '+91-9876543213', status: 'Active', createdDate: '2024-01-12' },
    { id: 5, authorityName: 'Water Board', description: 'Water supply authority', contact: '+91-9876543214', status: 'Inactive', createdDate: '2024-01-11' }
  ]

  const renderRow = (item: any) => (
    <Fragment>
      <td className="fw-semibold">{item.authorityName}</td>
      <td>{item.description}</td>
      <td>{item.contact}</td>
      <td><SpkBadge variant="" Customclass={`badge bg-${item.status === 'Active' ? 'success' : 'danger'}-transparent`}>{item.status}</SpkBadge></td>
      <td>{item.createdDate}</td>
    </Fragment>
  )

  return (
    <MasterPageTemplate
      title="Project Authorities"
      breadcrumbs={['Masters', 'Property & Project', 'Project Authorities']}
      searchFields={[{ placeholder: 'Authority Name', width: '200px' }, { placeholder: 'Status', width: '150px' }]}
      tableHeaders={[
        { title: 'Authority Name', sortKey: 'authorityName' },
        { title: 'Description', sortKey: 'description' },
        { title: 'Contact', sortKey: 'contact' },
        { title: 'Status', sortKey: 'status' },
        { title: 'Created Date', sortKey: 'createdDate' }
      ]}
      data={data}
      renderRow={renderRow}
      formFields={[
        { name: 'authorityName', label: 'Authority Name', type: 'text' },
        { name: 'description', label: 'Description', type: 'textarea' },
        { name: 'contact', label: 'Contact', type: 'text' },
        { name: 'status', label: 'Status', type: 'select', options: ['Active', 'Inactive'] }
      ]}
      onAdd={(data) => console.log('Add:', data)}
      onEdit={(id, data) => console.log('Edit:', id, data)}
      onDelete={(id) => console.log('Delete:', id)}
    />
  )
}

export default ProjectAuthorities