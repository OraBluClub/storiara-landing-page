'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Video, Building2 } from 'lucide-react'

const Platform = () => {
  const audiences = [
    {
      title: "Film Students & Emerging Creators",
      description: "Master professional production workflows without the professional budget. Learn industry-standard tools while bringing your creative vision to life.",
      icon: GraduationCap,
      details: [
        "Free tier with essential tools",
        "Learn real-world production skills",
        "Build a professional portfolio",
        "Access to educational resources"
      ]
    },
    {
      title: "Independent Filmmakers",
      description: "Stop choosing between quality and budget. Get the same tools studios use for a fraction of the cost. Turn around projects 3x faster and impress investors with professional deliverables.",
      icon: Video,
      details: [
        "Cut pre-production from weeks to hours",
        "Win more grants with polished pitches",
        "Professional call sheets & breakdowns",
        "Look like a $10M production on $100K"
      ]
    },
    {
      title: "Production Companies & Studios",
      description: "Built for line producers managing million-dollar budgets. Cut pre-production costs by 40% and reduce scheduling conflicts by 65%.",
      icon: Building2,
      details: [
        "White-label for client presentations",
        "Advanced IP protection & analytics",
        "Multi-project slate management",
        "Save 200+ hours per production"
      ]
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
              Creative Coordination for All
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            From student sets to studio slates, <span className="text-primary font-semibold">Storiara scales with your ambitions.</span> Professional production tools that grow with you—whether you're making your first short or managing a multi-million dollar slate.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {audiences.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-primary/10 backdrop-blur-xl border border-primary/20 rounded-2xl p-8 h-full transform-style-3d hover:border-primary/40 transition-all duration-500 group"
            >
              <div className="flex flex-col items-center text-center mb-6">
                <div className="p-4 rounded-full bg-gradient-to-r from-primary/20 to-primary-dark/20 group-hover:from-primary/30 group-hover:to-primary-dark/30 transition-all duration-300 mb-4">
                  <item.icon className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-slate-100 mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-400 leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>
              
              <div className="space-y-3">
                {item.details.map((detail, detailIndex) => (
                  <motion.div
                    key={detailIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: (index * 0.2) + (detailIndex * 0.1) }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3 group/item"
                  >
                    <div className="flex-shrink-0 p-1 rounded-full bg-primary/20 group-hover/item:bg-primary/30 transition-colors duration-300">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                    </div>
                    <span className="text-slate-300 text-sm group-hover/item:text-primary-light transition-colors duration-300">
                      {detail}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Platform 