import { FC } from 'react'
import { Link } from 'react-router-dom'
import { ROUTES } from '../Routes'
import './BreadCrumbs.css'

interface Crumb {
  label: string
  path?: string
}

interface BreadCrumbsProps {
  crumbs: Crumb[]
}

export const BreadCrumbs: FC<BreadCrumbsProps> = ({ crumbs }) => {
  return (
    <ul className="breadcrumb-custom">
      <li style={{ display: 'inline' }}>
        <Link to={ROUTES.HOME}>Главная</Link>
      </li>
      {crumbs.map((crumb, index) => (
        <li key={index} style={{ display: 'inline', marginLeft: '10px' }}>
          <span style={{ margin: '0 10px', color: '#5C5E62' }}>/</span>
          {crumb.path ? (
            <Link to={crumb.path}>{crumb.label}</Link>
          ) : (
            <span style={{ color: '#171A20' }}>{crumb.label}</span>
          )}
        </li>
      ))}
    </ul>
  )
}