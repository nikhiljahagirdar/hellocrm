'use client'
import { Fragment } from 'react'
import MasterPageTemplate from '@/shared/@spk-reusable-components/reusable-pages/master-page-template'
import SpkBadge from '@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-badge'

const PlanFeatures = () => {
  const data = [
    { id: 1, planName: 'Basic Plan', featureName: 'Lead Management', description: 'Basic lead tracking and management', isIncluded: true, limit: '100 leads', status: 'Active', createdDate: '2024-01-15' },
    { id: 2, planName: 'Standard Plan', featureName: 'Property Listings', description: 'Create and manage property listings', isIncluded: true, limit: '500 properties', status: 'Active', createdDate: '2024-01-14' },
    { id: 3, planName: 'Premium Plan', featureName: 'Advanced Analytics', description: 'Detailed reports and analytics', isIncluded: true, limit: 'Unlimited', status: 'Active', createdDate: '2024-01-13' },
    { id: 4, planName: 'Basic Plan', featureName: 'Email Marketing', description: 'Email campaign management', isIncluded: false, limit: 'Not Available', status: 'Inactive', createdDate: '2024-01-12' },
    { id: 5, planName: 'Enterprise Plan', featureName: 'API Access', description: 'Full API access for integrations', isIncluded: true, limit: 'Unlimited', status: 'Active', createdDate: '2024-01-11' }
  ]

  const renderRow = (item: any) => (
    <Fragment>
      <td><SpkBadge variant="" Customclass={`badge bg-${item.planName.includes('Basic') ? 'secondary' : item.planName.includes('Standard') ? 'primary' : item.planName.includes('Premium') ? 'warning' : 'success'}-transparent`}>{item.planName}</SpkBadge></td>
      <td className="fw-semibold">{item.featureName}</td>
      <td>{item.description}</td>
      <td><SpkBadge variant="" Customclass={`badge bg-${item.isIncluded ? 'success' : 'danger'}-transparent`}>{item.isIncluded ? 'Yes' : 'No'}</SpkBadge></td>
      <td className="text-info fw-semibold">{item.limit}</td>
      <td><SpkBadge variant="" Customclass={`badge bg-${item.status === 'Active' ? 'success' : 'danger'}-transparent`}>{item.status}</SpkBadge></td>
      <td>{item.createdDate}</td>
    </Fragment>
  )

  return (
    <MasterPageTemplate
      title="Plan Features Master"
      breadcrumbs={['Masters', 'System & Credits', 'Plan Features Master']}
      searchFields={[{ placeholder: 'Plan Name', width: '180px' }, { placeholder: 'Feature Name', width: '200px' }]}
      tableHeaders={[
        { title: 'Plan Name', sortKey: 'planName' },
        { title: 'Feature Name', sortKey: 'featureName' },
        { title: 'Description', sortKey: 'description' },
        { title: 'Included', sortKey: 'isIncluded' },
        { title: 'Limit', sortKey: 'limit' },
        { title: 'Status', sortKey: 'status' },
        { title: 'Created Date', sortKey: 'createdDate' }
      ]}
      data={data}
      renderRow={renderRow}
      formFields={[
        { name: 'planName', label: 'Plan Name', type: 'select', options: ['Basic Plan', 'Standard Plan', 'Premium Plan', 'Enterprise Plan'] },
        { name: 'featureName', label: 'Feature Name', type: 'text' },
        { name: 'description', label: 'Description', type: 'textarea' },
        { name: 'isIncluded', label: 'Included', type: 'select', options: ['true', 'false'] },
        { name: 'limit', label: 'Limit', type: 'text' },
        { name: 'status', label: 'Status', type: 'select', options: ['Active', 'Inactive'] }
      ]}
      onAdd={(data) => console.log('Add:', data)}
      onEdit={(id, data) => console.log('Edit:', id, data)}
      onDelete={(id) => console.log('Delete:', id)}
    />
  )
}

export default PlanFeatures