import React from 'react';
import { ArrowUpRight, Leaf, Shield, Sparkles, ChevronRight, Globe2, Recycle, TreePine, Sprout, Users, BarChart3, ArrowRight, Star, Mail, Database, Cpu, LineChart, Network, Settings, FileCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

function HomePage() {
  // Scroll to section handler
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <Leaf className="w-8 h-8 text-emerald-400" />
                <span className="ml-2 text-xl font-bold">Malama Labs</span>
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('process')} 
                className="hover:text-emerald-400 transition-colors"
              >
                Process
              </button>
              <button 
                onClick={() => scrollToSection('investors')} 
                className="hover:text-emerald-400 transition-colors"
              >
                Investors
              </button>
              <button 
                onClick={() => scrollToSection('farmers')} 
                className="hover:text-emerald-400 transition-colors"
              >
                Farmers
              </button>
              <Link 
                to="/get-started"
                className="bg-emerald-400 text-black px-6 py-2 rounded-full font-medium hover:bg-emerald-300 transition-all"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2000&q=80"
            className="w-full h-full object-cover opacity-20"
            alt="Agricultural field"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/40" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-7">
              <div className="flex items-center space-x-2 mb-8">
                <div className="bg-emerald-400/20 text-emerald-400 px-4 py-1 rounded-full text-sm font-medium">
                  Puro Standard Certified
                </div>
                <div className="animate-pulse w-2 h-2 rounded-full bg-emerald-400" />
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
                Mobilizing the Economy for Net Negative Carbon
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-2xl">
                We help voluntary corporate buyers accelerate carbon dioxide removal (CDR) at an industrial global scale through the Puro Standard—the world's first standard focused solely on carbon removal with 100+ year durability.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/invest"
                  className="flex items-center justify-center space-x-2 bg-emerald-400 text-black px-8 py-4 rounded-full font-medium hover:bg-emerald-300 transition-all"
                >
                  <span>Start Investing</span>
                  <ArrowUpRight className="w-5 h-5" />
                </Link>
                <button 
                  onClick={() => scrollToSection('process')}
                  className="flex items-center justify-center space-x-2 border border-white/20 px-8 py-4 rounded-full font-medium hover:bg-white/5 transition-all"
                >
                  <span>Learn More</span>
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="hidden lg:block lg:col-span-5">
              <div className="relative mt-12 lg:mt-0">
                <div className="absolute -inset-2">
                  <div className="w-full h-full mx-auto opacity-30 blur-lg filter bg-gradient-to-r from-emerald-400 to-blue-500" />
                </div>
                <div className="relative bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Shield className="w-8 h-8 text-emerald-400" />
                      <h3 className="text-lg font-semibold">100+ Years</h3>
                      <p className="text-sm text-gray-400">Durable carbon storage verified by Puro Standard</p>
                    </div>
                    <div className="space-y-2">
                      <Sparkles className="w-8 h-8 text-emerald-400" />
                      <h3 className="text-lg font-semibold">Premium Value</h3>
                      <p className="text-sm text-gray-400">High-quality carbon removal credits</p>
                    </div>
                    <div className="space-y-2">
                      <Globe2 className="w-8 h-8 text-emerald-400" />
                      <h3 className="text-lg font-semibold">Global Scale</h3>
                      <p className="text-sm text-gray-400">Industrial-scale CDR implementation</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <section id="process" className="relative py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Process</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Accelerating carbon dioxide removal through rigorous standards, advanced tracking, and automated verification.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Database className="w-10 h-10" />,
                title: "Source Biomass",
                description: "Measure and track supply chain metrics, lifecycle analysis, and process parameters for complete transparency and verification."
              },
              {
                icon: <Cpu className="w-10 h-10" />,
                title: "Smart Pyrolysis",
                description: "Monitor reactor processes, inputs, and outputs with advanced sensors and real-time data collection."
              },
              {
                icon: <LineChart className="w-10 h-10" />,
                title: "Generate Credits",
                description: "Leverage AI and automation for trustless credit creation with comprehensive data validation."
              }
            ].map((step, index) => (
              <div key={index} className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                <div className="relative bg-black/40 backdrop-blur-xl border border-white/10 rounded-lg p-8">
                  <div className="text-emerald-400 mb-4">{step.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Climate Problem Section */}
      <section id="climate-problem" className="relative py-24 bg-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How Bad Is It?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Understanding the scale of our climate challenge and why immediate action is crucial.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl p-8">
                <h3 className="text-2xl font-semibold mb-4">The Big Three GHGs</h3>
                <p className="text-gray-300 mb-6">
                  There are three main greenhouse gases driving climate change:
                </p>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-black/20 rounded-lg">
                    <div className="text-2xl mb-2">CO<sub>2</sub></div>
                    <div className="text-sm text-gray-400">Carbon Dioxide</div>
                  </div>
                  <div className="text-center p-4 bg-black/20 rounded-lg">
                    <div className="text-2xl mb-2">CH<sub>4</sub></div>
                    <div className="text-sm text-gray-400">Methane</div>
                  </div>
                  <div className="text-center p-4 bg-black/20 rounded-lg">
                    <div className="text-2xl mb-2">N<sub>2</sub>O</div>
                    <div className="text-sm text-gray-400">Nitrous Oxide</div>
                  </div>
                </div>
              </div>

              <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl p-8">
                <h3 className="text-2xl font-semibold mb-4">Annual Carbon Emissions</h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300">Total Emissions</span>
                      <span className="text-2xl font-bold text-emerald-400">50B Tons</span>
                    </div>
                    <div className="h-2 bg-black/20 rounded-full overflow-hidden">
                      <div className="h-full w-full bg-emerald-400"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300">Naturally Sequestered</span>
                      <span className="text-2xl font-bold text-emerald-400">25B Tons</span>
                    </div>
                    <div className="h-2 bg-black/20 rounded-full overflow-hidden">
                      <div className="h-full w-1/2 bg-emerald-400"></div>
                    </div>
                    <p className="text-sm text-gray-400 mt-2">
                      Absorbed by plants, soil, and oceans
                    </p>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300">Remains in Atmosphere</span>
                      <span className="text-2xl font-bold text-red-400">25B Tons</span>
                    </div>
                    <div className="h-2 bg-black/20 rounded-full overflow-hidden">
                      <div className="h-full w-1/2 bg-red-400"></div>
                    </div>
                    <p className="text-sm text-gray-400 mt-2">
                      Driving global temperature rise
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl p-8">
                <h3 className="text-2xl font-semibold mb-4">The 1.5°C Threshold</h3>
                <p className="text-gray-300 mb-6">
                  There is scientific consensus that if Earth's temperature rises by more than 1.5°C, we'll face catastrophic ecological collapse.
                </p>
                <div className="relative h-48 bg-gradient-to-b from-emerald-400/20 to-red-500/20 rounded-lg overflow-hidden">
                  <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-red-500/40 to-transparent">
                    <div className="absolute bottom-4 left-4">
                      <div className="text-sm text-gray-300">Critical Threshold</div>
                      <div className="text-2xl font-bold text-red-400">1.5°C</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl p-8">
                <h3 className="text-2xl font-semibold mb-4">Time for Action</h3>
                <p className="text-gray-300">
                  The solution requires both reducing emissions AND removing existing CO2 from the atmosphere. This is where our industrial-scale carbon removal technology comes in.
                </p>
                <Link 
                  to="/get-started"
                  className="mt-6 inline-flex items-center space-x-2 bg-emerald-400 text-black px-6 py-3 rounded-full font-medium hover:bg-emerald-300 transition-all"
                >
                  <span>Join the Solution</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="farmers" className="relative py-24">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=2000&q=80"
            className="w-full h-full object-cover opacity-10"
            alt="Sustainable farming"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Benefits Beyond Carbon</h2>
              <p className="text-xl text-gray-300 mb-8">
                Our biochar solution delivers multiple benefits to farmers, investors, and the planet.
              </p>
              <div className="space-y-6">
                {[
                  {
                    icon: <Users className="w-6 h-6" />,
                    title: "Community Impact",
                    description: "Support local farming communities while generating premium returns"
                  },
                  {
                    icon: <Sprout className="w-6 h-6" />,
                    title: "Soil Health",
                    description: "Improve soil quality and crop yields with biochar application"
                  },
                  {
                    icon: <Globe2 className="w-6 h-6" />,
                    title: "Climate Action",
                    description: "Create lasting positive impact on climate change mitigation"
                  }
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="p-2 bg-emerald-400/20 rounded-lg text-emerald-400">
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{benefit.title}</h3>
                      <p className="text-gray-400">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12">
                <h3 className="text-2xl font-bold mb-4">Are you ready to see how your farm can benefit?</h3>
                <Link 
                  to="/join/farmer"
                  className="inline-flex items-center space-x-2 bg-emerald-400 text-black px-8 py-4 rounded-full font-medium hover:bg-emerald-300 transition-all"
                >
                  <span>Join Our Farmer Network</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4">
                <div className="w-full h-full mx-auto opacity-30 blur-lg filter bg-gradient-to-r from-emerald-400 to-blue-500" />
              </div>
              <div className="relative bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
                <div className="space-y-6">
                  <div className="flex justify-between items-center pb-6 border-b border-white/10">
                    <div>
                      <p className="text-sm text-gray-400">Average Credit Value</p>
                      <p className="text-3xl font-bold">$150+<span className="text-sm text-gray-400">/ton</span></p>
                    </div>
                    <div className="p-3 bg-emerald-400/20 rounded-xl">
                      <BarChart3 className="w-8 h-8 text-emerald-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Ready to make an impact?</h3>
                    <Link 
                      to="/invest"
                      className="w-full flex items-center justify-center space-x-2 bg-emerald-400 text-black px-6 py-3 rounded-full font-medium hover:bg-emerald-300 transition-all"
                    >
                      <span>Start Investing Now</span>
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="investors" className="py-24 bg-black/50 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Trusted by Industry Leaders</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Join an elite market with high-profile corporate buyers and major institutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex items-center justify-center p-8 bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg"
                alt="Microsoft"
                className="h-12 w-auto opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
            <div className="flex items-center justify-center p-8 bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/4/4f/JP_Morgan_Chase_Logo_2008_1.svg"
                alt="JPMorgan Chase"
                className="h-10 w-auto opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
            <div className="flex items-center justify-center p-8 bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg"
                alt="Stripe"
                className="h-12 w-auto opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
            <div className="flex items-center justify-center p-8 bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg"
                alt="Meta"
                className="h-8 w-auto opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What Our Partners Say</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Hear from the industry leaders and partners who are making a difference with Malama Labs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative bg-black/40 backdrop-blur-xl border border-white/10 rounded-lg p-8">
                <Star className="w-8 h-8 text-emerald-400 mb-4" />
                <p className="text-gray-300 mb-6 text-lg">
                  "The team at Malama Labs quickly worked through the situation on the ground and built a model that allowed us to get a shuddered project up and operational after no one could for years - their team and technology is groundbreaking."
                </p>
                <div>
                  <p className="font-semibold">Keoni Ford</p>
                  <p className="text-sm text-gray-400">Project Director</p>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative bg-black/40 backdrop-blur-xl border border-white/10 rounded-lg p-8">
                <Star className="w-8 h-8 text-emerald-400 mb-4" />
                <p className="text-gray-300 mb-6">
                  "Malama Labs offers the highest quality carbon credits with unprecedented transparency and verification speed."
                </p>
                <div>
                  <p className="font-semibold">Sarah Johnson</p>
                  <p className="text-sm text-gray-400">Investment Director</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/50 backdrop-blur-lg border-t border-white/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center mb-6">
                <Leaf className="w-8 h-8 text-emerald-400" />
                <span className="ml-2 text-xl font-bold">Malama Labs</span>
              </div>
              <p className="text-gray-400">
                Accelerating carbon dioxide removal at industrial scale.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/about" className="hover:text-emerald-400">About</Link></li>
                <li><Link to="/careers" className="hover:text-emerald-400">Careers</Link></li>
                <li><Link to="/press" className="hover:text-emerald-400">Press</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/blog" className="hover:text-emerald-400">Blog</Link></li>
                <li><Link to="/greenpaper" className="hover:text-emerald-400">Greenpaper</Link></li>
                <li><Link to="/docs" className="hover:text-emerald-400">Documentation</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <div className="flex items-center space-x-2 text-gray-400">
                <Mail className="w-5 h-5" />
                <a href="mailto:contact@malamalabs.com" className="hover:text-emerald-400">
                  contact@malamalabs.com
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10">
            <div className="text-center text-gray-400 text-sm">
              © {new Date().getFullYear()} Malama Labs. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;