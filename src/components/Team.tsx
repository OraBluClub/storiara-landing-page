'use client'

import { motion } from 'framer-motion'
import { Linkedin } from 'lucide-react'
import Image from 'next/image'
import { getAssetPath } from '@/lib/utils'

const Team = () => {
  const teamMembers = [
        {
      name: "Nick Harty",
      role: "Technical Lead",
      bio: "Full-stack engineer and technical architect leading the development of innovative film production tools. Passionate about bridging technology and creativity.",
      image: "/profiles/nickharty.jpeg",
      linkedin: "https://www.linkedin.com/in/nicksheaharty/"
    },
    {
      name: "Spencer Kaufman", 
      role: "CRSO, BizDev",
      bio: "Chief Revenue & Strategy Officer driving business development and strategic partnerships. Expert in scaling creative technology companies.",
      image: "/profiles/spencer.jpeg",
      linkedin: "https://www.linkedin.com/in/spencerkaufman720/"
    },
    {
      name: "Charles Hirschhorn",
      role: "CFO", 
      bio: "Chief Financial Officer with extensive experience in media and technology companies. Ensures financial strategy aligns with our mission to revolutionize film production.",
      image: "/profiles/charles.jpeg",
      linkedin: "https://www.linkedin.com/in/charlie-hirschhorn/"
    }
  ]

  return (
    <section className="py-10 relative overflow-hidden" id="team">
      {/* Blended background that flows from previous section and into next */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-black to-primary/10" />
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/3 w-64 h-64 bg-primary/8 rounded-full blur-2xl" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
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
              Meet Our Crew
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            The storytellers behind the platform. Our team combines deep technical expertise with industry experience 
            to create tools that truly understand the needs of modern filmmakers.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-5xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -10 }}
              className="bg-primary/10 backdrop-blur-xl border border-primary/20 rounded-2xl p-8 text-center transform-style-3d hover:border-primary/40 transition-all duration-500 group"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                className="relative mb-6"
              >
                <Image
                  src={getAssetPath(member.image)}
                  alt={member.name}
                  width={128}
                  height={128}
                  className="w-32 h-32 rounded-full mx-auto object-cover border-2 border-primary/30 group-hover:border-primary/50 transition-colors duration-300"
                />
                <div className="absolute inset-0 w-32 h-32 rounded-full mx-auto bg-blue-600/00 group-hover:bg-blue-500/20 transition-colors duration-300" />
              </motion.div>
              
              <h3 className="text-2xl font-bold text-slate-100 mb-2">
                {member.name}
              </h3>
              <div className="text-primary font-medium mb-4 text-lg">
                {member.role}
              </div>
              <p className="text-slate-400 leading-relaxed mb-6">
                {member.bio}
              </p>
              
              <div className="flex justify-center">
                <motion.a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 rounded-lg bg-slate-800/30 hover:bg-blue-600/10 text-slate-500 hover:text-blue-400 transition-all duration-300 group/link"
                >
                  <Linkedin className="h-5 w-5" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        
      </div>
    </section>
  )
}

export default Team 