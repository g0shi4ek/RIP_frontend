import type { FC } from 'react'
import { useState, useEffect } from 'react'
import { Container, Row, Col, Spinner, Alert } from 'react-bootstrap'
import { BreadCrumbs } from '../components/BreadCrumbs'
import { InputField } from '../components/InputField'
import { ServiceCard } from '../components/TariffCard'
import { FloatingCart } from '../components/ChargingFloatingCart'
import { getTariffs, Tariff } from '../modules/chargingApi'
import { ROUTE_LABELS } from '../Routes'
import { useSearchInput, useAppliedSearch } from '../slices/filterTariffSlices'
import { useFiltersData } from '../hooks/useFiltersData'
import './TariffsPage.css'

export const TariffsPage: FC = () => {
  const [tariffs, setTariffs] = useState<Tariff[]>([])
  const [loading, setLoading] = useState(false)
  
  // Используем разделенные состояния
  const { setSearchInput, applySearch } = useFiltersData()
  const searchInput = useSearchInput() // то, что вводит пользователь
  const appliedSearch = useAppliedSearch() // то, что применено как фильтр

  // Загружаем тарифы только при изменении примененного фильтра
  useEffect(() => {
    loadTariffs()
  }, [appliedSearch]) // Только appliedSearch триггерит загрузку

  const loadTariffs = async () => {
    setLoading(true)
    try {
      // Создаем фильтры на основе appliedSearch (а не searchInput)
      const filters = appliedSearch ? { name: appliedSearch } : {}
      const data = await getTariffs(filters)
      setTariffs(data)
    } catch (err) {
      console.error('Ошибка при загрузке тарифов:', err)
    } finally {
      setLoading(false)
    }
  }

  const handleSearch = () => {
    applySearch() // применяем фильтр только при нажатии кнопки
  }

  return (
    <Container fluid className={`custom-container ${loading ? 'containerLoading' : ''}`}>
      <Row className="breadcrumbs-container justify-content-center">
        <Col xs={12} lg={10} xl={8}>
          <BreadCrumbs crumbs={[{ label: ROUTE_LABELS.TARIFFS }]} />
        </Col>
      </Row>

      <Row className="search-section justify-content-center">
        <Col xs={12} lg={8} xl={6}>
          <InputField
            value={searchInput} // показываем то, что вводит пользователь
            onChange={setSearchInput} // обновляем только поле ввода
            onSubmit={handleSearch} // применяем фильтр только при отправке
            placeholder="Поиск по названию тарифа..."
            buttonTitle="Найти"
          />
        </Col>
      </Row>

      {loading && (
        <Row className="justify-content-center">
          <Col xs="auto">
            <div className="d-flex align-items-center">
              <Spinner animation="border" variant="primary" className="me-2" />
              <span>Загрузка...</span>
            </div>
          </Col>
        </Row>
      )}

      <div className="service-section">
        {tariffs.length === 0 && !loading ? (
          <Alert variant="info" className="text-center">
            <h5>К сожалению, пока ничего не найдено :(</h5>
          </Alert>
        ) : (
          tariffs.map(tariff => (
            <ServiceCard key={tariff.id} tariff={tariff} />
          ))
        )}
      </div>

      <FloatingCart/>
    </Container>
  )
}