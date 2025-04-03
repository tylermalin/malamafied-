import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Mail } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
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
              <Link to="/" className="hover:text-emerald-400 transition-colors">
                Home
              </Link>
              <Link to="/get-started" className="bg-emerald-400 text-black px-6 py-2 rounded-full font-medium hover:bg-emerald-300 transition-all">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-32 pb-24">
        {children}
      </main>

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
                Transforming agricultural waste into premium carbon credits.
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

export default Layout;