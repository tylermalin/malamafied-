import React from 'react';
import Layout from '../components/Layout';
import { Download } from 'lucide-react';

function WhitepaperPage() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">Whitepaper</h1>
          <p className="text-xl text-gray-300">
            Technical deep-dive into our biochar carbon credit solution.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl p-8 mb-12">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Malama Labs Technical Whitepaper</h2>
              <button className="flex items-center space-x-2 bg-emerald-400 text-black px-6 py-2 rounded-full font-medium hover:bg-emerald-300 transition-all">
                <Download className="w-5 h-5" />
                <span>Download PDF</span>
              </button>
            </div>
            <div className="prose prose-invert max-w-none">
              <h3 className="text-xl font-semibold mb-4">Abstract</h3>
              <p className="text-gray-300 mb-6">
                This whitepaper presents a comprehensive analysis of Malama Labs' biochar-based carbon removal solution, including our proprietary pyrolysis process, verification methodology, and market dynamics.
              </p>

              <h3 className="text-xl font-semibold mb-4">Table of Contents</h3>
              <ul className="space-y-2 text-gray-300">
                <li>1. Introduction to Biochar Carbon Credits</li>
                <li>2. Technical Process & Methodology</li>
                <li>3. Verification & Monitoring Systems</li>
                <li>4. Market Analysis & Pricing Models</li>
                <li>5. Environmental & Social Impact</li>
                <li>6. Future Development & Scaling</li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Technical Specifications",
                description: "Detailed analysis of our pyrolysis process and biochar properties."
              },
              {
                title: "Market Analysis",
                description: "Comprehensive overview of the carbon credit market and pricing models."
              },
              {
                title: "Impact Assessment",
                description: "Environmental and social impact metrics and methodology."
              },
              {
                title: "Implementation Guide",
                description: "Step-by-step guide for agricultural partners and investors."
              }
            ].map((section, index) => (
              <div key={index} className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl p-8">
                <h3 className="text-xl font-semibold mb-2">{section.title}</h3>
                <p className="text-gray-300 mb-4">{section.description}</p>
                <button className="text-emerald-400 hover:text-emerald-300 transition-all">
                  View Section
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default WhitepaperPage;