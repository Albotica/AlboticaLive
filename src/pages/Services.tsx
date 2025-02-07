import React from 'react';
import { SparklesCore } from '../components/ui/sparkles';
import { Card } from '../components/ui/card';
import { Spotlight } from '../components/ui/spotlight';
import { FeaturesSectionWithHoverEffects } from '../components/ui/feature-section-with-hover-effects';
import { StarBorder } from '../components/ui/star-border';
import { useNavigate } from 'react-router-dom';

function Services() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white pt-16">
      {/* Hero Section */}
      <div className="relative py-20">
        <div className="absolute inset-0">
          <SparklesCore
            id="tsparticlesServices"
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
          <h1 className="text-5xl md:text-7xl gradient-heading font-bold mb-6 text-center">Our Services</h1>
          <p className="text-xl text-center max-w-2xl mx-auto text-neutral-300">
            Comprehensive AI automation solutions tailored to your business needs
          </p>
        </div>
      </div>

      {/* Main Services */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center gradient-heading-alt">What We Offer</h2>
          <FeaturesSectionWithHoverEffects />
        </div>
      </div>

      {/* Process Section */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center gradient-heading">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Card className="p-6 bg-black/[0.96] relative overflow-hidden border-zinc-800">
              <div className="text-4xl font-bold text-green-400 mb-4">01</div>
              <h3 className="text-xl font-semibold mb-4">Discovery</h3>
              <p className="text-neutral-300">
                We analyze your business needs and identify automation opportunities.
              </p>
            </Card>
            <Card className="p-6 bg-black/[0.96] relative overflow-hidden border-zinc-800">
              <div className="text-4xl font-bold text-green-400 mb-4">02</div>
              <h3 className="text-xl font-semibold mb-4">Strategy</h3>
              <p className="text-neutral-300">
                We develop a customized AI automation strategy for your business.
              </p>
            </Card>
            <Card className="p-6 bg-black/[0.96] relative overflow-hidden border-zinc-800">
              <div className="text-4xl font-bold text-green-400 mb-4">03</div>
              <h3 className="text-xl font-semibold mb-4">Implementation</h3>
              <p className="text-neutral-300">
                We deploy and integrate AI solutions seamlessly into your workflow.
              </p>
            </Card>
            <Card className="p-6 bg-black/[0.96] relative overflow-hidden border-zinc-800">
              <div className="text-4xl font-bold text-green-400 mb-4">04</div>
              <h3 className="text-xl font-semibold mb-4">Optimization</h3>
              <p className="text-neutral-300">
                We continuously monitor and optimize for maximum efficiency.
              </p>
            </Card>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 gradient-heading-alt">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-neutral-300">
            Let's discuss how our AI automation services can transform your business
          </p>
          <StarBorder 
            color="#4ade80"
            className="hover:scale-105 transition-transform cursor-pointer"
            onClick={() => navigate('/contact')}
          >
            Contact Us
          </StarBorder>
        </div>
      </div>
    </div>
  );
}

export default Services;