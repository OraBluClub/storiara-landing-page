'use client'

import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Platform from '@/components/Platform'
import Team from '@/components/Team'
import Pricing from '@/components/Pricing'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-slate-100 overflow-x-hidden">
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main className="relative">
        {/* Hero Section */}
        <Hero />
        
        {/* Features Section */}
        <Features />
        
        {/* Platform Section */}
        <Platform />
        
        {/* Team Section */}
        <Team />
        
        {/* Pricing Section */}
        <Pricing />
        
        {/* FAQ Section */}
        <FAQ />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  )
}
