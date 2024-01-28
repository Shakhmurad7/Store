import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './style.scss'
import { BrowserRouter } from 'react-router-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import RootRedux from './layout/redux/redux.tsx'


const store = createStore(RootRedux)

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </React.StrictMode>,
    </Provider>
)


