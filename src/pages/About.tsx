import React from 'react';
import { SparklesCore } from '../components/ui/sparkles';
import { Card } from '../components/ui/card';
import { Spotlight } from '../components/ui/spotlight';

function About() {
  return (
    <div className="min-h-screen bg-black text-white pt-16">
      {/* Hero Section */}
      <div className="relative py-32"> {/* Increased padding */}
        <div className="absolute inset-0">
          <SparklesCore
            id="tsparticlesAbout"
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
          <h1 className="text-5xl md:text-7xl gradient-heading font-bold mb-12 text-center" > {/* Increased margin */}
            About Us
          </h1>
          <p className="text-xl text-justify max-w-6xl mx-auto text-neutral-300 leading-relaxed"> {/* Added leading-relaxed */}
            At Albotica, we are shaping the future of business automation by harnessing the power of artificial intelligence. As a leading AI chatbot development company, we specialize in creating smart, intuitive, and highly adaptable chatbot solutions tailored to businesses of all sizes.
          </p>
          <p className="text-xl text-justify max-w-6xl mx-auto text-neutral-300 mt-6 leading-relaxed"> {/* Added spacing between paragraphs */}
            In today's fast-paced digital landscape, businesses need seamless, efficient, and scalable communication systems to stay ahead. Our AI-driven chatbots help organizations enhance customer support, automate repetitive tasks, and optimize workflow efficiency—allowing them to focus on growth and innovation.
          </p>
          <p className="text-xl text-justify max-w-6xl mx-auto text-neutral-300 mt-6 leading-relaxed">
            We believe that AI has the potential to revolutionize business interactions, making them more personalized, responsive, and impactful. With a focus on innovation, reliability, and user-centric design, Albotica delivers chatbots that integrate seamlessly with existing platforms, ensuring a smooth and engaging experience for users.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-32"> {/* Increased padding */}
        <div className="container mx-auto px-4">
          <Card className="w-full bg-black/[0.96] relative overflow-hidden border-zinc-800 p-12"> {/* Increased padding */}
            <Spotlight
              className="-top-40 left-0 md:left-60 md:-top-20"
              fill="white"
            />
            
            <div className="relative z-10 max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center gradient-heading-alt"> {/* Increased margin */}
                Our Mission
              </h2>
              <p className="text-lg text-neutral-300 mb-8 text-justify leading-relaxed">
                At Albotica, our mission is to empower businesses with state-of-the-art AI automation solutions that drive efficiency, innovation, and growth. We are committed to transforming customer engagement through intelligent chatbot technology that streamlines communication, enhances user experience, and optimizes business operations.
              </p>
              <p className="text-lg text-neutral-300 text-justify leading-relaxed">
                We envision a world where AI-powered virtual assistants become an integral part of business workflows, reducing manual effort and enabling companies to focus on strategic decision-making. By leveraging the latest advancements in machine learning and natural language processing, our chatbots offer human-like interactions that improve customer satisfaction and operational efficiency.
              </p>
            </div>
          </Card>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-32"> {/* Increased padding */}
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-16 text-center gradient-heading">Our Core Values</h2> {/* Increased margin */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12"> {/* Increased gap */}
            <div className="p-8 bg-neutral-900/50 rounded-lg"> {/* Increased padding */}
              <h3 className="text-xl font-semibold mb-6">Innovation</h3> {/* Increased margin */}
              <p className="text-neutral-300">
                At Albotica, innovation is at the heart of everything we do. We continuously push the boundaries of AI technology to develop smarter, more efficient chatbot solutions.
              </p>
            </div>
            <div className="p-8 bg-neutral-900/50 rounded-lg">
              <h3 className="text-xl font-semibold mb-6">Excellence</h3>
              <p className="text-neutral-300">
                We are committed to delivering excellence in every AI solution we create. Our team focuses on precision, reliability, and user-centric design to ensure seamless chatbot experiences.
              </p>
            </div>
            <div className="p-8 bg-neutral-900/50 rounded-lg">
              <h3 className="text-xl font-semibold mb-6">Integrity</h3>
              <p className="text-neutral-300">
                Integrity is the foundation of our business. We uphold the highest ethical standards in every interaction, ensuring transparency, trust, and accountability.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-32"> {/* Increased padding */}
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-16 text-center gradient-heading-alt">{/*Our Leadership*/}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;