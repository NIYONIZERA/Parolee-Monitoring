import React from 'react';

function ContactUsSection() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row">
          {/* Left side - Contact Info */}
          <div className="md:w-1/2 mb-8 md:mb-0 text-left">
            <h2 className="text-3xl font-bold mb-2 text-left">Contact <span className="text-blue-500">Me</span></h2>
            <p className="text-lg mb-8 text-left">Let's talk with us</p>
            
            <p className="mb-6 text-gray-600 text-left">Get in touch with our team for more information</p>
            
            <div className="flex items-center mb-4">
              <span className="mr-3">📧</span>
              <a href="mailto:info@paroleguard.com" className="text-gray-600 hover:text-blue-500">
                info@paroleguard.com
              </a>
            </div>
            
            <div className="flex items-center mb-6">
              <span className="mr-3">📱</span>
              <a href="tel:0782806704" className="text-gray-600 hover:text-blue-500">
                0782806704
              </a>
            </div>
            
            {/* Social media icons */}
            <div className="flex space-x-4 mt-6">
              <a href="#" className="w-10 h-10 rounded-full border border-blue-500 flex items-center justify-center text-blue-500 hover:bg-blue-500 hover:text-white transition-colors">
                F
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-blue-500 flex items-center justify-center text-blue-500 hover:bg-blue-500 hover:text-white transition-colors">
                T
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-blue-500 flex items-center justify-center text-blue-500 hover:bg-blue-500 hover:text-white transition-colors">
                I
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-blue-500 flex items-center justify-center text-blue-500 hover:bg-blue-500 hover:text-white transition-colors">
                W
              </a>
            </div>
          </div>
          
          {/* Right side - Contact Form */}
          <div className="md:w-1/2 bg-white p-6 rounded-lg shadow-md">
            <form>
              <div className="mb-4">
                <input
                  type="text"
                  className="w-full p-3 bg-gray-100 rounded border border-gray-200 placeholder-gray-500 text-gray-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                  placeholder="Enter Your Name"
                />
              </div>
              
              <div className="mb-4">
                <input
                  type="email"
                  className="w-full p-3 bg-gray-100 rounded border border-gray-200 placeholder-gray-500 text-gray-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                  placeholder="Enter Your Email"
                />
              </div>
              
              <div className="mb-4">
                <input
                  type="text"
                  className="w-full p-3 bg-gray-100 rounded border border-gray-200 placeholder-gray-500 text-gray-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                  placeholder="Enter Your Subject"
                />
              </div>
              
              <div className="mb-6">
                <textarea
                  className="w-full p-3 bg-gray-100 rounded border border-gray-200 placeholder-gray-500 text-gray-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                  rows="4"
                  placeholder="Enter Your Message"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded transition-colors"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUsSection;