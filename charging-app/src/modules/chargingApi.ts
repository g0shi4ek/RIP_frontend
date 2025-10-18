import { MOCK_TARIFFS } from "./mock"

export interface Tariff {
    id: number
    nameof_tariff: string
    description: string
    image_url?: string
    price_per_hour: number
    power: number
}

export interface TariffFilters {
    name?: string
}

const API_BASE_URL = '/api'

export const getTariffs = async (filters: TariffFilters = {}): Promise<Tariff[]> => {
    try {
        const queryParams = new URLSearchParams()
        if (filters.name) queryParams.append('tariffName', filters.name)

        const response = await fetch(`${API_BASE_URL}/tariffs?${queryParams}`)
        
        if (!response.ok) {
        throw new Error('Network response was not ok')
        }
        return await response.json()
    } catch (error) {
        console.warn('API request failed, using mock data:', error)
        return getMockTariffs(filters)
    }
}

export const getTariffById = async (id: number): Promise<Tariff> => {
    try {
        const response = await fetch(`${API_BASE_URL}/tariffs/${id}`)
        
        if (!response.ok) {
            throw new Error('Network response was not ok')
        }
        
        return await response.json()
    } catch (error) {
        console.warn('API request failed, using mock data:', error)
        const mockTariffs = getMockTariffs()
        const tariff = mockTariffs.find(t => t.id === id)
        if (!tariff) throw new Error('Tariff not found')
        return tariff
    }
}

const getMockTariffs = (filters: TariffFilters = {}): Tariff[] => {
    let filteredTariffs = MOCK_TARIFFS

    if (filters.name) {
        filteredTariffs = filteredTariffs.filter(tariff =>
        tariff.nameof_tariff.toLowerCase().includes(filters.name!.toLowerCase())
        )
    }
    return filteredTariffs
}