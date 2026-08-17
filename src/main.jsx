import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import './index.css'
import App from './App.jsx'

// Cloudflare Web Analytics
// Your browser can disable its own analytics tracking by setting:
// localStorage.setItem('gearnest_disable_analytics', 'true')

const analyticsDisabled =
  localStorage.getItem('gearnest_disable_analytics') === 'true'

if (!analyticsDisabled) {
  const script = document.createElement('script')

  script.type = 'module'
  script.src = 'https://static.cloudflareinsights.com/beacon.min.js'
  script.setAttribute(
    'data-cf-beacon',
    JSON.stringify({
      token: '72e24dc35cee420bbd8d3fce9f466283',
    }),
  )

  document.head.appendChild(script)
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>,
)
