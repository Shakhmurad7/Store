import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './style.scss'
import { BrowserRouter } from 'react-router-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reduxRoot from './assets/layout/readax.tsx'

const store = createStore(reduxRoot)

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </React.StrictMode>,
    </Provider>
)


