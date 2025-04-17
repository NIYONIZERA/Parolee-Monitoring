import React from 'react';
import { Users, Brain, Activity } from 'lucide-react'; // Lucide icons

function FeaturesSection() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* User Management */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl hover:shadow-blue-300 transition duration-300">
            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-blue-600 mx-auto mb-4">
              <Users className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-700">User Management</h3>
            <p className="text-gray-600">
              Comprehensive system for managing parolees, officers, and staff members.
            </p>
          </div>

          {/* AI Insights */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl hover:shadow-blue-300 transition duration-300">
            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-blue-600 mx-auto mb-4">
              <Brain className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-700">AI Insights</h3>
            <p className="text-gray-600">
              Advanced analytics and predictions powered by artificial intelligence.
            </p>
          </div>

          {/* Real-time Monitoring */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl hover:shadow-blue-300 transition duration-300">
            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-blue-600 mx-auto mb-4">
              <Activity className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-700">Real-time Monitoring</h3>
            <p className="text-gray-600">
              Live tracking and instant alerts for enhanced supervision.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
