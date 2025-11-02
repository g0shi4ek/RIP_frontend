import { Routes, Route } from 'react-router-dom'
import { CustomNavbar } from './components/ChargingNavbar'
import { Footer } from './components/ChargingFooter'
import { HomePage } from './pages/ChargingHomePage'
import { TariffsPage } from './pages/TariffsPage'
import { TariffDetailsPage } from './pages/TariffDetailsPage'
import { ROUTES } from './Routes'
import { FC, useEffect } from 'react'

const App: FC = () => {
  useEffect(() => {
    if ((window as any).__TAURI__) {
      console.log('Tauri is available');
    } else {
      console.log('Running in browser mode');
    }
  }, []);

  return (
    <div className="d-flex flex-column min-vh-100">
      <CustomNavbar />
      <main className="flex-grow-1 py-4">
        <Routes>
          <Route path={ROUTES.HOME} element={<HomePage />} />
          <Route path={ROUTES.TARIFFS} element={<TariffsPage />} />
          <Route path={ROUTES.TARIFF_DETAILS} element={<TariffDetailsPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App