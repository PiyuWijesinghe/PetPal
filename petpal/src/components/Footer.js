import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">🐾 PetAdopt</h3>
            <p className="text-gray-400 mb-4">Connecting loving pets with caring families across Sri Lanka.</p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-700 transition-colors">f</div>
              <div className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-500 transition-colors">t</div>
              <div className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-pink-700 transition-colors">i</div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/adopt" className="text-gray-400 hover:text-white transition-colors">Adopt a Pet</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Pet Care</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Pet Health</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Training Tips</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Adoption Guide</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Pet Insurance</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-blue-400" />
                <span className="text-gray-400">info@petadopt.lk</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-green-400" />
                <span className="text-gray-400">+94 11 234 5678</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-3 text-red-400" />
                <span className="text-gray-400">Colombo, Sri Lanka</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">&copy; 2025 PetAdopt. All rights reserved. Made with ❤️ for pets in Sri Lanka.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;