'use client'

import { motion } from 'framer-motion'
import { Linkedin, ExternalLink } from 'lucide-react'

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
    <section className="py-24 relative overflow-hidden" id="team">
      {/* Blended background that flows from previous section and into next */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-black via-slate-950 to-black" />
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/3 w-64 h-64 bg-blue-500/8 rounded-full blur-2xl" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />
      
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
              Meet Our Team
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            The visionaries behind the platform. Our team combines deep technical expertise with industry experience 
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
              className="bg-slate-900/40 backdrop-blur-xl border border-blue-600/20 rounded-2xl p-8 text-center transform-style-3d hover:border-blue-500/40 transition-all duration-500 group"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                className="relative mb-6"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto object-cover border-2 border-blue-600/30 group-hover:border-blue-500/50 transition-colors duration-300"
                />
                <div className="absolute inset-0 w-32 h-32 rounded-full mx-auto bg-blue-600/10 group-hover:bg-blue-500/20 transition-colors duration-300" />
              </motion.div>
              
              <h3 className="text-2xl font-bold text-slate-100 mb-2">
                {member.name}
              </h3>
              <div className="text-blue-400 font-medium mb-4 text-lg">
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

        {/* Company Values */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-600/5 to-blue-800/5 border border-blue-600/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-100 mb-4">
              Building the Future Together
            </h3>
            <p className="text-slate-400 mb-8 leading-relaxed">
              Our small but mighty team is dedicated to revolutionizing how stories are brought to life. 
              We believe that great technology should enhance creativity, not complicate it.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-2">
                  Innovation
                </div>
                <div className="text-slate-400 text-sm">Pushing boundaries in creative technology</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-2">
                  Collaboration
                </div>
                <div className="text-slate-400 text-sm">Working closely with creators and filmmakers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-2">
                  Excellence
                </div>
                <div className="text-slate-400 text-sm">Delivering professional-grade solutions</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Team 