import React from 'react'
import Hero from './components/Hero'
import Features from './components/Features'
import Info from './components/Info'
import Compatibility from './components/Compatibility'
import Video from './components/Video'
import Adaptable from './components/Adaptable'
import Footer from './components/Footer'
import Aos from 'aos';
import 'aos/dist/aos.css';


function App() {

  Aos.init({
    once: true,
    duration: 1800,
    offset: 0,
  })
  return (

    <div className="App">

      <Hero />
      <Features />
      <Info />
      <Compatibility />
      <Video />
      <Adaptable />
      <Footer />

    </div>
  )
}

export default App
