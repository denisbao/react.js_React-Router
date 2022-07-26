import ReactDOM from 'react-dom/client'

// Activates the Router funcionality
import { BrowserRouter } from 'react-router-dom'

import './index.css'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
