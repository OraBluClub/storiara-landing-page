'use client'

import { motion } from 'framer-motion'
import { Check, X, Zap, Brain, DollarSign, Sparkles, Target } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { getAssetPath } from '@/lib/utils'

const YamduComparison = () => {
  const comparisonData = [
    {
      feature: 'AI-Powered Script Analysis',
      storiara: true,
      yamdu: false,
      storiaraDetail: 'Advanced AI understands script content and generates insights automatically',
      yamduDetail: 'Manual script breakdown and element extraction required'
    },
    {
      feature: 'AI Visual Generation',
      storiara: true,
      yamdu: false,
      storiaraDetail: 'Generate character images, storyboards, logos, and marketing materials',
      yamduDetail: 'No AI visual generation capabilities'
    },
    {
      feature: 'Affordable Individual Plans',
      storiara: true,
      yamdu: false,
      storiaraDetail: '$9.99/month for unlimited projects with full AI features',
      yamduDetail: '$33-350/month per project, expensive for independent creators'
    },
    {
      feature: 'Instant Budget Estimates',
      storiara: true,
      yamdu: false,
      storiaraDetail: 'AI generates budget estimates from script analysis automatically',
      yamduDetail: 'Manual budget creation and management tools'
    },
    {
      feature: 'Plot Consistency Analysis',
      storiara: true,
      yamdu: false,
      storiaraDetail: 'AI analyzes script for plot holes and character development issues',
      yamduDetail: 'No script content analysis capabilities'
    },
    {
      feature: 'Production Management',
      storiara: true,
      yamdu: true,
      storiaraDetail: 'AI-enhanced production workflows with intelligent recommendations',
      yamduDetail: 'Comprehensive production management suite'
    },
    {
      feature: 'Real-time Collaboration',
      storiara: true,
      yamdu: true,
      storiaraDetail: 'Role-based permissions with AI-powered project insights',
      yamduDetail: 'Team collaboration and file sharing capabilities'
    },
    {
      feature: 'Script Import Support',
      storiara: true,
      yamdu: true,
      storiaraDetail: 'Supports 10+ formats with intelligent AI understanding',
      yamduDetail: 'Import from Final Draft, PDF, and other standard formats'
    }
  ]

  const pricingComparison = {
    storiara: {
      free: { price: '$0', features: ['3 stories', '10 AI calls', 'AI analysis', 'Plot consistency'] },
      pro: { price: '$9.99', features: ['Unlimited stories', '1,000 AI calls', 'Visual generation', 'Full AI suite'] },
      enterprise: { price: 'Custom', features: ['Unlimited everything', 'Custom integrations', 'White-label'] }
    },
    yamdu: {
      spark: { price: '$33', features: ['Per project pricing', 'Basic features', 'Limited users'] },
      rise: { price: '$120', features: ['Per project pricing', 'More features', 'Still expensive'] },
      star: { price: '$350', features: ['Per project pricing', 'Full features', 'Very expensive'] }
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
              <span className="text-4xl md:text-5xl font-bold text-slate-300">Yamdu</span>
            </div>
            <p className="text-lg text-slate-400 mb-6 max-w-2xl mx-auto">
              Compare AI-powered innovation with traditional per-project pricing models
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-primary/10 border border-primary/20 rounded-lg p-3 backdrop-blur-sm"
              >
                <div className="flex items-center justify-center mb-1">
                  <Brain className="h-5 w-5 text-primary mr-2" />
                  <span className="text-primary font-semibold text-sm">AI Intelligence</span>
                </div>
                <p className="text-slate-400 text-xs">Smart script analysis</p>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-primary/10 border border-primary/20 rounded-lg p-3 backdrop-blur-sm"
              >
                <div className="flex items-center justify-center mb-1">
                  <DollarSign className="h-5 w-5 text-primary mr-2" />
                  <span className="text-primary font-semibold text-sm">10x Better Value</span>
                </div>
                <p className="text-slate-400 text-xs">$9.99 vs $33-350/project</p>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-primary/10 border border-primary/20 rounded-lg p-3 backdrop-blur-sm"
              >
                <div className="flex items-center justify-center mb-1">
                  <Target className="h-5 w-5 text-primary mr-2" />
                  <span className="text-primary font-semibold text-sm">Unlimited Projects</span>
                </div>
                <p className="text-slate-400 text-xs">No per-project fees</p>
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
              AI Innovation vs Traditional Management
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              See how AI capabilities compare to Yamdu&apos;s traditional approach
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
              <div className="text-slate-300 font-semibold text-center text-sm flex items-center justify-center h-full">Yamdu</div>
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
                  {item.yamdu ? (
                    <Check className="h-5 w-5 text-green-400 mb-2" />
                  ) : (
                    <X className="h-5 w-5 text-red-400 mb-2" />
                  )}
                  <p className="text-xs text-slate-500 text-center leading-tight">{item.yamduDetail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Model Comparison */}
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
              Fair Pricing vs Per-Project Fees
            </h2>
            <p className="text-slate-400 text-lg max-w-3xl mx-auto">
              Stop paying hundreds per project. Get unlimited access for less than one Yamdu project.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Cost Breakdown */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="lg:col-span-3 bg-slate-900/50 backdrop-blur-xl border border-primary/20 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Annual Cost Comparison</h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-primary/20 to-primary/5 border-2 border-primary/30 rounded-xl p-6">
                  <h4 className="text-xl font-bold text-primary mb-4">Storiara Annual Cost</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-slate-300">Pro Plan (12 months)</span>
                      <span className="text-primary font-bold">$119.88</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-300">Number of Projects</span>
                      <span className="text-green-400 font-bold">Unlimited</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-300">AI Features</span>
                      <span className="text-green-400 font-bold">All Included</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-300">Visual Generation</span>
                      <span className="text-green-400 font-bold">Unlimited</span>
                    </div>
                    <div className="border-t border-primary/30 pt-3">
                      <div className="flex justify-between font-bold">
                        <span className="text-white">Total Annual Cost:</span>
                        <span className="text-primary text-xl">$119.88</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-800/50 border border-slate-600 rounded-xl p-6">
                  <h4 className="text-xl font-bold text-slate-300 mb-4">Yamdu Annual Cost</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Spark Plan (3 projects)</span>
                      <span className="text-slate-300">$1,188</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Rise Plan (3 projects)</span>
                      <span className="text-slate-300">$4,320</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">AI Features</span>
                      <span className="text-red-400 font-bold">None</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Visual Generation</span>
                      <span className="text-red-400 font-bold">None</span>
                    </div>
                    <div className="border-t border-slate-600 pt-3">
                      <div className="flex justify-between font-bold">
                        <span className="text-slate-300">3 Projects/Year:</span>
                        <span className="text-slate-300 text-xl">$1,188+</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
                className="mt-8 text-center bg-gradient-to-r from-green-500/20 to-primary/20 border border-green-500/30 rounded-xl p-6"
              >
                <h4 className="text-2xl font-bold text-green-400 mb-2">You Save $1,068+ Per Year</h4>
                <p className="text-slate-300">
                  That&apos;s enough savings to fund your entire production budget while getting advanced AI features that Yamdu doesn&apos;t offer.
                </p>
              </motion.div>
            </motion.div>
          </div>

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
                <p className="text-slate-300">Unlimited Projects + AI</p>
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

            {/* Yamdu Pricing */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 border border-slate-600 rounded-2xl p-8"
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-slate-300 mb-2">Yamdu</h3>
                <p className="text-slate-400">Per-Project Pricing</p>
              </div>
              
              <div className="space-y-6">
                {Object.entries(pricingComparison.yamdu).map(([plan, details]) => (
                  <div key={plan} className="bg-slate-700/50 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-3">
                      <h4 className="capitalize font-semibold text-slate-300">{plan}</h4>
                      <span className="text-slate-300 font-bold">{details.price}/project</span>
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
                <div className="bg-slate-600/50 rounded-lg p-4">
                  <p className="text-slate-400 text-sm">
                    ⚠️ Costs multiply with each new project<br/>
                    ⚠️ No AI features available<br/>
                    ⚠️ Manual workflows only
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose AI */}
      <section className="py-16 relative bg-gradient-to-b from-transparent via-primary/5 to-primary/10">
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
              Why Filmmakers Choose Storiara Over Yamdu
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
              <DollarSign className="h-12 w-12 text-primary mx-auto mb-6" />
              <h3 className="text-xl font-bold text-white mb-4">Budget-Friendly</h3>
              <p className="text-slate-400">
                Work on unlimited projects for less than what Yamdu charges for a single project. Perfect for indie filmmakers and growing studios.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-slate-900/50 backdrop-blur-xl border border-primary/20 rounded-2xl p-8 text-center"
            >
              <Brain className="h-12 w-12 text-primary mx-auto mb-6" />
              <h3 className="text-xl font-bold text-white mb-4">AI-Powered Intelligence</h3>
              <p className="text-slate-400">
                Get intelligent script analysis, automated breakdowns, and AI-generated visuals that Yamdu&apos;s traditional approach can&apos;t match.
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
              <h3 className="text-xl font-bold text-white mb-4">Creative Assets</h3>
              <p className="text-slate-400">
                Generate character images, storyboards, logos, and marketing materials instantly - capabilities that would cost thousands through traditional methods.
              </p>
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
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Save $1,000+ Per Year?</h3>
              <p className="text-slate-300 mb-6">
                Join filmmakers who&apos;ve switched from expensive per-project pricing to unlimited AI-powered production.
              </p>
              <Link
                href="https://app.storiara.com/signup"
                className="inline-flex items-center bg-gradient-to-r from-primary to-primary-dark hover:from-primary-light hover:to-primary-dark text-white px-8 py-4 rounded-lg font-semibold shadow-lg shadow-primary/30 transition-all duration-300"
              >
                <Zap className="mr-2 h-5 w-5" />
                Start Unlimited Projects
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default YamduComparison