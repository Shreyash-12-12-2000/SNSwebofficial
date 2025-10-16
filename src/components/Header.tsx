import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion, AnimatePresence } from 'framer-motion'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' },
  ]

  const isActive = (path: string) => location.pathname === path

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false)
  }, [location.pathname])

  return (
    <motion.header
      initial={{ y: -120 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 120 }}
      className="fixed top-0 w-full z-[9999]" // highest z-index
    >
      <div className="backdrop-blur-lg border-b border-[#402746] shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-[100px] relative">

            {/* Left: Logo */}
            <div className="flex flex-1 justify-center md:justify-start z-50">
              <Link to="/" className="flex-shrink-0">
                <img
                  src="/sns2.svg"
                  alt="BusinessPro Logo"
                  className="w-[25rem] h-auto object-contain mt-2 md:mt-4"
                />
              </Link>
            </div>

            {/* Center: Navigation */}
            <nav className="hidden md:flex flex-1 justify-center items-center space-x-12 relative z-50">
              {navItems.map((item) => (
                <motion.div key={item.name} className="relative group">
                  <Link
                    to={item.path}
                    className="text-white text-base font-medium transition-colors duration-300 hover:text-white"
                  >
                    {item.name}
                  </Link>
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute left-0 -bottom-1 h-1 rounded-full bg-gradient-to-r from-[#00FFD5] via-[#FD019C] to-[#FFB200]"
                    style={{ width: isActive(item.path) ? '100%' : 0 }}
                  />
                </motion.div>
              ))}
            </nav>

            {/* Right: CTA Button */}
            <div className="hidden md:flex z-50">
              <Button
                asChild
                className="px-5 py-2 rounded-full bg-gradient-to-r from-[#00FFD5] via-[#FD019C] to-[#FFB200] text-white font-semibold shadow-xl hover:scale-105 transition-transform duration-300"
              >
                <Link to="/contact">Get Started</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-full hover:bg-[#402746]/30 transition-colors z-[10000]" // above mobile menu
            >
              {isMenuOpen ? <X size={28} color="#FFFFFF" /> : <Menu size={28} color="#FFFFFF" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ type: 'spring', stiffness: 120 }}
                className="absolute top-full left-0 right-0 bg-[#0F0F16]/95 backdrop-blur-lg rounded-b-2xl shadow-xl border-t border-[#402746] p-6 flex flex-col items-center space-y-4 z-[998]" // below header & toggle
              >
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-white text-lg font-medium transition-colors duration-300 hover:text-white"
                  >
                    {item.name}
                  </Link>
                ))}
                <Button
                  asChild
                  className="w-full mt-4 px-4 py-2 rounded-full bg-gradient-to-r from-[#00FFD5] via-[#FD019C] to-[#FFB200] text-white font-semibold shadow-xl hover:scale-105 transition-transform duration-300"
                >
                  <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                    Get Started
                  </Link>
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.header>
  )
}

export default Header
