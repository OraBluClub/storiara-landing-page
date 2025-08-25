'use client'

import { motion } from 'framer-motion'
import { Check, X, Zap, Brain, DollarSign, Users, Sparkles, Target } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { getAssetPath } from '@/lib/utils'

const FilmustageComparison = () => {
  const comparisonData = [
    {
      feature: 'AI Script Analysis Accuracy',
      storiara: true,
      filmustage: true,
      storiaraDetail: 'Advanced AI with 95%+ accuracy plus plot consistency analysis',
      filmustageDetail: '86% accuracy rate, limited to basic element extraction'
    },
    {
      feature: 'Visual AI Generation',
      storiara: true,
      filmustage: false,
      storiaraDetail: 'Generate character images, storyboards, logos, and marketing materials',
      filmustageDetail: 'No visual generation capabilities'
    },
    {
      feature: 'Complete Pre-Production Suite',
      storiara: true,
      filmustage: false,
      storiaraDetail: 'Full workflow from script to shoot including scheduling and budgeting',
      filmustageDetail: 'Primarily focused on script breakdown only'
    },
    {
      feature: 'Affordable Individual Plans',
      storiara: true,
      filmustage: false,
      storiaraDetail: '$9.99/month for unlimited projects and full AI suite',
      filmustageDetail: 'Enterprise-focused pricing, expensive for indie filmmakers'
    },
    {
      feature: 'Instant Character Profiles',
      storiara: true,
      filmustage: true,
      storiaraDetail: 'AI-generated character descriptions, backstories, and visual representations',
      filmustageDetail: 'Basic character extraction from scripts'
    },
    {
      feature: 'Multi-Format Script Support',
      storiara: true,
      filmustage: true,
      storiaraDetail: 'Supports 10+ formats with intelligent understanding',
      filmustageDetail: 'Good format support for breakdowns'
    },
    {
      feature: 'Real-time Collaboration',
      storiara: true,
      filmustage: true,
      storiaraDetail: 'Role-based permissions with shared workspaces',
      filmustageDetail: 'Team collaboration features'
    },
    {
      feature: 'Export Compatibility',
      storiara: true,
      filmustage: true,
      storiaraDetail: 'Export to all major formats plus direct app integrations',
      filmustageDetail: 'PDF, Final Draft, Movie Magic, and Gorilla exports'
    }
  ]

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-16 bg-gradient-to-b from-black via-primary/5 to-black">
        {/* Dark background with subtle blue glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-primary/10 to-primary/5" />
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        
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
              <span className="text-4xl md:text-5xl font-bold text-slate-300">Filmustage</span>
            </div>
            <p className="text-lg text-slate-400 mb-6 max-w-2xl mx-auto">
              Both use AI, but only one offers complete pre-production with visual generation
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-primary/10 border border-primary/20 rounded-lg p-3 backdrop-blur-sm"
              >
                <div className="flex items-center justify-center mb-1">
                  <Sparkles className="h-5 w-5 text-primary mr-2" />
                  <span className="text-primary font-semibold text-sm">Visual AI</span>
                </div>
                <p className="text-slate-400 text-xs">Generate images & storyboards</p>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-primary/10 border border-primary/20 rounded-lg p-3 backdrop-blur-sm"
              >
                <div className="flex items-center justify-center mb-1">
                  <Target className="h-5 w-5 text-primary mr-2" />
                  <span className="text-primary font-semibold text-sm">Complete Suite</span>
                </div>
                <p className="text-slate-400 text-xs">Full pre-production workflow</p>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-primary/10 border border-primary/20 rounded-lg p-3 backdrop-blur-sm"
              >
                <div className="flex items-center justify-center mb-1">
                  <DollarSign className="h-5 w-5 text-primary mr-2" />
                  <span className="text-primary font-semibold text-sm">Indie-Friendly</span>
                </div>
                <p className="text-slate-400 text-xs">$9.99/month vs Enterprise pricing</p>
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
              AI vs AI: Which Does More?
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              While Filmustage focuses on script breakdown, AI delivers complete pre-production
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
              <div className="text-slate-300 font-semibold text-center text-sm flex items-center justify-center h-full">Filmustage</div>
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
                  {item.filmustage ? (
                    <Check className="h-5 w-5 text-green-400 mb-2" />
                  ) : (
                    <X className="h-5 w-5 text-red-400 mb-2" />
                  )}
                  <p className="text-xs text-slate-500 text-center leading-tight">{item.filmustageDetail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What Sets AI Apart */}
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
              What Sets Our AI Apart
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              While Filmustage stops at script breakdown, we take you all the way to production
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-900/30 backdrop-blur-xl border border-primary/10 rounded-xl p-5 text-center"
            >
              <Sparkles className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="text-base font-bold text-white mb-2">Visual AI Generation</h3>
              <p className="text-slate-400 text-xs">
                Generate character images, storyboards, logos, and marketing materials that Filmustage simply can&apos;t create.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-slate-900/30 backdrop-blur-xl border border-primary/10 rounded-xl p-5 text-center"
            >
              <Target className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="text-base font-bold text-white mb-2">Complete Workflow</h3>
              <p className="text-slate-400 text-xs">
                From script analysis to shooting schedules, budgets, and call sheets - all in one platform.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-slate-900/30 backdrop-blur-xl border border-primary/10 rounded-xl p-5 text-center"
            >
              <Users className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="text-base font-bold text-white mb-2">Indie-Friendly Pricing</h3>
              <p className="text-slate-400 text-xs">
                Built for independent filmmakers with accessible pricing, not just enterprise clients.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-slate-900/30 backdrop-blur-xl border border-primary/10 rounded-xl p-5 text-center"
            >
              <Brain className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="text-base font-bold text-white mb-2">Advanced AI Analysis</h3>
              <p className="text-slate-400 text-xs">
                Goes beyond basic extraction with plot consistency analysis and character development insights.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Head-to-Head Stats */}
      <section className="py-16 relative bg-gradient-to-b from-transparent via-primary/5 to-primary/10">
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
              Head-to-Head Comparison
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Storiara Stats */}
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
                </div>
                <p className="text-slate-400 text-sm">Complete AI Production Platform</p>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-slate-300 text-sm">AI Accuracy</span>
                  <span className="text-primary font-bold text-sm">95%+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-300 text-sm">Visual Generation</span>
                  <span className="text-green-400 font-bold text-sm">✓ Full Suite</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-300 text-sm">Workflow Coverage</span>
                  <span className="text-primary font-bold text-sm">Complete Pre-Production</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-300 text-sm">Pricing Model</span>
                  <span className="text-green-400 font-bold text-sm">$9.99/month</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-300 text-sm">Target Users</span>
                  <span className="text-primary font-bold text-sm">All Filmmakers</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-300 text-sm">Industry Focus</span>
                  <span className="text-primary font-bold text-sm">Film & Video</span>
                </div>
              </div>
            </motion.div>

            {/* Filmustage Stats */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-slate-800/30 border border-slate-600/50 rounded-xl p-6"
            >
              <div className="text-center mb-6">
                <h3 className="text-lg font-bold text-slate-300 mb-1">Filmustage</h3>
                <p className="text-slate-500 text-sm">Script Breakdown Specialist</p>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-slate-400 text-sm">AI Accuracy</span>
                  <span className="text-slate-300 text-sm">86%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400 text-sm">Visual Generation</span>
                  <span className="text-red-400 font-bold text-sm">✗ None</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400 text-sm">Workflow Coverage</span>
                  <span className="text-slate-300 text-sm">Script Breakdown Only</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400 text-sm">Pricing Model</span>
                  <span className="text-slate-300 text-sm">Enterprise Focus</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400 text-sm">Target Users</span>
                  <span className="text-slate-300 text-sm">Large Productions</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400 text-sm">Industry Focus</span>
                  <span className="text-slate-300 text-sm">Film & Game Dev</span>
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
              <h3 className="text-xl font-bold text-white mb-3">Ready for Complete Pre-Production?</h3>
              <p className="text-slate-400 mb-4 text-sm">
                While Filmustage handles breakdown, AI handles everything. From script analysis to visual generation and complete production planning.
              </p>
              <Link
                href="https://app.storiara.com/signup"
                className="inline-flex items-center bg-gradient-to-r from-primary to-primary-dark hover:from-accent hover:to-primary text-white px-6 py-3 rounded-lg font-medium shadow-lg shadow-primary/20 transition-all duration-300 text-sm"
              >
                <Zap className="mr-2 h-4 w-4" />
                Get the Complete Solution
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default FilmustageComparison