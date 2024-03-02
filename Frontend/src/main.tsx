//import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { GlobalProvider } from './contexts/useGlobalContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <GlobalProvider>
    {/* <APIProvider> */}
      <App />
    {/* </APIProvider> */}


  </GlobalProvider>
)
