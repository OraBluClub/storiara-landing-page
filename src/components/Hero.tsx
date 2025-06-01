'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Film, Camera, Clapperboard, Users, Calendar, Target, PenTool } from 'lucide-react'
import Link from 'next/link'
import { useRef } from 'react'

const Hero = () => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])

  const floatingIcons = [
    { Icon: Film, delay: 0, x: "15%", y: "25%" },
    { Icon: Camera, delay: 0.2, x: "85%", y: "35%" },
    { Icon: Clapperboard, delay: 0.4, x: "10%", y: "75%" },
    { Icon: Users, delay: 0.6, x: "90%", y: "80%" },
    { Icon: Calendar, delay: 0.8, x: "20%", y: "60%" },
    { Icon: Target, delay: 1.0, x: "80%", y: "20%" },
  ]

  return (
    <div ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dark mysterious background with blue glow from top */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-black"
      />
      
      {/* Blue mysterious glow from top */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
      <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-64 h-64 bg-blue-500/30 rounded-full blur-2xl" />
      
      {/* Floating Icons */}
      {floatingIcons.map(({ Icon, delay, x, y: iconY }, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ delay: delay + 1, duration: 1 }}
          className="absolute text-blue-400/20"
          style={{ left: x, top: iconY }}
        >
          <motion.div
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ 
              duration: 6 + index,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Icon size={48} />
          </motion.div>
        </motion.div>
      ))}

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-32">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="perspective-2000"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 transform-style-3d">
            <motion.span 
              className="block bg-gradient-to-r from-blue-200  via-blue-400 to-blue-700 bg-clip-text text-transparent"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              Your Script, Your Story
            </motion.span>

          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
          className="text-xl md:text-2xl text-slate-400 mb-12 max-w-4xl mx-auto leading-relaxed"
        >
          Upload your script and watch everything else come to life. Automatic scene breakdown, 
          character analysis, scheduling optimization, and production planning—all from your screenplay.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 2.5 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <Button 
            size="xl"
            asChild
            className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white border-0 shadow-lg shadow-blue-600/30"
          >
            <Link href="https://visionara.orabluclub.com" className="flex items-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center"
              >
                <PenTool className="mr-2 h-6 w-6 group-hover:animate-pulse" />
                Tell Your Story
              </motion.div>
            </Link>
          </Button>

          <Button 
            variant="outline" 
            size="xl"
            className="group border-blue-600/50 hover:border-blue-500 hover:bg-blue-600/10 text-blue-400 hover:text-blue-300"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center"
            >
              <Film className="mr-2 h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
              Watch Demo
            </motion.div>
          </Button>
        </motion.div>

        {/* Feature Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 3 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          {[
            { number: "Complete", label: "Script Breakdown" },
            { number: "Advanced", label: "Scene Analysis" },
            { number: "Professional", label: "Production Tools" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center p-6 rounded-lg bg-slate-900/50 backdrop-blur-sm border border-blue-600/20 hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-slate-400 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>


    </div>
  )
}

export default Hero 