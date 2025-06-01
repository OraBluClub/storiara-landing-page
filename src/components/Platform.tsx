'use client'

import { motion } from 'framer-motion'
import { Code, Film, Palette, Zap, Users, Target } from 'lucide-react'
import Link from 'next/link'

const Platform = () => {
  const expertise = [
    {
      title: "Platform Engineering",
      description: "Advanced software architecture designed for scalable film production workflows. Built with modern technologies for reliability and performance.",
      icon: Code,
      stats: "99.9% Uptime"
    },
    {
      title: "Production Expertise", 
      description: "Deep understanding of film production processes from pre-production through post. Every feature designed by industry professionals.",
      icon: Film,
      stats: "15+ Years Experience"
    },
    {
      title: "Creative Technology",
      description: "Innovative solutions that bridge the gap between creative vision and technical execution. Tools that enhance rather than replace creativity.",
      icon: Palette,
      stats: "Award-Winning Design"
    },
    {
      title: "Performance Optimization",
      description: "Lightning-fast processing and intelligent automation that saves hours of manual work. Optimized for professional production timelines.",
      icon: Zap,
      stats: "10x Faster Workflows"
    },
    {
      title: "Collaborative Features",
      description: "Built for teams of all sizes. Seamless collaboration tools that keep everyone synchronized throughout the production process.",
      icon: Users,
      stats: "Unlimited Team Members"
    },
    {
      title: "Industry Focus",
      description: "Purpose-built for filmmakers, content creators, and production companies. Every feature addresses real industry challenges.",
      icon: Target,
      stats: "Production-Focused"
    }
  ]

  return (
    <section className="py-24 relative overflow-hidden" id="platform">
      {/* Dark background with blue glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-black to-slate-950" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/15 rounded-full blur-2xl" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
              Built for Professionals
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Every aspect of our platform is crafted with precision, drawing from years of industry experience 
            and cutting-edge technology to deliver unmatched production capabilities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {expertise.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -10 }}
              className="bg-slate-900/60 backdrop-blur-xl border border-blue-600/20 rounded-2xl p-8 h-full transform-style-3d hover:border-blue-500/40 transition-all duration-500 group"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-lg bg-gradient-to-r from-blue-600/20 to-blue-800/20 group-hover:from-blue-500/30 group-hover:to-blue-700/30 transition-all duration-300 mr-4">
                  <item.icon className="h-8 w-8 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-100 mb-1">
                    {item.title}
                  </h3>
                  <div className="text-sm font-medium bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                    {item.stats}
                  </div>
                </div>
              </div>
              
              <p className="text-slate-400 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Platform Philosophy */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-slate-900/40 backdrop-blur-xl border border-blue-600/30 rounded-2xl p-12 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h3 className="text-3xl md:text-4xl font-bold text-slate-100 mb-6">
                Our Mission
              </h3>
              <p className="text-lg text-slate-400 leading-relaxed mb-8">
                We&apos;re building the future of film production with technology that empowers creators. 
                Our platform combines deep technical expertise with industry knowledge to create tools 
                that enhance creativity and streamline workflows.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8"
            >
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-2">
                  Professional
                </div>
                <div className="text-slate-400">Grade Tools</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-2">
                  Industry
                </div>
                <div className="text-slate-400">Focused Design</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-2">
                  Continuous
                </div>
                <div className="text-slate-400">Innovation</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 }}
              viewport={{ once: true }}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white px-8 py-4 rounded-lg font-semibold shadow-lg shadow-blue-600/30 transition-all duration-300"
              >
                <Link href="https://visionara.orabluclub.com" className="flex items-center">
                  Experience the Platform
                </Link>
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Platform 