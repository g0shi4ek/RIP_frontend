export const ROUTES = {
    HOME: "/",
    TARIFFS: "/tariffs",
    TARIFF_DETAILS: "/tariff/:id",
}
  
export type RouteKeyType = keyof typeof ROUTES;
  
export const ROUTE_LABELS: {[key in RouteKeyType]: string} = {
    HOME: "Главная",
    TARIFFS: "Тарифы",
    TARIFF_DETAILS: "Детали тарифа",
};