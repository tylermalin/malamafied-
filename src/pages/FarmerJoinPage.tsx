import React, { useState } from 'react';
import Layout from '../components/Layout';
import { CheckCircle2, ArrowRight } from 'lucide-react';

function FarmerJoinPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    farmName: '',
    farmLocation: '',
    farmSize: '',
    primaryCrops: '',
    annualWaste: '',
    currentWastePractices: '',
    equipmentAccess: '',
    operationalMonths: '',
    organicCertified: '',
    previousBiochar: '',
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
              Your application has been received and will be reviewed by our team. We'll be in touch within 2 business days to discuss the next steps and schedule an initial consultation.
            </p>
            <p className="text-gray-400">
              For immediate assistance, please contact us at{' '}
              <a href="mailto:farmers@malamalabs.com" className="text-emerald-400 hover:text-emerald-300">
                farmers@malamalabs.com
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
          <h1 className="text-5xl font-bold mb-4">Join as a Farmer Partner</h1>
          <p className="text-xl text-gray-300">
            Transform your agricultural waste into revenue while contributing to climate change solutions.
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
            <h2 className="text-2xl font-semibold mb-6">Farm Information</h2>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="farmName" className="block text-sm font-medium text-gray-300 mb-2">
                    Farm Name *
                  </label>
                  <input
                    type="text"
                    id="farmName"
                    required
                    className="w-full px-4 py-2 bg-black/40 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
                    value={formData.farmName}
                    onChange={(e) => setFormData({ ...formData, farmName: e.target.value })}
                  />
                </div>
                <div>
                  <label htmlFor="farmLocation" className="block text-sm font-medium text-gray-300 mb-2">
                    Farm Location (City, State) *
                  </label>
                  <input
                    type="text"
                    id="farmLocation"
                    required
                    className="w-full px-4 py-2 bg-black/40 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
                    value={formData.farmLocation}
                    onChange={(e) => setFormData({ ...formData, farmLocation: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="farmSize" className="block text-sm font-medium text-gray-300 mb-2">
                  Total Farm Size (Acres) *
                </label>
                <select
                  id="farmSize"
                  required
                  className="w-full px-4 py-2 bg-black/40 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
                  value={formData.farmSize}
                  onChange={(e) => setFormData({ ...formData, farmSize: e.target.value })}
                >
                  <option value="">Select farm size</option>
                  <option value="<50">Less than 50 acres</option>
                  <option value="50-100">50-100 acres</option>
                  <option value="100-500">100-500 acres</option>
                  <option value="500-1000">500-1,000 acres</option>
                  <option value="1000+">1,000+ acres</option>
                </select>
              </div>

              <div>
                <label htmlFor="primaryCrops" className="block text-sm font-medium text-gray-300 mb-2">
                  Primary Crops *
                </label>
                <input
                  type="text"
                  id="primaryCrops"
                  required
                  placeholder="e.g., Corn, Wheat, Soybeans"
                  className="w-full px-4 py-2 bg-black/40 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
                  value={formData.primaryCrops}
                  onChange={(e) => setFormData({ ...formData, primaryCrops: e.target.value })}
                />
              </div>
            </div>
          </div>

          <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl p-8">
            <h2 className="text-2xl font-semibold mb-6">Waste Management</h2>
            <div className="space-y-6">
              <div>
                <label htmlFor="annualWaste" className="block text-sm font-medium text-gray-300 mb-2">
                  Estimated Annual Agricultural Waste (Tons) *
                </label>
                <select
                  id="annualWaste"
                  required
                  className="w-full px-4 py-2 bg-black/40 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
                  value={formData.annualWaste}
                  onChange={(e) => setFormData({ ...formData, annualWaste: e.target.value })}
                >
                  <option value="">Select amount range</option>
                  <option value="<100">Less than 100 tons</option>
                  <option value="100-500">100-500 tons</option>
                  <option value="500-1000">500-1,000 tons</option>
                  <option value="1000-5000">1,000-5,000 tons</option>
                  <option value="5000+">5,000+ tons</option>
                </select>
              </div>

              <div>
                <label htmlFor="currentWastePractices" className="block text-sm font-medium text-gray-300 mb-2">
                  Current Waste Management Practices *
                </label>
                <select
                  id="currentWastePractices"
                  required
                  className="w-full px-4 py-2 bg-black/40 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
                  value={formData.currentWastePractices}
                  onChange={(e) => setFormData({ ...formData, currentWastePractices: e.target.value })}
                >
                  <option value="">Select practice</option>
                  <option value="burning">Open Burning</option>
                  <option value="tilling">Tilling into Soil</option>
                  <option value="composting">Composting</option>
                  <option value="removal">Removal Service</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
          </div>

          <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl p-8">
            <h2 className="text-2xl font-semibold mb-6">Operations</h2>
            <div className="space-y-6">
              <div>
                <label htmlFor="equipmentAccess" className="block text-sm font-medium text-gray-300 mb-2">
                  Available Equipment *
                </label>
                <select
                  id="equipmentAccess"
                  required
                  className="w-full px-4 py-2 bg-black/40 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
                  value={formData.equipmentAccess}
                  onChange={(e) => setFormData({ ...formData, equipmentAccess: e.target.value })}
                >
                  <option value="">Select equipment access</option>
                  <option value="full">Full Equipment Access</option>
                  <option value="partial">Partial Equipment Access</option>
                  <option value="none">No Equipment Access</option>
                  <option value="unsure">Not Sure</option>
                </select>
              </div>

              <div>
                <label htmlFor="operationalMonths" className="block text-sm font-medium text-gray-300 mb-2">
                  Operational Months *
                </label>
                <select
                  id="operationalMonths"
                  required
                  className="w-full px-4 py-2 bg-black/40 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
                  value={formData.operationalMonths}
                  onChange={(e) => setFormData({ ...formData, operationalMonths: e.target.value })}
                >
                  <option value="">Select operational period</option>
                  <option value="year-round">Year-round</option>
                  <option value="seasonal">Seasonal</option>
                  <option value="variable">Variable</option>
                </select>
              </div>

              <div>
                <label htmlFor="organicCertified" className="block text-sm font-medium text-gray-300 mb-2">
                  Organic Certified? *
                </label>
                <select
                  id="organicCertified"
                  required
                  className="w-full px-4 py-2 bg-black/40 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
                  value={formData.organicCertified}
                  onChange={(e) => setFormData({ ...formData, organicCertified: e.target.value })}
                >
                  <option value="">Select certification status</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                  <option value="in-progress">In Progress</option>
                </select>
              </div>

              <div>
                <label htmlFor="previousBiochar" className="block text-sm font-medium text-gray-300 mb-2">
                  Previous Biochar Experience? *
                </label>
                <select
                  id="previousBiochar"
                  required
                  className="w-full px-4 py-2 bg-black/40 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
                  value={formData.previousBiochar}
                  onChange={(e) => setFormData({ ...formData, previousBiochar: e.target.value })}
                >
                  <option value="">Select experience level</option>
                  <option value="extensive">Extensive Experience</option>
                  <option value="some">Some Experience</option>
                  <option value="none">No Experience</option>
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
                  <option value="referral">Other Farmer</option>
                  <option value="association">Farm Association</option>
                  <option value="event">Agricultural Event</option>
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

export default FarmerJoinPage;