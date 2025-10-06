'use client'
import { Fragment } from 'react'
import MasterPageTemplate from '@/shared/@spk-reusable-components/reusable-pages/master-page-template'
import SpkBadge from '@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-badge'

const DbBackups = () => {
  const data = [
    { id: 1, backupName: 'Daily_Backup_2024-01-15', fileName: 'db_backup_20240115.sql', size: '125MB', type: 'Automatic', status: 'Completed', createdDate: '2024-01-15' },
    { id: 2, backupName: 'Weekly_Backup_2024-01-14', fileName: 'db_backup_20240114.sql', size: '130MB', type: 'Scheduled', status: 'Completed', createdDate: '2024-01-14' },
    { id: 3, backupName: 'Manual_Backup_2024-01-13', fileName: 'db_backup_20240113.sql', size: '128MB', type: 'Manual', status: 'Completed', createdDate: '2024-01-13' },
    { id: 4, backupName: 'Daily_Backup_2024-01-12', fileName: 'db_backup_20240112.sql', size: '122MB', type: 'Automatic', status: 'Failed', createdDate: '2024-01-12' },
    { id: 5, backupName: 'Monthly_Backup_2024-01-01', fileName: 'db_backup_20240101.sql', size: '135MB', type: 'Scheduled', status: 'Completed', createdDate: '2024-01-01' }
  ]

  const renderRow = (item: any) => (
    <Fragment>
      <td className="fw-semibold">{item.backupName}</td>
      <td>{item.fileName}</td>
      <td><SpkBadge variant="" Customclass="badge bg-info-transparent">{item.size}</SpkBadge></td>
      <td><SpkBadge variant="" Customclass={`badge bg-${item.type === 'Manual' ? 'warning' : item.type === 'Automatic' ? 'primary' : 'secondary'}-transparent`}>{item.type}</SpkBadge></td>
      <td><SpkBadge variant="" Customclass={`badge bg-${item.status === 'Completed' ? 'success' : 'danger'}-transparent`}>{item.status}</SpkBadge></td>
      <td>{item.createdDate}</td>
    </Fragment>
  )

  return (
    <MasterPageTemplate
      title="DB Backups"
      breadcrumbs={['Masters', 'System & Credits', 'DB Backups']}
      searchFields={[{ placeholder: 'Backup Name', width: '200px' }, { placeholder: 'Type', width: '150px' }]}
      tableHeaders={[
        { title: 'Backup Name', sortKey: 'backupName' },
        { title: 'File Name', sortKey: 'fileName' },
        { title: 'Size', sortKey: 'size' },
        { title: 'Type', sortKey: 'type' },
        { title: 'Status', sortKey: 'status' },
        { title: 'Created Date', sortKey: 'createdDate' }
      ]}
      data={data}
      renderRow={renderRow}
      formFields={[
        { name: 'backupName', label: 'Backup Name', type: 'text' },
        { name: 'fileName', label: 'File Name', type: 'text' },
        { name: 'type', label: 'Type', type: 'select', options: ['Manual', 'Automatic', 'Scheduled'] },
        { name: 'status', label: 'Status', type: 'select', options: ['Completed', 'Failed', 'In Progress'] }
      ]}
      onAdd={(data) => console.log('Add:', data)}
      onEdit={(id, data) => console.log('Edit:', id, data)}
      onDelete={(id) => console.log('Delete:', id)}
    />
  )
}

export default DbBackups