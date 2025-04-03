import React from 'react';
import Layout from '../components/Layout';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

function GetStartedPage() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Get Started with Malama Labs</h1>
          <p className="text-xl text-gray-300 mb-12">
            Join us in transforming agricultural waste into premium carbon credits while supporting farmers and fighting climate change.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-4">For Investors</h2>
            <p className="text-gray-300 mb-6">
              Access premium carbon credits with industry-leading returns and verified impact.
            </p>
            <Link 
              to="/join/investor"
              className="flex items-center justify-center space-x-2 bg-emerald-400 text-black px-6 py-3 rounded-full font-medium hover:bg-emerald-300 transition-all w-full"
            >
              <span>Start Investing</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-4">For Farmers</h2>
            <p className="text-gray-300 mb-6">
              Turn agricultural waste into revenue while improving soil health.
            </p>
            <Link 
              to="/join/farmer"
              className="flex items-center justify-center space-x-2 bg-emerald-400 text-black px-6 py-3 rounded-full font-medium hover:bg-emerald-300 transition-all w-full"
            >
              <span>Join Program</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default GetStartedPage;