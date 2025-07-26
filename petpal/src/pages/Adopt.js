import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Adopt = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Available Pets for Adoption</h1>
          <p className="text-xl text-gray-600">Coming soon! Browse our amazing pets looking for homes.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Adopt;