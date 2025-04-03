import React from 'react';
import Layout from '../components/Layout';
import { Users, Globe2, Leaf } from 'lucide-react';

function AboutPage() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">About Malama Labs</h1>
          <p className="text-xl text-gray-300">
            We're on a mission to transform agricultural waste into premium carbon credits while supporting farmers and fighting climate change.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: <Users className="w-8 h-8" />,
              title: "Our Team",
              description: "Industry experts in carbon markets, agriculture, and climate technology"
            },
            {
              icon: <Globe2 className="w-8 h-8" />,
              title: "Our Impact",
              description: "Removing thousands of tons of CO2 while supporting farming communities"
            },
            {
              icon: <Leaf className="w-8 h-8" />,
              title: "Our Vision",
              description: "Creating a sustainable future through innovative carbon removal solutions"
            }
          ].map((section, index) => (
            <div key={index} className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl p-8">
              <div className="text-emerald-400 mb-4">{section.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{section.title}</h3>
              <p className="text-gray-400">{section.description}</p>
            </div>
          ))}
        </div>

        <div className="prose prose-invert max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <p className="text-gray-300 mb-6">
            Founded in 2023, Malama Labs emerged from a simple yet powerful idea: what if we could turn agricultural waste into a valuable resource for both farmers and the planet?
          </p>
          <p className="text-gray-300 mb-6">
            Today, we're working with farmers across the globe to implement our innovative biochar solution, creating premium carbon credits while improving soil health and supporting local communities.
          </p>
          <p className="text-gray-300">
            Our team brings together expertise in carbon markets, agricultural science, and climate technology to create a solution that benefits everyone involved while making a real impact on climate change.
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default AboutPage;