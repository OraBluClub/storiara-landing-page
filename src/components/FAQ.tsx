'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { ChevronDown, HelpCircle, Mail } from 'lucide-react'
import Link from 'next/link'

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  const faqs = [
    {
      question: "What types of projects can I manage with the platform?",
      answer: "Our platform supports all types of film and video production projects, from short films and documentaries to feature films and commercial productions. Whether you're an independent filmmaker or part of a large production company, our tools scale to meet your needs."
    },
    {
      question: "How does the script breakdown feature work?",
      answer: "Our intelligent script analysis automatically identifies scenes, characters, locations, and timing estimates from your screenplay. It creates a structured breakdown that serves as the foundation for all other production planning activities, saving hours of manual work."
    },
    {
      question: "Can multiple team members collaborate on the same project?",
      answer: "Yes! Our platform is built for collaboration. Team members can work simultaneously on different aspects of the project, with real-time updates and role-based permissions to ensure everyone has access to what they need while maintaining project security."
    },
    {
      question: "What scheduling optimization features are included?",
      answer: "Our advanced scheduling tools consider multiple factors including cast availability, location logistics, equipment needs, and weather conditions. The system suggests optimal shooting schedules that minimize costs and maximize efficiency while respecting all constraints."
    },
    {
      question: "How does the equipment management system work?",
      answer: "Track all your production equipment from cameras to lighting gear. The system helps you manage inventory, schedule rentals, coordinate logistics, and ensure nothing gets left behind. Integration with scheduling ensures equipment is available when and where you need it."
    },
    {
      question: "What marketing tools are available?",
      answer: "Our marketing suite includes campaign management, social media integration, audience analytics, and promotional material creation tools. Plan your marketing strategy alongside your production timeline for maximum impact."
    },
    {
      question: "Is there a mobile app available?",
      answer: "Yes, our platform is fully responsive and works seamlessly on mobile devices. Access your projects, update schedules, and collaborate with your team from anywhere on set or in the field."
    },
    {
      question: "What kind of support do you provide?",
      answer: "We offer comprehensive support including documentation, video tutorials, email support, and priority support for Professional and Enterprise plans. Enterprise customers also get dedicated account management and custom training sessions."
    },
    {
      question: "Can I export my data and integrate with other tools?",
      answer: "Absolutely! Export your data in various formats and integrate with popular tools like Final Cut Pro, Avid, and other post-production software. Our API allows for custom integrations with your existing workflow."
    },
    {
      question: "What happens to my data if I cancel my subscription?",
      answer: "You retain full access to export all your project data before your subscription ends. We provide a grace period and multiple export options to ensure you never lose your work. Your data security and ownership are our top priorities."
    }
  ]

  return (
    <section className="py-24 relative overflow-hidden" id="faq">
      {/* Dark background with blue glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-black to-slate-950" />
      <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-blue-500/15 rounded-full blur-2xl" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center p-4 rounded-xl bg-gradient-to-r from-blue-600/20 to-blue-800/20 mb-6">
            <HelpCircle className="h-8 w-8 text-blue-400" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
              Frequently Asked Questions
            </span>
          </h2>
          <p className="text-xl text-slate-400">
            Everything you need to know about our production platform
          </p>
        </motion.div>

        <div className="space-y-4 mb-16">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-900/60 backdrop-blur-xl border border-blue-600/20 rounded-xl overflow-hidden hover:border-blue-500/40 transition-all duration-300"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-blue-600/5 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-slate-100 pr-4">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openItems.includes(index) ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="h-5 w-5 text-blue-400" />
                </motion.div>
              </button>
              
              <motion.div
                initial={false}
                animate={{
                  height: openItems.includes(index) ? 'auto' : 0,
                  opacity: openItems.includes(index) ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6">
                  <p className="text-slate-400 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-600/10 to-blue-800/10 border border-blue-600/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-slate-100 mb-4">
              Still have questions?
            </h3>
            <p className="text-slate-400 mb-6">
              Our team is here to help you understand how our platform can fit into your production workflow.
            </p>
            <div className="flex justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white px-6 py-3 rounded-lg font-semibold shadow-lg shadow-blue-600/30 transition-all duration-300"
              >
                <Link href="mailto:support@storiara.com" className="flex items-center justify-center">
                  <Mail className="mr-2 h-5 w-5" />
                  Contact Support
                </Link>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FAQ 