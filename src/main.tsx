import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BasicState } from 'BasicState'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BasicState />
  </StrictMode>,
)
