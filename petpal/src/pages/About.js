import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Users, Award, Shield, Globe, Target, ChevronRight, Calendar, MapPin, Mail, Phone } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


// Team members data
const teamMembers = [
  {
    name: "Dr. Saman Perera",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop&crop=face",
    bio: "Veterinarian with 15+ years experience in animal welfare",
    speciality: "Animal Health & Welfare"
  },
  {
    name: "Priya Jayawardena",
    role: "Operations Director",
    image: "https://images.unsplash.com/photo-1494790108755-2616b9c0e01f?w=300&h=300&fit=crop&crop=face",
    bio: "Passionate advocate for animal rights and rescue operations",
    speciality: "Rescue Operations"
  },
  {
    name: "Kasun Silva",
    role: "Community Manager",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    bio: "Building bridges between pets and families across Sri Lanka",
    speciality: "Community Outreach"
  },
  {
    name: "Anjali Fernando",
    role: "Veterinary Coordinator",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
    bio: "Ensuring all pets receive proper medical care before adoption",
    speciality: "Medical Care"
  }
];

// Impact stats
const impactStats = [
  { number: "2,500+", label: "Pets Rescued", icon: Heart },
  { number: "1,800+", label: "Successful Adoptions", icon: Users },
  { number: "75+", label: "Partner Shelters", icon: Shield },
  { number: "15+", label: "Cities Covered", icon: Globe }
];

// Values data
const coreValues = [
  {
    icon: Heart,
    title: "Compassion First",
    description: "Every decision we make is guided by love and empathy for animals in need.",
    color: "text-red-500"
  },
  {
    icon: Shield,
    title: "Safety & Trust",
    description: "We ensure the highest standards of care and create safe environments for all pets.",
    color: "text-blue-500"
  },
  {
    icon: Users,
    title: "Community Driven",
    description: "Building a strong network of pet lovers, volunteers, and advocates across Sri Lanka.",
    color: "text-green-500"
  },
  {
    icon: Target,
    title: "Transparency",
    description: "Open, honest communication in all our adoption processes and partnerships.",
    color: "text-purple-500"
  }
];

// Timeline data
const milestones = [
  {
    year: "2020",
    title: "The Beginning",
    description: "Founded PetAdopt with a mission to reduce pet homelessness in Sri Lanka",
    image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&h=250&fit=crop"
  },
  {
    year: "2021",
    title: "First 100 Adoptions",
    description: "Celebrated our first 100 successful pet adoptions with families across Colombo",
    image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&h=250&fit=crop"
  },
  {
    year: "2022",
    title: "Island-wide Expansion",
    description: "Extended our services to all 9 provinces, partnering with local shelters",
    image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=400&h=250&fit=crop"
  },
  {
    year: "2023",
    title: "1000th Adoption",
    description: "Reached the milestone of 1000 successful adoptions and launched mobile app",
    image: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=400&h=250&fit=crop"
  },
  {
    year: "2024",
    title: "Recognition & Awards",
    description: "Received National Animal Welfare Award and expanded to international partnerships",
    image: "https://images.unsplash.com/photo-1569467218990-d985b35e0b83?w=400&h=250&fit=crop"
  }
];

const TeamMemberCard = ({ member }) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
    <div className="relative">
      <img 
        src={member.image} 
        alt={member.name}
        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
      <p className="text-blue-600 font-semibold mb-3">{member.role}</p>
      <p className="text-gray-600 text-sm mb-3">{member.bio}</p>
      <div className="bg-blue-50 px-3 py-1 rounded-full inline-block">
        <span className="text-blue-700 text-xs font-medium">{member.speciality}</span>
      </div>
    </div>
  </div>
);

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-blue-600">🐾 PetAdopt</span>
            </div>
            <div className="hidden md:block">
              <div className="flex items-center space-x-8">
                <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Home</a>
                <a href="#" className="text-blue-600 font-medium">About</a>
                <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Adopt</a>
                <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Contact</a>
              </div>
            </div>
          </div>
        </div>
      </nav>

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
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 inline-block">
              <p className="text-lg font-medium">
                "The greatness of a nation can be judged by the way its animals are treated" - Mahatma Gandhi
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-white -mt-10 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {impactStats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="p-4">
                    <IconComponent className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                    <h3 className="text-3xl font-bold text-gray-800 mb-2">{stat.number}</h3>
                    <p className="text-gray-600 font-medium">{stat.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-gray-50">
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
                  rehabilitation, and adoption services to pets in need. Our dedicated team of veterinarians, 
                  volunteers, and animal advocates work tirelessly to ensure every pet receives the love and 
                  care they deserve.
                </p>
                <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500">
                  <p className="font-semibold text-blue-800">
                    "We believe that saving one animal may not change the world, but it certainly changes 
                    the world for that one animal." - Dr. Saman Perera, Founder
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=600&h=400&fit=crop"
                alt="Happy pets at shelter"
                className="rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5 text-blue-600" />
                  <span className="font-semibold text-gray-800">Since 2020</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do at PetAdopt
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="text-center p-6 rounded-xl hover:bg-gray-50 transition-all duration-300 group">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`w-8 h-8 ${value.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">Key milestones in our mission to help pets find homes</p>
          </div>
          
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className={`flex flex-col lg:flex-row gap-8 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="lg:w-1/2">
                  <img 
                    src={milestone.image}
                    alt={milestone.title}
                    className="rounded-xl shadow-lg w-full h-64 object-cover"
                  />
                </div>
                <div className="lg:w-1/2 lg:px-8">
                  <div className="bg-white p-8 rounded-xl shadow-lg">
                    <div className="flex items-center mb-4">
                      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full font-bold text-lg">
                        {milestone.year}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">{milestone.title}</h3>
                    <p className="text-gray-600 text-lg leading-relaxed">{milestone.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Passionate professionals dedicated to animal welfare and finding forever homes
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMemberCard key={index} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Awards & Recognition</h2>
            <p className="text-xl text-gray-600">Honored for our commitment to animal welfare</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300">
              <Award className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">National Animal Welfare Award</h3>
              <p className="text-gray-600 mb-2">2024</p>
              <p className="text-sm text-gray-500">Ministry of Agriculture & Animal Welfare</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300">
              <Shield className="w-16 h-16 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Best Digital Platform</h3>
              <p className="text-gray-600 mb-2">2023</p>
              <p className="text-sm text-gray-500">Sri Lanka Tech Awards</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300">
              <Heart className="w-16 h-16 text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Community Choice Award</h3>
              <p className="text-gray-600 mb-2">2023</p>
              <p className="text-sm text-gray-500">Pet Lovers Society of Sri Lanka</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Join Our Mission</h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Whether you want to adopt, volunteer, or support our cause, there are many ways to get involved
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2">
              Start Adopting
              <ChevronRight className="w-5 h-5" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300">
              Volunteer With Us
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">🐾 PetAdopt</h3>
              <p className="text-gray-400 mb-4">Connecting loving pets with caring families across Sri Lanka.</p>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Adopt a Pet</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4">Get Involved</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Volunteer</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Donate</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Partner With Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Foster a Pet</a></li>
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
    </div>
  );
};

export default About;