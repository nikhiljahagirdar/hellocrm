'use client'
import { Fragment } from 'react'
import MasterPageTemplate from '@/shared/@spk-reusable-components/reusable-pages/master-page-template'
import SpkBadge from '@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-badge'

const Settings = () => {
  const data = [
    { id: 1, settingKey: 'app_name', settingValue: 'HelloCRM', description: 'Application name', category: 'General', status: 'Active', createdDate: '2024-01-15' },
    { id: 2, settingKey: 'max_file_size', settingValue: '10MB', description: 'Maximum file upload size', category: 'System', status: 'Active', createdDate: '2024-01-14' },
    { id: 3, settingKey: 'email_notifications', settingValue: 'true', description: 'Enable email notifications', category: 'Notifications', status: 'Active', createdDate: '2024-01-13' },
    { id: 4, settingKey: 'session_timeout', settingValue: '30', description: 'Session timeout in minutes', category: 'Security', status: 'Active', createdDate: '2024-01-12' },
    { id: 5, settingKey: 'backup_frequency', settingValue: 'daily', description: 'Database backup frequency', category: 'System', status: 'Inactive', createdDate: '2024-01-11' }
  ]

  const renderRow = (item: any) => (
    <Fragment>
      <td className="fw-semibold">{item.settingKey}</td>
      <td>{item.settingValue}</td>
      <td>{item.description}</td>
      <td><SpkBadge variant="" Customclass="badge bg-primary-transparent">{item.category}</SpkBadge></td>
      <td><SpkBadge variant="" Customclass={`badge bg-${item.status === 'Active' ? 'success' : 'danger'}-transparent`}>{item.status}</SpkBadge></td>
      <td>{item.createdDate}</td>
    </Fragment>
  )

  return (
    <MasterPageTemplate
      title="Settings"
      breadcrumbs={['Masters', 'System & Credits', 'Settings']}
      searchFields={[{ placeholder: 'Setting Key', width: '200px' }, { placeholder: 'Category', width: '150px' }]}
      tableHeaders={[
        { title: 'Setting Key', sortKey: 'settingKey' },
        { title: 'Value', sortKey: 'settingValue' },
        { title: 'Description', sortKey: 'description' },
        { title: 'Category', sortKey: 'category' },
        { title: 'Status', sortKey: 'status' },
        { title: 'Created Date', sortKey: 'createdDate' }
      ]}
      data={data}
      renderRow={renderRow}
      formFields={[
        { name: 'settingKey', label: 'Setting Key', type: 'text' },
        { name: 'settingValue', label: 'Setting Value', type: 'text' },
        { name: 'description', label: 'Description', type: 'textarea' },
        { name: 'category', label: 'Category', type: 'select', options: ['General', 'System', 'Notifications', 'Security'] },
        { name: 'status', label: 'Status', type: 'select', options: ['Active', 'Inactive'] }
      ]}
      onAdd={(data) => console.log('Add:', data)}
      onEdit={(id, data) => console.log('Edit:', id, data)}
      onDelete={(id) => console.log('Delete:', id)}
    />
  )
}

export default Settings