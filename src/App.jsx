import { Route, Routes, Link } from "react-router-dom"
import { useState } from "react"
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import Events from "./components/Events"

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-orange-50 text-gray-800 font-sans flex flex-col">
      <nav className="bg-orange-500 p-4 ">
        <div className="md:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        <ul className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row md:space-x-6 space-y-2 md:space-y-0 md:justify-center text-white ${isMenuOpen ? 'mt-4' : ''}`}>
          <li>
            <Link to="/" className="hover:text-orange-900 transition-colors text-xl">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-orange-900 transition-colors text-xl">
              About
            </Link>
          </li>
          <li>
            <Link to="/events" className="hover:text-orange-900 transition-colors text-xl">
              Events
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-orange-900 transition-colors text-xl">
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <footer className="bg-orange-500 text-white p-4 text-center">
        <p>&copy; 2025 College Cultural Event. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App

