import React, { useEffect } from 'react';
import { SparklesCore } from '../components/ui/sparkles';
import { SplineScene } from '../components/ui/splite';
import { Card } from '../components/ui/card';
import { Spotlight } from '../components/ui/spotlight';
import { StarBorder } from '../components/ui/star-border';
import { FeaturesSectionWithHoverEffects } from '../components/ui/feature-section-with-hover-effects';
import { AnimatedTestimonials } from '../components/ui/animated-testimonials';
import { ContainerScroll } from '../components/ui/container-scroll-animation';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    // Add chatbot configuration
    window.chtlConfig = { chatbotId: "3819518822" };

    // Create and append the script
    const script = document.createElement('script');
    script.async = true;
    script.dataset.id = "3819518822";
    script.id = "chatling-embed-script";
    script.type = "text/javascript";
    script.src = "https://chatling.ai/js/embed.js";
    document.body.appendChild(script);

    // Cleanup on unmount
    return () => {
      document.body.removeChild(script);
      delete window.chtlConfig;
    };
  }, []);

  const testimonials = [
    {
      quote:
        "The chatbot they developed has reduced our customer service workload by 70% while maintaining high satisfaction rates.",
      name: "Sarah Chen",
      designation: "Customer Service Director at TechFlow",
      src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Their affordable pricing made advanced AI chatbots accessible for our small business. The ROI has been incredible.",
      name: "Michael Rodriguez",
      designation: "CEO at InnovateSphere",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "The custom bot they built handles our complex product inquiries perfectly. It's like having an expert sales team 24/7.",
      name: "Emily Watson",
      designation: "Sales Director at CloudScale",
      src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Their support team is exceptional. Any adjustments or updates we need are handled promptly and professionally.",
      name: "James Kim",
      designation: "IT Manager at DataPro",
      src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "The multilingual capabilities of our bot have helped us expand into new markets without increasing support costs.",
      name: "Lisa Thompson",
      designation: "Global Operations at FutureNet",
      src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative h-screen">
        <div className="absolute inset-0">
          <SparklesCore
            id="tsparticlesHero"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={100}
            className="w-full h-full"
            particleColor="#ffffff"
            speed={0.5}
          />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-5xl md:text-7xl gradient-heading font-bold mb-6">
            Custom AI Chatbots
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            Affordable, intelligent chatbots that transform your customer service
          </p>
          <StarBorder 
            color="#4ade80"
            className="hover:scale-105 transition-transform cursor-pointer"
            onClick={() => navigate('/contact')}
          >
            Get Your Custom Bot
          </StarBorder>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-heading-alt">Why Choose Us</h2>
          <Card className="w-full h-[500px] bg-black/[0.96] relative overflow-hidden border-zinc-800">
            <Spotlight
              className="-top-40 left-0 md:left-60 md:-top-20"
              fill="white"
            />
            
            <div className="flex h-full flex-col md:flex-row">
              {/* Left content */}
              <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
                <h3 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                  Smart Bots, Smart Pricing
                </h3>
                <p className="mt-4 text-neutral-300 max-w-lg">
                  We believe every business deserves access to advanced AI technology. Our custom chatbots combine cutting-edge features with affordable pricing, making intelligent automation accessible to businesses of all sizes.
                </p>
              </div>

              {/* Right content */}
              <div className="flex-1 relative">
                <SplineScene 
                  scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                  className="w-full h-full"
                />
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-heading">Bot Features</h2>
          <FeaturesSectionWithHoverEffects />
        </div>
      </div>

      {/* Bot Showcase Section */}
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-white">
              Experience the Future of <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none bg-clip-text text-transparent bg-gradient-to-b from-purple-500 to-sky-500">
                Customer Service
              </span>
            </h1>
          </>
        }
      >
        <div className="w-full h-full flex items-center justify-center">
          <video 
            className="w-full h-full object-cover rounded-2xl"
            autoPlay 
            loop 
            muted 
            playsInline
          >
            <source src="https://wkvqqvvlcmhuhdicuarb.supabase.co/storage/v1/object/public/videos/compress.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </ContainerScroll>

      {/* Success Stories Section 
      <div className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-heading-alt">Success Stories</h2>
          <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
        </div>
      </div>*/}

      {/* CTA Section */}
      <div className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <SparklesCore
            id="tsparticlesCTA"
            background="transparent"
            minSize={0.4}
            maxSize={1.2}
            particleDensity={60}
            className="w-full h-full"
            particleColor="#ffffff"
            speed={0.3}
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 gradient-heading">Ready for Your Custom Bot?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get started with an affordable, intelligent chatbot tailored to your business
          </p>
          <StarBorder 
            color="#ffffff"
            className="hover:scale-105 transition-transform cursor-pointer"
            onClick={() => navigate('/contact')}
          >
            Start Building
          </StarBorder>
        </div>
      </div>
    </div>
  );
}

export default Home;