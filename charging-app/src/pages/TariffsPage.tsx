import type { FC } from 'react'
import { useState, useEffect } from 'react'
import { BreadCrumbs } from '../components/BreadCrumbs'
import { InputField } from '../components/InputField'
import { ServiceCard } from '../components/TariffCard'
import { FloatingCart } from '../components/ChargingFloatingCart'
import { getTariffs, Tariff, TariffFilters } from '../modules/chargingApi'
import { ROUTE_LABELS } from '../Routes'
import './TariffsPage.css'

export const TariffsPage: FC = () => {
  const [tariffs, setTariffs] = useState<Tariff[]>([])
  const [loading, setLoading] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  
  const [filters, setFilters] = useState<TariffFilters>({
    name: '',
  })

  useEffect(() => {
    loadTariffs()
  }, [])

  const loadTariffs = async () => {
    setLoading(true)
    try {
      const data = await getTariffs(filters)
      setTariffs(data)
    } catch (err) {
      console.error('Ошибка при загрузке тарифов:', err)
    } finally {
      setLoading(false)
    }
  }

  const handleSearch = () => {
    setFilters(prev => ({ ...prev, name: searchValue }))
    loadTariffs()
  }

  return (
    <div className={`container ${loading && 'containerLoading'}`}>
      <div className="breadcrumbs-container">
        <BreadCrumbs crumbs={[{ label: ROUTE_LABELS.TARIFFS }]} />
      </div>

      <div className="search-section">
        <InputField
          value={searchValue}
          onChange={setSearchValue}
          onSubmit={handleSearch}
          placeholder="Поиск по названию тарифа..."
          buttonTitle="Найти"
        />
      </div>

      {loading && <div className="loadingBg">Загрузка...</div>}

      <div className="service-section">
        {tariffs.length === 0 ? (
          <div className="text-center">
            <h1>К сожалению, пока ничего не найдено :(</h1>
          </div>
        ) : (
          tariffs.map(tariff => (
            <ServiceCard
              key={tariff.id}
              tariff={tariff}
            />
          ))
        )}
      </div>

      <FloatingCart itemCount={3} />
    </div>
  )
}