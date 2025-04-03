import React from 'react';
import Layout from '../components/Layout';
import { ArrowRight } from 'lucide-react';

function CareersPage() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">Join Our Team</h1>
          <p className="text-xl text-gray-300">
            Help us transform agricultural waste into premium carbon credits and make a real impact on climate change.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {/* Full-time Position */}
            <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl p-8">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold mb-1">Climate Technology Engineer</h3>
                  <div className="flex items-center space-x-4 text-gray-400">
                    <span>Remote</span>
                    <span>•</span>
                    <span>Full-time</span>
                  </div>
                </div>
                <button className="flex items-center space-x-2 bg-emerald-400 text-black px-6 py-2 rounded-full font-medium hover:bg-emerald-300 transition-all">
                  <span>Apply</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
              <p className="text-gray-300 mb-6">Develop and optimize our biochar production and monitoring systems.</p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Responsibilities:</h4>
                  <ul className="list-disc list-inside text-gray-300 space-y-1">
                    <li>Lead the development of biochar production technology and monitoring systems</li>
                    <li>Design and implement IoT solutions for real-time process monitoring</li>
                    <li>Optimize pyrolysis processes for maximum carbon sequestration</li>
                    <li>Collaborate with agricultural partners to integrate monitoring solutions</li>
                    <li>Develop and maintain technical documentation</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Requirements:</h4>
                  <ul className="list-disc list-inside text-gray-300 space-y-1">
                    <li>BS/MS in Engineering, Computer Science, or related field</li>
                    <li>5+ years experience in industrial process automation</li>
                    <li>Strong background in IoT and sensor networks</li>
                    <li>Experience with data analysis and visualization</li>
                    <li>Knowledge of environmental monitoring systems</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Internships Section */}
            <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl p-8">
              <h2 className="text-2xl font-semibold mb-6">Malama Labs Internships</h2>
              <p className="text-gray-300 mb-8">
                Join our internship program and gain hands-on experience in climate technology while making a real impact on the environment.
              </p>
              
              <div className="space-y-8">
                {[
                  {
                    title: "Engineering Intern",
                    description: "Work alongside our engineering team to develop and optimize biochar production systems.",
                    details: "Perfect for engineering students interested in climate tech and sustainable agriculture."
                  },
                  {
                    title: "Data Science Intern",
                    description: "Help analyze and optimize our carbon credit verification processes using machine learning.",
                    details: "Ideal for students with strong analytical skills and interest in environmental impact."
                  },
                  {
                    title: "Sustainability Intern",
                    description: "Support our environmental impact assessment and reporting initiatives.",
                    details: "Great opportunity for environmental science students passionate about climate solutions."
                  }
                ].map((internship, index) => (
                  <div key={index} className="border-t border-white/10 pt-6 first:border-0 first:pt-0">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-lg font-semibold mb-1">{internship.title}</h3>
                        <div className="text-gray-400">Remote • Summer 2024</div>
                      </div>
                      <button className="flex items-center space-x-2 bg-emerald-400 text-black px-4 py-2 rounded-full font-medium hover:bg-emerald-300 transition-all">
                        <span>Apply</span>
                        <ArrowRight className="w-5 h-5" />
                      </button>
                    </div>
                    <p className="text-gray-300 mb-2">{internship.description}</p>
                    <p className="text-gray-400 text-sm">{internship.details}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default CareersPage;