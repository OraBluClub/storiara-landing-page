'use client'

import { motion } from 'framer-motion'
import { Check, X, Zap, Brain, DollarSign, Users, Clock, Sparkles } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { getAssetPath } from '@/lib/utils'

const StudioBinderComparison = () => {
  const comparisonData = [
    {
      feature: 'AI-Powered Script Analysis',
      storiara: true,
      studiobinder: false,
      storiaraDetail: 'Advanced AI reads 10+ script formats, extracts scenes, characters, and plot consistency',
      studiobinderDetail: 'Manual script breakdown required'
    },
    {
      feature: 'Instant Pre-Production Generation',
      storiara: true,
      studiobinder: false,
      storiaraDetail: '95% faster automated breakdowns with AI character profiles and budget estimates',
      studiobinderDetail: 'Time-intensive manual planning process'
    },
    {
      feature: 'AI Visual Generation',
      storiara: true,
      studiobinder: false,
      storiaraDetail: 'Generate character images, storyboards, logos, and marketing materials with AI',
      studiobinderDetail: 'No AI visual generation capabilities'
    },
    {
      feature: 'Affordable Pro Plan',
      storiara: true,
      studiobinder: false,
      storiaraDetail: '$9.99/month with 1,000 AI calls and unlimited stories',
      studiobinderDetail: 'Starts at $42/month - 320% more expensive'
    },
    {
      feature: 'Script Format Support',
      storiara: true,
      studiobinder: true,
      storiaraDetail: 'Supports 10+ formats with AI understanding',
      studiobinderDetail: 'Basic script import functionality'
    },
    {
      feature: 'Shooting Schedules',
      storiara: true,
      studiobinder: true,
      storiaraDetail: 'AI-generated schedules with intelligent optimization',
      studiobinderDetail: 'Manual stripboard scheduling'
    },
    {
      feature: 'Call Sheets',
      storiara: true,
      studiobinder: true,
      storiaraDetail: 'Auto-generated from AI analysis with all production details',
      studiobinderDetail: 'Standard call sheet creation'
    },
    {
      feature: 'Real-time Collaboration',
      storiara: true,
      studiobinder: true,
      storiaraDetail: 'Shared workspaces with role-based permissions',
      studiobinderDetail: 'Team collaboration features'
    }
  ]

  const pricingComparison = {
    storiara: {
      free: { price: '$0', features: ['3 stories', '10 AI calls', 'Basic analysis'] },
      pro: { price: '$9.99', features: ['Unlimited stories', '1,000 AI calls', 'Full AI suite'] },
      enterprise: { price: 'Custom', features: ['Unlimited everything', 'Custom integrations', 'White-label'] }
    },
    studiobinder: {
      free: { price: 'Limited', features: ['Very limited features', 'Watermarked outputs'] },
      starter: { price: '$42', features: ['Basic project management', 'Limited users'] },
      professional: { price: '$127+', features: ['Full features', 'More users'] }
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
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
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
              <span className="text-3xl md:text-4xl font-bold text-slate-300">StudioBinder</span>
            </div>
            <p className="text-lg text-slate-400 mb-6 max-w-2xl mx-auto">
              See why filmmakers are choosing AI-powered automation over traditional workflows
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
                <p className="text-slate-400 text-xs">95% faster breakdowns</p>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-primary/10 border border-primary/20 rounded-lg p-3 backdrop-blur-sm"
              >
                <div className="flex items-center justify-center mb-1">
                  <DollarSign className="h-5 w-5 text-primary mr-2" />
                  <span className="text-primary font-semibold text-sm">320% Cheaper</span>
                </div>
                <p className="text-slate-400 text-xs">$9.99 vs $42/month</p>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-primary/10 border border-primary/20 rounded-lg p-3 backdrop-blur-sm"
              >
                <div className="flex items-center justify-center mb-1">
                  <Sparkles className="h-5 w-5 text-primary mr-2" />
                  <span className="text-primary font-semibold text-sm">AI Visuals</span>
                </div>
                <p className="text-slate-400 text-xs">Generate storyboards & assets</p>
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
              Feature-by-Feature Comparison
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              See how AI-powered approach compares to StudioBinder's traditional methods
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
              <div className="text-slate-300 font-semibold text-center text-sm flex items-center justify-center h-full">StudioBinder</div>
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
                  {item.studiobinder ? (
                    <Check className="h-5 w-5 text-green-400 mb-2" />
                  ) : (
                    <X className="h-5 w-5 text-red-400 mb-2" />
                  )}
                  <p className="text-xs text-slate-500 text-center leading-tight">{item.studiobinderDetail}</p>
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
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Pricing That Makes Sense
            </h2>
            <p className="text-slate-400 text-lg max-w-3xl mx-auto">
              Get more features for less money with Storiara's AI-powered efficiency
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Storiara Pricing */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary/20 to-primary/5 border-2 border-primary/30 rounded-2xl p-8"
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-primary mb-2">Storiara</h3>
                <p className="text-slate-300">AI-Powered Production Platform</p>
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

            {/* StudioBinder Pricing */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 border border-slate-600 rounded-2xl p-8"
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-slate-300 mb-2">StudioBinder</h3>
                <p className="text-slate-400">Traditional Production Management</p>
              </div>
              
              <div className="space-y-6">
                {Object.entries(pricingComparison.studiobinder).map(([plan, details]) => (
                  <div key={plan} className="bg-slate-700/50 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-3">
                      <h4 className="capitalize font-semibold text-slate-300">{plan}</h4>
                      <span className="text-slate-300 font-bold">{details.price}{plan !== 'free' ? '/mo' : ''}</span>
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
              <h3 className="text-2xl font-bold text-white mb-4">Save 320% on Your Production Budget</h3>
              <p className="text-slate-300 mb-6">
                Switch from StudioBinder's $42/month to Storiara's $9.99/month and get AI-powered features that aren't available anywhere else.
              </p>
              <Link
                href="https://app.storiara.com/signup"
                className="inline-flex items-center bg-gradient-to-r from-primary to-primary-dark hover:from-primary-light hover:to-primary-dark text-white px-8 py-4 rounded-lg font-semibold shadow-lg shadow-primary/30 transition-all duration-300"
              >
                <Zap className="mr-2 h-5 w-5" />
                Start Saving Today
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
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why Filmmakers Are Switching to Storiara
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
              <Clock className="h-12 w-12 text-primary mx-auto mb-6" />
              <h3 className="text-xl font-bold text-white mb-4">Time Savings</h3>
              <p className="text-slate-400">
                What takes weeks in StudioBinder takes minutes with Storiara's AI. 95% faster script breakdowns mean more time for creativity.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-slate-900/50 backdrop-blur-xl border border-primary/20 rounded-2xl p-8 text-center"
            >
              <DollarSign className="h-12 w-12 text-primary mx-auto mb-6" />
              <h3 className="text-xl font-bold text-white mb-4">Cost Effective</h3>
              <p className="text-slate-400">
                Save over $380/year compared to StudioBinder while getting advanced AI features that traditional tools simply don't have.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-slate-900/50 backdrop-blur-xl border border-primary/20 rounded-2xl p-8 text-center"
            >
              <Sparkles className="h-12 w-12 text-primary mx-auto mb-6" />
              <h3 className="text-xl font-bold text-white mb-4">AI Advantage</h3>
              <p className="text-slate-400">
                Generate character images, storyboards, and marketing materials instantly. StudioBinder simply can't compete with AI creativity.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default StudioBinderComparison