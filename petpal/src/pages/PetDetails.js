import React, { useState } from 'react';
import { ArrowLeft, Heart, MapPin, Users, Shield, Award, Phone, Mail } from 'lucide-react';

export default function PetAdoptApp() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedPetId, setSelectedPetId] = useState(null);

  const pets = {
    buddy: {
      id: 'buddy',
      name: "Buddy",
      breed: "Golden Retriever", 
      age: "2 years",
      location: "Colombo",
      description: "Friendly and energetic dog looking for a loving home.",
      fullDescription: "Buddy is an incredibly loving and energetic Golden Retriever who brings joy wherever he goes. He's been with us since he was a puppy and has grown into a well-mannered, intelligent companion. Buddy loves playing fetch, going for long walks, and meeting new people. He's great with children and gets along wonderfully with other dogs.",
      emoji: "🐕",
      characteristics: {
        size: "Large (25-30 kg)",
        energy: "High", 
        training: "House trained",
        temperament: "Friendly & Active"
      }
    },
    luna: {
      id: 'luna',
      name: "Luna",
      breed: "Persian Cat",
      age: "1 year", 
      location: "Kandy",
      description: "Calm and affectionate cat perfect for families.",
      fullDescription: "Luna is a beautiful Persian cat with the most gentle and loving personality. She enjoys quiet moments, gentle pets, and watching the world from sunny windowsills. Luna is perfect for someone looking for a calm, affectionate companion who will provide endless comfort and companionship.",
      emoji: "🐱",
      characteristics: {
        size: "Medium (4-5 kg)",
        energy: "Low to Medium",
        training: "Litter trained", 
        temperament: "Calm & Affectionate"
      }
    },
    max: {
      id: 'max',
      name: "Max",
      breed: "German Shepherd",
      age: "3 years",
      location: "Galle", 
      description: "Loyal and protective dog, great with children.",
      fullDescription: "Max is a magnificent German Shepherd with a noble heart and protective instincts. He's incredibly loyal to his family and has a special soft spot for children. Max is well-trained, intelligent, and would make an excellent guard dog while also being a loving family companion.",
      emoji: "🐕",
      characteristics: {
        size: "Large (30-35 kg)",
        energy: "High",
        training: "Advanced trained",
        temperament: "Loyal & Protective"
      }
    }
  };

  const goToDetails = (petId) => {
    setSelectedPetId(petId);
    setCurrentPage('details');
  };

  const goToHome = () => {
    setCurrentPage('home');
    setSelectedPetId(null);
  };

  const switchPet = (petId) => {
    setSelectedPetId(petId);
  };

  // HOME PAGE COMPONENT
  const HomePage = () => (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Header */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 h-16 flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-2xl">🐾</span>
            <span className="ml-2 text-xl font-bold text-blue-600">PetAdopt</span>
          </div>
          <div className="flex space-x-8">
            <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">Home</a>
            <a href="#" className="text-gray-600 hover:text-gray-800">About</a>
            <a href="#" className="text-gray-600 hover:text-gray-800">Adopt</a>
            <a href="#" className="text-gray-600 hover:text-gray-800">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="text-center py-16 bg-gradient-to-r from-blue-50 to-purple-50">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Meet Our Featured Pets</h1>
        <p className="text-xl text-gray-600">These adorable companions are looking for their forever homes</p>
      </div>

      {/* Pet Cards Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.values(pets).map((pet) => (
            <div key={pet.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="relative">
                <div className="h-64 bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center">
                  <span className="text-6xl animate-bounce">{pet.emoji}</span>
                </div>
                <button className="absolute top-4 right-4 p-2 bg-white bg-opacity-80 rounded-full hover:bg-opacity-100 transition-all">
                  <Heart className="text-gray-600 hover:text-red-500 transition-colors" size={20} />
                </button>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{pet.name}</h3>
                <p className="text-gray-600 mb-2">{pet.breed} • {pet.age}</p>
                <div className="flex items-center text-gray-500 mb-4">
                  <MapPin size={16} className="mr-1" />
                  <span>{pet.location}</span>
                </div>
                <p className="text-gray-700 mb-6 line-clamp-2">{pet.description}</p>
                <button 
                  onClick={() => goToDetails(pet.id)}
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-medium text-lg shadow-md hover:shadow-lg"
                >
                  View Details →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="text-xl font-bold mb-2">🐾 PetAdopt</h3>
          <p className="text-gray-300">Connecting loving families with adorable pets</p>
          <p className="text-gray-400 mt-2">📞 +94 11 234 5678 | ✉️ info@petadopt.lk</p>
        </div>
      </footer>
    </div>
  );

  // DETAILS PAGE COMPONENT  
  const DetailsPage = () => {
    const pet = pets[selectedPetId];
    
    if (!pet) return null;

    return (
      <div className="min-h-screen bg-gray-50">
        {/* Navigation Header */}
        <nav className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 h-16 flex justify-between items-center">
            <div className="flex items-center">
              <span className="text-2xl">🐾</span>
              <span className="ml-2 text-xl font-bold text-blue-600">PetAdopt</span>
            </div>
            <div className="flex space-x-8">
              <button onClick={goToHome} className="text-blue-600 hover:text-blue-800 font-medium">Home</button>
              <a href="#" className="text-gray-600 hover:text-gray-800">About</a>
              <a href="#" className="text-gray-600 hover:text-gray-800">Adopt</a>
              <a href="#" className="text-gray-600 hover:text-gray-800">Contact</a>
            </div>
          </div>
        </nav>

        {/* Breadcrumb & Back Button */}
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <button 
              onClick={goToHome}
              className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
            >
              <ArrowLeft size={20} className="mr-2" />
              Back to All Pets
            </button>
          </div>
        </div>

        {/* Pet Selection Tabs */}
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex space-x-4">
              {Object.values(pets).map((p) => (
                <button
                  key={p.id}
                  onClick={() => switchPet(p.id)}
                  className={`px-6 py-2 rounded-lg font-medium transition-all ${
                    selectedPetId === p.id 
                      ? 'bg-blue-600 text-white shadow-md' 
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {p.emoji} {p.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Left Side - Pet Photos & Description */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                
                {/* Main Pet Photo */}
                <div className="h-96 bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center relative">
                  <div className="text-center text-white">
                    <div className="text-8xl mb-4 animate-pulse">{pet.emoji}</div>
                    <h2 className="text-2xl font-bold">{pet.name}</h2>
                    <p className="text-lg opacity-90">{pet.breed}</p>
                  </div>
                  <button className="absolute top-6 right-6 p-3 bg-white bg-opacity-20 rounded-full hover:bg-opacity-30 transition-all">
                    <Heart className="text-white" size={24} />
                  </button>
                </div>
                
                {/* Pet Information */}
                <div className="p-8">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h1 className="text-3xl font-bold text-gray-800 mb-2">{pet.name}</h1>
                      <p className="text-xl text-gray-600 mb-2">{pet.breed} • {pet.age}</p>
                      <div className="flex items-center text-gray-500">
                        <MapPin size={16} className="mr-1" />
                        <span>{pet.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">About {pet.name}</h3>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      {pet.fullDescription}
                    </p>
                  </div>

                  {/* Photo Gallery */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">More Photos</h3>
                    <div className="grid grid-cols-3 gap-4">
                      {[1, 2, 3].map((num) => (
                        <div key={num} className="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center hover:scale-105 transition-transform cursor-pointer">
                          <span className="text-gray-500 text-3xl">{pet.emoji}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Pet Details & Actions */}
            <div className="space-y-6">
              
              {/* Pet Characteristics */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                  <Award className="mr-2 text-blue-600" size={20} />
                  Pet Details
                </h3>
                <div className="space-y-3">
                  {Object.entries(pet.characteristics).map(([key, value]) => (
                    <div key={key} className="flex justify-between">
                      <span className="text-gray-600 capitalize">{key}:</span>
                      <span className="font-medium text-gray-800">{value}</span>
                    </div>
                  ))}
                  <div className="flex justify-between">
                    <span className="text-gray-600">Status:</span>
                    <span className="font-medium text-green-600">✅ Available</span>
                  </div>
                </div>
              </div>

              {/* Adoption Requirements */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                  <Users className="mr-2 text-green-600" size={20} />
                  Adoption Requirements
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <span className="text-gray-700">Loving family environment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <span className="text-gray-700">Regular exercise and play time</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <span className="text-gray-700">Previous pet experience preferred</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <span className="text-gray-700">Safe and secure home</span>
                  </li>
                </ul>
              </div>

              {/* Health Information */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                  <Shield className="mr-2 text-red-600" size={20} />
                  Health Status
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1">•</span>
                    <span className="text-gray-700">Fully vaccinated & up to date</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1">•</span>
                    <span className="text-gray-700">Spayed/Neutered</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1">•</span>
                    <span className="text-gray-700">Regular health checkups</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1">•</span>
                    <span className="text-gray-700">No known health issues</span>
                  </li>
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button 
                  onClick={() => alert(`Thank you for your interest in adopting ${pet.name}! Please contact us to proceed.`)}
                  className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg shadow-lg hover:shadow-xl"
                >
                  🏠 Adopt {pet.name}
                </button>
                <button 
                  onClick={() => alert(`Visit scheduled! We'll contact you soon to arrange a meeting with ${pet.name}.`)}
                  className="w-full bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors font-medium"
                >
                  📅 Schedule a Visit
                </button>
                <div className="grid grid-cols-2 gap-2">
                  <button 
                    onClick={() => alert('Calling PetAdopt Center...')}
                    className="bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-orange-700 transition-colors flex items-center justify-center"
                  >
                    <Phone size={16} className="mr-2" />
                    Call
                  </button>
                  <button 
                    onClick={() => alert('Opening email client...')}
                    className="bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center"
                  >
                    <Mail size={16} className="mr-2" />
                    Email
                  </button>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 border">
                <h4 className="font-semibold text-gray-800 mb-3">📞 Contact Information</h4>
                <div className="space-y-1 text-sm text-gray-600">
                  <p><strong>PetAdopt Center - {pet.location}</strong></p>
                  <p>📞 Phone: +94 11 234 5678</p>
                  <p>✉️ Email: adopt@petadopt.lk</p>
                  <p>🕒 Hours: Mon-Sat 9AM-6PM</p>
                  <p>📍 Address: 123 Pet Street, {pet.location}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // MAIN RENDER - Show appropriate page
  return currentPage === 'home' ? <HomePage /> : <DetailsPage />;
}