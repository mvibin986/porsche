import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './components/login'
import Home from './components/home'
import Porsche911 from './model/porsche911'
import Porsche718 from './model/porsche718'
import GTR from './model/GTR'
import Taycan from './model/taycan'
import Turbogt from './model/turbogt'
import Turbos from './model/turbos'
export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/911" element={<Porsche911 />} />
          <Route path="/718" element={<Porsche718 />} />
          <Route path="/GT3" element={<GTR />} />
          <Route path="/taycan" element={<Taycan />} />
          <Route path="/GT" element={<Turbogt />} />
          <Route path="/S" element={<Turbos />} />
        </Routes>
      </Router>
    </div>
  )
}
