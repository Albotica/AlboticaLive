import React from 'react';
import { BackgroundBeams } from '../components/ui/background-beams';
import { Input } from '../components/ui/input';
import { StarBorder } from '../components/ui/star-border';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

function Contact() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [formData, setFormData] = React.useState({
    fullName: '',
    designation: '',
    email: '',
    companyName: '',
    companySize: '',
    projectDescription: '',
    acceptPrivacy: false
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.acceptPrivacy) {
      toast.error('Please accept the privacy policy');
      return;
    }

    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: 'd25be0da-629e-404c-8a20-83b7ef3b0c5a',
          name: formData.fullName,
          email: formData.email,
          designation: formData.designation,
          company_name: formData.companyName,
          company_size: formData.companySize,
          message: formData.projectDescription,
          subject: 'New Contact Form Submission - Albotica',
        }),
      });

      const data = await response.json();

      if (data.success) {
        toast.success('Thank you for your submission! We\'ll be in touch soon.');
        
        // Reset form
        setFormData({
          fullName: '',
          designation: '',
          email: '',
          companyName: '',
          companySize: '',
          projectDescription: '',
          acceptPrivacy: false
        });
      } else {
        throw new Error(data.message || 'Failed to submit form');
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('Due to Huge Traffic. Our Servers are facing an issue. Please try again after sometime or Message Us on any of ours Social Accounts.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-black relative flex flex-col items-center justify-center antialiased overflow-y-auto py-12">
      <Toaster position="top-center" />
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-40 text-lg md:text-7xl gradient-heading font-sans font-bold mb-12 text-center">
          Let's Connect
        </h1>
        <p className="text-neutral-300 max-w-lg mx-auto my-2 text-sm text-center relative z-40 mb-12">
          Ready to revolutionize your business with AI automation? Fill out the form below and our team will get back to you within 24 hours.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4 relative z-40">
          <Input
            type="text"
            placeholder="Full name*"
            className="w-full bg-black/50 text-white border-neutral-800"
            required
            value={formData.fullName}
            onChange={(e) => setFormData({...formData, fullName: e.target.value})}
          />
          <Input
            type="text"
            placeholder="Designation"
            className="w-full bg-black/50 text-white border-neutral-800"
            value={formData.designation}
            onChange={(e) => setFormData({...formData, designation: e.target.value})}
          />
          <Input
            type="email"
            placeholder="Business email*"
            className="w-full bg-black/50 text-white border-neutral-800"
            required
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
          <Input
            type="text"
            placeholder="Company name*"
            className="w-full bg-black/50 text-white border-neutral-800"
            required
            value={formData.companyName}
            onChange={(e) => setFormData({...formData, companyName: e.target.value})}
          />
          <select 
            className="w-full bg-black/50 text-white border-neutral-800 rounded-md p-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.companySize}
            onChange={(e) => setFormData({...formData, companySize: e.target.value})}
          >
            <option value="">Company Size*</option>
            <option value="1-10">1-10 employees</option>
            <option value="11-50">11-50 employees</option>
            <option value="51-200">51-200 employees</option>
            <option value="201-500">201-500 employees</option>
            <option value="501+">501+ employees</option>
          </select>
          <textarea
            placeholder="Tell us about your project"
            className="w-full h-32 bg-black/50 text-white border-neutral-800 rounded-md p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.projectDescription}
            onChange={(e) => setFormData({...formData, projectDescription: e.target.value})}
          />
          <div className="flex items-start gap-2">
            <input 
              type="checkbox" 
              id="privacy"
              className="mt-1 bg-black/50 border-neutral-800 rounded"
              checked={formData.acceptPrivacy}
              onChange={(e) => setFormData({...formData, acceptPrivacy: e.target.checked})}
            />
            <label htmlFor="privacy" className="text-sm text-neutral-300">
              We respect your privacy. By submitting this form, you agree to receiving valuable insights and resources from us. We never share your information with third parties and you control your preferences. You may unsubscribe anytime. View our <button onClick={() => navigate('/privacy-policy')} className="text-blue-400 hover:text-blue-300">Privacy Policy</button> for more details.
            </label>
          </div>
          <div className="flex justify-center gap-4">
            <StarBorder 
              as="button"
              type="submit"
              color="#4ade80"
              className="hover:scale-105 transition-transform"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Let\'s Build'}
            </StarBorder>
          </div>
        </form>
      </div>
      <BackgroundBeams />
    </div>
  );
}

export default Contact;
