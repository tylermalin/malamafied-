import React, { useState } from 'react';
import Layout from '../components/Layout';
import { ArrowRight, ArrowLeft } from 'lucide-react';

function BlogPage() {
  const [selectedPost, setSelectedPost] = useState<string | null>(null);

  const blogPost = {
    title: "The Science Behind Biochar Carbon Credits",
    category: "Technology",
    date: "March 20, 2024",
    description: "Understanding how biochar locks carbon away for centuries while improving soil health.",
    content: `
      <h2 class="text-2xl font-bold mb-4">Introduction to Biochar Technology</h2>
      <p class="mb-6">
        Biochar, a form of charcoal produced through pyrolysis of biomass, represents one of the most promising solutions 
        in our fight against climate change. When agricultural waste is converted into biochar, it creates a stable form 
        of carbon that can persist in soil for centuries, effectively removing CO2 from the atmosphere.
      </p>

      <h2 class="text-2xl font-bold mb-4">The Pyrolysis Process</h2>
      <p class="mb-6">
        At Malama Labs, we've developed a state-of-the-art pyrolysis process that converts agricultural waste into 
        high-quality biochar. This process occurs in a controlled, oxygen-limited environment at temperatures between 
        300-700°C, ensuring optimal carbon stability and soil benefits.
      </p>

      <h2 class="text-2xl font-bold mb-4">Carbon Credit Generation</h2>
      <p class="mb-6">
        Each ton of biochar can sequester approximately 2.7 tons of CO2 equivalent, making it one of the most efficient 
        carbon removal solutions available. Our rigorous monitoring and verification process ensures that every credit 
        represents genuine, measurable carbon removal.
      </p>

      <h2 class="text-2xl font-bold mb-4">Soil Health Benefits</h2>
      <p class="mb-6">
        Beyond carbon sequestration, biochar provides numerous benefits to soil health:
      </p>
      <ul class="list-disc list-inside mb-6 space-y-2">
        <li>Improved water retention capacity</li>
        <li>Enhanced nutrient availability</li>
        <li>Increased microbial activity</li>
        <li>Better soil structure and reduced compaction</li>
      </ul>

      <h2 class="text-2xl font-bold mb-4">Market Impact</h2>
      <p class="mb-6">
        With carbon credits trading at premium values of $150+ per ton, biochar represents not just an environmental 
        solution but a compelling economic opportunity for farmers and investors alike. The growing demand for high-quality 
        carbon removal credits continues to drive market expansion.
      </p>

      <h2 class="text-2xl font-bold mb-4">Future Developments</h2>
      <p class="mb-6">
        Our research and development team continues to innovate, focusing on:
      </p>
      <ul class="list-disc list-inside mb-6 space-y-2">
        <li>Optimizing pyrolysis conditions for different feedstocks</li>
        <li>Developing automated monitoring systems</li>
        <li>Improving verification methodologies</li>
        <li>Scaling production capabilities</li>
      </ul>

      <p>
        As we continue to expand our operations, we're excited about the potential to scale this solution globally, 
        working with more farmers and creating meaningful impact in the fight against climate change.
      </p>
    `
  };

  if (selectedPost) {
    return (
      <Layout>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <button 
            onClick={() => setSelectedPost(null)}
            className="flex items-center space-x-2 text-emerald-400 hover:text-emerald-300 transition-all mb-8"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Blog</span>
          </button>

          <article className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl p-8">
            <div className="mb-8">
              <div className="text-emerald-400 text-sm font-medium mb-2">{blogPost.category}</div>
              <h1 className="text-3xl font-bold mb-2">{blogPost.title}</h1>
              <div className="text-gray-400 text-sm">{blogPost.date}</div>
            </div>

            <div 
              className="prose prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: blogPost.content }}
            />
          </article>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">Blog</h1>
          <p className="text-xl text-gray-300">
            Insights and updates from the world of carbon removal and agricultural innovation.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl p-8">
            <div className="mb-4">
              <div className="text-emerald-400 text-sm font-medium mb-2">{blogPost.category}</div>
              <h3 className="text-xl font-semibold mb-2">{blogPost.title}</h3>
              <div className="text-gray-400 text-sm mb-4">{blogPost.date}</div>
              <p className="text-gray-300 mb-6">{blogPost.description}</p>
              <button 
                onClick={() => setSelectedPost(blogPost.title)}
                className="flex items-center space-x-2 text-emerald-400 hover:text-emerald-300 transition-all"
              >
                <span>Read More</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default BlogPage;