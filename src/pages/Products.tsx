import React from 'react';
import { SparklesCore } from '../components/ui/sparkles';
import { Card } from '../components/ui/card';
import { Spotlight } from '../components/ui/spotlight';
import { StarBorder } from '../components/ui/star-border';
import { useNavigate } from 'react-router-dom';
import { Bot, Brain, Cpu, Gauge } from 'lucide-react';

function Products() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white pt-16">
      {/* Hero Section */}
      <div className="relative py-20">
        <div className="absolute inset-0">
          <SparklesCore
            id="tsparticlesProducts"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={100}
            className="w-full h-full"
            particleColor="#ffffff"
            speed={0.5}
          />
        </div>
        
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="text-5xl md:text-7xl gradient-heading font-bold mb-6 text-center">Our Products</h1>
          <p className="text-xl text-center max-w-2xl mx-auto text-neutral-300">
            Cutting-edge AI solutions designed to transform your business operations
          </p>
        </div>
      </div>

      {/* Products Grid */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center gradient-heading-alt">Solutions Portfolio</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8 bg-black/[0.96] relative overflow-hidden border-zinc-800">
              <Spotlight className="-top-40 left-0" fill="white" />
              <div className="relative z-10">
                <Bot className="w-12 h-12 text-green-400 mb-6" />
                <h3 className="text-2xl font-bold mb-4">AI Assistant Pro</h3>
                <p className="text-neutral-300 mb-6">
                  Advanced AI-powered virtual assistant for automated customer service and support.
                </p>
                <ul className="space-y-2 mb-8 text-neutral-300">
                  <li>• 24/7 Customer Support</li>
                  <li>• Natural Language Processing</li>
                  <li>• Multi-language Support</li>
                  <li>• Custom Training Options</li>
                </ul>
                <StarBorder 
                  color="#4ade80" 
                  className="w-full justify-center hover:scale-105 transition-transform cursor-pointer"
                  onClick={() => navigate('/contact')}
                >
                  Learn More
                </StarBorder>
              </div>
            </Card>

            <Card className="p-8 bg-black/[0.96] relative overflow-hidden border-zinc-800">
              <Spotlight className="-top-40 left-0" fill="white" />
              <div className="relative z-10">
                <Brain className="w-12 h-12 text-blue-400 mb-6" />
                <h3 className="text-2xl font-bold mb-4">Process Automator</h3>
                <p className="text-neutral-300 mb-6">
                  Intelligent workflow automation platform for business processes.
                </p>
                <ul className="space-y-2 mb-8 text-neutral-300">
                  <li>• Visual Workflow Builder</li>
                  <li>• Smart Task Routing</li>
                  <li>• Performance Analytics</li>
                  <li>• Integration APIs</li>
                </ul>
                <StarBorder 
                  color="#4ade80" 
                  className="w-full justify-center hover:scale-105 transition-transform cursor-pointer"
                  onClick={() => navigate('/contact')}
                >
                  Learn More
                </StarBorder>
              </div>
            </Card>

            <Card className="p-8 bg-black/[0.96] relative overflow-hidden border-zinc-800">
              <Spotlight className="-top-40 left-0" fill="white" />
              <div className="relative z-10">
                <Cpu className="w-12 h-12 text-purple-400 mb-6" />
                <h3 className="text-2xl font-bold mb-4">Smart Analytics</h3>
                <p className="text-neutral-300 mb-6">
                  AI-powered business intelligence and analytics platform.
                </p>
                <ul className="space-y-2 mb-8 text-neutral-300">
                  <li>• Real-time Data Analysis</li>
                  <li>• Predictive Insights</li>
                  <li>• Custom Dashboards</li>
                  <li>• Automated Reporting</li>
                </ul>
                <StarBorder 
                  color="#4ade80" 
                  className="w-full justify-center hover:scale-105 transition-transform cursor-pointer"
                  onClick={() => navigate('/contact')}
                >
                  Learn More
                </StarBorder>
              </div>
            </Card>

            <Card className="p-8 bg-black/[0.96] relative overflow-hidden border-zinc-800">
              <Spotlight className="-top-40 left-0" fill="white" />
              <div className="relative z-10">
                <Gauge className="w-12 h-12 text-red-400 mb-6" />
                <h3 className="text-2xl font-bold mb-4">Performance Optimizer</h3>
                <p className="text-neutral-300 mb-6">
                  AI system for optimizing business performance and efficiency.
                </p>
                <ul className="space-y-2 mb-8 text-neutral-300">
                  <li>• Resource Optimization</li>
                  <li>• Cost Management</li>
                  <li>• Efficiency Tracking</li>
                  <li>• ROI Analysis</li>
                </ul>
                <StarBorder 
                  color="#4ade80" 
                  className="w-full justify-center hover:scale-105 transition-transform cursor-pointer"
                  onClick={() => navigate('/contact')}
                >
                  Learn More
                </StarBorder>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 gradient-heading">Find Your Perfect Solution</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-neutral-300">
            Let's discuss which of our AI products best fits your business needs
          </p>
          <StarBorder 
            color="#4ade80"
            className="hover:scale-105 transition-transform cursor-pointer"
            onClick={() => navigate('/contact')}
          >
            Schedule a Demo
          </StarBorder>
        </div>
      </div>
    </div>
  );
}

export default Products;