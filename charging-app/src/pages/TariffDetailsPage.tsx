import type { FC } from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { BreadCrumbs } from '../components/BreadCrumbs'
import { getTariffById, Tariff } from '../modules/chargingApi'
import { ROUTES, ROUTE_LABELS } from '../Routes'
import './TariffDetailsPage.css'
import defaultImage from '../assets/image.png'

export const TariffDetailsPage: FC = () => {
  const { id } = useParams<{ id: string }>()
  const [tariff, setTariff] = useState<Tariff | null>(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (id) {
      loadTariff(parseInt(id))
    }
  }, [id])

  const loadTariff = async (tariffId: number) => {
    setLoading(true)
    try {
      const data = await getTariffById(tariffId)
      setTariff(data)
    } catch (err) {
      console.error('Ошибка при загрузке данных тарифа:', err)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="container">
        <div className="loadingBg">Загрузка...</div>
      </div>
    )
  }

  if (!tariff) {
    return (
      <div className="container">
        <div className="text-center">Тариф не найден</div>
      </div>
    )
  }

  return (
    <div className="container">
      <div className="breadcrumbs-container">
        <BreadCrumbs
          crumbs={[
            { label: ROUTE_LABELS.TARIFFS, path: ROUTES.TARIFFS },
            { label: tariff.nameof_tariff }
          ]}
        />
      </div>

      <div className="tariff-section">
        <div className="tariff-title">{tariff.nameof_tariff}</div>
        <div className="tariff-description">{tariff.description}</div>
        
        <img 
          className="tariff-image"
          src={tariff.image_url || defaultImage}
          alt={tariff.nameof_tariff}
          onError={(e) => {
            const target = e.target as HTMLImageElement
            target.src = defaultImage
          }}
        />
        
        <div className="power-display">
            <div className="power-value">Мощность {tariff.power} КВт</div>
        </div>
            
        <div className="price-section">
            <div className="price-value">{tariff.price_per_hour}  ₽/час</div>
            <div className="price-label">Цена тарифа за час</div>
        </div>
      </div>
    </div>
  )
}