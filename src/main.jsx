import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import Home from './pages/index/index.jsx'
import App from './pages/Home/main/main.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
