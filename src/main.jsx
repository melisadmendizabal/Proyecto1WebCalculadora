import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BodyCalc } from './components/BodyCalc/BodyCalc.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='background'>
      <div className='backCalc'>
        <BodyCalc/>
      </div>
    </div>
  </StrictMode>,
)
