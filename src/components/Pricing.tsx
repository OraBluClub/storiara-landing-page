'use client'

import { motion } from 'framer-motion'
import { Check, TrendingUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const Pricing = () => {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "/month",
      description: "Get started with the basics of AI-powered filmmaking",
      popular: false,
      features: [
        "Create story from script",
        "Generate logline",
        "Extract scenes & settings",
        "Analyze plot consistency",
        "Generate shotlist"
      ],
      limitations: [
        "3 stories",
        "10 AI calls per month",
        "Limited feature access"
      ],
      buttonText: "Start for Free",
      buttonLink: "https://app.storiara.com/signup"
    },
    {
      name: "Pro",
      price: "$9.99",
      originalPrice: "$19.99",
      period: "/month",
      description: "Unlock the full power of Storiara for professional results",
      popular: true,
      earlyBird: true,
      features: [
        "Everything in Free",
        "Unlimited stories",
        "1,000 AI calls per month",
        "AI Character Image Generation",
        "AI Storyboard Generation",
        "Advanced Budgeting Tools",
        "Priority support"
      ],
      limitations: [],
      buttonText: "Upgrade to Pro",
      buttonLink: "https://app.storiara.com/signup"
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "Contact us",
      description: "Tailored solutions for studios and large organizations",
      popular: false,
      features: [
        "Everything in Pro",
        "Unlimited projects & users",
        "Custom integrations (VFX, etc.)",
        "Dedicated account manager",
        "On-premise deployment options",
        "Bespoke AI model training",
        "24/7 premium support",
        "White-label solutions"
      ],
      limitations: [],
      buttonText: "Book A Demo",
      buttonLink: "https://cal.com/nickharty/storiara"
    }
  ]

  const comparisonFeatures = [
    { feature: "Story Creation", free: "3 Stories", pro: "Unlimited", enterprise: "Unlimited" },
    { feature: "AI Calls / Month", free: "10", pro: "1,000", enterprise: "Custom" },
    { feature: "AI Image & Video Generation", free: "✗", pro: <Check className="h-5 w-5 text-primary mx-auto" />, enterprise: <Check className="h-5 w-5 text-primary mx-auto" /> },
    { feature: "Advanced Budgeting", free: "✗", pro: <Check className="h-5 w-5 text-primary mx-auto" />, enterprise: <Check className="h-5 w-5 text-primary mx-auto" /> },
    { feature: "Team Collaboration", free: "Limited", pro: "Full", enterprise: "Custom" },
    { feature: "Support Level", free: "Standard", pro: "Priority", enterprise: "Dedicated" }
  ]

  return (
    <section className="py-10 relative overflow-hidden" id="pricing">
      {/* Dark background with blue glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-primary/10 to-primary/20" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-primary/15 rounded-full blur-2xl" />
      
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
              Start Free, Scale As You Grow
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            From your first script to a full-scale production, Storiara has a plan to power your story with cutting-edge AI.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20 items-stretch">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -10 }}
              className={`relative flex flex-col bg-slate-900/60 backdrop-blur-xl border rounded-2xl p-8 transform-style-3d transition-all duration-500 ${
                plan.popular 
                  ? 'border-primary/50 lg:scale-105 shadow-lg shadow-primary/30' 
                  : 'border-primary/20 hover:border-primary/40'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-primary to-primary-dark text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                    <TrendingUp className="h-4 w-4 mr-1" />
                    {plan.earlyBird ? "Early Bird" : "Most Popular"}
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-slate-100 mb-2">
                  {plan.name}
                </h3>
                <p className="text-slate-400 mb-4 h-10">
                  {plan.description}
                </p>
                <div className="mb-4">
                  {plan.originalPrice && (
                    <div className="mb-2">
                      <span className="text-2xl text-slate-500 line-through">
                        {plan.originalPrice}
                      </span>
                    </div>
                  )}
                  <span className="text-5xl font-bold bg-primary bg-clip-text text-transparent">
                    {plan.price}
                  </span>
                  {plan.period !== "Contact us" && (
                    <span className="text-slate-400 ml-2">
                      {plan.period}
                    </span>
                  )}
                </div>
              </div>

              <div className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, featureIndex) => (
                  <motion.div
                    key={featureIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: (index * 0.2) + (featureIndex * 0.1) }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300">{feature}</span>
                  </motion.div>
                ))}
                
                {plan.limitations.map((limitation, limitIndex) => (
                  <motion.div
                    key={limitIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: (index * 0.2) + ((plan.features.length + limitIndex) * 0.1) }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <div className="h-5 w-5 flex-shrink-0 mt-0.5 text-slate-500">•</div>
                    <span className="text-slate-500 text-sm">{limitation}</span>
                  </motion.div>
                ))}
              </div>

              <Button 
                className={`w-full mt-auto ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-primary to-primary-dark hover:from-primary-light hover:to-primary-dark text-white shadow-lg shadow-primary/30' 
                    : 'bg-slate-800 hover:bg-slate-700 text-slate-100 border border-primary/30 hover:border-primary/50'
                }`}
                size="lg"
                asChild
              >
                <Link href={plan.buttonLink}>
                  {plan.buttonText}
                </Link>
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Feature Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-to-b from-primary-foreground to-primary bg-clip-text text-transparent">
              Feature Comparison
            </span>
          </h3>
          
          <div className="bg-slate-900/40 backdrop-blur-xl border border-primary/30 rounded-2xl p-8 overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b border-primary/20">
                  <th className="text-left py-4 px-4 font-semibold text-slate-100">Feature</th>
                  <th className="text-center py-4 px-4 font-semibold text-slate-100">Free</th>
                  <th className="text-center py-4 px-4 font-semibold text-slate-100">Pro</th>
                  <th className="text-center py-4 px-4 font-semibold text-slate-100">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((item, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="border-b border-primary/10"
                  >
                    <td className="py-4 px-4 text-slate-300">{item.feature}</td>
                    <td className="py-4 px-4 text-center text-slate-400">{item.free}</td>
                    <td className="py-4 px-4 text-center text-primary font-medium">{item.pro}</td>
                    <td className="py-4 px-4 text-center text-primary font-medium">{item.enterprise}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        
          
      </div>
    </section>
  )
}

export default Pricing 