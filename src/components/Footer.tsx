'use client'

import { motion } from 'framer-motion'
import { 
  Clapperboard,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
} from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { getAssetPath } from '@/lib/utils'
import { RiTwitterXLine } from 'react-icons/ri'

const Footer = () => {
  const footerLinks = {
    Platform: [
      { name: 'Features', href: '#features' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'FAQ', href: '#faq' },
    ],
    Compare: [
      { name: 'vs StudioBinder', href: '/compare/studiobinder' },
      { name: 'vs Movie Magic', href: '/compare/movie-magic' },
      { name: 'vs Filmustage', href: '/compare/filmustage' },
      { name: 'vs Celtx', href: '/compare/celtx' },
      { name: 'vs Gorilla', href: '/compare/gorilla-scheduling' },
      { name: 'vs Yamdu', href: '/compare/yamdu' },
    ],
    Company: [
      { name: 'About', href: '#team' },
      { name: 'Contact', href: 'mailto:storiaraCRSO@gmail.com' },
    ],
    Legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
    ]
  }

  const socialLinks = [
    {name: 'Facebook', icon: FacebookIcon, href: 'https://www.facebook.com/storiara'},
    { name: 'Instagram', icon: InstagramIcon, href: 'https://www.instagram.com/madewithstoriara' },
    { name: 'LinkedIn', icon: LinkedinIcon, href: 'https://www.linkedin.com/company/storiara/' },
    { name: 'X', icon: RiTwitterXLine, href: 'https://x.com/storiaraai' }
  ]

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-primary/10 via-black to-primary/10">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-2xl" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 border-b border-primary/20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            {/* Left Column - Brand & CTA */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                                            <Image
                  src={getAssetPath("/assets/storiara.svg")}
                  alt="Logo"
                  width={240}
                  height={48}
                  style={{ filter: 'drop-shadow(0 0 10px rgba(59,130,246,0.5))' }}
                  className="mr-4 h-12 w-auto"
                />
                
              </div>
              
              <h3 className="text-2xl font-bold text-slate-100 mb-4">
                Quit Dreaming, Start Shooting
              </h3>
              <p className="text-slate-400 mb-6">
                Ready to transform your filmmaking workflow? Let&apos;s get your story made.
              </p>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <Link
                  href="https://app.storiara.com/signup"
                  className="inline-flex items-center bg-gradient-to-r from-primary to-primary-dark hover:from-primary-light hover:to-primary-dark text-white px-6 py-3 rounded-lg font-semibold shadow-lg shadow-primary/30 transition-all duration-300 text-base"
                >
                  <Clapperboard className="mr-2 h-5 w-5" />
                  Let&apos;s Tell Your Story
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Column - Links */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
              {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h4 className="text-slate-100 font-semibold mb-4">
                    {category}
                  </h4>
                  <ul className="space-y-3">
                    {links.map((link, linkIndex) => (
                      <motion.li
                        key={link.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: (categoryIndex * 0.1) + (linkIndex * 0.05) }}
                        viewport={{ once: true }}
                      >
                        <Link
                          href={link.href}
                          className="text-slate-400 hover:text-primary transition-colors duration-300 text-sm"
                        >
                          {link.name}
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Newsletter Signup */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="bg-primary/10 backdrop-blur-xl border border-primary/20 rounded-2xl p-8"
          >
            <div className="text-center md:text-left md:flex md:items-center md:justify-between">
              <div className="mb-6 md:mb-0">
                <h4 className="text-xl font-bold text-slate-100 mb-2">
                  Stay Updated
                </h4>
                <p className="text-slate-400">
                  Get the latest updates on new features and production tips.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 md:ml-8">
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    window.location.href = 'https://app.storiara.com/signup'
                  }}
                  className="bg-gradient-to-r from-primary to-primary-dark hover:from-primary-light hover:to-primary-dark text-white px-6 py-3 rounded-lg font-semibold shadow-lg shadow-primary/30 transition-all duration-300 whitespace-nowrap"
                >
                  Sign Up For Updates
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <div className="py-8 flex flex-col md:flex-row items-center justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-slate-500 text-sm mb-4 md:mb-0"
          >
            © {new Date().getFullYear()} Storiara. All rights reserved.
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex items-center space-x-4"
          >
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.href}
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-lg bg-slate-800/50 hover:bg-primary/20 text-slate-400 hover:text-primary transition-all duration-300"
                aria-label={social.name}
              >
                <social.icon className="h-5 w-5" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 