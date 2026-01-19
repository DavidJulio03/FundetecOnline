import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/global.css'
import Home from './pages/Home/Home'
import { BrowserRouter } from 'react-router-dom'
import App from './router/App'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App></App>
  </StrictMode>,
)
