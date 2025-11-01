import { FC, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Badge } from 'react-bootstrap'
import { getCartDraft } from '../modules/chargingApi' // предполагаемый API метод
import './ChargingFloatingCart.css'

interface CartData {
  id: number
  amount_of_orders: number
}

interface FloatingCartProps {
  //пропсы для перезагрузки
  onCartUpdate?: () => void
}

export const FloatingCart: FC<FloatingCartProps> = ({ 
  onCartUpdate 
}) => {
  const [cartData, setCartData] = useState<CartData>({ id: -1, amount_of_orders: 0 })

  const loadCartData = async () => {
    try {
      const data = await getCartDraft() // GET /api/chargingApplications/draft
      setCartData(data)
    } catch (err) {
      // значения по умолчанию
      setCartData({ id: -1, amount_of_orders: 0 })
    }
  }

  useEffect(() => {
    loadCartData()
  }, [])

  //потом для добавления в заявку
  useEffect(() => {
    if (onCartUpdate) {
      loadCartData()
    }
  }, [onCartUpdate])

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