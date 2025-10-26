import { FC } from 'react'
import { Link } from 'react-router-dom'
import { Breadcrumb } from 'react-bootstrap'
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
    <Breadcrumb className="breadcrumb-custom">
      <Breadcrumb.Item linkAs={Link} linkProps={{ to: ROUTES.HOME }}>
        Главная
      </Breadcrumb.Item>
      {crumbs.map((crumb, index) => (
        <Breadcrumb.Item
          key={index}
          linkAs={crumb.path ? Link : undefined}
          linkProps={crumb.path ? { to: crumb.path } : undefined}
          active={!crumb.path}
        >
          {crumb.label}
        </Breadcrumb.Item>
      ))}
    </Breadcrumb>
  )
}