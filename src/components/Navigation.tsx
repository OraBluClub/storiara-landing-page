'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Menu, X, PenTool, Clapperboard, ChevronDown, FileText, Calendar, Swords, DollarSign, ListChecks, GraduationCap, Video, Building2 } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { getAssetPath } from '@/lib/utils'

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const featuresDropdown = [
    { name: 'Scheduling & Coordination', description: 'Smart calendar & team sync', icon: Calendar, href: '/#features' },
    { name: 'Asset & Budget Management', description: 'Track costs & resources', icon: DollarSign, href: '/#features' },
    { name: 'Script & Continuity Analysis', description: 'AI-powered script insights', icon: FileText, href: '/#features' },
    { name: 'Shotlists & Storyboarding', description: 'Visual planning with AI', icon: Swords, href: '/#features' },
  ]

  const audienceDropdown = [
    { name: 'Students & Emerging', description: 'Learn professional workflows', icon: GraduationCap, href: '/#platform' },
    { name: 'Independent Filmmakers', description: 'Studio tools, indie budget', icon: Video, href: '/#platform' },
    { name: 'Production Companies', description: 'White-label & IP protection', icon: Building2, href: '/#platform' },
  ]

  const navItems = [
    { name: 'Features', href: '/#features', hasDropdown: true, dropdown: featuresDropdown },
    { name: "Who We're For", href: '/#platform', hasDropdown: true, dropdown: audienceDropdown },
    { name: 'Team', href: '/#team' },
    { name: 'Pricing', href: '/#pricing' },
    { name: 'FAQ', href: '/#faq' },
  ]

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-black/80 backdrop-blur-xl border-b border-primary/20' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Left side - navigation items */}
          <div className="hidden lg:flex items-center space-x-8 w-1/3">
            {navItems.slice(0, 3).map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="text-slate-400 hover:text-primary transition-all duration-300 font-medium relative group flex items-center gap-1"
                >
                  {item.name}
                  {item.hasDropdown && (
                    <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                  )}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-primary-dark group-hover:w-full transition-all duration-300" />
                </Link>
                
                {/* Dropdown Menu */}
                {item.hasDropdown && (
                  <AnimatePresence mode="wait">
                    {activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: 'easeOut' }}
                        onMouseLeave={() => setActiveDropdown(null)}
                        style={{ 
                          backdropFilter: 'blur(24px)',
                          WebkitBackdropFilter: 'blur(24px)',
                          willChange: 'transform, opacity'
                        }}
                        className="absolute top-full left-0 mt-3 w-72 bg-black/95 border border-primary/30 rounded-xl shadow-2xl shadow-primary/20 overflow-hidden z-[60]"
                      >
                        <div className="p-1.5">
                          {item.dropdown?.map((dropItem, idx) => (
                            <Link
                              key={dropItem.name}
                              href={dropItem.href}
                              className="group flex items-start gap-3 px-3 py-3 rounded-lg text-slate-400 hover:text-white hover:bg-primary/10 transition-all duration-300 relative overflow-hidden"
                            >
                              <div className="flex-shrink-0 p-1.5 rounded-lg bg-gradient-to-br from-primary/20 to-primary-dark/20 group-hover:from-primary/30 group-hover:to-primary-dark/30 transition-all duration-300">
                                <dropItem.icon className="h-4 w-4 text-primary" />
                              </div>
                              <div className="flex-1">
                                <div className="font-semibold text-sm mb-0.5">{dropItem.name}</div>
                                <div className="text-xs text-slate-500 group-hover:text-slate-400 transition-colors duration-300">{dropItem.description}</div>
                              </div>
                              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* Center - Logo */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex-shrink-0"
          >
            <Link href="/" className="flex items-center">
              <Image
                src={getAssetPath("/assets/storiara.svg")}
                alt="Logo"
                width={200}
                height={40}
                style={{ filter: 'drop-shadow(0 0 10px rgba(59,130,246,0.5))' }}

                className="h-10 w-auto hover:scale-105 transition-transform duration-300 filter drop-shadow-lg"
              />
            </Link>
          </motion.div>

          {/* Right side */}
          <div className="hidden lg:flex items-center justify-end space-x-8 w-1/3">
            {navItems.slice(3).map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="text-slate-400 hover:text-primary transition-all duration-300 font-medium relative group flex items-center gap-1"
                >
                  {item.name}
                  {item.hasDropdown && (
                    <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                  )}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-primary-dark group-hover:w-full transition-all duration-300" />
                </Link>
                
                {/* Dropdown Menu */}
                {item.hasDropdown && (
                  <AnimatePresence mode="wait">
                    {activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: 'easeOut' }}
                        onMouseLeave={() => setActiveDropdown(null)}
                        style={{ 
                          backdropFilter: 'blur(24px)',
                          WebkitBackdropFilter: 'blur(24px)',
                          willChange: 'transform, opacity'
                        }}
                        className="absolute top-full left-0 mt-3 w-72 bg-black/95 border border-primary/30 rounded-xl shadow-2xl shadow-primary/20 overflow-hidden z-[60]"
                      >
                        <div className="p-1.5">
                          {item.dropdown?.map((dropItem, idx) => (
                            <Link
                              key={dropItem.name}
                              href={dropItem.href}
                              className="group flex items-start gap-3 px-3 py-3 rounded-lg text-slate-400 hover:text-white hover:bg-primary/10 transition-all duration-300 relative overflow-hidden"
                            >
                              <div className="flex-shrink-0 p-1.5 rounded-lg bg-gradient-to-br from-primary/20 to-primary-dark/20 group-hover:from-primary/30 group-hover:to-primary-dark/30 transition-all duration-300">
                                <dropItem.icon className="h-4 w-4 text-primary" />
                              </div>
                              <div className="flex-1">
                                <div className="font-semibold text-sm mb-0.5">{dropItem.name}</div>
                                <div className="text-xs text-slate-500 group-hover:text-slate-400 transition-colors duration-300">{dropItem.description}</div>
                              </div>
                              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
            
            <Button 
              size="lg"
              asChild
              className="ml-4 bg-gradient-to-r from-primary font-semibold to-primary-dark hover:from-primary-light hover:to-primary-dark text-white border-0 shadow-lg shadow-primary/30 text-base px-6 py-3"
            >
              <Link href="https://app.storiara.com" className="flex items-center">
                <Clapperboard className="mr-2 h-5 w-5" />
                Get Started
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-400 hover:text-primary"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-primary/20"
          >
            <div className="py-6 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-slate-400 hover:text-primary transition-colors duration-300 font-medium px-4 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-4 pt-4">
                <Button 
                  size="lg"
                  asChild
                  className="w-full bg-gradient-to-r from-primary to-primary-dark hover:from-primary-light hover:to-primary-dark text-white border-0 shadow-lg shadow-primary/30 text-base py-3"
                >
                  <Link href="https://app.storiara.com" className="flex items-center justify-center">
                    <PenTool className="mr-2 h-5 w-5" />
                    Get Started
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}

export default Navigation