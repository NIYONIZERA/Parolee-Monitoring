// import React from 'react';

// function HeroSection() {
//   return (
//     <section className="bg-indigo-900 text-white py-20 md:py-32">
//       <div className="container mx-auto text-center">
//         <h1 className="text-2xl font-bold mb-8 md:text-3xl lg:text-4xl">
//           Next-Generation Parole Monitoring System
//         </h1>
//         <p className="text-lg mb-10 md:text-xl lg:text-2xl">
//           Empowering law enforcement with AI-driven insights and real-time monitoring
//         </p>
//         <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-md focus:outline-none focus:shadow-outline">
//           Get started &gt;
//         </button>
//       </div>
//     </section>
//   );
// }

// export default HeroSection;

import React from 'react';

function HeroSection() {
  return (
    <section className="bg-blue-900 text-white py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
          Next-Generation Parole Monitoring System
        </h1>
        <p className="text-gray-50 text-base sm:text-lg lg:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
          Empowering law enforcement with AI-driven insights and real-time monitoring
        </p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-10 rounded-md focus:outline-none focus:shadow-outline transition-colors duration-300">
          Get started 
        </button>
      </div>
    </section>
  );
}

export default HeroSection;