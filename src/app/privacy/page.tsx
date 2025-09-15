'use client'

import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const PrivacyPolicy = () => {
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
                Privacy Policy
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
                  At Storiara Inc., your privacy matters to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, storiara.com (the "Site"). If you do not agree with the terms, please do not use the Site.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-100 mb-4">1. Information We Collect</h2>
                <p className="text-slate-300 mb-4">We collect information in the following ways:</p>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-200 mb-2">a. Personal Information</h3>
                    <p className="text-slate-300 mb-2">When you register, subscribe, or engage with certain features, we may collect:</p>
                    <ul className="list-disc list-inside text-slate-300 space-y-1 ml-4">
                      <li>Full name</li>
                      <li>Email address</li>
                      <li>Mailing address</li>
                      <li>Phone number</li>
                      <li>Account credentials</li>
                      <li>Payment information (if applicable)</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-slate-200 mb-2">b. Non-Personal Information</h3>
                    <p className="text-slate-300 mb-2">We may also collect data such as:</p>
                    <ul className="list-disc list-inside text-slate-300 space-y-1 ml-4">
                      <li>Browser type and version</li>
                      <li>IP address</li>
                      <li>Device type</li>
                      <li>Pages visited</li>
                      <li>Date and time of access</li>
                      <li>Referring URLs</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-slate-200 mb-2">c. Cookies & Tracking Technologies</h3>
                    <p className="text-slate-300">We use cookies and similar tools to enhance your experience, analyze usage, and personalize content.</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-slate-200 mb-2">d. Calendar Data</h3>
                    <p className="text-slate-300 mb-2">If you choose to connect your calendar for scheduling features, we access:</p>
                    <ul className="list-disc list-inside text-slate-300 space-y-1 ml-4">
                      <li>Free/busy information for scheduling purposes</li>
                      <li>Calendar availability for shoot scheduling</li>
                    </ul>
                    <p className="text-slate-300 mt-2">
                      We do not access, read, or store any other information from your calendar, such as event titles, descriptions, locations, or attendees. This access is read-only and temporary.
                    </p>
                    <p className="text-slate-300 mt-2">
                      <strong>Calendar Data Deletion:</strong> You can disconnect your calendar at any time through your account settings. When disconnected, we immediately revoke access to your calendar and delete any cached availability data. No calendar information is permanently stored on our servers.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-100 mb-4">2. How We Use Your Information</h2>
                <p className="text-slate-300 mb-2">We use your information to:</p>
                <ul className="list-disc list-inside text-slate-300 space-y-1 ml-4">
                  <li>Provide and manage our services</li>
                  <li>Process payments and send confirmations</li>
                  <li>Respond to inquiries and support requests</li>
                  <li>Improve our Site and services</li>
                  <li>Send newsletters and promotional updates (opt-out available)</li>
                  <li>Fulfill legal and regulatory obligations</li>
                  <li>Sync calendar availability for production scheduling</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-100 mb-4">3. Sharing Your Information</h2>
                <p className="text-slate-300 mb-2">We do not sell or rent your personal information. We may share it with:</p>
                <ul className="list-disc list-inside text-slate-300 space-y-1 ml-4">
                  <li>Trusted service providers (hosting, analytics, payment processors)</li>
                  <li>Law enforcement, if required by law</li>
                  <li>Affiliates or in cases of merger, acquisition, or asset sale</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-100 mb-4">4. Data Retention</h2>
                <p className="text-slate-300 mb-2">We retain your information only as long as necessary to fulfill the purposes outlined in this policy or as required by law.</p>
                <p className="text-slate-300 mb-2">
                  <strong>Calendar Data:</strong> We do not store your calendar event details on our servers. When you sync your calendar, we temporarily access your free/busy information in memory to determine your availability for production scheduling. This data is not retained after the sync process is complete. The authentication token granting access to your calendar is used for a single session and is not stored.
                </p>
                <p className="text-slate-300">
                  <strong>Calendar Data Deletion:</strong> Calendar connections can be revoked immediately through your account settings. When you disconnect your calendar, we instantly delete any cached availability data and revoke all access permissions. Calendar data is never permanently stored, ensuring your calendar information remains private and under your control.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-100 mb-4">5. Your Privacy Rights</h2>
                <p className="text-slate-300 mb-2">Depending on your location, you may have the right to:</p>
                <ul className="list-disc list-inside text-slate-300 space-y-1 ml-4">
                  <li>Access, correct, or delete your personal data</li>
                  <li>Withdraw consent</li>
                  <li>Object to or restrict data processing</li>
                  <li>File a complaint with a data protection authority</li>
                </ul>
                <p className="text-slate-300 mt-4">
                  To exercise your rights, email us at <a href="mailto:StoriaraCRSO@gmail.com" className="text-primary hover:text-primary-light transition-colors">StoriaraCRSO@gmail.com</a>.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-100 mb-4">6. Data Deletion</h2>
                <p className="text-slate-300 mb-2">You have the right to request deletion of your personal data. When you request deletion:</p>
                <ul className="list-disc list-inside text-slate-300 space-y-1 ml-4">
                  <li>We will permanently delete your account and all associated personal information</li>
                  <li>Your projects, scripts, and generated content will be permanently removed from our servers</li>
                  <li>Calendar connections will be immediately disconnected and any cached availability data will be deleted</li>
                  <li>We will retain only information required by law or for legitimate business purposes (such as transaction records)</li>
                </ul>
                <p className="text-slate-300 mt-4">
                  <strong>Account Deletion:</strong> You can delete your account at any time through your account settings, or by contacting us at <a href="mailto:StoriaraCRSO@gmail.com" className="text-primary hover:text-primary-light transition-colors">StoriaraCRSO@gmail.com</a>. Account deletion is irreversible.
                </p>
                <p className="text-slate-300 mt-2">
                  <strong>Data Processing:</strong> Deletion requests are processed within 30 days of verification. Some data may be retained in backups for up to 90 days before permanent deletion.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-100 mb-4">7. Data Security</h2>
                <p className="text-slate-300">We implement industry-standard safeguards. However, no internet transmission or electronic storage is 100% secure.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-100 mb-4">8. Children's Privacy</h2>
                <p className="text-slate-300">Our Site is not intended for users under 13 (or the applicable age in your region). We do not knowingly collect personal data from children without parental consent.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-100 mb-4">9. Third-Party Links</h2>
                <p className="text-slate-300">Our Site may contain links to external websites. We are not responsible for their privacy practices—please review their policies separately.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-100 mb-4">10. Changes to This Policy</h2>
                <p className="text-slate-300">We may update this Privacy Policy periodically. Changes will be indicated by the updated "Effective Date" above. Continued use of the Site signifies your acceptance.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-100 mb-4">11. Contact Us</h2>
                <p className="text-slate-300 mb-2">Questions or concerns?</p>
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

export default PrivacyPolicy
