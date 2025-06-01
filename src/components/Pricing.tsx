'use client'

import { motion } from 'framer-motion'
import { Check, Star, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const Pricing = () => {
  const plans = [
    {
      name: "Creator",
      price: "$29",
      period: "/month",
      description: "Perfect for independent filmmakers and small projects",
      popular: false,
      features: [
        "Complete script breakdown",
        "Scene analysis & timing",
        "Character management",
        "Basic scheduling tools",
        "Equipment tracking",
        "Export capabilities"
      ],
      limitations: [
        "Up to 3 active projects",
        "Standard support"
      ]
    },
    {
      name: "Professional",
      price: "$79",
      period: "/month",
      description: "Ideal for production companies and larger teams",
      popular: true,
      features: [
        "Everything in Creator",
        "Advanced scheduling optimization",
        "Team collaboration tools",
        "Marketing campaign management",
        "Custom branding",
        "Priority support",
        "Advanced analytics",
        "Integration capabilities"
      ],
      limitations: [
        "Up to 15 active projects",
        "Advanced reporting"
      ]
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "Contact us",
      description: "Tailored solutions for studios and large organizations",
      popular: false,
      features: [
        "Everything in Professional",
        "Unlimited projects",
        "Custom integrations",
        "Dedicated account manager",
        "On-premise deployment options",
        "Custom training sessions",
        "24/7 premium support",
        "White-label solutions"
      ],
      limitations: []
    }
  ]

  const comparisonFeatures = [
    { feature: "Script Analysis", creator: "Basic", professional: "Advanced", enterprise: "Custom" },
    { feature: "Scene Breakdown", creator: "✓", professional: "✓", enterprise: "✓" },
    { feature: "Team Collaboration", creator: "Limited", professional: "Full", enterprise: "Enterprise" },
    { feature: "Marketing Tools", creator: "Basic", professional: "Advanced", enterprise: "Custom" },
    { feature: "Integrations", creator: "Standard", professional: "Advanced", enterprise: "Custom" },
    { feature: "Support Level", creator: "Standard", professional: "Priority", enterprise: "Dedicated" },
    { feature: "Custom Branding", creator: "✗", professional: "✓", enterprise: "✓" },
    { feature: "Analytics", creator: "Basic", professional: "Advanced", enterprise: "Custom" }
  ]

  return (
    <section className="py-24 relative overflow-hidden" id="pricing">
      {/* Dark background with blue glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-950 to-slate-900" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-blue-500/15 rounded-full blur-2xl" />
      
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
              Choose Your Plan
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Professional production tools designed to scale with your creative ambitions. 
            Start creating today with our comprehensive platform.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -10 }}
              className={`relative bg-slate-900/60 backdrop-blur-xl border rounded-2xl p-8 h-full transform-style-3d transition-all duration-500 ${
                plan.popular 
                  ? 'border-blue-500/50 scale-105 shadow-lg shadow-blue-600/30' 
                  : 'border-blue-600/20 hover:border-blue-500/40'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center">
                    <Star className="h-4 w-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-slate-100 mb-2">
                  {plan.name}
                </h3>
                <p className="text-slate-400 mb-4">
                  {plan.description}
                </p>
                <div className="mb-4">
                  <span className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                    {plan.price}
                  </span>
                  {plan.period !== "Contact us" && (
                    <span className="text-slate-400 ml-2">
                      {plan.period}
                    </span>
                  )}
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <motion.div
                    key={featureIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: (index * 0.2) + (featureIndex * 0.1) }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <Check className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
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
                className={`w-full ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white shadow-lg shadow-blue-600/30' 
                    : 'bg-slate-800 hover:bg-slate-700 text-slate-100 border border-blue-600/30 hover:border-blue-500/50'
                }`}
                size="lg"
                asChild
              >
                <Link href="https://visionara.orabluclub.com">
                  {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
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
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Feature Comparison
            </span>
          </h3>
          
          <div className="bg-slate-900/40 backdrop-blur-xl border border-blue-600/30 rounded-2xl p-8 overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-blue-600/20">
                  <th className="text-left py-4 px-4 font-semibold text-slate-100">Feature</th>
                  <th className="text-center py-4 px-4 font-semibold text-slate-100">Creator</th>
                  <th className="text-center py-4 px-4 font-semibold text-slate-100">Professional</th>
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
                    className="border-b border-blue-600/10"
                  >
                    <td className="py-4 px-4 text-slate-300">{item.feature}</td>
                    <td className="py-4 px-4 text-center text-slate-400">{item.creator}</td>
                    <td className="py-4 px-4 text-center text-blue-400 font-medium">{item.professional}</td>
                    <td className="py-4 px-4 text-center text-blue-300 font-medium">{item.enterprise}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-600/10 to-blue-800/10 border border-blue-600/30 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-100 mb-4">
              Ready to Transform Your Production?
            </h3>
            <p className="text-slate-400 mb-6">
              Join thousands of creators who have streamlined their workflow with our platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white px-8 py-3 rounded-lg font-semibold shadow-lg shadow-blue-600/30 transition-all duration-300"
              >
                <Link href="https://visionara.orabluclub.com" className="flex items-center justify-center">
                  <Zap className="mr-2 h-5 w-5" />
                  Start Free Trial
                </Link>
              </motion.button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-blue-600/50 hover:border-blue-500 hover:bg-blue-600/10 text-blue-400 hover:text-blue-300"
              >
                Schedule Demo
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Pricing 