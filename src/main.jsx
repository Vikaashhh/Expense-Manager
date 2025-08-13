import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { MainContextApi } from './conext/MainContextAPI'

createRoot(document.getElementById('root')).render(
  <MainContextApi>
    <App />
  </MainContextApi>,
)
