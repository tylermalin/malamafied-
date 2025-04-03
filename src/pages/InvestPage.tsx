import React from 'react';
import Layout from '../components/Layout';
import { BarChart3, Shield, Globe2 } from 'lucide-react';

function InvestPage() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">Invest in Premium Carbon Credits</h1>
          <p className="text-xl text-gray-300">
            Access the highest-quality carbon removal credits with industry-leading returns and verified impact.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: <BarChart3 className="w-8 h-8" />,
              title: "Premium Returns",
              description: "Up to 30× higher value than conventional carbon credits"
            },
            {
              icon: <Shield className="w-8 h-8" />,
              title: "Verified Impact",
              description: "Rigorous verification process ensuring credit quality"
            },
            {
              icon: <Globe2 className="w-8 h-8" />,
              title: "Global Scale",
              description: "Access to a growing network of agricultural partners"
            }
          ].map((feature, index) => (
            <div key={index} className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl p-8">
              <div className="text-emerald-400 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-6">Ready to Start?</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 bg-black/40 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="investment" className="block text-sm font-medium text-gray-300 mb-2">
                  Investment Amount (USD)
                </label>
                <input
                  type="number"
                  id="investment"
                  className="w-full px-4 py-2 bg-black/40 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
                  placeholder="Minimum $10,000"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-emerald-400 text-black px-6 py-3 rounded-full font-medium hover:bg-emerald-300 transition-all"
              >
                Get Started
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default InvestPage;