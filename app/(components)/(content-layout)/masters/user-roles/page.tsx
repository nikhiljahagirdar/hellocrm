'use client'
import { Fragment } from 'react'
import MasterPageTemplate from '@/shared/@spk-reusable-components/reusable-pages/master-page-template'
import SpkBadge from '@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-badge'

const UserRoles = () => {
  const userRolesData = [
    { id: 1, roleName: 'Admin', description: 'Full system access', permissions: 'All', status: 'Active', createdDate: '2024-01-15' },
    { id: 2, roleName: 'Manager', description: 'Management access', permissions: 'Read/Write', status: 'Active', createdDate: '2024-01-14' },
    { id: 3, roleName: 'Sales Executive', description: 'Sales operations', permissions: 'Limited', status: 'Active', createdDate: '2024-01-13' },
    { id: 4, roleName: 'Support', description: 'Customer support', permissions: 'Read Only', status: 'Active', createdDate: '2024-01-12' },
    { id: 5, roleName: 'Guest', description: 'Limited access', permissions: 'View Only', status: 'Inactive', createdDate: '2024-01-11' }
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

  const renderRow = (userRole: any) => (
    <Fragment>
      <td className="fw-semibold">{userRole.roleName}</td>
      <td>{userRole.description}</td>
      <td>
        <SpkBadge variant="" Customclass="badge bg-info-transparent">
          {userRole.permissions}
        </SpkBadge>
      </td>
      <td>
        <SpkBadge variant="" Customclass={`badge bg-${userRole.status === 'Active' ? 'success' : 'danger'}-transparent`}>
          {userRole.status}
        </SpkBadge>
      </td>
      <td>{userRole.createdDate}</td>
    </Fragment>
  )

  return (
    <MasterPageTemplate
      title="User Roles"
      breadcrumbs={['Masters', 'Media & User', 'User Roles']}
      searchFields={[
        { placeholder: 'Role Name', width: '200px' },
        { placeholder: 'Status', width: '150px' }
      ]}
      tableHeaders={[
        { title: 'Role Name', sortKey: 'roleName' },
        { title: 'Description', sortKey: 'description' },
        { title: 'Permissions', sortKey: 'permissions' },
        { title: 'Status', sortKey: 'status' },
        { title: 'Created Date', sortKey: 'createdDate' }
      ]}
      data={userRolesData}
      renderRow={renderRow}
      formFields={[
        { name: 'roleName', label: 'Role Name', type: 'text' },
        { name: 'description', label: 'Description', type: 'textarea' },
        { name: 'permissions', label: 'Permissions', type: 'select', options: ['All', 'Read/Write', 'Read Only', 'Limited', 'View Only'] },
        { name: 'status', label: 'Status', type: 'select', options: ['Active', 'Inactive'] }
      ]}
      onAdd={handleAdd}
      onEdit={handleEdit}
      onDelete={handleDelete}
    />
  )
}

export default UserRoles