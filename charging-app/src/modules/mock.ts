import type { Tariff } from './chargingApi'

export const MOCK_TARIFFS: Tariff[] = 
    [
        {
            "id": 1,
            "nameof_tariff": "Быстрая зарядка DC (будни)",
            "description": "Зарядка постоянным током 50-150 кВт",
            "price_per_hour": 12,
            "power": 150
        },
        {
            "id": 2,
            "nameof_tariff": "Быстрая зарядка DC (выходные)",
            "description": "Зарядка постоянным током 50-150 кВт",
            "price_per_hour": 15,
            "power": 150
        },
        {
            "id": 3,
            "nameof_tariff": "AC зарядка Level 2 (будни)",
            "description": "Зарядка переменным током 22 кВт",
            "price_per_hour": 8,
            "power": 22
        },
        {
            "id": 4,
            "nameof_tariff": "AC зарядка Level 2 (выходные)",
            "description": "Зарядка переменным током 22 кВт",
            "image_url": "http://127.0.0.1:9000/charging-images/image.png",
            "price_per_hour": 10,
            "power": 22
        },
    ]