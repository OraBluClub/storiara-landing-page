'use client'

import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/10 via-black to-primary/10 text-slate-100 relative overflow-hidden">
      <Navigation />
      
      {/* Background gradient elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/15 rounded-full blur-2xl" />
      
      <main className="relative pt-20 z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-b from-primary-foreground to-primary bg-clip-text text-transparent">
                Terms of Service
              </span>
            </h1>
            <p className="text-xl text-slate-400">
              Last Updated: 08/22/2025
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="prose prose-lg prose-invert max-w-none"
          >
            <div className="bg-slate-900/30 backdrop-blur-xl border border-primary/20 rounded-2xl p-8 space-y-8">
              
              <section>
                <p className="text-slate-300 leading-relaxed mb-8">
                  These Terms and Conditions ("Terms") govern your use of the website operated by Storiara Inc. ("Storiara", "we", "our", or "us").
                </p>
                <p className="text-slate-300 leading-relaxed mb-8">
                  By accessing or using this site (the "Site"), you agree to be bound by these Terms. If you do not agree, please do not use the Site.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-100 mb-4">1. Use of the Site</h2>
                <p className="text-slate-300 leading-relaxed">
                  You agree to use the Site only for lawful purposes and in accordance with these Terms. You are solely responsible for ensuring your use complies with all applicable laws, regulations, and third-party rights.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-100 mb-4">2. Account Registration</h2>
                <p className="text-slate-300 mb-2">Some features may require you to create an account. By registering, you agree to:</p>
                <ul className="list-disc list-inside text-slate-300 space-y-1 ml-4">
                  <li>Provide accurate and complete information</li>
                  <li>Keep your credentials confidential</li>
                  <li>Accept responsibility for all activity under your account</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-100 mb-4">3. Intellectual Property</h2>
                <p className="text-slate-300 mb-2">
                  All content on the Site—including text, graphics, logos, images, software, and code—is owned by Storiara Inc. or its licensors and is protected by intellectual property laws.
                </p>
                <p className="text-slate-300 mb-2">You may not:</p>
                <ul className="list-disc list-inside text-slate-300 space-y-1 ml-4">
                  <li>Reproduce, distribute, or publicly display content without permission</li>
                  <li>Reverse engineer or extract source code</li>
                  <li>Use content for commercial purposes without authorization</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-100 mb-4">4. User Content</h2>
                <p className="text-slate-300 mb-2">
                  If you submit content to the Site—such as stories, feedback, or comments ("User Content")—you retain full ownership of all rights to that content. By uploading or submitting content, you grant Storiara a limited license to process and display that content only within your private project workspace for the purpose of providing our services (e.g., AI breakdowns, scheduling, visualization, collaboration features).
                </p>
                <p className="text-slate-300 mb-2">
                  We will never publish, distribute, or share your content publicly or with third parties without your explicit permission. You confirm that you have the rights to use and submit any content you upload.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-100 mb-4">5. Prohibited Conduct</h2>
                <p className="text-slate-300 mb-2">You agree not to:</p>
                <ul className="list-disc list-inside text-slate-300 space-y-1 ml-4">
                  <li>Interfere with or disrupt the Site or its security features</li>
                  <li>Attempt unauthorized access to any part of the Site</li>
                  <li>Upload viruses or malicious code</li>
                  <li>Harvest data or collect user information without consent</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-100 mb-4">6. Third-Party Links</h2>
                <p className="text-slate-300">
                  The Site may contain links to external websites. Storiara is not responsible for their content, practices, or privacy policies. Use them at your own risk.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-100 mb-4">7. Termination</h2>
                <p className="text-slate-300">
                  We reserve the right to suspend or terminate your access to the Site, with or without notice, if we believe you have violated these Terms or applicable laws.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-100 mb-4">8. Disclaimers</h2>
                <p className="text-slate-300">
                  The Site is provided "as is" and "as available" with no warranties, express or implied. We do not guarantee accuracy, reliability, or continuous availability.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-100 mb-4">9. Limitation of Liability</h2>
                <p className="text-slate-300">
                  To the fullest extent allowed by law, Storiara Inc. is not liable for any indirect, incidental, special, or consequential damages arising from your use of the Site.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-100 mb-4">10. Indemnification</h2>
                <p className="text-slate-300">
                  You agree to indemnify and hold harmless Storiara Inc., its affiliates, employees, and agents from any claims, liabilities, or expenses related to your use of the Site or your violation of these Terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-100 mb-4">11. Governing Law</h2>
                <p className="text-slate-300">
                  These Terms are governed by and interpreted under the laws of the United States, without regard to conflict of law principles.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-100 mb-4">12. Changes to the Terms</h2>
                <p className="text-slate-300">
                  We may update these Terms periodically. When we do, we'll update the "Effective Date" above. Continued use of the Site implies acceptance of the updated Terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-100 mb-4">13. Contact Us</h2>
                <p className="text-slate-300 mb-2">If you have questions or concerns, reach out:</p>
                <div className="text-slate-300">
                  <p><strong>Storiara Inc.</strong></p>
                  <p>Email: <a href="mailto:StoriaraCRSO@gmail.com" className="text-primary hover:text-primary-light transition-colors">StoriaraCRSO@gmail.com</a></p>
                  <p>Website: <a href="https://storiara.com" className="text-primary hover:text-primary-light transition-colors">https://storiara.com</a></p>
                </div>
              </section>

            </div>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}

export default TermsOfService
