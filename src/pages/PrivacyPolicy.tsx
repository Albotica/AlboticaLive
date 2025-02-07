import React from 'react';
import { SparklesCore } from '../components/ui/sparkles';
import { Card } from '../components/ui/card';
import { Spotlight } from '../components/ui/spotlight';
import { useNavigate } from 'react-router-dom';

function PrivacyPolicy() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white pt-16">
      {/* Hero Section */}
      <div className="relative py-20">
        <div className="absolute inset-0">
          <SparklesCore
            id="tsparticlesPrivacy"
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
          <h1 className="text-5xl md:text-7xl gradient-heading font-bold mb-6 text-center">Privacy Policy</h1>
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
                This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.
              </p>

              <p className="text-neutral-300 mb-8">
                We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.
              </p>

              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4 gradient-heading-alt">Interpretation and Definitions</h2>
                <h3 className="text-xl font-semibold mb-4">Interpretation</h3>
                <p className="text-neutral-300 mb-4">
                  The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
                </p>

                <h3 className="text-xl font-semibold mb-4">Definitions</h3>
                <ul className="list-disc pl-6 text-neutral-300 space-y-2">
                  <li><strong>Account</strong> means a unique account created for You to access our Service or parts of our Service.</li>
                  <li><strong>Company</strong> (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to Albotica.</li>
                  <li><strong>Country</strong> refers to: Jammu and Kashmir, India</li>
                  <li><strong>Device</strong> means any device that can access the Service such as a computer, a cellphone or a digital tablet.</li>
                  <li><strong>Personal Data</strong> is any information that relates to an identified or identifiable individual.</li>
                  <li><strong>Service</strong> refers to the Website.</li>
                  <li><strong>Website</strong> refers to Albotica, accessible from <a href="https://albotica.live" className="text-blue-400 hover:text-blue-300">Albotica</a></li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4 gradient-heading-alt">Types of Data We Collect</h2>
                <h3 className="text-xl font-semibold mb-4">Personal Data</h3>
                <p className="text-neutral-300 mb-4">While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. This may include:</p>
                <ul className="list-disc pl-6 text-neutral-300 space-y-2">
                  <li>Email address</li>
                  <li>First name and last name</li>
                  <li>Phone number</li>
                  <li>Company information</li>
                  <li>Usage Data</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4 gradient-heading-alt">Use of Your Personal Data</h2>
                <p className="text-neutral-300 mb-4">The Company may use Personal Data for the following purposes:</p>
                <ul className="list-disc pl-6 text-neutral-300 space-y-2">
                  <li>To provide and maintain our Service</li>
                  <li>To notify you about changes to our Service</li>
                  <li>To provide customer support</li>
                  <li>To gather analysis or valuable information so that we can improve our Service</li>
                  <li>To monitor the usage of our Service</li>
                  <li>To detect, prevent and address technical issues</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4 gradient-heading-alt">Security of Your Personal Data</h2>
                <p className="text-neutral-300 mb-4">
                  The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While We strive to use commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute security.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4 gradient-heading-alt">Changes to this Privacy Policy</h2>
                <p className="text-neutral-300 mb-4">
                  We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
                </p>
                <p className="text-neutral-300 mb-4">
                  You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 gradient-heading-alt">Contact Us</h2>
                <p className="text-neutral-300 mb-4">
                  If you have any questions about this Privacy Policy, you can contact us:
                </p>
                <ul className="list-disc pl-6 text-neutral-300 space-y-2">
                  <li>By email: privacy@albotica.live</li>
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

export default PrivacyPolicy;