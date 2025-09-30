import React from "react";
import { 
  RiDatabase2Line, 
  RiShieldKeyholeLine, 
  RiBarChartLine,
  RiFacebookFill,
  RiInstagramLine,
  RiLinkedinFill,
  RiGithubFill
} from "react-icons/ri";

const Footer = () => {
  // Social media links data
  const socialLinks = [
    {
      name: "Facebook",
      icon: <RiFacebookFill className="text-white" />,
      url: "https://facebook.com"
    },
    {
      name: "Instagram",
      icon: <RiInstagramLine className="text-white" />,
      url: "https://instagram.com"
    },
    {
      name: "LinkedIn",
      icon: <RiLinkedinFill className="text-white" />,
      url: "https://linkedin.com"
    },
    {
      name: "GitHub",
      icon: <RiGithubFill className="text-white" />,
      url: "https://github.com"
    }
  ];

  // Footer data arrays for cleaner code
  const sections = [
    {
      title: "Products",
      icon: <RiDatabase2Line className="text-[#8F00FF] mr-2" />,
      links: [
        "Premium Listings",
        "Featured Products",
        "New Arrivals",
        "Discount Deals",
        "Limited Editions",
        "Bestsellers"
      ]
    },
    {
      title: "Vehicles",
      icon: <RiShieldKeyholeLine className="text-[#8F00FF] mr-2" />,
      links: [
        "Cars & Sedans",
        "SUVs & 4WDs",
        "Motorcycles",
        "Commercial Vehicles",
        "Luxury Collection",
        "Vintage Classics"
      ]
    },
    {
      title: "Properties",
      icon: <RiBarChartLine className="text-[#8F00FF] mr-2" />,
      links: [
        "Residential Homes",
        "Commercial Spaces",
        "Apartments & Condos",
        "Land & Plots",
        "Vacation Rentals",
        "Luxury Estates"
      ]
    }
  ];

  return (
    <div className="w-full bg-white border-t border-[#eee0ff] mt-20">
      <footer className="mx-auto px-4 py-9 pb-1">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:pr-8 lg:flex lg:flex-col lg:items-center">
            <div className="flex items-center mb-4">
              <div className="bg-gradient-to-r from-[#8F00FF] to-[#DA00FF] p-1 rounded-lg">
                <div className="bg-white rounded-md w-12 h-12 flex items-center justify-center">
                  <span className="bg-gradient-to-r from-[#8F00FF] to-[#DA00FF] bg-clip-text text-transparent font-bold text-2xl">
                    DM
                  </span>
                </div>
              </div>
              <h4 className="ml-3 bg-gradient-to-r from-[#8F00FF] to-[#DA00FF] bg-clip-text text-transparent font-bold text-2xl">
                DealsMarket
              </h4>
            </div>
            
            <h3 className="font-semibold text-lg text-gray-800 mb-2 lg:text-center">
              Trusted Marketplace for Premium Products
            </h3>
            <p className="text-gray-600 text-sm w-[80%] lg:w-[85%] lg:text-center">
              Join thousands of satisfied customers who have found their perfect match on our platform. 
              We've successfully facilitated over 50,000 transactions with a 98% customer satisfaction rate.
              Your trusted partner for quality products, vehicles, and properties.
            </p>
            
            <div className="mt-6 flex space-x-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#9d9aa1] group w-8 h-8 rounded-full flex items-center justify-center cursor-pointer hover:bg-gradient-to-r from-[#8F00FF] to-[#DA00FF] transition-all"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          {/* Sections with links */}
          {sections.map((section, index) => (
            <div key={index} className="flex flex-col">
              <div className="flex items-center mb-4 lg:justify-center">
                {section.icon}
                <h3 className="font-semibold text-lg text-gray-800">
                  {section.title}
                </h3>
              </div>
              <ul className="space-y-3 lg:flex lg:flex-col lg:items-center">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href="#" 
                      className="text-gray-600 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-[#8F00FF] to-[#DA00FF] transition-all duration-300 flex items-center group"
                    >
                      <span className="w-1.5 h-1.5 bg-[#8F00FF] rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-all"></span>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Copyright section */}
        <div className="border-t border-[#eee0ff] mt-12 pt-6 pb-4 px-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} DealsMarket. All rights reserved.
          </p>
          <div className="mt-3 md:mt-0 flex space-x-6">
            {["Privacy Policy", "Terms of Service", "Cookie Settings"].map((item, index) => (
              <a 
                key={index}
                href="#" 
                className="text-gray-500 hover:text-[#8F00FF] text-sm transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;