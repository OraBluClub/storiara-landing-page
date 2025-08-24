'use client'

import { motion } from 'framer-motion'
import { Check, X, Zap, Brain, DollarSign, Users, Clock, Sparkles, Edit, FileText } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { getAssetPath } from '@/lib/utils'

const CeltxComparison = () => {
  const comparisonData = [
    {
      feature: 'AI-Powered Script Analysis',
      storiara: true,
      celtx: false,
      storiaraDetail: 'Advanced AI reads and understands scripts, extracts elements automatically',
      celtxDetail: 'Manual script breakdown and tagging required'
    },
    {
      feature: 'AI Visual Generation',
      storiara: true,
      celtx: false,
      storiaraDetail: 'Generate character images, storyboards, logos, and marketing materials',
      celtxDetail: 'No AI visual generation capabilities'
    },
    {
      feature: 'Instant Pre-Production',
      storiara: true,
      celtx: false,
      storiaraDetail: '95% faster automated breakdowns with AI character profiles',
      celtxDetail: 'Traditional manual pre-production workflow'
    },
    {
      feature: 'Affordable Pro Tier',
      storiara: true,
      celtx: false,
      storiaraDetail: '$9.99/month with unlimited projects and AI features',
      celtxDetail: '$9.99 minimum but limited features, full suite much more expensive'
    },
    {
      feature: 'Script Writing Tools',
      storiara: true,
      celtx: true,
      storiaraDetail: 'AI-enhanced scriptwriting with intelligent suggestions',
      celtxDetail: 'Industry-standard scriptwriting with formatting tools'
    },
    {
      feature: 'Pre-Production Planning',
      storiara: true,
      celtx: true,
      storiaraDetail: 'AI-generated schedules, budgets, and production documents',
      celtxDetail: 'Traditional pre-production tools and templates'
    },
    {
      feature: 'Real-time Collaboration',
      storiara: true,
      celtx: true,
      storiaraDetail: 'Role-based permissions with AI-powered insights',
      celtxDetail: 'Collaborative editing and project sharing'
    },
    {
      feature: 'Budget Management',
      storiara: true,
      celtx: true,
      storiaraDetail: 'AI-generated budget estimates from script analysis',
      celtxDetail: 'Manual budget creation and tracking tools'
    }
  ]

  const pricingComparison = {
    storiara: {
      free: { price: '$0', features: ['3 stories', '10 AI calls', 'AI script analysis', 'Modern interface'] },
      pro: { price: '$9.99', features: ['Unlimited stories', '1,000 AI calls', 'Full AI suite', 'Visual generation'] },
      enterprise: { price: 'Custom', features: ['Unlimited everything', 'Custom integrations', 'White-label'] }
    },
    celtx: {
      free: { price: 'Limited', features: ['Very basic features', 'Limited projects', 'Watermarks'] },
      writer: { price: '$9.99', features: ['Basic scriptwriting', 'Limited pre-production', 'No AI'] },
      pro: { price: '$20+', features: ['Full features', 'More collaboration', 'Still no AI'] }
    }
  }

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-16 bg-gradient-to-b from-black via-primary/5 to-black">
        {/* Dark background with subtle blue glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-primary/10 to-primary/5" />
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(69,95,229,0.02)_25%,rgba(69,95,229,0.02)_50%,transparent_50%,transparent_75%,rgba(69,95,229,0.02)_75%)] bg-[length:40px_40px]" />
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-6 mb-8">
              <Image
                src={getAssetPath("/assets/storiara.svg")}
                alt="Storiara"
                width={240}
                height={48}
                className="h-10 w-auto filter drop-shadow-lg"
              />
              <span className="text-4xl md:text-5xl font-bold text-slate-400">vs</span>
              <span className="text-4xl md:text-5xl font-bold text-slate-300">Celtx</span>
            </div>
            <p className="text-lg text-slate-400 mb-6 max-w-2xl mx-auto">
              Compare AI-powered automation with traditional manual workflows
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-primary/10 border border-primary/20 rounded-lg p-3 backdrop-blur-sm"
              >
                <div className="flex items-center justify-center mb-1">
                  <Brain className="h-5 w-5 text-primary mr-2" />
                  <span className="text-primary font-semibold text-sm">AI-First</span>
                </div>
                <p className="text-slate-400 text-xs">Automated everything</p>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-primary/10 border border-primary/20 rounded-lg p-3 backdrop-blur-sm"
              >
                <div className="flex items-center justify-center mb-1">
                  <Clock className="h-5 w-5 text-primary mr-2" />
                  <span className="text-primary font-semibold text-sm">95% Faster</span>
                </div>
                <p className="text-slate-400 text-xs">Minutes vs weeks</p>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-primary/10 border border-primary/20 rounded-lg p-3 backdrop-blur-sm"
              >
                <div className="flex items-center justify-center mb-1">
                  <Sparkles className="h-5 w-5 text-primary mr-2" />
                  <span className="text-primary font-semibold text-sm">Visual AI</span>
                </div>
                <p className="text-slate-400 text-xs">Generate images & assets</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              AI Automation vs Manual Work
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              See how AI eliminates the manual work that Celtx still requires
            </p>
          </motion.div>

          <div className="bg-slate-900/30 backdrop-blur-xl rounded-xl border border-primary/10 overflow-hidden">
            <div className="grid grid-cols-3 gap-4 p-4 bg-slate-800/30 border-b border-primary/10 min-h-[60px] items-center">
              <div className="text-slate-300 font-semibold text-sm">Feature</div>
              <div className="flex items-center justify-center h-full">
                <div className="w-[140px] h-[28px] flex items-center justify-center">
                  <Image
                    src={getAssetPath("/assets/storiara.svg")}
                    alt="Storiara"
                    width={140}
                    height={28}
                    className="h-6 w-auto"
                    priority
                  />
                </div>
              </div>
              <div className="text-slate-300 font-semibold text-center text-sm flex items-center justify-center h-full">Celtx</div>
            </div>
            
            {comparisonData.map((item, index) => (
              <motion.div
                key={item.feature}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="grid grid-cols-3 gap-4 p-4 border-b border-slate-700/30 last:border-b-0 hover:bg-slate-800/20 transition-colors"
              >
                <div className="font-medium text-slate-200 text-sm">{item.feature}</div>
                <div className="flex flex-col items-center">
                  {item.storiara ? (
                    <Check className="h-5 w-5 text-green-400 mb-2" />
                  ) : (
                    <X className="h-5 w-5 text-red-400 mb-2" />
                  )}
                  <p className="text-xs text-slate-500 text-center leading-tight">{item.storiaraDetail}</p>
                </div>
                <div className="flex flex-col items-center">
                  {item.celtx ? (
                    <Check className="h-5 w-5 text-green-400 mb-2" />
                  ) : (
                    <X className="h-5 w-5 text-red-400 mb-2" />
                  )}
                  <p className="text-xs text-slate-500 text-center leading-tight">{item.celtxDetail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Comparison */}
      <section className="py-16 relative bg-gradient-to-b from-transparent to-primary/5">
        <div className="absolute top-1/2 right-1/4 transform -translate-y-1/2 w-64 h-64 bg-primary/5 rounded-full blur-2xl" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Time Comparison: Same Result, Different Effort
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              See how long typical pre-production tasks take in each platform
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Storiara Workflow */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary/15 to-primary/5 border border-primary/20 rounded-xl p-6"
            >
              <div className="text-center mb-6">
                <div className="flex items-center justify-center mb-2">
                  <Image
                    src={getAssetPath("/assets/storiara.svg")}
                    alt="Storiara"
                    width={140}
                    height={28}
                    className="h-6 w-auto"
                  />
                  <span className="ml-2 text-sm text-slate-400">Workflow</span>
                </div>
                <p className="text-slate-400 text-sm">AI-Powered Automation</p>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-slate-900/30 rounded-lg">
                  <span className="text-slate-300 text-sm">Script Upload & Analysis</span>
                  <span className="text-primary font-bold text-sm">30 seconds</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-slate-900/30 rounded-lg">
                  <span className="text-slate-300 text-sm">Character Profiles & Images</span>
                  <span className="text-primary font-bold text-sm">2 minutes</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-slate-900/30 rounded-lg">
                  <span className="text-slate-300 text-sm">Scene Breakdown</span>
                  <span className="text-primary font-bold text-sm">1 minute</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-slate-900/30 rounded-lg">
                  <span className="text-slate-300 text-sm">Budget Estimate</span>
                  <span className="text-primary font-bold text-sm">30 seconds</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-slate-900/30 rounded-lg">
                  <span className="text-slate-300 text-sm">Storyboard Generation</span>
                  <span className="text-primary font-bold text-sm">3 minutes</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-slate-900/30 rounded-lg">
                  <span className="text-slate-300 text-sm">Marketing Materials</span>
                  <span className="text-primary font-bold text-sm">2 minutes</span>
                </div>
                <div className="border-t border-primary/20 pt-3">
                  <div className="flex justify-between items-center font-bold">
                    <span className="text-white">Total Time:</span>
                    <span className="text-primary text-lg">9 minutes</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Celtx Workflow */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-slate-800/30 border border-slate-600/50 rounded-xl p-6"
            >
              <div className="text-center mb-6">
                <h3 className="text-lg font-bold text-slate-300 mb-1">Celtx Workflow</h3>
                <p className="text-slate-500 text-sm">Manual Process</p>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-slate-700/30 rounded-lg">
                  <span className="text-slate-400 text-sm">Script Import & Setup</span>
                  <span className="text-slate-300 text-sm">10 minutes</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-slate-700/30 rounded-lg">
                  <span className="text-slate-400 text-sm">Manual Character Creation</span>
                  <span className="text-slate-300 text-sm">2 hours</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-slate-700/30 rounded-lg">
                  <span className="text-slate-400 text-sm">Scene Breakdown & Tagging</span>
                  <span className="text-slate-300 text-sm">3 hours</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-slate-700/30 rounded-lg">
                  <span className="text-slate-400 text-sm">Manual Budget Creation</span>
                  <span className="text-slate-300 text-sm">4 hours</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-slate-700/30 rounded-lg">
                  <span className="text-slate-400 text-sm">Storyboard Creation</span>
                  <span className="text-slate-300 text-sm">6 hours</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-slate-700/30 rounded-lg">
                  <span className="text-slate-400 text-sm">Marketing Materials</span>
                  <span className="text-slate-300 text-sm">External tools needed</span>
                </div>
                <div className="border-t border-slate-600/50 pt-3">
                  <div className="flex justify-between items-center font-bold">
                    <span className="text-slate-300">Total Time:</span>
                    <span className="text-slate-300 text-lg">15+ hours</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <div className="bg-gradient-to-r from-primary/15 to-primary/5 border border-primary/20 rounded-xl p-6 max-w-xl mx-auto">
              <h3 className="text-xl font-bold text-white mb-3">Save 100+ Hours Per Project</h3>
              <p className="text-slate-400 mb-4 text-sm">
                While Celtx requires manual work for everything, AI handles your pre-production in minutes instead of weeks.
              </p>
              <Link
                href="https://app.storiara.com/signup"
                className="inline-flex items-center bg-gradient-to-r from-primary to-primary-dark hover:from-accent hover:to-primary text-white px-6 py-3 rounded-lg font-medium shadow-lg shadow-primary/20 transition-all duration-300 text-sm"
              >
                <Zap className="mr-2 h-4 w-4" />
                Start Saving Time Today
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Switch Section */}
      <section className="py-16 relative">
        <div className="absolute top-0 left-1/4 transform w-48 h-48 bg-primary/5 rounded-full blur-2xl" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Why Filmmakers Choose AI Over Manual Work
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-900/30 backdrop-blur-xl border border-primary/10 rounded-xl p-6 text-center"
            >
              <Clock className="h-10 w-10 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-bold text-white mb-3">Time is Money</h3>
              <p className="text-slate-400 text-sm">
                Every minute spent on manual breakdown is time not spent creating. AI gives you back 100+ hours per project.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-slate-900/30 backdrop-blur-xl border border-primary/10 rounded-xl p-6 text-center"
            >
              <Sparkles className="h-10 w-10 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-bold text-white mb-3">Creative Advantage</h3>
              <p className="text-slate-400 text-sm">
                Generate character images, storyboards, and marketing materials that would cost thousands to create manually.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-slate-900/30 backdrop-blur-xl border border-primary/10 rounded-xl p-6 text-center"
            >
              <Brain className="h-10 w-10 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-bold text-white mb-3">Intelligent Insights</h3>
              <p className="text-slate-400 text-sm">
                AI analysis reveals plot holes, character inconsistencies, and budget optimizations that manual review might miss.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default CeltxComparison