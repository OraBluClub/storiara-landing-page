'use client'

import { motion } from 'framer-motion'
import { 
  Linkedin, 
  Instagram, 
  Youtube,
  Film,
  Sparkles,
  PenTool
} from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  const footerLinks = {
    Platform: [
      { name: 'Features', href: '#features' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'Integrations', href: '#integrations' },
      { name: 'Security', href: '#security' }
    ],
    Resources: [
      { name: 'Documentation', href: '#docs' },
      { name: 'Tutorials', href: '#tutorials' },
      { name: 'Blog', href: '#blog' },
      { name: 'Community', href: '#community' }
    ],
    Company: [
      { name: 'About', href: '#about' },
      { name: 'Careers', href: '#careers' },
      { name: 'Contact', href: '#contact' },
      { name: 'Press', href: '#press' }
    ],
    Legal: [
      { name: 'Privacy Policy', href: '#privacy' },
      { name: 'Terms of Service', href: '#terms' },
      { name: 'Cookie Policy', href: '#cookies' },
      { name: 'GDPR', href: '#gdpr' }
    ]
  }

  const socialLinks = [
    { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/orabluclub' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/company/orabluclub/' },
    { name: 'YouTube', icon: Youtube, href: 'https://www.youtube.com/@OraBluClub' }
  ]

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-black via-slate-950 to-black">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-2xl" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 border-b border-blue-600/20">
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
              src="/visionara-landing-page/assets/visionara-dark.svg"
              alt="Logo"
              width={48}
              height={48}
              className="mr-4"
            />
                <div className="flex items-center space-x-2">
                  <Film className="h-6 w-6 text-blue-400" />
                  <Sparkles className="h-5 w-5 text-blue-300" />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-slate-100 mb-4">
                Transform Your Production Workflow
              </h3>
              <p className="text-slate-400 mb-8 leading-relaxed max-w-md">
                Professional film production tools designed for creators who demand excellence. 
                From script to screen, we&apos;ve got you covered.
              </p>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <Link
                  href="https://visionara.orabluclub.com"
                  className="inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white px-6 py-3 rounded-lg font-semibold shadow-lg shadow-blue-600/30 transition-all duration-300 text-base"
                >
                  <PenTool className="mr-2 h-5 w-5" />
                  Tell Your Story
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Column - Links */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
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
                          className="text-slate-400 hover:text-blue-400 transition-colors duration-300 text-sm"
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
            className="bg-slate-900/40 backdrop-blur-xl border border-blue-600/20 rounded-2xl p-8"
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
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-3 bg-slate-800 border border-blue-600/30 rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors duration-300"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white px-6 py-3 rounded-lg font-semibold shadow-lg shadow-blue-600/30 transition-all duration-300 whitespace-nowrap"
                >
                  Subscribe
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
            © {new Date().getFullYear()} Visionara. All rights reserved.
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
                className="p-2 rounded-lg bg-slate-800/50 hover:bg-blue-600/20 text-slate-400 hover:text-blue-400 transition-all duration-300"
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