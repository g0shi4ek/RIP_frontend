import { FC } from 'react'
import { Link } from 'react-router-dom'
import { Badge } from 'react-bootstrap'
import { useCartData } from '../hooks/useCartData'
import { useCartData as useCartDataSelector } from '../slices/chargingCartSlices'
import './ChargingFloatingCart.css'

export const FloatingCart: FC = () => {
  useCartData() // загружаем данные корзины
  const cartData = useCartDataSelector()
  
  const isCartActive = cartData.id !== -1
  
  if (isCartActive) {
    return (
      <Link to="/tariffs" className="floating-cart">
        <Badge bg="primary" className="cart-badge">
          {cartData.amount_of_orders > 0 ? 
            (cartData.amount_of_orders > 99 ? '99+' : cartData.amount_of_orders) : 0}
        </Badge>
        <div className="cart-icon"></div>
      </Link>
    )
  }

  // Неактивная корзина
  return (
    <div className="floating-cart cart-disabled">
      <Badge bg="secondary" className="cart-badge">
        {cartData.amount_of_orders}
      </Badge>
      <div className="cart-icon"></div>
    </div>
  )
}