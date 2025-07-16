'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { ChevronDown, Mail, MessageCircle } from 'lucide-react'
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
      question: "What is Storiara?",
      answer: "Storiara is an AI-powered production platform that automates the entire pre-production pipeline. Simply upload a script, and our AI will generate breakdowns, character profiles, storyboards, budgets, schedules, and more, helping you get from idea to production-ready in minutes."
    },
    {
      question: "How does the AI script analysis work?",
      answer: "Our intelligent script analysis reads and understands your screenplay format. It automatically identifies scenes, characters, locations, dialogue, and action lines to create a structured breakdown. This breakdown becomes the data source for all other AI generation features."
    },
    {
      question: "What's the difference between the Free and Pro plans?",
      answer: "The Free plan is designed to give you a taste of our AI's power, allowing you to create one story with a limited number of AI calls. The Pro plan unlocks the full platform, offering unlimited stories, a high volume of AI calls, and access to all our premium generative features like AI storyboards, character art, and logos."
    },
    {
      question: "What can I generate with the AI tools?",
      answer: "On the Pro plan, you can generate a wide range of creative and logistical assets, including: character images, detailed storyboards (both images and videos), concept art, promotional posters, project logos, color schemes, budget estimates, equipment lists, and crew suggestions."
    },
    {
      question: "What happens if I use all my AI calls on the Pro plan?",
      answer: "Our Pro plan comes with 1,000 AI calls per month, which is more than enough for the vast majority of projects. If you're a studio with higher-volume needs, our Enterprise plan offers custom limits and dedicated processing."
    },
    {
      question: "Can I collaborate with my team?",
      answer: "Yes! Collaboration is core to Storiara. The Pro plan allows you to invite collaborators to your project, while our Enterprise plan offers advanced team management features, role-based permissions, and a centralized workspace for your entire company."
    },
    {
      question: "Is my script and project data secure?",
      answer: "Absolutely. We prioritize your data security and intellectual property. All projects are private and encrypted. We use industry-standard security protocols, and your data is never used to train third-party models. You retain full ownership of your work."
    },
    {
      question: "Can I export my data?",
      answer: "Yes. You can export schedules, call sheets, budgets, and other reports as PDFs. We are continuously working on adding more export formats and integrations with other professional filmmaking software."
    }
  ]

  return (
    <section className="py-10 pt-0 relative overflow-hidden" id="faq">
      {/* Dark background with blue glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-black to-slate-950" />
      <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-primary/15 rounded-full blur-2xl" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center p-4 rounded-xl bg-gradient-to-r from-primary/20 to-primary-dark/20 mb-6">
            <MessageCircle className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-b from-primary-foreground to-primary bg-clip-text text-transparent">
              Frequently Asked Questions
            </span>
          </h2>
          <p className="text-xl text-slate-400">
            Everything you need to know about our AI production platform.
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
              className="bg-primary/10 backdrop-blur-xl border border-primary/20 rounded-xl overflow-hidden hover:border-primary/40 transition-all duration-300"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-primary/5 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-slate-100 pr-4">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openItems.includes(index) ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="h-5 w-5 text-primary" />
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
          <div className="bg-gradient-to-r from-primary/10 to-primary-dark/10 border border-primary/30 rounded-2xl p-8">
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
                className="bg-gradient-to-r from-primary to-primary-dark hover:from-primary-light hover:to-primary-dark text-white px-6 py-3 rounded-lg font-semibold shadow-lg shadow-primary/30 transition-all duration-300"
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