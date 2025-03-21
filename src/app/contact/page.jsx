'use client';

import { useState } from 'react';
import { 
  Send, 
  Loader2, 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Linkedin, 
  Twitter, 
  Instagram, 
  MessageCircle 
} from 'lucide-react';
import Image from 'next/image';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      setLoading(true);

      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setSubmitted(true);
          setFormData({ name: '', email: '', subject: '', message: '' });
          
          setTimeout(() => setSubmitted(false), 5000);
        } else {
          throw new Error('Submission failed');
        }
      } catch (error) {
        console.error('Submission error:', error);
      } finally {
        setLoading(false);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const socialLinks = [
    { 
      icon: <Facebook className="w-6 h-6 text-blue-600 hover:text-blue-700 transition-colors" />, 
      name: 'Facebook', 
      link: 'https://facebook.com' 
    },
    { 
      icon: <Linkedin className="w-6 h-6 text-blue-500 hover:text-blue-600 transition-colors" />, 
      name: 'LinkedIn', 
      link: 'https://linkedin.com' 
    },
    { 
      icon: <Twitter className="w-6 h-6 text-sky-400 hover:text-sky-500 transition-colors" />, 
      name: 'Twitter', 
      link: 'https://twitter.com' 
    },
    { 
      icon: <Instagram className="w-6 h-6 text-pink-500 hover:text-pink-600 transition-colors" />, 
      name: 'Instagram', 
      link: 'https://instagram.com' 
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black py-12 px-4 lg:px-8">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12">
        {/* Contact Form Section */}
        <div className="bg-gray-800/70 backdrop-blur-lg rounded-xl p-8 shadow-2xl transform transition-transform hover:scale-101">
          <h2 className="text-3xl font-bold text-white text-center mb-6">Send Us a Message</h2>
          
          {submitted && (
            <div className="p-4 bg-green-900/50 border border-green-700 rounded-lg text-green-300 mb-6 text-center animate-fade-in">
              Message Sent Successfully!
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            {['name', 'email', 'subject', 'message'].map((field) => (
              <div key={field} className="relative">
                <label className="block mb-2 text-gray-300 capitalize">{field}</label>
                {field !== 'message' ? (
                  <input
                    type={field === 'email' ? 'email' : 'text'}
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    placeholder={`Enter your ${field}`}
                    className={`w-full p-3 border rounded-lg transition-all duration-200 
                      bg-gray-700 border-gray-600 text-white 
                      focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                      placeholder-gray-500 hover:border-gray-500`}
                  />
                ) : (
                  <textarea
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Type your message here..."
                    className="w-full p-3 border rounded-lg transition-all duration-200 
                      bg-gray-700 border-gray-600 text-white 
                      focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                      placeholder-gray-500 hover:border-gray-500"
                  />
                )}
                {errors[field] && (
                  <p className="text-sm text-red-400 mt-2 animate-shake">⚠️ {errors[field]}</p>
                )}
              </div>
            ))}

            <button 
              type="submit" 
              disabled={loading} 
              className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-lg 
                font-medium flex items-center justify-center 
                transition-all duration-200 disabled:opacity-50 
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50
                transform hover:scale-105"
            >
              {loading ? (
                <Loader2 className="w-5 h-5 animate-spin mr-2" />
              ) : (
                <Send className="w-5 h-5 mr-2" />
              )} 
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Information Section */}
        <div className="flex flex-col justify-center">
          <div className="bg-black rounded-xl p-8 shadow-2xl transform transition-transform hover:scale-101">
            <div className="flex items-center mb-8">
              <Image 
                src="/image/contact.jfif" 
                alt="Contact Us" 
                width={800} 
                height={800} 
                className="rounded-full w-48 h-48 object-cover mx-auto shadow-lg transform transition-transform hover:scale-105"
              />
            </div>

            <div className="space-y-6 text-center">
              <h2 className="text-3xl font-bold text-white">Contact Information</h2>
              <p className="text-gray-300 mb-6">
                We're here to help! Reach out to us through multiple channels.
              </p>

              <div className="space-y-4">
                <div className="flex items-center justify-center space-x-4 text-gray-200 hover:text-white transition-colors">
                  <Phone className="w-6 h-6 text-blue-400" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center justify-center space-x-4 text-gray-200 hover:text-white transition-colors">
                  <Mail className="w-6 h-6 text-green-400" />
                  <span>contact@yourcompany.com</span>
                </div>
                <div className="flex items-center justify-center space-x-4 text-gray-200 hover:text-white transition-colors">
                  <MessageCircle className="w-6 h-6 text-purple-400" />
                  <span>Whatsapp: +1 (555) 987-6543</span>
                </div>
                <div className="flex items-center justify-center space-x-4 text-gray-200 hover:text-white transition-colors">
                  <MapPin className="w-6 h-6 text-red-400" />
                  <span>123 Business Street, City, Country</span>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="flex justify-center space-x-6 mt-8">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index} 
                    href={social.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:scale-110 transition-transform"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}