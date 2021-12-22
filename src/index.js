import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'
import { Provider } from 'react-redux'
import { AuthProvider } from './utils/useAuth'
import store from './utils/store'

ReactDOM.render(
  <Provider store={store}>
    <AuthProvider>
      <App />
    </AuthProvider>
    </Provider>,
  document.getElementById('root')
);
