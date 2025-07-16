'use client'

import { motion } from 'framer-motion'
import { Code, Film, Palette, Zap, Users, Target, Bot, ShieldCheck, DollarSign, Calendar, Rocket } from 'lucide-react'
import Link from 'next/link'

const Platform = () => {
  const expertise = [
    {
      title: "Intelligent Script Engine",
      description: "Our proprietary AI core reads and understands your script's structure, characters, and plot, forming the foundation for all generative tasks.",
      icon: Bot,
      stats: "Understands 10+ Formats"
    },
    {
      title: "Instant Pre-Production", 
      description: "Automate weeks of work. Generate comprehensive breakdowns, character sheets, location lists, and prop requirements in seconds.",
      icon: Rocket,
      stats: "95% Faster Breakdowns"
    },
    {
      title: "Generative Visuals",
      description: "Bring your vision to life instantly. Create stunning character concepts, dynamic storyboards, and compelling marketing materials with a click.",
      icon: Palette,
      stats: "Unlimited Creative Assets"
    },
    {
      title: "Smart Budget & Scheduling",
      description: "From AI-driven budget estimates to intelligent scheduling that considers cast and location availability, plan your shoot with precision.",
      icon: Calendar,
      stats: "Optimize Your Shoot Days"
    },
    {
      title: "Unified Production Hub",
      description: "A single source of truth for your entire team. Keep writers, directors, and department heads in sync with real-time updates.",
      icon: Users,
      stats: "Seamless Collaboration"
    },
    {
      title: "Enterprise-Grade Security",
      description: "Your intellectual property is paramount. We use industry-leading security protocols to ensure your project data is always safe and private.",
      icon: ShieldCheck,
      stats: "Your IP is Yours. Always."
    }
  ]

  return (
    <section className="py-0 relative overflow-hidden" id="platform">
      {/* Dark background with blue glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-black to-primary/20" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/15 rounded-full blur-2xl" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-b from-primary-foreground to-primary bg-clip-text text-transparent">
              Your Unfair Advantage
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Our platform combines deep industry knowledge with cutting-edge AI to give you unparalleled speed, creativity, and control over your production.
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
              className="bg-primary/10 backdrop-blur-xl border border-primary/20 rounded-2xl p-8 h-full transform-style-3d hover:border-primary/40 transition-all duration-500 group"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-lg bg-gradient-to-r from-primary/20 to-primary-dark/20 group-hover:from-primary/30 group-hover:to-primary-dark/30 transition-all duration-300 mr-4">
                  <item.icon className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-100 mb-1">
                    {item.title}
                  </h3>
                  <div className="text-sm font-medium bg-primary bg-clip-text text-transparent">
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

      </div>
    </section>
  )
}

export default Platform 