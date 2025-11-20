// Simple API helper using fetch
const BASE = import.meta.env.VITE_BACKEND_URL || (window.location.origin.replace('3000','8000'));

async function request(path, options = {}) {
  const resp = await fetch(`${BASE}${path}`, {
    headers: { 'Content-Type': 'application/json', ...(options.headers || {}) },
    ...options,
  });
  if (!resp.ok) {
    const text = await resp.text();
    throw new Error(text || `Request failed: ${resp.status}`);
  }
  return resp.json();
}

export const api = {
  stats: () => request('/api/stats'),
  cars: (params = {}) => {
    const qs = new URLSearchParams(params).toString();
    return request(`/api/cars${qs ? `?${qs}` : ''}`);
  },
  parts: (params = {}) => {
    const qs = new URLSearchParams(params).toString();
    return request(`/api/parts${qs ? `?${qs}` : ''}`);
  },
  register: (data) => request('/api/auth/register', { method: 'POST', body: JSON.stringify(data) }),
  login: (data) => request('/api/auth/login', { method: 'POST', body: JSON.stringify(data) }),
  inquiry: (data) => request('/api/inquiries', { method: 'POST', body: JSON.stringify(data) }),
  sell: (data) => request('/api/sell', { method: 'POST', body: JSON.stringify(data) }),
  wishlistAdd: (data) => request('/api/wishlist', { method: 'POST', body: JSON.stringify(data) }),
  wishlistGet: (user_id) => request(`/api/wishlist?user_id=${encodeURIComponent(user_id)}`),
};

export default api;
