'use client'

import { motion } from 'framer-motion'
import { Check, X, Zap, Brain, DollarSign, Users, Clock, Sparkles, Calendar, Cloud } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { getAssetPath } from '@/lib/utils'

const GorillaSchedulingComparison = () => {
  const comparisonData = [
    {
      feature: 'AI-Powered Script Analysis',
      storiara: true,
      gorilla: false,
      storiaraDetail: 'Advanced AI reads scripts and auto-generates schedules from analysis',
      gorillaDetail: 'Manual script breakdown and scheduling required'
    },
    {
      feature: 'Cloud-Based Platform',
      storiara: true,
      gorilla: false,
      storiaraDetail: 'Access anywhere, automatic backups, real-time collaboration',
      gorillaDetail: 'Desktop-only software, limited portability'
    },
    {
      feature: 'AI Visual Generation',
      storiara: true,
      gorilla: false,
      storiaraDetail: 'Generate character images, storyboards, and marketing materials',
      gorillaDetail: 'No visual generation capabilities'
    },
    {
      feature: 'Affordable Monthly Pricing',
      storiara: true,
      gorilla: false,
      storiaraDetail: '$9.99/month with unlimited projects and AI features',
      gorillaDetail: '$29/month minimum, $269/year upfront for basic features'
    },
    {
      feature: 'Instant Budget Integration',
      storiara: true,
      gorilla: false,
      storiaraDetail: 'AI-generated budgets included in the same platform',
      gorillaDetail: 'Requires separate Gorilla Budgeting purchase ($49/month combo)'
    },
    {
      feature: 'Stripboard Scheduling',
      storiara: true,
      gorilla: true,
      storiaraDetail: 'AI-optimized scheduling with intelligent recommendations',
      gorillaDetail: 'Traditional drag-and-drop stripboard interface'
    },
    {
      feature: 'Call Sheet Generation',
      storiara: true,
      gorilla: true,
      storiaraDetail: 'Auto-generated from AI analysis with all production details',
      gorillaDetail: 'Koala Call Sheets add-on required for professional output'
    },
    {
      feature: 'Industry Reports',
      storiara: true,
      gorilla: true,
      storiaraDetail: 'AI-enhanced reports with insights and recommendations',
      gorillaDetail: 'Dozens of industry-standard report templates'
    }
  ]

  const pricingComparison = {
    storiara: {
      free: { price: '$0', features: ['3 stories', '10 AI calls', 'Cloud-based', 'Modern interface'] },
      pro: { price: '$9.99', features: ['Unlimited stories', '1,000 AI calls', 'Full AI suite', 'All features included'] },
      enterprise: { price: 'Custom', features: ['Unlimited everything', 'Custom integrations', 'White-label'] }
    },
    gorilla: {
      monthly: { price: '$29', features: ['Desktop only', 'Basic scheduling', 'No AI features'] },
      combo: { price: '$49', features: ['Scheduling + Budgeting', 'Still desktop-only', 'No visual generation'] },
      yearly: { price: '$269', features: ['Annual commitment', 'Same limitations', 'No refunds'] }
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
              <span className="text-3xl md:text-4xl font-bold text-slate-300">Gorilla Scheduling</span>
            </div>
            <p className="text-lg text-slate-400 mb-6 max-w-2xl mx-auto">
              Compare modern cloud-based AI scheduling with desktop-only traditional tools
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-primary/10 border border-primary/20 rounded-lg p-3 backdrop-blur-sm"
              >
                <div className="flex items-center justify-center mb-1">
                  <Cloud className="h-5 w-5 text-primary mr-2" />
                  <span className="text-primary font-semibold text-sm">Cloud-Based</span>
                </div>
                <p className="text-slate-400 text-xs">Access anywhere, anytime</p>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-primary/10 border border-primary/20 rounded-lg p-3 backdrop-blur-sm"
              >
                <div className="flex items-center justify-center mb-1">
                  <DollarSign className="h-5 w-5 text-primary mr-2" />
                  <span className="text-primary font-semibold text-sm">3x Cheaper</span>
                </div>
                <p className="text-slate-400 text-xs">$9.99 vs $29+ monthly</p>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-primary/10 border border-primary/20 rounded-lg p-3 backdrop-blur-sm"
              >
                <div className="flex items-center justify-center mb-1">
                  <Brain className="h-5 w-5 text-primary mr-2" />
                  <span className="text-primary font-semibold text-sm">AI-Powered</span>
                </div>
                <p className="text-slate-400 text-xs">Intelligent scheduling</p>
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
              Modern Cloud AI vs Desktop-Only Tools
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              See how modern approach compares to Gorilla's legacy desktop software
            </p>
          </motion.div>

          <div className="bg-slate-900/30 backdrop-blur-xl rounded-xl border border-primary/10 overflow-hidden">
            <div className="grid grid-cols-3 gap-4 p-4 bg-slate-800/30 border-b border-primary/10">
              <div className="text-slate-300 font-semibold text-sm">Feature</div>
              <div className="flex items-center justify-center">
                <Image
                  src={getAssetPath("/assets/storiara.svg")}
                  alt="Storiara"
                  width={120}
                  height={24}
                  className="h-5 w-auto"
                />
              </div>
              <div className="text-slate-300 font-semibold text-center text-sm">Gorilla Scheduling</div>
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
                  {item.gorilla ? (
                    <Check className="h-5 w-5 text-green-400 mb-2" />
                  ) : (
                    <X className="h-5 w-5 text-red-400 mb-2" />
                  )}
                  <p className="text-xs text-slate-500 text-center leading-tight">{item.gorillaDetail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Comparison */}
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
              Cloud vs Desktop: The Modern Choice
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              See why cloud-based platforms are the future of production management
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Storiara Platform */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary/15 to-primary/5 border border-primary/20 rounded-xl p-6"
            >
              <div className="text-center mb-6">
                <Cloud className="h-10 w-10 text-primary mx-auto mb-3" />
                <div className="flex items-center justify-center mb-2">
                  <Image
                    src={getAssetPath("/assets/storiara.svg")}
                    alt="Storiara"
                    width={120}
                    height={24}
                    className="h-5 w-auto"
                  />
                </div>
                <p className="text-slate-400 text-sm">Modern Cloud Platform</p>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center">
                  <Check className="h-4 w-4 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-slate-300 text-sm">Access from anywhere with internet</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-4 w-4 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-slate-300 text-sm">Automatic backups and version control</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-4 w-4 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-slate-300 text-sm">Real-time collaboration with team members</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-4 w-4 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-slate-300 text-sm">Always up-to-date with latest features</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-4 w-4 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-slate-300 text-sm">Works on any device or platform</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-4 w-4 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-slate-300 text-sm">AI processing power in the cloud</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-4 w-4 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-slate-300 text-sm">Secure, encrypted data storage</span>
                </div>
              </div>
            </motion.div>

            {/* Gorilla Platform */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-slate-800/30 border border-slate-600/50 rounded-xl p-6"
            >
              <div className="text-center mb-6">
                <Calendar className="h-10 w-10 text-slate-400 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-slate-300 mb-1">Gorilla Scheduling</h3>
                <p className="text-slate-500 text-sm">Desktop-Only Software</p>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center">
                  <X className="h-4 w-4 text-red-400 mr-3 flex-shrink-0" />
                  <span className="text-slate-400 text-sm">Tied to one computer/license</span>
                </div>
                <div className="flex items-center">
                  <X className="h-4 w-4 text-red-400 mr-3 flex-shrink-0" />
                  <span className="text-slate-400 text-sm">Manual backups required</span>
                </div>
                <div className="flex items-center">
                  <X className="h-4 w-4 text-red-400 mr-3 flex-shrink-0" />
                  <span className="text-slate-400 text-sm">Limited collaboration options</span>
                </div>
                <div className="flex items-center">
                  <X className="h-4 w-4 text-red-400 mr-3 flex-shrink-0" />
                  <span className="text-slate-400 text-sm">Software updates require manual installation</span>
                </div>
                <div className="flex items-center">
                  <X className="h-4 w-4 text-red-400 mr-3 flex-shrink-0" />
                  <span className="text-slate-400 text-sm">Windows/Mac only, no mobile access</span>
                </div>
                <div className="flex items-center">
                  <X className="h-4 w-4 text-red-400 mr-3 flex-shrink-0" />
                  <span className="text-slate-400 text-sm">No AI capabilities</span>
                </div>
                <div className="flex items-center">
                  <X className="h-4 w-4 text-red-400 mr-3 flex-shrink-0" />
                  <span className="text-slate-400 text-sm">Risk of data loss without backups</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Comparison */}
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
              Fair Pricing vs Hidden Costs
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Gorilla's pricing adds up quickly with required add-ons and annual commitments
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
                    width={120}
                    height={24}
                    className="h-5 w-auto"
                  />
                </div>
                <p className="text-slate-400 text-sm">All-Inclusive Pricing</p>
              </div>
              
              <div className="space-y-4">
                {Object.entries(pricingComparison.storiara).map(([plan, details]) => (
                  <div key={plan} className="bg-slate-900/30 rounded-lg p-3">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="capitalize font-semibold text-white text-sm">{plan}</h4>
                      <span className="text-primary font-bold text-sm">{details.price}{plan !== 'enterprise' ? '/mo' : ''}</span>
                    </div>
                    <ul className="space-y-1">
                      {details.features.map((feature, idx) => (
                        <li key={idx} className="text-slate-400 text-xs flex items-center">
                          <Check className="h-3 w-3 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Gorilla Pricing */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-slate-800/30 border border-slate-600/50 rounded-xl p-6"
            >
              <div className="text-center mb-6">
                <h3 className="text-lg font-bold text-slate-300 mb-1">Gorilla Scheduling</h3>
                <p className="text-slate-500 text-sm">Add-ons Required</p>
              </div>
              
              <div className="space-y-4">
                {Object.entries(pricingComparison.gorilla).map(([plan, details]) => (
                  <div key={plan} className="bg-slate-700/30 rounded-lg p-3">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="capitalize font-semibold text-slate-300 text-sm">{plan.replace('-', ' ')}</h4>
                      <span className="text-slate-300 font-bold text-sm">{details.price}{plan !== 'yearly' ? '/mo' : '/yr'}</span>
                    </div>
                    <ul className="space-y-1">
                      {details.features.map((feature, idx) => (
                        <li key={idx} className="text-slate-500 text-xs flex items-center">
                          <X className="h-3 w-3 text-red-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                <div className="bg-slate-600/30 rounded-lg p-3">
                  <p className="text-slate-400 text-xs">
                    + Koala Call Sheets add-on for professional output<br/>
                    + The Gorilla Ratebook for industry rates<br/>
                    + No refunds on subscriptions
                  </p>
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
              <h3 className="text-xl font-bold text-white mb-3">Save $200+ Per Year</h3>
              <p className="text-slate-400 mb-4 text-sm">
                Gorilla charges $29-49/month for desktop-only features. Get more with cloud platform and AI for just $9.99/month.
              </p>
              <Link
                href="https://app.storiara.com/signup"
                className="inline-flex items-center bg-gradient-to-r from-primary to-primary-dark hover:from-accent hover:to-primary text-white px-6 py-3 rounded-lg font-medium shadow-lg shadow-primary/20 transition-all duration-300 text-sm"
              >
                <Zap className="mr-2 h-4 w-4" />
                Switch to the Cloud
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default GorillaSchedulingComparison