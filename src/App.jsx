import { Route, Routes, Link, useLocation } from "react-router-dom"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import Events from "./components/Events"
import './App.css';
import { Analytics } from '@vercel/analytics/react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  // Using the color scheme from Home page
  const colors = {
    primary: "#4f46e5",       // indigo-600
    primaryDark: "#4338ca",   // indigo-700
    secondary: "#06b6d4",     // cyan-500
    secondaryDark: "#0891b2", // cyan-600
    accent: "#7c3aed",        // purple-600
    textDark: "#1e293b",      // slate-800
    textMedium: "#475569",    // slate-600
    textLight: "#f8fafc",     // slate-50
    background: "#f8fafc",    // slate-50
    border: "#e2e8f0"         // slate-200
  }

  const navLinks = [
    { path: "/", name: "Home" },
    { path: "/about", name: "About" },
    { path: "/events", name: "Events" },
    { path: "/contact", name: "Contact" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 relative">
      {/* Background texture - made more subtle to match Home page */}
      <div className="fixed inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/concrete-wall.png')] z-0" />

      {/* Navigation */}
      <motion.nav
        className="fixed w-full top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-slate-200"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            <div className="md:hidden">
              <motion.button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-lg text-slate-800 hover:text-indigo-600 transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                </svg>
              </motion.button>
            </div>

            {/* Desktop navigation */}
            <div className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-4 py-2 text-lg font-medium ${location.pathname === link.path
                    ? "text-indigo-600"
                    : "text-slate-800 hover:text-indigo-600"
                    } transition-colors`}
                >
                  {link.name}
                  {location.pathname === link.path && (
                    <motion.div
                      className="absolute bottom-0 left-0 w-full h-[2px] bg-indigo-600"
                      layoutId="navUnderline"
                    />
                  )}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden bg-white/90 backdrop-blur-lg"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-3 py-2 rounded-md text-lg font-medium ${location.pathname === link.path
                      ? "bg-indigo-600 text-white"
                      : "text-slate-800 hover:bg-indigo-600/10"
                      } transition-colors`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Main content */}
      <main className="pt-20 pb-16 min-h-screen relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/events" element={<Events />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <motion.footer
        className="fixed bottom-0 w-full backdrop-blur-xl bg-white/80 border-t border-slate-200 z-50"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-slate-800 font-medium">
            © {new Date().getFullYear()} Sri Madhwa Yuvaka Sangha
          </p>
        </div>
      </motion.footer>
      <Analytics />
    </div>
  )
}

export default App