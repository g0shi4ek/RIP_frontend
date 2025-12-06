const target_tauri = !!(window as any).__TAURI__;

export const api_proxy_addr = "http://localhost:8080"
export const img_proxy_addr = "http://localhost:9000"

export const dest_api = target_tauri ? `${api_proxy_addr}/api` : "/api-proxy"
export const dest_img = target_tauri ? img_proxy_addr : "/img-proxy"

console.log('=== CONFIG DEBUG ===');
console.log('Tauri mode:', target_tauri);
console.log('API destination:', dest_api);