import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BodyCalc } from './components/BodyCalc/BodyCalc.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BodyCalc/>
  </StrictMode>,
)
