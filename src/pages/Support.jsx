import React, { useState } from 'react';
import { Search, MessageCircle, Phone, Mail, HelpCircle, Clock, CheckCircle, ChevronRight, FileText, Shield, User, Settings } from 'lucide-react';
import Footer from '../layout/Footer';
import Navbar from '../layout/Navbar';

const SupportPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('general');
  const [searchQuery, setSearchQuery] = useState('');

  const supportCategories = [
    { id: 'general', name: 'General Questions', icon: HelpCircle },
    { id: 'account', name: 'Account & Profile', icon: User },
    { id: 'buying', name: 'Buying & Selling', icon: MessageCircle },
    { id: 'payment', name: 'Payment & Billing', icon: FileText },
    { id: 'safety', name: 'Safety & Security', icon: Shield },
    { id: 'technical', name: 'Technical Issues', icon: Settings }
  ];

  const faqData = {
    general: [
      {
        question: "How do I create an account on MarketPlace?",
        answer: "To create an account, click on 'Sign Up' in the top right corner, fill in your details including name, email, and password. You'll receive a verification email to activate your account."
      },
      {
        question: "Is MarketPlace free to use?",
        answer: "Yes, creating an account and browsing listings is completely free. We only charge a small commission when you successfully sell an item through our platform."
      },
      {
        question: "What types of items can I sell?",
        answer: "You can sell products, vehicles, and properties. This includes electronics, fashion items, cars, motorcycles, apartments, houses, and commercial properties."
      },
      {
        question: "How do I contact customer support?",
        answer: "You can reach us through live chat, email at support@marketplace.com, or phone at +1 (555) 123-4567. Our support team is available 24/7."
      }
    ],
    account: [
      {
        question: "How do I reset my password?",
        answer: "Go to the login page and click 'Forgot Password'. Enter your email address and we'll send you a reset link. Follow the instructions in the email to create a new password."
      },
      {
        question: "How can I update my profile information?",
        answer: "Log into your account and go to 'Profile Settings'. Here you can update your personal information, contact details, and profile picture."
      },
      {
        question: "How do I verify my account?",
        answer: "Account verification helps build trust. Upload a government-issued ID and proof of address. Verification typically takes 24-48 hours."
      },
      {
        question: "Can I delete my account?",
        answer: "Yes, you can permanently delete your account from Account Settings. Note that this action is irreversible and all your data will be removed."
      }
    ],
    buying: [
      {
        question: "How do I make a purchase?",
        answer: "Find the item you want, click 'Contact Seller' to discuss details, negotiate price if applicable, and arrange payment and delivery directly with the seller."
      },
      {
        question: "How do I post an ad?",
        answer: "Click 'Post Ad', select your category (Product, Vehicle, or Property), fill in the details, upload photos, set your price, and publish your listing."
      },
      {
        question: "How long do listings stay active?",
        answer: "Standard listings stay active for 30 days. You can renew, edit, or delete your listings anytime from your dashboard."
      },
      {
        question: "Can I edit my listing after posting?",
        answer: "Yes, you can edit your listing anytime from your dashboard. You can update photos, description, price, and other details."
      }
    ],
    payment: [
      {
        question: "What payment methods do you accept?",
        answer: "We accept all major credit cards, debit cards, PayPal, and bank transfers. Payment is processed securely through our encrypted system."
      },
      {
        question: "When are selling fees charged?",
        answer: "Selling fees are only charged when your item sells successfully. The fee is automatically deducted from your payment."
      },
      {
        question: "How do I get a refund?",
        answer: "Refunds are handled case-by-case. Contact customer support with your transaction details and we'll review your request within 24 hours."
      },
      {
        question: "Is my payment information secure?",
        answer: "Yes, all payment information is encrypted and processed through secure payment gateways. We never store your complete card details on our servers."
      }
    ],
    safety: [
      {
        question: "How do you ensure seller authenticity?",
        answer: "We verify seller identities, monitor listings for suspicious activity, and have a rating system. Always check seller ratings and reviews before making a purchase."
      },
      {
        question: "What should I do if I encounter a scam?",
        answer: "Report suspicious activity immediately through our report system. Never share personal information or send money outside our platform."
      },
      {
        question: "How do I report inappropriate content?",
        answer: "Click the 'Report' button on any listing or message. Our moderation team reviews all reports within 24 hours."
      },
      {
        question: "Is it safe to meet sellers in person?",
        answer: "When meeting in person, choose public locations, bring a friend if possible, and trust your instincts. For high-value items, consider meeting at a police station."
      }
    ],
    technical: [
      {
        question: "Why can't I upload photos?",
        answer: "Ensure your photos are under 5MB each and in JPG, PNG, or GIF format. Clear your browser cache or try a different browser if issues persist."
      },
      {
        question: "The website is loading slowly. What can I do?",
        answer: "Clear your browser cache, disable browser extensions, or try using a different browser. If issues continue, contact our technical support."
      },
      {
        question: "I'm not receiving email notifications.",
        answer: "Check your spam folder and ensure our emails aren't blocked. You can also update your notification preferences in Account Settings."
      },
      {
        question: "How do I use the mobile app?",
        answer: "Download the MarketPlace app from App Store or Google Play. Log in with your existing account credentials to access all features on mobile."
      }
    ]
  };

  const contactOptions = [
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      availability: 'Available 24/7',
      action: 'Start Chat',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us a detailed message',
      availability: 'Response within 4 hours',
      action: 'Send Email',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak directly with our team',
      availability: 'Mon-Fri 9AM-6PM',
      action: 'Call Now',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  const filteredFAQs = faqData[selectedCategory]?.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  ) || [];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <Navbar/>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#8F00FF] to-[#DA00FF] text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            How can we help you?
          </h1>
          <p className="text-xl mb-10 text-purple-100">
            Search our knowledge base or get in touch with our support team
          </p>
          
          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto bg-white rounded-xl">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 " />
            <input
              type="text"
              placeholder="Search for answers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-xl  text-gray-800 outline-none text-lg"
            />
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Get in Touch</h2>
            <p className="text-xl text-gray-600">Choose your preferred way to reach us</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactOptions.map((option, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200">
                <div className={`w-16 h-16 bg-gradient-to-r ${option.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  <option.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">{option.title}</h3>
                <p className="text-gray-600 mb-4 text-center">{option.description}</p>
                <p className="text-sm text-gray-500 mb-6 text-center">{option.availability}</p>
                <button className="w-full bg-gradient-to-r from-[#8F00FF] to-[#DA00FF] text-white py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300">
                  {option.action}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Find quick answers to common questions</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {supportCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 cursor-pointer ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-[#8F00FF] to-[#DA00FF] text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                <category.icon className="w-5 h-5" />
                <span>{category.name}</span>
              </button>
            ))}
          </div>

          <div className="max-w-4xl mx-auto">
            {filteredFAQs.length > 0 ? (
              <div className="space-y-4">
                {filteredFAQs.map((faq, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 ">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      {faq.question}
                    </h3>
                    <p className="text-gray-600 leading-relaxed pl-8">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <HelpCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500 text-lg">No results found for "{searchQuery}"</p>
                <p className="text-gray-400">Try different keywords or browse by category</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Quick Links</h2>
            <p className="text-xl text-gray-600">Access important resources and policies</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'User Guide', description: 'Complete guide to using MarketPlace', icon: FileText },
              { title: 'Safety Tips', description: 'Stay safe while buying and selling', icon: Shield },
              { title: 'Privacy Policy', description: 'How we protect your data', icon: Settings },
              { title: 'Terms of Service', description: 'Platform rules and guidelines', icon: HelpCircle }
            ].map((link, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors duration-300 cursor-pointer group">
                <link.icon className="w-8 h-8 text-purple-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{link.title}</h3>
                <p className="text-gray-600 mb-4">{link.description}</p>
                <div className="flex items-center text-purple-600 font-medium">
                  <span>Learn More</span>
                  <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#8F00FF] to-[#DA00FF] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Still need help?</h2>
          <p className="text-xl mb-8 text-purple-100">
            Our support team is here to assist you with any questions or issues
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white cursor-pointer text-purple-600 px-8 py-3 rounded-xl font-medium hover:shadow-lg transition-all duration-300">
              Contact Support
            </button>
            <button className="border-2 border-white cursor-pointer  text-white px-8 py-3 rounded-xl font-medium hover:bg-white hover:text-purple-600 transition-all duration-300">
              Visit Help Center
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer/>
    </div>
  );
};

export default SupportPage;