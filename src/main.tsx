import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import EventTest from 'EventTest'
// import AlphabetRender from 'alphabet'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <EventTest />
  </StrictMode>,
)
