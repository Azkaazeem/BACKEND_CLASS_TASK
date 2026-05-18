import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom' // 1. Ye import add karein

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* 2. App ko BrowserRouter ke andar wrap karein */}
    <BrowserRouter> 
      <App />
    </BrowserRouter>
  </StrictMode>,
)