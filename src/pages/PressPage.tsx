import React from 'react';
import Layout from '../components/Layout';
import { ArrowUpRight } from 'lucide-react';

function PressPage() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">Press & Media</h1>
          <p className="text-xl text-gray-300">
            Latest news and updates from Malama Labs.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {[
              {
                title: "Malama Labs Raises $50M to Scale Biochar Carbon Credits",
                source: "TechCrunch",
                date: "March 15, 2024",
                description: "Leading climate tech startup secures Series A funding to expand agricultural waste transformation program."
              },
              {
                title: "How Biochar is Revolutionizing Carbon Markets",
                source: "Bloomberg Green",
                date: "February 28, 2024",
                description: "Malama Labs' innovative approach to carbon removal is setting new standards in the voluntary carbon market."
              },
              {
                title: "Agricultural Waste: The Next Frontier in Carbon Removal",
                source: "Forbes",
                date: "January 10, 2024",
                description: "Interview with Malama Labs' CEO on transforming agricultural waste into premium carbon credits."
              }
            ].map((article, index) => (
              <div key={index} className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
                    <div className="flex items-center space-x-4 text-gray-400">
                      <span>{article.source}</span>
                      <span>•</span>
                      <span>{article.date}</span>
                    </div>
                  </div>
                  <button className="flex items-center space-x-2 text-emerald-400 hover:text-emerald-300 transition-all">
                    <span>Read More</span>
                    <ArrowUpRight className="w-5 h-5" />
                  </button>
                </div>
                <p className="text-gray-300">{article.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default PressPage;