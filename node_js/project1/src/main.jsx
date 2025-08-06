import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import EventDemo from './eventDemo.jsx'
import Counter from './counter.jsx'
import Sum from './sum.jsx'
import Counter2 from './sum.jsx'
// import hooks from './hooks.jsx'
import Hooks from './hooks.jsx'
import SumDemo2 from './sumd.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SumDemo2 />
  </StrictMode>,
)
