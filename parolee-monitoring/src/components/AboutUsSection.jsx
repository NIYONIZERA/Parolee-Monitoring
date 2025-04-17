import React from 'react';
import parolee from './parolee-device.jpg';

function AboutUsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          
          {/* 📸 Image on the left */}
          <div className="w-full">
            <img
              src={parolee}
              alt="Parolee device"
              className="w-full h-auto rounded-xl shadow-lg object-cover"
            />
          </div>

          {/* 📄 Text on the right */}
          <div className="w-full text-center md:text-left">
          <h2 class="text-3xl font-bold mb-4">About <span class="text-blue-600">Us</span></h2>
          <h3 class="text-xl font-semibold mb-4">Dedicated to revolutionizing parolee management through technology</h3>

            <p className="text-gray-700 leading-relaxed ">
              ParoleGuard is dedicated to transforming the parole and probation process through
              innovative technology. Our AI and IoT-based system provides real-time monitoring,
              data-driven insights, and tools for effective rehabilitation. We strive to reduce
              recidivism rates, enhance public safety, and empower individuals to successfully
              reintegrate into society.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUsSection;
