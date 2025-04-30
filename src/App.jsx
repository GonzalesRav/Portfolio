import { BrowserRouter } from "react-router-dom"

import { About, Contact, Hero,
  Navbar, Tech, StarsCanvas, ScrollComponent } from './components'

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-norepeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        {/* <Experience /> */}
        <Tech />
        {/* <Works /> */}

        <div className="relative z-0">
        <ScrollComponent />
        <Contact />
        <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
    
  )
}

export default App
