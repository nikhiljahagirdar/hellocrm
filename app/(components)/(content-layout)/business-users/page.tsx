'use client'
import { Fragment } from 'react'
import MasterPageTemplate from '@/shared/@spk-reusable-components/reusable-pages/master-page-template'
import SpkBadge from '@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-badge'

const BusinessUsers = () => {
  const userData = [
    { id: 1, name: 'John Doe', email: 'john@abc.com', business: 'ABC Properties', role: 'Admin', status: 'Active', lastLogin: '2024-01-15' },
    { id: 2, name: 'Jane Smith', email: 'jane@xyz.com', business: 'XYZ Builders', role: 'Manager', status: 'Active', lastLogin: '2024-01-14' },
    { id: 3, name: 'Mike Johnson', email: 'mike@pqr.com', business: 'PQR Realty', role: 'User', status: 'Inactive', lastLogin: '2024-01-10' },
    { id: 4, name: 'Sarah Wilson', email: 'sarah@lmn.com', business: 'LMN Developers', role: 'Admin', status: 'Active', lastLogin: '2024-01-15' },
    { id: 5, name: 'David Brown', email: 'david@rst.com', business: 'RST Holdings', role: 'Manager', status: 'Active', lastLogin: '2024-01-13' }
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

  const renderRow = (user: any) => (
    <Fragment>
      <td>
        <div>
          <div className="fw-semibold">{user.name}</div>
          <div className="text-muted fs-12">{user.email}</div>
        </div>
      </td>
      <td>{user.business}</td>
      <td>
        <SpkBadge variant="" Customclass={`badge bg-${user.role === 'Admin' ? 'primary' : user.role === 'Manager' ? 'info' : 'secondary'}-transparent`}>
          {user.role}
        </SpkBadge>
      </td>
      <td>
        <SpkBadge variant="" Customclass={`badge bg-${user.status === 'Active' ? 'success' : 'danger'}-transparent`}>
          {user.status}
        </SpkBadge>
      </td>
      <td>{user.lastLogin}</td>
    </Fragment>
  )

  return (
    <MasterPageTemplate
      title="Business Users"
      breadcrumbs={['Businesses', 'Business Users']}
      searchFields={[
        { placeholder: 'User Name', width: '200px' },
        { placeholder: 'Business', width: '200px' },
        { placeholder: 'Role', width: '150px' }
      ]}
      tableHeaders={[
        { title: 'User Name', sortKey: 'name' },
        { title: 'Business', sortKey: 'business' },
        { title: 'Role', sortKey: 'role' },
        { title: 'Status', sortKey: 'status' },
        { title: 'Last Login', sortKey: 'lastLogin' }
      ]}
      data={userData}
      renderRow={renderRow}
      formFields={[
        { name: 'name', label: 'Full Name', type: 'text' },
        { name: 'email', label: 'Email', type: 'email' },
        { name: 'business', label: 'Business', type: 'select', options: ['ABC Properties', 'XYZ Builders', 'PQR Realty', 'LMN Developers', 'RST Holdings'] },
        { name: 'role', label: 'Role', type: 'select', options: ['Admin', 'Manager', 'User'] },
        { name: 'status', label: 'Status', type: 'select', options: ['Active', 'Inactive'] }
      ]}
      onAdd={handleAdd}
      onEdit={handleEdit}
      onDelete={handleDelete}
    />
  )
}

export default BusinessUsers