const target_tauri = !!(window as any).__TAURI__;

export const api_proxy_addr = "http://localhost:8080"
export const API_BASE_URL = target_tauri ? `${api_proxy_addr}/api` : "/api"

console.log('=== CONFIG DEBUG ===');
console.log('Tauri mode:', target_tauri);
console.log('API destination:', API_BASE_URL);