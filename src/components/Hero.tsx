'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Film, Camera, Clapperboard, Users, Bot, Upload } from 'lucide-react'
import Link from 'next/link'
import { useRef } from 'react'
import Image from 'next/image'
import { getAssetPath } from '@/lib/utils'

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress: heroScrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  })

  const opacity = useTransform(heroScrollYProgress, [0, 1], [1, 0])

  const imageContainerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: imageScrollYProgress } = useScroll({
      target: imageContainerRef,
      offset: ["start end", "end start"]
  });

  const rotateX = useTransform(imageScrollYProgress, [0.2, 0.5], [10, 0]);
  const scale = useTransform(imageScrollYProgress, [0.2, 0.5], [0.9, 1]);
  const imageOpacity = useTransform(imageScrollYProgress, [0.7, 0.9], [1, 0]);
  const imageY = useTransform(imageScrollYProgress, [0.7, 1], ['0%', '50%']);

  const floatingIcons = [
    { Icon: Film, delay: 0, x: "15%", y: "25%" },
    { Icon: Bot, delay: 0.2, x: "85%", y: "35%" },
    { Icon: Clapperboard, delay: 0.4, x: "10%", y: "75%" },
    { Icon: Users, delay: 0.6, x: "90%", y: "80%" },
    { Icon: Camera, delay: 0.8, x: "20%", y: "60%" },
  ]
  
  const logos = [
    { name: 'Paramount', src: getAssetPath('companies/paramount.svg') },
    { name: 'Warner Bros', src: getAssetPath('companies/warner.svg') },
    { name: 'Snap', src: getAssetPath('companies/snap.svg') },
    { name: 'Sphere', src: getAssetPath('companies/sphere.svg') },
    { name: 'Character.ai', src: getAssetPath('companies/character.svg') },
  ];

  return (
    <div ref={heroRef} className="relative">
      <motion.div
      style={{ opacity }}
      >
      <Image
        src={getAssetPath("assets/background.png")}
        
        alt="Storiara Background"
        fill
        className="object-cover  "
      />
      </motion.div>
      <div className="pt-32 pb-5 flex items-center justify-center overflow-hidden">
        {/* Dark mysterious background with blue glow from top */}
        <motion.div 
          style={{ }}
          className="absolute inset-0 z-1 bg-gradient-to-b from-slate-950 via-black/20 to-black"
        />
        
        {/* Blue mysterious glow from top */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-64 h-64 bg-primary/30 rounded-full blur-2xl" />
        
        {/* Floating Icons */}
        {floatingIcons.map(({ Icon, delay, x: iconX, y: iconY }, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.1, scale: 1 }}
            transition={{ delay: delay + 1, duration: 1 }}
            className="absolute text-primary/20 z-100"
            style={{ left: iconX, top: iconY }}
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
        <div className="relative z-10 max-w-6xl w-full max-w-full mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center mb-4"
          >
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/15 border border-primary/40 backdrop-blur-sm">
              <span className="text-xs md:text-sm font-medium text-slate-300">
                Used by over <span className="font-bold text-white bg-primary/30 px-2 py-0.5 rounded-md">15K+</span> filmmakers worldwide
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="perspective-2000"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 transform-style-3d break-words whitespace-normal">
              <motion.span 
                className="block bg-gradient-to-r from-primary-foreground to-primary bg-clip-text text-transparent"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
              >
                From Script to Shoot,
              </motion.span>
              <motion.span
                className="block bg-gradient-to-r from-primary-foreground to-primary bg-clip-text leading-tight text-transparent"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 1.2 }}
              >
                We Get Your Story Made
              </motion.span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2 }}
            className="text-lg md:text-xl text-slate-400 mb-8 max-w-4xl mx-auto leading-relaxed break-words whitespace-normal"
          >
            Built by filmmakers, for filmmakers. Upload your script and cut pre-production time by 70%—instantly break down scenes, manage cast and crew, build shotlists, and craft your visual style. <span className="text-primary font-semibold">Save thousands in production costs.</span>
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
              className="px-10 group relative overflow-hidden bg-gradient-to-r from-primary to-primary-dark hover:from-primary-light hover:to-primary-dark text-white border-0 shadow-lg shadow-primary/30"
            >
              <Link href="https://app.storiara.com/signup" className="flex items-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center"
                >
                  <Upload className="mr-2 h-6 w-6 group-hover:animate-pulse" />
                  Start Free
                </motion.div>
              </Link>
            </Button>

            <Button 
              variant="outline" 
              size="xl"
              className="group border-primary/50 hover:border-primary-light hover:bg-primary/10 text-primary hover:text-primary-light"
            >
              <Link href="https://cal.com/nickharty/storiara">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center"
                >
                  <Film className="mr-2 h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
                  Schedule A Demo
                </motion.div>
              </Link>
            </Button>
          </motion.div>
        
          {/* Logo Ticker */}
         <motion.div
            className="mt-8 w-full"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 3 }}
          >
            <p className="text-sm text-slate-400 mb-4">
              Advised by industry leaders from
            </p>
            <div className="relative w-full overflow-hidden mask-image-gradient">
              <motion.div
                className="flex"
                animate={{
                  x: ['0%', '-50%'],
                }}
                transition={{
                  ease: 'linear',
                  duration: 25,
                  repeat: Infinity,
                  repeatType: 'loop',
                }}
              >
                {[...logos, ...logos, ...logos, ...logos].map((logo, index) => (
                  <div key={index} className="flex-shrink-0 mx-10" style={{ width: '120px' }}>
                    <Image
                      src={logo.src}
                      alt={logo.name}
                      width={120}
                      height={40}
                      className="object-contain h-10 w-full filter grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Dashboard Image - Hidden on mobile and tablet */}
      <div ref={imageContainerRef} className="hidden lg:block h-[60vh] relative mt-15 perspective-1000">
          <motion.div
              style={{
                  rotateX,
                  scale,
                  opacity: imageOpacity,
                  y: imageY,
              }}
              className="sticky  w-full"
          >
              <div className="relative transform-style-3d max-w-6xl mx-auto px-4">
                  <Image
                      src={getAssetPath("/assets/dashboard.png")}
                      alt="Storiara Dashboard"
                      width={1200}
                      height={750}
                      className="rounded-xl shadow-2xl shadow-primary/20 border border-primary/20"
                  />
                   <div className="absolute inset-0 bg-gradient-to-t from-black via-slate-950/50 to-transparent pointer-events-none" />
              </div>
          </motion.div>
      </div>
    </div>
  )
}

export default Hero