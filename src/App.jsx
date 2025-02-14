import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Testimonials from './components/Testimonials'
import WhyChoose from './components/WhyChoose'

import ContactUs from './pages/ContactUs'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <WhyChoose/>
      <Testimonials/>
      <ContactUs/>
    </>
  )
}

export default App
