import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { UserContextProvider } from './Context/UserDataContext.tsx'
import { AlertSystemProvider } from "./Components/Alert/AlertSystem";
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  /// use strict mode only if needed else everything renders 2 times
  //<StrictMode>
    <UserContextProvider>
      <AlertSystemProvider>
        <App />
      </AlertSystemProvider>
    </UserContextProvider>
  //</StrictMode>,
)
