import About from "./section/About"
import Experiences from "./section/Experiences"

import Hero from "./section/Hero"
import Navbar from "./section/Navbar"
import Projects from "./section/Projects"



const App = () => {
  return (
    <div className='container mx-auto max-w-7xl'>
      <Navbar/>
      <Hero/>
      <About/>
      <Projects/>
      <Experiences/>
      
      
      <section className="min-h-screen"></section>
      <section className="min-h-screen"></section>
      <section className="min-h-screen"></section>
      <section className="min-h-screen"></section>
      <section className="min-h-screen"></section>
      <section className="min-h-screen"></section>
      <section className="min-h-screen"></section>
      <section className="min-h-screen"></section>
      <section className="min-h-screen"></section>
      <section className="min-h-screen"></section>
    </div>
  )
}

export default App
