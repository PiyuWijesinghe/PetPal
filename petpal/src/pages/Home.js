import React, { useState } from 'react';
import { ChevronRight, Heart, MapPin, Phone, Mail, Menu, X } from 'lucide-react';
import { ArrowLeft, Award, Users, Shield } from "lucide-react";

// Pet data
const featuredPets = [
  {
    id: 1,
    name: "Buddy",
    breed: "Golden Retriever",
    age: "2 years",
    location: "Colombo",
    image: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=400&h=300&fit=crop",
    description: "Friendly and energetic dog looking for a loving home.",
    fullDescription: "Buddy is an incredibly loving and energetic Golden Retriever who brings joy wherever he goes. He's been with us since he was a puppy and has grown into a well-mannered, intelligent companion. Buddy loves playing fetch, going for long walks, and meeting new people. He's great with children and gets along wonderfully with other dogs.",
    characteristics: {
      size: "Large (25-30 kg)",
      energy: "High",
      training: "House trained",
      temperament: "Friendly & Active",
      goodWith: "Kids & Other Dogs"
    },
    requirements: [
      "Active family or individual",
      "Secure yard or regular exercise",
      "Previous dog experience preferred",
      "Time for daily walks and play"
    ],
    medicalHistory: [
      "All vaccinations up to date",
      "Neutered in 2024",
      "Regular vet checkups",
      "No known health issues"
    ]
  },
  {
    id: 2,
    name: "Luna",
    breed: "Persian Cat",
    age: "1 year",
    location: "Kandy",
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&h=300&fit=crop",
    description: "Calm and affectionate cat perfect for families.",
    fullDescription: "Luna is a beautiful Persian cat with the most gentle and loving personality. She enjoys quiet moments, gentle pets, and watching the world from sunny windowsills. Luna is perfect for someone looking for a calm, affectionate companion who will provide endless comfort and companionship.",
    characteristics: {
      size: "Medium (4-5 kg)",
      energy: "Low to Medium",
      training: "Litter trained",
      temperament: "Calm & Affectionate",
      goodWith: "Gentle Children"
    },
    requirements: [
      "Indoor living environment",
      "Regular grooming commitment",
      "Quiet, calm household",
      "Experience with long-haired cats"
    ],
    medicalHistory: [
      "All vaccinations current",
      "Spayed in early 2024",
      "Regular dental care",
      "Healthy coat and eyes"
    ]
  },
  {
    id: 3,
    name: "Max",
    breed: "German Shepherd",
    age: "3 years",
    location: "Galle",
    image: "https://images.unsplash.com/photo-1551717743-49959800b1f6?w=400&h=300&fit=crop",
    description: "Loyal and protective dog, great with children.",
    fullDescription: "Max is a magnificent German Shepherd with a noble heart and protective instincts. He's incredibly loyal to his family and has a special soft spot for children. Max is well-trained, intelligent, and would make an excellent guard dog while also being a loving family companion.",
    characteristics: {
      size: "Large (30-35 kg)",
      energy: "High",
      training: "Advanced trained",
      temperament: "Loyal & Protective",
      goodWith: "Children & Families"
    },
    requirements: [
      "Experienced dog owner",
      "Large secure yard",
      "Active lifestyle",
      "Consistent training routine"
    ],
    medicalHistory: [
      "Complete vaccination record",
      "Neutered in 2023",
      "Hip and elbow screening clear",
      "Regular health monitoring"
    ]
  }
];

const PetCard = ({ pet, onViewDetails }) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
    <div className="relative">
      <img 
        src={pet.image} 
        alt={pet.name}
        className="w-full h-48 object-cover"
      />
      <div className="absolute top-3 right-3 bg-white rounded-full p-2 shadow-md">
        <Heart className="w-5 h-5 text-gray-400 hover:text-red-500 cursor-pointer transition-colors" />
      </div>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-gray-800 mb-2">{pet.name}</h3>
      <p className="text-gray-600 mb-2">{pet.breed} • {pet.age}</p>
      <div className="flex items-center text-gray-500 mb-3">
        <MapPin className="w-4 h-4 mr-1" />
        <span className="text-sm">{pet.location}</span>
      </div>
      <p className="text-gray-600 text-sm mb-4">{pet.description}</p>
      <button 
        onClick={() => onViewDetails(pet)}
        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2"
      >
        View Details
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  </div>
);

const PetDetailsPage = ({ pet, navigateTo, onSwitchPet }) => {
  const [showContactForm, setShowContactForm] = useState(false);

  if (showContactForm) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-2xl mx-auto px-4">
          <button 
            onClick={() => setShowContactForm(false)}
            className="flex items-center text-blue-600 hover:text-blue-800 mb-6"
          >
            <ArrowLeft className="mr-2" size={20} />
            Back to {pet.name}'s Details
          </button>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Adopt {pet.name}</h2>
            <p className="text-gray-600 mb-8">Please fill out this form to express your interest in adopting {pet.name}.</p>
            
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                  <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                  <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input type="email" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <input type="tel" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                <textarea rows={3} className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"></textarea>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Tell us about your experience with pets</label>
                <textarea rows={4} className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Please describe your experience with pets, living situation, and why you'd like to adopt..."></textarea>
              </div>
              
              <div className="flex space-x-4">
                <button 
                  onClick={() => {
                    alert('Application submitted! We will contact you soon.');
                    setShowContactForm(false);
                  }}
                  className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  Submit Application
                </button>
                <button 
                  onClick={() => setShowContactForm(false)} 
                  className="flex-1 bg-gray-300 text-gray-700 py-3 px-6 rounded-lg hover:bg-gray-400 transition-colors font-medium"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 mb-6">
        <button 
          onClick={() => navigateTo('home')}
          className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to All Pets
        </button>
      </div>

      {/* Pet Selection Tabs */}
      <div className="max-w-7xl mx-auto px-4 mb-8">
        <div className="flex space-x-4 overflow-x-auto">
          {featuredPets.map((p) => (
            <button
              key={p.id}
              onClick={() => onSwitchPet(p)}
              className={`px-6 py-3 rounded-lg font-medium transition-all whitespace-nowrap ${
                pet.id === p.id 
                  ? 'bg-blue-600 text-white shadow-md' 
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow'
              }`}
            >
              {p.name}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Side - Pet Photos & Description */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              
              {/* Main Pet Photo */}
              <div className="relative">
                <img 
                  src={pet.image} 
                  alt={pet.name}
                  className="w-full h-96 object-cover"
                />
                <button className="absolute top-6 right-6 p-3 bg-white bg-opacity-80 rounded-full hover:bg-opacity-100 transition-all">
                  <Heart className="text-gray-600 hover:text-red-500" size={24} />
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
                      <div key={num} className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center hover:scale-105 transition-transform cursor-pointer">
                        <img 
                          src={pet.image} 
                          alt={`${pet.name} photo ${num}`}
                          className="w-full h-full object-cover rounded-lg opacity-80"
                        />
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
                    <span className="text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}:</span>
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
                {pet.requirements.map((req, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <span className="text-gray-700">{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Health Information */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <Shield className="mr-2 text-red-600" size={20} />
                Health Status
              </h3>
              <ul className="space-y-2">
                {pet.medicalHistory.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1">•</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button 
                onClick={() => setShowContactForm(true)}
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

const HomePage = ({ navigateTo, onViewDetails }) => (
  <>
    {/* Hero Section */}
    <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 text-white py-20">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Find Your Perfect
            <span className="block text-yellow-300">Companion</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
            Discover loving pets waiting for their forever homes in Sri Lanka
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => navigateTo('adopt')}
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Start Adopting
            </button>
            <button 
              onClick={() => navigateTo('about')}
              className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>

    {/* Stats Section */}
    <section className="py-16 bg-white -mt-10 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <h3 className="text-4xl font-bold text-blue-600 mb-2">500+</h3>
              <p className="text-gray-600 font-medium">Pets Adopted</p>
            </div>
            <div className="p-6">
              <h3 className="text-4xl font-bold text-green-600 mb-2">200+</h3>
              <p className="text-gray-600 font-medium">Happy Families</p>
            </div>
            <div className="p-6">
              <h3 className="text-4xl font-bold text-purple-600 mb-2">50+</h3>
              <p className="text-gray-600 font-medium">Partner Shelters</p>
            </div>
            <div className="p-6">
              <h3 className="text-4xl font-bold text-orange-600 mb-2">24/7</h3>
              <p className="text-gray-600 font-medium">Support Available</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Features Section */}
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose Pet Adoption?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the incredible benefits of giving a rescue pet a loving home
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group hover:-translate-y-1">
            <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">🏠</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Save Lives</h3>
            <p className="text-gray-600 leading-relaxed">Give homeless pets a second chance at happiness and a loving forever home</p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group hover:-translate-y-1">
            <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">💝</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Unconditional Love</h3>
            <p className="text-gray-600 leading-relaxed">Experience the pure joy of a pet's loyalty, affection, and companionship</p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group hover:-translate-y-1">
            <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">🎯</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Perfect Match</h3>
            <p className="text-gray-600 leading-relaxed">Find pets that perfectly match your lifestyle, family, and living situation</p>
          </div>
        </div>
      </div>
    </section>

    {/* Featured Pets Section */}
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Meet Our Featured Pets</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            These adorable companions are looking for their forever homes
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredPets.map(pet => (
            <PetCard key={pet.id} pet={pet} onViewDetails={onViewDetails} />
          ))}
        </div>
        
        <div className="text-center">
          <button 
            onClick={() => navigateTo('adopt')}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            See All Available Pets
          </button>
        </div>
      </div>
    </section>

    {/* CTA Section */}
    <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 text-white relative">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Find Your New Best Friend?</h2>
        <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
          Join thousands of happy families who found their perfect pets through PetAdopt
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => navigateTo('adopt')}
            className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Browse Available Pets
          </button>
          <button 
            onClick={() => navigateTo('contact')}
            className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
          >
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  </>
);

const AboutPage = ({ navigateTo }) => (
  <>
    {/* Hero Section */}
    <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 text-white py-20">
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Our Mission is 
            <span className="block text-yellow-300">Saving Lives</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Every pet deserves a loving home. We're here to make that happen across Sri Lanka, one adoption at a time.
          </p>
        </div>
      </div>
    </section>

    {/* Our Story Section */}
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Story</h2>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                Founded in 2020 by Dr. Saman Perera, PetAdopt began with a simple but powerful vision: 
                <span className="font-semibold text-gray-800"> every pet in Sri Lanka deserves a loving home</span>.
              </p>
              <p>
                What started as a small rescue operation in Colombo has grown into the island's leading 
                pet adoption platform, connecting thousands of animals with their forever families.
              </p>
              <p>
                Today, we work with over 75 partner shelters across all 9 provinces, providing medical care, 
                rehabilitation, and adoption services to pets in need.
              </p>
            </div>
            <div className="mt-8">
              <button 
                onClick={() => navigateTo('contact')}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Join Our Mission
              </button>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=600&h=400&fit=crop"
              alt="Happy pets at shelter"
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>

    {/* Values Section */}
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Core Values</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center p-6 rounded-xl bg-white shadow-lg">
            <div className="text-5xl mb-4">❤️</div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Compassion First</h3>
            <p className="text-gray-600">Every decision guided by love and empathy for animals in need.</p>
          </div>
          
          <div className="text-center p-6 rounded-xl bg-white shadow-lg">
            <div className="text-5xl mb-4">🛡️</div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Safety & Trust</h3>
            <p className="text-gray-600">Highest standards of care and safe environments for all pets.</p>
          </div>
          
          <div className="text-center p-6 rounded-xl bg-white shadow-lg">
            <div className="text-5xl mb-4">🤝</div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Community Driven</h3>
            <p className="text-gray-600">Building networks of pet lovers and advocates across Sri Lanka.</p>
          </div>
          
          <div className="text-center p-6 rounded-xl bg-white shadow-lg">
            <div className="text-5xl mb-4">🎯</div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Transparency</h3>
            <p className="text-gray-600">Open, honest communication in all our processes.</p>
          </div>
        </div>
      </div>
    </section>
  </>
);

const AdoptPage = ({ navigateTo }) => (
  <div className="min-h-screen bg-gray-50 py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Available Pets for Adoption</h1>
      <p className="text-xl text-gray-600 mb-8">Coming soon! Browse our amazing pets looking for homes.</p>
      <button 
        onClick={() => navigateTo('home')}
        className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
      >
        Back to Home
      </button>
    </div>
  </div>
);

const ContactPage = ({ navigateTo }) => (
  <div className="min-h-screen bg-gray-50 py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Contact Us</h1>
      <p className="text-xl text-gray-600 mb-8">Get in touch with our team!</p>
      <div className="max-w-md mx-auto space-y-4">
        <div className="flex items-center justify-center">
          <Mail className="w-5 h-5 mr-3 text-blue-400" />
          <span className="text-gray-700">info@petadopt.lk</span>
        </div>
        <div className="flex items-center justify-center">
          <Phone className="w-5 h-5 mr-3 text-green-400" />
          <span className="text-gray-700">+94 11 234 5678</span>
        </div>
      </div>
      <div className="mt-8">
        <button 
          onClick={() => navigateTo('home')}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Back to Home
        </button>
      </div>
    </div>
  </div>
);

const Footer = () => (
  <footer className="bg-gray-900 text-white py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h3 className="text-2xl font-bold mb-4">🐾 PetAdopt</h3>
        <p className="text-gray-400 mb-4">Connecting loving pets with caring families across Sri Lanka.</p>
        <p className="text-gray-500">&copy; 2025 PetAdopt. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedPet, setSelectedPet] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigateTo = (page) => {
    setCurrentPage(page);
    setSelectedPet(null);
    setIsMenuOpen(false);
  };

  const viewPetDetails = (pet) => {
    setSelectedPet(pet);
    setCurrentPage('details');
  };

  const switchPet = (pet) => {
    setSelectedPet(pet);
  };

  const renderPage = () => {
    switch(currentPage) {
      case 'details':
        return selectedPet ? (
          <PetDetailsPage 
            pet={selectedPet} 
            navigateTo={navigateTo} 
            onSwitchPet={switchPet}
          />
        ) : (
          <HomePage navigateTo={navigateTo} onViewDetails={viewPetDetails} />
        );

      case 'about':
        return <AboutPage navigateTo={navigateTo} />;
      case 'adopt':
        return <AdoptPage navigateTo={navigateTo} />;
      case 'contact':
        return <ContactPage navigateTo={navigateTo} />;
      default:
        return <HomePage navigateTo={navigateTo} onViewDetails={viewPetDetails} />;
    }
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <button 
                onClick={() => navigateTo('home')} 
                className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors"
              >
                🐾 PetAdopt
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-8">
                <button
                  onClick={() => navigateTo('home')}
                  className={`font-medium transition-colors duration-200 py-2 ${
                    currentPage === 'home'
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  Home
                </button>
                <button
                  onClick={() => navigateTo('about')}
                  className={`font-medium transition-colors duration-200 py-2 ${
                    currentPage === 'about'
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  About
                </button>
                <button
                  onClick={() => navigateTo('adopt')}
                  className={`font-medium transition-colors duration-200 py-2 ${
                    currentPage === 'adopt'
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  Adopt
                </button>
                <button
                  onClick={() => navigateTo('contact')}
                  className={`font-medium transition-colors duration-200 py-2 ${
                    currentPage === 'contact'
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  Contact
                </button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
                {['home', 'about', 'adopt', 'contact'].map((page) => (
                  <button
                    key={page}
                    onClick={() => navigateTo(page)}
                    className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors ${
                      currentPage === page
                        ? 'text-blue-600 bg-blue-50'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                    }`}
                  >
                    {page.charAt(0).toUpperCase() + page.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Page Content */}
      {renderPage()}

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;