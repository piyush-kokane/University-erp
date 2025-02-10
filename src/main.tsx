import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'bootstrap/dist/css/bootstrap.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  /// use strict mode only if needed else everything renders 2 times
  //<React.StrictMode>
    <App />
  //</React.StrictMode>,
)
