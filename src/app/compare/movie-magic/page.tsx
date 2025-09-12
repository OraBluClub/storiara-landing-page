'use client'

import { motion } from 'framer-motion'
import { Check, X, Zap, Brain, DollarSign, Users, Sparkles } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { getAssetPath } from '@/lib/utils'

const MovieMagicComparison = () => {
  const comparisonData = [
    {
      feature: 'AI-Powered Script Analysis',
      storiara: true,
      moviemagic: false,
      storiaraDetail: 'Advanced AI reads 10+ script formats, extracts scenes, characters, and plot consistency',
      moviemagicDetail: 'Manual script breakdown required'
    },
    {
      feature: 'Modern Cloud Platform',
      storiara: true,
      moviemagic: false,
      storiaraDetail: 'Access anywhere, automatic backups, real-time collaboration',
      moviemagicDetail: 'Desktop-only, outdated interface from the 90s'
    },
    {
      feature: 'AI Visual Generation',
      storiara: true,
      moviemagic: false,
      storiaraDetail: 'Generate character images, storyboards, logos, and marketing materials',
      moviemagicDetail: 'No visual generation capabilities'
    },
    {
      feature: 'Affordable Pricing',
      storiara: true,
      moviemagic: false,
      storiaraDetail: '$9.99/month with unlimited projects and AI features',
      moviemagicDetail: '$489 upfront + expensive monthly subscriptions'
    },
    {
      feature: 'Instant Budget Estimates',
      storiara: true,
      moviemagic: false,
      storiaraDetail: 'AI generates budget estimates from script analysis',
      moviemagicDetail: 'Requires separate Movie Magic Budgeting software'
    },
    {
      feature: 'Industry Standard Scheduling',
      storiara: true,
      moviemagic: true,
      storiaraDetail: 'AI-optimized scheduling with drag-and-drop interface',
      moviemagicDetail: 'Traditional stripboard scheduling'
    },
    {
      feature: 'Script Import',
      storiara: true,
      moviemagic: true,
      storiaraDetail: 'Supports 10+ formats with AI understanding',
      moviemagicDetail: 'Basic script import functionality'
    },
    {
      feature: 'Multi-Episode Management',
      storiara: true,
      moviemagic: true,
      storiaraDetail: 'AI-powered multi-project management',
      moviemagicDetail: 'Multi-episode scheduling features'
    }
  ]

  const pricingComparison = {
    storiara: {
      free: { price: '$0', features: ['3 stories', '10 AI calls', 'Basic analysis', 'Modern interface'] },
      pro: { price: '$9.99', originalPrice: '$19.99', features: ['Unlimited stories', '1,000 AI calls', 'Full AI suite', 'Cloud-based'] },
      enterprise: { price: 'Custom', features: ['Unlimited everything', 'Custom integrations', 'White-label'] }
    },
    moviemagic: {
      upfront: { price: '$489', features: ['One-time purchase', 'Desktop only', 'No AI features'] },
      monthly: { price: '$29+', features: ['Monthly subscription', 'Limited cloud access', 'Outdated interface'] },
      academic: { price: '$109', features: ['Student discount', 'Still desktop-only', 'Limited features'] }
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
              <span className="text-3xl md:text-4xl font-bold text-slate-300">Movie Magic</span>
            </div>
            <p className="text-lg text-slate-400 mb-6 max-w-2xl mx-auto">
              Compare modern AI-powered filmmaking with outdated desktop software from the 90s
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
                <p className="text-slate-400 text-xs">Modern cloud platform</p>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-primary/10 border border-primary/20 rounded-lg p-3 backdrop-blur-sm"
              >
                <div className="flex items-center justify-center mb-1">
                  <DollarSign className="h-5 w-5 text-primary mr-2" />
                  <span className="text-primary font-semibold text-sm">50x Cheaper</span>
                </div>
                <p className="text-slate-400 text-xs">$9.99 vs $489 upfront</p>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-primary/10 border border-primary/20 rounded-lg p-3 backdrop-blur-sm"
              >
                <div className="flex items-center justify-center mb-1">
                  <Sparkles className="h-5 w-5 text-primary mr-2" />
                  <span className="text-primary font-semibold text-sm">Cloud-Based</span>
                </div>
                <p className="text-slate-400 text-xs">Access anywhere, anytime</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Modern AI vs Legacy Desktop Software
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              See why it&apos;s time to move beyond Movie Magic&apos;s outdated approach
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
              <div className="text-slate-300 font-semibold text-center text-sm flex items-center justify-center h-full">Movie Magic</div>
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
                  {item.moviemagic ? (
                    <Check className="h-5 w-5 text-green-400 mb-2" />
                  ) : (
                    <X className="h-5 w-5 text-red-400 mb-2" />
                  )}
                  <p className="text-xs text-slate-500 text-center leading-tight">{item.moviemagicDetail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Comparison */}
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
              Modern Pricing vs Legacy Costs
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Stop paying 90s prices for 90s software. Get modern AI features at a fraction of the cost.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Storiara Pricing */}
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
                <p className="text-slate-400 text-sm">Modern AI-Powered Platform</p>
              </div>
              
              <div className="space-y-6">
                {Object.entries(pricingComparison.storiara).map(([plan, details]) => (
                  <div key={plan} className="bg-slate-900/50 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-3">
                      <h4 className="capitalize font-semibold text-white">{plan}</h4>
                      <span className="text-primary font-bold">{details.price}{plan !== 'enterprise' ? '/mo' : ''}</span>
                    </div>
                    <ul className="space-y-1">
                      {details.features.map((feature, idx) => (
                        <li key={idx} className="text-slate-400 text-sm flex items-center">
                          <Check className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Movie Magic Pricing */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 border border-slate-600 rounded-2xl p-8"
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-slate-300 mb-2">Movie Magic</h3>
                <p className="text-slate-400">Legacy Desktop Software</p>
              </div>
              
              <div className="space-y-6">
                {Object.entries(pricingComparison.moviemagic).map(([plan, details]) => (
                  <div key={plan} className="bg-slate-700/50 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-3">
                      <h4 className="capitalize font-semibold text-slate-300">{plan.replace('_', ' ')}</h4>
                      <span className="text-slate-300 font-bold">{details.price}{plan === 'monthly' ? '/mo' : ''}</span>
                    </div>
                    <ul className="space-y-1">
                      {details.features.map((feature, idx) => (
                        <li key={idx} className="text-slate-500 text-sm flex items-center">
                          <X className="h-4 w-4 text-red-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <div className="bg-gradient-to-r from-primary/20 to-primary/10 border border-primary/30 rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">Save $479 in Your First Year</h3>
              <p className="text-slate-300 mb-6">
                Movie Magic costs $489 upfront plus monthly fees. Storiara gives you more features for just $9.99/month with no upfront costs.
              </p>
              <Link
                href="https://app.storiara.com/signup"
                className="inline-flex items-center bg-gradient-to-r from-primary to-primary-dark hover:from-primary-light hover:to-primary-dark text-white px-8 py-4 rounded-lg font-semibold shadow-lg shadow-primary/30 transition-all duration-300"
              >
                <Zap className="mr-2 h-5 w-5" />
                Modernize Your Workflow
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Switch Section */}
      <section className="py-20 bg-gradient-to-b from-transparent via-primary/5 to-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              It&apos;s Time to Leave the 90s Behind
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-900/50 backdrop-blur-xl border border-primary/20 rounded-2xl p-8 text-center"
            >
              <Brain className="h-12 w-12 text-primary mx-auto mb-6" />
              <h3 className="text-xl font-bold text-white mb-4">AI Intelligence</h3>
              <p className="text-slate-400">
                While Movie Magic requires manual work, AI handles script analysis, breakdowns, and visual generation automatically.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-slate-900/50 backdrop-blur-xl border border-primary/20 rounded-2xl p-8 text-center"
            >
              <Users className="h-12 w-12 text-primary mx-auto mb-6" />
              <h3 className="text-xl font-bold text-white mb-4">Modern Collaboration</h3>
              <p className="text-slate-400">
                Movie Magic locks you to one desktop. AI works anywhere with real-time collaboration and cloud synchronization.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-slate-900/50 backdrop-blur-xl border border-primary/20 rounded-2xl p-8 text-center"
            >
              <DollarSign className="h-12 w-12 text-primary mx-auto mb-6" />
              <h3 className="text-xl font-bold text-white mb-4">Better Value</h3>
              <p className="text-slate-400">
                Get more features, better support, and modern AI capabilities for 50x less than Movie Magic&apos;s outdated pricing model.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default MovieMagicComparison