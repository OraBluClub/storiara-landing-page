'use client'

import { motion } from 'framer-motion'
import { 
  Presentation, 
  Users, 
  Calendar, 
  ListChecks, 
  Wrench,
  Target,
  Zap,
  ClipboardCheck,
  Clapperboard
} from 'lucide-react'

const Features = () => {
  const features = [
    {
      title: "Scene Analysis & Breakdown",
      description: "Intelligent script parsing that automatically extracts scenes, identifies locations, and estimates timing. Transform your screenplay into a structured production blueprint.",
      icon: Presentation,
      items: [
        "Automated scene extraction from scripts",
        "Location and setting identification", 
        "Scene timing and length estimation",
        "Character presence tracking"
      ]
    },
    {
      title: "Cast & Character Management",
      description: "Comprehensive character database with detailed profiles, casting notes, and availability tracking. Keep your entire cast organized and accessible.",
      icon: Users,
      items: [
        "Character profile creation",
        "Actor casting and notes",
        "Availability scheduling",
        "Contact management"
      ]
    },
    {
      title: "Production Scheduling",
      description: "Advanced scheduling tools that optimize your shoot days based on locations, cast availability, and equipment needs. Maximize efficiency and minimize costs.",
      icon: Calendar,
      items: [
        "Intelligent shoot scheduling",
        "Location-based optimization",
        "Cast availability integration",
        "Equipment coordination"
      ]
    },
    {
      title: "Shotlist Development",
      description: "Create detailed shot lists with camera angles, movements, and technical specifications. Plan every frame before you roll camera.",
      icon: ListChecks,
      items: [
        "Shot-by-shot planning",
        "Camera angle specifications",
        "Technical requirements",
        "Visual reference management"
      ]
    },
    {
      title: "Equipment Management",
      description: "Track all your production equipment, from cameras to lighting. Ensure nothing gets left behind and everything is accounted for.",
      icon: Wrench,
      items: [
        "Equipment inventory tracking",
        "Rental management",
        "Maintenance scheduling",
        "Location-based logistics"
      ]
    },
    {
      title: "Marketing & Distribution",
      description: "Built-in marketing tools to promote your project. Create campaigns, manage social media, and track your audience engagement.",
      icon: Target,
      items: [
        "Campaign management",
        "Social media integration",
        "Audience analytics",
        "Distribution planning"
      ]
    }
  ]

  const productionFeatures = [
    {
      title: "Content Generation",
      description: "Streamline content creation for marketing materials, social media, and promotional assets.",
      icon: Zap
    },
    {
      title: "On-Set Notes",
      description: "Digital script supervision and continuity tracking during production.",
      icon: ClipboardCheck
    },
    {
      title: "Editing Integration",
      description: "Seamless workflow integration with popular editing software and post-production tools.",
      icon: Clapperboard
    }
  ]

  return (
    <section className="py-24 relative overflow-hidden" id="features">
      {/* Dark background with subtle blue glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-950 to-slate-900" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
      
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
              Complete Production Suite
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Everything you need to take your project from script to screen. Professional-grade tools 
            designed for modern filmmakers and content creators.
          </p>
        </motion.div>

        {/* Main Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-slate-900/60 backdrop-blur-xl border border-blue-600/20 rounded-2xl p-8 h-full transform-style-3d hover:border-blue-500/40 transition-all duration-500 group"
            >
              <div className="flex items-start space-x-4 mb-6">
                <div className="flex-shrink-0 p-3 rounded-lg bg-gradient-to-r from-blue-600/20 to-blue-800/20 group-hover:from-blue-500/30 group-hover:to-blue-700/30 transition-all duration-300">
                  <feature.icon className="h-8 w-8 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-100 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed mb-6">
                    {feature.description}
                  </p>
                </div>
              </div>
              
              <div className="space-y-3">
                {feature.items.map((item, itemIndex) => (
                  <motion.div
                    key={itemIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: (index * 0.1) + (itemIndex * 0.1) }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3 group/item"
                  >
                    <div className="flex-shrink-0 p-1 rounded-full bg-blue-600/20 group-hover/item:bg-blue-500/30 transition-colors duration-300">
                      <div className="w-2 h-2 bg-blue-400 rounded-full" />
                    </div>
                    <span className="text-slate-300 group-hover/item:text-blue-300 transition-colors duration-300">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Production Tools Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Production & Post-Production
            </span>
          </h3>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Seamless workflow integration for every stage of production
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {productionFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="text-center p-8 rounded-xl bg-slate-900/40 backdrop-blur-sm border border-blue-600/20 hover:border-blue-500/40 transition-all duration-300 group"
            >
              <div className="inline-flex items-center justify-center p-4 rounded-xl bg-gradient-to-r from-blue-600/20 to-blue-800/20 mb-6 group-hover:from-blue-500/30 group-hover:to-blue-700/30 transition-all duration-300">
                <feature.icon className="h-8 w-8 text-blue-400" />
              </div>
              <h4 className="text-xl font-bold text-slate-100 mb-3">
                {feature.title}
              </h4>
              <p className="text-slate-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-600/10 to-blue-800/10 border border-blue-600/30 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-100 mb-4">
              Ready to Transform Your Production?
            </h3>
            <p className="text-slate-400 mb-6">
              Join the future of filmmaking with professional production tools designed for creators.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white px-8 py-3 rounded-lg font-semibold shadow-lg shadow-blue-600/30 transition-all duration-300"
            >
              <a href="https://visionara.orabluclub.com">
                Start Your Project
              </a>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Features 