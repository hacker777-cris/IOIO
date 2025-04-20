import { Link } from 'react-router-dom';
import { Home, Instagram, Facebook, Twitter, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center mb-4">
              <Home className="h-6 w-6 text-white" />
              <span className="ml-2 text-xl font-bold">IOIO</span>
            </Link>
            <p className="text-gray-300 mb-4">
              Your trusted platform for real estate in Kenya. Buy, sell, rent, or list properties with ease.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook className="h-5 w-5 text-gray-300 hover:text-white transition-colors" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter className="h-5 w-5 text-gray-300 hover:text-white transition-colors" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram className="h-5 w-5 text-gray-300 hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-gray-300 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-conditions" className="text-gray-300 hover:text-white transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white text-lg font-bold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start">
                <Mail className="h-5 w-5 text-gray-300 mr-2 mt-1" />
                <span className="text-gray-300">info@ioio.co.ke</span>
              </div>
              <div className="flex items-start">
                <Phone className="h-5 w-5 text-gray-300 mr-2 mt-1" />
                <span className="text-gray-300">+254 700 000 000</span>
              </div>
              <div className="flex items-start">
                <Home className="h-5 w-5 text-gray-300 mr-2 mt-1" />
                <span className="text-gray-300">
                  Westlands Business Park<br />
                  Nairobi, Kenya
                </span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white text-lg font-bold mb-4">Stay Updated</h4>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for the latest property listings and market insights.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 w-full bg-gray-700 text-white rounded-l-lg focus:outline-none focus:ring-2 focus:ring-accent"
                required
              />
              <button
                type="submit"
                className="bg-accent px-4 rounded-r-lg hover:bg-accent-dark transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <p className="text-center text-gray-400">
            &copy; {new Date().getFullYear()} IOIO. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;