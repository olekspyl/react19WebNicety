import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import EventTest from 'EventTest'
import { UseMergedStateExample } from 'customHooks/useMergeStateExample'
// import AlphabetRender from 'alphabet'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <UseMergedStateExample />
  </StrictMode>,
)
