import React, { useState } from 'react';
import Layout from '../components/Layout';
import { CheckCircle2, ArrowRight } from 'lucide-react';

function InvestorJoinPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    title: '',
    investmentAmount: '',
    accreditedInvestor: '',
    investmentTimeline: '',
    primaryInterest: '',
    heardAbout: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Handle form submission logic here
  };

  if (submitted) {
    return (
      <Layout>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl p-12">
            <CheckCircle2 className="w-16 h-16 text-emerald-400 mx-auto mb-6" />
            <h1 className="text-3xl font-bold mb-4">Thank You for Your Interest</h1>
            <p className="text-gray-300 mb-8">
              Your application has been received and will be reviewed by our team. We'll be in touch within 2 business days to discuss the next steps.
            </p>
            <p className="text-gray-400">
              For immediate assistance, please contact us at{' '}
              <a href="mailto:investors@malamalabs.com" className="text-emerald-400 hover:text-emerald-300">
                investors@malamalabs.com
              </a>
            </p>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">Join as an Investor</h1>
          <p className="text-xl text-gray-300">
            Start investing in premium carbon credits and make a lasting impact on climate change.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl p-8">
            <h2 className="text-2xl font-semibold mb-6">Personal Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  required
                  className="w-full px-4 py-2 bg-black/40 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  required
                  className="w-full px-4 py-2 bg-black/40 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-2 bg-black/40 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  className="w-full px-4 py-2 bg-black/40 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
            </div>
          </div>

          <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl p-8">
            <h2 className="text-2xl font-semibold mb-6">Professional Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  className="w-full px-4 py-2 bg-black/40 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-300 mb-2">
                  Job Title
                </label>
                <input
                  type="text"
                  id="title"
                  className="w-full px-4 py-2 bg-black/40 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                />
              </div>
            </div>
          </div>

          <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl p-8">
            <h2 className="text-2xl font-semibold mb-6">Investment Information</h2>
            <div className="space-y-6">
              <div>
                <label htmlFor="investmentAmount" className="block text-sm font-medium text-gray-300 mb-2">
                  Intended Investment Amount (USD) *
                </label>
                <select
                  id="investmentAmount"
                  required
                  className="w-full px-4 py-2 bg-black/40 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
                  value={formData.investmentAmount}
                  onChange={(e) => setFormData({ ...formData, investmentAmount: e.target.value })}
                >
                  <option value="">Select amount range</option>
                  <option value="10k-50k">$10,000 - $50,000</option>
                  <option value="50k-100k">$50,000 - $100,000</option>
                  <option value="100k-500k">$100,000 - $500,000</option>
                  <option value="500k-1m">$500,000 - $1,000,000</option>
                  <option value="1m+">$1,000,000+</option>
                </select>
              </div>

              <div>
                <label htmlFor="accreditedInvestor" className="block text-sm font-medium text-gray-300 mb-2">
                  Are you an accredited investor? *
                </label>
                <select
                  id="accreditedInvestor"
                  required
                  className="w-full px-4 py-2 bg-black/40 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
                  value={formData.accreditedInvestor}
                  onChange={(e) => setFormData({ ...formData, accreditedInvestor: e.target.value })}
                >
                  <option value="">Select option</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                  <option value="unsure">Not Sure</option>
                </select>
              </div>

              <div>
                <label htmlFor="investmentTimeline" className="block text-sm font-medium text-gray-300 mb-2">
                  Expected Investment Timeline *
                </label>
                <select
                  id="investmentTimeline"
                  required
                  className="w-full px-4 py-2 bg-black/40 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
                  value={formData.investmentTimeline}
                  onChange={(e) => setFormData({ ...formData, investmentTimeline: e.target.value })}
                >
                  <option value="">Select timeline</option>
                  <option value="immediate">Immediate</option>
                  <option value="1-3months">1-3 months</option>
                  <option value="3-6months">3-6 months</option>
                  <option value="6-12months">6-12 months</option>
                  <option value="12months+">12+ months</option>
                </select>
              </div>

              <div>
                <label htmlFor="primaryInterest" className="block text-sm font-medium text-gray-300 mb-2">
                  Primary Interest in Carbon Credits *
                </label>
                <select
                  id="primaryInterest"
                  required
                  className="w-full px-4 py-2 bg-black/40 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
                  value={formData.primaryInterest}
                  onChange={(e) => setFormData({ ...formData, primaryInterest: e.target.value })}
                >
                  <option value="">Select primary interest</option>
                  <option value="offsetting">Corporate Carbon Offsetting</option>
                  <option value="trading">Carbon Credit Trading</option>
                  <option value="portfolio">Portfolio Diversification</option>
                  <option value="impact">Environmental Impact</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="heardAbout" className="block text-sm font-medium text-gray-300 mb-2">
                  How did you hear about us?
                </label>
                <select
                  id="heardAbout"
                  className="w-full px-4 py-2 bg-black/40 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
                  value={formData.heardAbout}
                  onChange={(e) => setFormData({ ...formData, heardAbout: e.target.value })}
                >
                  <option value="">Select option</option>
                  <option value="search">Search Engine</option>
                  <option value="social">Social Media</option>
                  <option value="referral">Professional Referral</option>
                  <option value="press">Press/News</option>
                  <option value="event">Industry Event</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center space-x-2 bg-emerald-400 text-black px-8 py-4 rounded-full font-medium hover:bg-emerald-300 transition-all"
          >
            <span>Submit Application</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </form>
      </div>
    </Layout>
  );
}

export default InvestorJoinPage;