import React from 'react';
import logo from './logo.png';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-3">
                <img src={logo} alt="Parolee Monitoring Logo" className="h-10 w-auto mr-3" />

              <h2 className="text-2xl font-bold tracking-tight">ParoleGuard</h2>
            </div>
            <p className="text-gray-400 text-sm max-w-xs">
              Advancing parole management through innovation and technology.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-300">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About Us', 'Contact Us'].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-300">Legal</h3>
            <ul className="space-y-2">
              {['Privacy Policy', 'Terms and Services', 'Cookies Policy'].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider and Copyright */}
        <div className="mt-8 pt-6 border-t border-gray-700 flex justify-center">
          <p className="text-gray-400 text-sm">
            © 2025 ParoleGuard. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;