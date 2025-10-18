import { FC } from 'react'
import './ChargingNavbar.css'
import iconImg from '../assets/home-icon.svg'
import logoImg from '../assets/logo.svg'

export const CustomNavbar: FC = () => {
  return (
    <div className="header">
      <div className="logo">
        <img 
          src={logoImg} 
          alt="Company Logo" 
          width="100" 
          height="60" 
        />
      </div>
      <a href="/tariffs" className="icon">
        <img 
          src={iconImg}
          alt="User menu icons" 
          width="30" 
          height="30" 
        />
      </a>
    </div>
  )
}