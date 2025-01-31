import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router, Routes,
  Route, } from "react-router-dom"
// import HowItWorks from './HowItWorks.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <React.StrictMode>
      <Routes>
        <Route element={<App />} path='/*'/>
        {/* <Route element={<HowItWorks />} path='/HowItWorks'/> */}

      </Routes>
    </React.StrictMode>
  </Router>
)
