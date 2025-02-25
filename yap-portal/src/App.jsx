import {useState} from 'react'

import {Routes, Route} from 'react-router-dom'

import './App.css'

import Home from './pages/Home'

import ContactUs from './pages/ContactUs'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact-us" element={<ContactUs />} />
    </Routes>
  )
}

export default App
