import React, { useState } from 'react';
import Layout from '../components/Layout';
import { Search, ChevronRight, Book, Code, Leaf, Shield, Settings, Users, BarChart3, FileText, HelpCircle } from 'lucide-react';

function DocsPage() {
  const [selectedSection, setSelectedSection] = useState<string | null>(null);

  const sections = {
    'getting-started': {
      title: 'Getting Started',
      content: `
        <h2 class="text-2xl font-bold mb-6">Getting Started with Malama Labs</h2>
        
        <div class="space-y-8">
          <div>
            <h3 class="text-xl font-semibold mb-4">Platform Overview</h3>
            <p class="text-gray-300 mb-4">
              Malama Labs provides a comprehensive platform for converting agricultural waste into premium carbon credits through our innovative biochar process.
            </p>
            <ul class="list-disc list-inside text-gray-300 space-y-2">
              <li>Automated waste collection tracking</li>
              <li>Real-time biochar production monitoring</li>
              <li>Transparent credit verification process</li>
              <li>Integrated marketplace for credit trading</li>
            </ul>
          </div>

          <div>
            <h3 class="text-xl font-semibold mb-4">Quick Start Guide</h3>
            <div class="space-y-4">
              <div class="bg-black/20 p-4 rounded-lg">
                <h4 class="font-semibold mb-2">1. Account Setup</h4>
                <p class="text-gray-300">Complete your profile and verify your identity</p>
              </div>
              <div class="bg-black/20 p-4 rounded-lg">
                <h4 class="font-semibold mb-2">2. Connect Your Farm</h4>
                <p class="text-gray-300">Register your agricultural operation and waste streams</p>
              </div>
              <div class="bg-black/20 p-4 rounded-lg">
                <h4 class="font-semibold mb-2">3. Install Monitoring System</h4>
                <p class="text-gray-300">Set up our IoT sensors and tracking devices</p>
              </div>
              <div class="bg-black/20 p-4 rounded-lg">
                <h4 class="font-semibold mb-2">4. Begin Production</h4>
                <p class="text-gray-300">Start converting waste into biochar and generating credits</p>
              </div>
            </div>
          </div>
        </div>
      `
    },
    'technical-specs': {
      title: 'Technical Specifications',
      content: `
        <h2 class="text-2xl font-bold mb-6">Technical Specifications</h2>
        
        <div class="space-y-8">
          <div>
            <h3 class="text-xl font-semibold mb-4">Biochar Production</h3>
            <div class="space-y-4">
              <div class="bg-black/20 p-4 rounded-lg">
                <h4 class="font-semibold mb-2">Temperature Requirements</h4>
                <ul class="list-disc list-inside text-gray-300 space-y-1">
                  <li>Optimal pyrolysis temperature: 450-550°C</li>
                  <li>Maximum temperature variation: ±10°C</li>
                  <li>Heating rate: 10-30°C/min</li>
                </ul>
              </div>
              
              <div class="bg-black/20 p-4 rounded-lg">
                <h4 class="font-semibold mb-2">Feedstock Specifications</h4>
                <ul class="list-disc list-inside text-gray-300 space-y-1">
                  <li>Moisture content: <15%</li>
                  <li>Particle size: 1-3cm</li>
                  <li>Bulk density: 200-400 kg/m³</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-semibold mb-4">Monitoring System</h3>
            <div class="space-y-4">
              <div class="bg-black/20 p-4 rounded-lg">
                <h4 class="font-semibold mb-2">Sensor Network</h4>
                <ul class="list-disc list-inside text-gray-300 space-y-1">
                  <li>Temperature sensors: Type K thermocouples</li>
                  <li>Pressure sensors: 0-10 bar range</li>
                  <li>Gas composition analyzers: CO, CO2, CH4</li>
                </ul>
              </div>
              
              <div class="bg-black/20 p-4 rounded-lg">
                <h4 class="font-semibold mb-2">Data Collection</h4>
                <ul class="list-disc list-inside text-gray-300 space-y-1">
                  <li>Sampling rate: 1 Hz</li>
                  <li>Data storage: 128-bit encrypted</li>
                  <li>Backup frequency: Real-time</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      `
    },
    'api-reference': {
      title: 'API Reference',
      content: `
        <h2 class="text-2xl font-bold mb-6">API Reference</h2>
        
        <div class="space-y-8">
          <div>
            <h3 class="text-xl font-semibold mb-4">Authentication</h3>
            <div class="bg-black/20 p-4 rounded-lg space-y-4">
              <div>
                <h4 class="font-semibold mb-2">Generate API Key</h4>
                <pre class="bg-black/40 p-4 rounded-lg overflow-x-auto">
POST /api/v1/auth/keys
Content-Type: application/json

{
  "name": "Production Key",
  "permissions": ["read", "write"]
}</pre>
              </div>
              
              <div>
                <h4 class="font-semibold mb-2">Authentication Header</h4>
                <pre class="bg-black/40 p-4 rounded-lg overflow-x-auto">
Authorization: Bearer YOUR_API_KEY</pre>
              </div>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-semibold mb-4">Endpoints</h3>
            <div class="space-y-4">
              <div class="bg-black/20 p-4 rounded-lg">
                <h4 class="font-semibold mb-2">Production Data</h4>
                <pre class="bg-black/40 p-4 rounded-lg overflow-x-auto">
GET /api/v1/production/metrics
GET /api/v1/production/batches
POST /api/v1/production/batches</pre>
              </div>
              
              <div class="bg-black/20 p-4 rounded-lg">
                <h4 class="font-semibold mb-2">Credit Management</h4>
                <pre class="bg-black/40 p-4 rounded-lg overflow-x-auto">
GET /api/v1/credits
POST /api/v1/credits/verify
PUT /api/v1/credits/{id}/transfer</pre>
              </div>
            </div>
          </div>
        </div>
      `
    },
    'verification': {
      title: 'Verification Process',
      content: `
        <h2 class="text-2xl font-bold mb-6">Credit Verification Process</h2>
        
        <div class="space-y-8">
          <div>
            <h3 class="text-xl font-semibold mb-4">Data Collection</h3>
            <div class="space-y-4">
              <div class="bg-black/20 p-4 rounded-lg">
                <h4 class="font-semibold mb-2">Required Measurements</h4>
                <ul class="list-disc list-inside text-gray-300 space-y-1">
                  <li>Feedstock mass and composition</li>
                  <li>Process temperature profiles</li>
                  <li>Biochar yield and characteristics</li>
                  <li>Energy consumption data</li>
                </ul>
              </div>
              
              <div class="bg-black/20 p-4 rounded-lg">
                <h4 class="font-semibold mb-2">Quality Control</h4>
                <ul class="list-disc list-inside text-gray-300 space-y-1">
                  <li>Regular sensor calibration</li>
                  <li>Data validation checks</li>
                  <li>Chain of custody tracking</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-semibold mb-4">Verification Steps</h3>
            <div class="space-y-4">
              <div class="bg-black/20 p-4 rounded-lg">
                <h4 class="font-semibold mb-2">1. Data Submission</h4>
                <p class="text-gray-300">Submit production data and supporting documentation</p>
              </div>
              
              <div class="bg-black/20 p-4 rounded-lg">
                <h4 class="font-semibold mb-2">2. Initial Review</h4>
                <p class="text-gray-300">Automated checks and manual review by our verification team</p>
              </div>
              
              <div class="bg-black/20 p-4 rounded-lg">
                <h4 class="font-semibold mb-2">3. Third-Party Verification</h4>
                <p class="text-gray-300">Independent verification by accredited partners</p>
              </div>
              
              <div class="bg-black/20 p-4 rounded-lg">
                <h4 class="font-semibold mb-2">4. Credit Issuance</h4>
                <p class="text-gray-300">Final approval and credit generation</p>
              </div>
            </div>
          </div>
        </div>
      `
    },
    'best-practices': {
      title: 'Best Practices',
      content: `
        <h2 class="text-2xl font-bold mb-6">Best Practices</h2>
        
        <div class="space-y-8">
          <div>
            <h3 class="text-xl font-semibold mb-4">Production Guidelines</h3>
            <div class="space-y-4">
              <div class="bg-black/20 p-4 rounded-lg">
                <h4 class="font-semibold mb-2">Feedstock Preparation</h4>
                <ul class="list-disc list-inside text-gray-300 space-y-1">
                  <li>Proper drying and storage</li>
                  <li>Size reduction and screening</li>
                  <li>Contamination prevention</li>
                </ul>
              </div>
              
              <div class="bg-black/20 p-4 rounded-lg">
                <h4 class="font-semibold mb-2">Process Optimization</h4>
                <ul class="list-disc list-inside text-gray-300 space-y-1">
                  <li>Temperature control strategies</li>
                  <li>Residence time management</li>
                  <li>Energy efficiency measures</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-semibold mb-4">Quality Assurance</h3>
            <div class="space-y-4">
              <div class="bg-black/20 p-4 rounded-lg">
                <h4 class="font-semibold mb-2">Monitoring Procedures</h4>
                <ul class="list-disc list-inside text-gray-300 space-y-1">
                  <li>Regular equipment maintenance</li>
                  <li>Calibration schedules</li>
                  <li>Data backup protocols</li>
                </ul>
              </div>
              
              <div class="bg-black/20 p-4 rounded-lg">
                <h4 class="font-semibold mb-2">Documentation</h4>
                <ul class="list-disc list-inside text-gray-300 space-y-1">
                  <li>Record keeping requirements</li>
                  <li>Reporting templates</li>
                  <li>Audit preparation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      `
    }
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">Documentation</h1>
          <p className="text-xl text-gray-300 mb-8">
            Everything you need to know about Malama Labs' carbon credit platform.
          </p>
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search documentation..."
              className="w-full pl-12 pr-4 py-3 bg-black/40 border border-white/10 rounded-full focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
          </div>
        </div>

        {selectedSection ? (
          <div className="max-w-4xl mx-auto">
            <button
              onClick={() => setSelectedSection(null)}
              className="flex items-center text-emerald-400 hover:text-emerald-300 mb-8"
            >
              <ChevronRight className="w-5 h-5 rotate-180" />
              <span className="ml-2">Back to Documentation</span>
            </button>
            <div 
              className="prose prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: sections[selectedSection as keyof typeof sections].content }}
            />
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div 
              className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl p-8 cursor-pointer hover:border-emerald-400/50 transition-colors"
              onClick={() => setSelectedSection('getting-started')}
            >
              <Book className="w-8 h-8 text-emerald-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Getting Started</h3>
              <p className="text-gray-400 mb-4">Platform overview and quick start guides for new users.</p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <ChevronRight className="w-4 h-4 mr-2" />
                  Platform Overview
                </li>
                <li className="flex items-center">
                  <ChevronRight className="w-4 h-4 mr-2" />
                  Quick Start Guide
                </li>
                <li className="flex items-center">
                  <ChevronRight className="w-4 h-4 mr-2" />
                  Account Setup
                </li>
              </ul>
            </div>

            <div 
              className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl p-8 cursor-pointer hover:border-emerald-400/50 transition-colors"
              onClick={() => setSelectedSection('technical-specs')}
            >
              <Code className="w-8 h-8 text-emerald-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Technical Specs</h3>
              <p className="text-gray-400 mb-4">Detailed technical specifications and requirements.</p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <ChevronRight className="w-4 h-4 mr-2" />
                  System Architecture
                </li>
                <li className="flex items-center">
                  <ChevronRight className="w-4 h-4 mr-2" />
                  Data Models
                </li>
                <li className="flex items-center">
                  <ChevronRight className="w-4 h-4 mr-2" />
                  Security Protocols
                </li>
              </ul>
            </div>

            <div 
              className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl p-8 cursor-pointer hover:border-emerald-400/50 transition-colors"
              onClick={() => setSelectedSection('api-reference')}
            >
              <Settings className="w-8 h-8 text-emerald-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">API Reference</h3>
              <p className="text-gray-400 mb-4">Complete API documentation and integration guides.</p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <ChevronRight className="w-4 h-4 mr-2" />
                  Authentication
                </li>
                <li className="flex items-center">
                  <ChevronRight className="w-4 h-4 mr-2" />
                  Endpoints
                </li>
                <li className="flex items-center">
                  <ChevronRight className="w-4 h-4 mr-2" />
                  Rate Limits
                </li>
              </ul>
            </div>

            <div 
              className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl p-8 cursor-pointer hover:border-emerald-400/50 transition-colors"
              onClick={() => setSelectedSection('verification')}
            >
              <Shield className="w-8 h-8 text-emerald-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Verification Process</h3>
              <p className="text-gray-400 mb-4">Understanding the credit verification workflow.</p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <ChevronRight className="w-4 h-4 mr-2" />
                  Data Requirements
                </li>
                <li className="flex items-center">
                  <ChevronRight className="w-4 h-4 mr-2" />
                  Verification Steps
                </li>
                <li className="flex items-center">
                  <ChevronRight className="w-4 h-4 mr-2" />
                  Quality Standards
                </li>
              </ul>
            </div>

            <div 
              className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl p-8 cursor-pointer hover:border-emerald-400/50 transition-colors"
              onClick={() => setSelectedSection('best-practices')}
            >
              <Leaf className="w-8 h-8 text-emerald-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Best Practices</h3>
              <p className="text-gray-400 mb-4">Guidelines for optimal platform usage and results.</p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <ChevronRight className="w-4 h-4 mr-2" />
                  Production Guidelines
                </li>
                <li className="flex items-center">
                  <ChevronRight className="w-4 h-4 mr-2" />
                  Quality Assurance
                </li>
                <li className="flex items-center">
                  <ChevronRight className="w-4 h-4 mr-2" />
                  Monitoring Tips
                </li>
              </ul>
            </div>

            <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl p-8">
              <HelpCircle className="w-8 h-8 text-emerald-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Support</h3>
              <p className="text-gray-400 mb-4">Get help when you need it.</p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <ChevronRight className="w-4 h-4 mr-2" />
                  FAQs
                </li>
                <li className="flex items-center">
                  <ChevronRight className="w-4 h-4 mr-2" />
                  Troubleshooting
                </li>
                <li className="flex items-center">
                  <ChevronRight className="w-4 h-4 mr-2" />
                  Contact Support
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}

export default DocsPage;