import React from 'react';
import { SparklesCore } from '../components/ui/sparkles';
import { Card } from '../components/ui/card';
import { Spotlight } from '../components/ui/spotlight';
import { useNavigate } from 'react-router-dom';

function TermsOfService() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white pt-16">
      {/* Hero Section */}
      <div className="relative py-20">
        <div className="absolute inset-0">
          <SparklesCore
            id="tsparticlesTerms"
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
          <h1 className="text-5xl md:text-7xl gradient-heading font-bold mb-6 text-center">Terms of Service</h1>
          <p className="text-xl text-center max-w-2xl mx-auto text-neutral-300">
            Last updated: January 29, 2025
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <Card className="p-8 bg-black/[0.96] relative overflow-hidden border-zinc-800">
            <Spotlight className="-top-40 left-0" fill="white" />
            <div className="relative z-10 prose prose-invert max-w-none">
              <p className="text-neutral-300 mb-8">
                Please read these terms and conditions carefully before using Our Service.
              </p>

              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4 gradient-heading-alt">Definitions</h2>
                <ul className="list-disc pl-6 text-neutral-300 space-y-2">
                  <li><strong>Company</strong> (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to Albotica.</li>
                  <li><strong>Service</strong> refers to the Website.</li>
                  <li><strong>Website</strong> refers to Albotica, accessible from <a href="https://albotica.live" className="text-blue-400 hover:text-blue-300">Albotica</a></li>
                  <li><strong>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4 gradient-heading-alt">Acknowledgment</h2>
                <p className="text-neutral-300 mb-4 text-justify" >
                These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.
Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. These Terms and Conditions apply to all visitors, users and others who access or use the Service.
By accessing or using the Service You agree to be bound by these Terms and Conditions. If You disagree with any part of these Terms and Conditions then You may not access the Service.
You represent that you are over the age of 18. The Company does not permit those under 18 to use the Service.
Your access to and use of the Service is also conditioned on Your acceptance of and compliance with the Privacy Policy of the Company. Our Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your personal information when You use the Application or the Website and tells You about Your privacy rights and how the law protects You. Please read Our Privacy Policy carefully before using Our Service.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4 gradient-heading-alt">Use License</h2>
                <p className="text-neutral-300 mb-4">
                  You are granted a limited, non-exclusive, non-transferable license to access and use the Service strictly in accordance with these Terms.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4 gradient-heading-alt">Intellectual Property</h2>
                <p className="text-neutral-300 mb-4">
                  The Service and its original content, features, and functionality are and will remain the exclusive property of Albotica and its licensors. The Service is protected by copyright, trademark, and other laws of both the Country and foreign countries.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4 gradient-heading-alt">Your Feedback to Us</h2>
                <p className="text-neutral-300 mb-4">
                  You assign all rights, title and interest in any Feedback you provide the Company. If for any reason such assignment is ineffective, you agree to grant the Company a non-exclusive, perpetual, irrevocable, royalty free, worldwide right and license to use, reproduce, disclose, sub-license, distribute, modify and exploit such Feedback without restriction.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4 gradient-heading-alt">Termination</h2>
                <p className="text-neutral-300 mb-4">
                  We may terminate or suspend Your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if You breach these Terms and Conditions.
                </p>
                <p className="text-neutral-300 mb-4">
                  Upon termination, Your right to use the Service will cease immediately.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4 gradient-heading-alt">Limitation of Liability</h2>
                <p className="text-neutral-300 mb-4">
                  To the maximum extent permitted by applicable law, in no event shall the Company or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever arising out of or in connection with your use or inability to use the Service.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4 gradient-heading-alt">Changes to These Terms</h2>
                <p className="text-neutral-300 mb-4">
                  We reserve the right to modify or replace these Terms at any time. If a revision is material We will make reasonable efforts to provide at least 30 days' notice prior to any new terms taking effect.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 gradient-heading-alt">Contact Us</h2>
                <p className="text-neutral-300 mb-4">
                  If you have any questions about these Terms and Conditions, you can contact us:
                </p>
                <ul className="list-disc pl-6 text-neutral-300 space-y-2">
                  <li>By email: legal@albotica.live</li>
                  <li>By visiting our website: <a href="https://albotica.live" className="text-blue-400 hover:text-blue-300">Albotica</a></li>
                </ul>
              </section>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default TermsOfService;