import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { EditProvider } from './context/EditProvider.jsx'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <EditProvider>
      <App />
    </EditProvider>
  </StrictMode>,
)
