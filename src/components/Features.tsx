'use client'

import { motion } from 'framer-motion'
import { 
  Bot,
  Users, 
  Calendar, 
  Palette,
  Sparkles,
  Clapperboard
} from 'lucide-react'
import Image from 'next/image'
import { getAssetPath } from '@/lib/utils'

const Features = () => {
  const features = [
    {
      title: "Agentic Script Analysis",
      description: "Our core engine reads any script format and instantly extracts key elements, creating a structured foundation for your entire project.",
      icon: Bot,
      image: getAssetPath('features/ai-script.png'),
      items: [
        "Automated scene & setting extraction",
        "Character and dialogue identification", 
        "Plot consistency analysis",
        "Logline & synopsis generation"
      ]
    },
    {
      title: "AI-Powered Pre-Production",
      description: "Generate a complete pre-production package in minutes. From characters to budgets, let AI handle the heavy lifting.",
      icon: Sparkles,
      image: getAssetPath('features/ai-pre-production.png'),
      items: [
        "Character descriptions & backstories",
        "Budget estimates based on script elements",
        "Equipment & crew role suggestions",
        "Detailed scene breakdowns"
      ]
    },
    {
      title: "Generative Visuals",
      description: "Bring your vision to life before you even start shooting. Create concept art, storyboards, and marketing materials with AI.",
      icon: Palette,
      image: getAssetPath('features/ai-visuals.png'),
      items: [
        "AI Character Image Generation",
        "AI Storyboard Generation (Image & Video)",
        "AI Logo & Poster Creation",
        "Color scheme generation"
      ]
    },
    {
      title: "Intelligent Scheduling",
      description: "Develop comprehensive shot lists and shooting schedules. Organize your production with smart, integrated tools.",
      icon: Calendar,
      image: getAssetPath('features/ai-scheduling.png'),
      items: [
        "Automated shot list creation",
        "Cast & crew availability management",
        "Location & equipment coordination",
        "PDF call sheet generation"
      ]
    },
    {
      title: "Collaborative Workspace",
      description: "A centralized hub for your entire team. Keep everyone on the same page, from writers to producers and department heads.",
      icon: Users,
      image: getAssetPath('features/ai-workspace.png'),
      items: [
        "Shared project access",
        "Real-time updates",
        "Role-based permissions",
        "Centralized document storage"
      ]
    },
    {
      title: "Full Production Toolkit",
      description: "Beyond pre-production, Storiara supports your project through to the final cut with integrated on-set and post-production tools.",
      icon: Clapperboard,
      image: getAssetPath('features/ai-toolkit.png'),
      items: [
        "On-set notetaking & continuity",
        "Editing software integration hooks",
        "Marketing & distribution planning",
        "Complete asset management"
      ]
    }
  ]

  const integrations = [
    { name: 'Google Drive', src: getAssetPath('integrations/drive.webp') },
    { name: 'Dropbox', src: getAssetPath('integrations/dropbox.png') },
    { name: 'Final Draft', src: getAssetPath('integrations/final-draft.png') },
    { name: 'Google Calendar', src: getAssetPath('integrations/calendar.webp') },
    { name: 'Notion', src: getAssetPath('integrations/notion.webp') },
    { name: 'BackStage', src: getAssetPath('integrations/backstage.png') },
    { name: 'Word', src: getAssetPath('integrations/word.webp') },
  ];

  return (
    <section className="py-24 relative overflow-hidden" id="features">
      {/* Dark background with subtle blue glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-primary/10 to-primary/10" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      
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
              An Entire Studio in Your Browser
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Storiara is more than a tool—it&apos;s your AI production partner. Automate tedious tasks and focus on what matters: telling a great story.
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
              className="bg-primary/10 backdrop-blur-xl border border-primary/20 rounded-2xl h-full transform-style-3d hover:border-primary/40 transition-all duration-500 group relative overflow-hidden"
            >
              <div className="absolute inset-0">
                  <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      style={{ opacity: 0.08 }}
                      className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black-900 via-slate-9000 to-transparent"></div>
              </div>

              <div className="relative z-10 flex flex-col justify-start h-full p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="flex-shrink-0 p-3 rounded-lg bg-gradient-to-r from-primary/20 to-primary-dark/20 group-hover:from-primary/30 group-hover:to-primary-dark/30 transition-all duration-300">
                    <feature.icon className="h-8 w-8 text-primary" />
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
                      <div className="flex-shrink-0 p-1 rounded-full bg-primary/20 group-hover/item:bg-primary/30 transition-colors duration-300">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                      </div>
                      <span className="text-slate-300 group-hover/item:text-primary-light transition-colors duration-300">
                        {item}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Integrations Ticker */}
        <motion.div
          className="mt-10 w-full"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
     
            <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10">
              Integrates with your favorite existing workflow...
            </p>
          </div>
          <div className="relative w-full overflow-hidden mask-image-gradient">
            <motion.div
              className="flex items-center"
              animate={{
                x: ['0%', '-100%'],
              }}
              transition={{
                ease: 'linear',
                duration: 60,
                repeat: Infinity,
              }}
            >
              {/* Render logos twice for seamless loop */}
              {[...integrations, ...integrations].map((logo, index) => (
                <div key={index} className="flex-shrink-0 mx-8" style={{ width: '100px' }}>
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    width={100}
                    height={100}
                    className="object-contain rounded-xl h-100 w-full filter  opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Features 