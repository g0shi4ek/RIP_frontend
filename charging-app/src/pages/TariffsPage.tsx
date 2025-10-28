import type { FC } from 'react'
import { useState, useEffect } from 'react'
import { Container, Row, Col, Spinner, Alert } from 'react-bootstrap'
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
  }, [filters]) // Загружаем тарифы при изменении фильтров

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
            value={searchValue}
            onChange={setSearchValue}
            onSubmit={handleSearch}
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