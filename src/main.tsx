import { StrictMode } from 'react'
import './index.css'
import App from './App.tsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import ReactDOM from 'react-dom/client'

import Navbar from './components/navbar';

const root = ReactDOM.createRoot(document.getElementById('root')!)
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
)
