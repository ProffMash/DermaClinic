import { useState } from 'react';
import { Menu, X, Phone, Mail, Clock, MapPin, Star, Award, Users, Shield, CheckCircle } from 'lucide-react';
import Appointments from './components/appointment';
import Contacts from './components/contacts';

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const services = [
    {
      title: 'Skin Consultation',
      description: 'Comprehensive skin analysis and personalized treatment plans.',
      image: 'https://images.unsplash.com/photo-1612776572997-76cc42e058c3?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Acne Treatment',
      description: 'Advanced solutions for all types of acne and scarring.',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Anti-Aging Care',
      description: 'Innovative treatments to maintain youthful, healthy skin.',
      image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=800'
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Patient",
      content: "The treatment I received at DermaClinic completely transformed my skin. The doctors are incredibly knowledgeable and caring.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200"
    },
    {
      name: "Michael Chen",
      role: "Patient",
      content: "I've struggled with acne for years until I found DermaClinic. Their personalized approach made all the difference.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200"
    },
    {
      name: "Emily Rodriguez",
      role: "Patient",
      content: "The anti-aging treatments here are amazing. I've seen remarkable improvements in my skin's texture and appearance.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200"
    }
  ];

  const stats = [
    { number: "15+", label: "Years Experience", icon: <Award className="w-6 h-6" /> },
    { number: "10k+", label: "Happy Patients", icon: <Users className="w-6 h-6" /> },
    { number: "50+", label: "Treatments", icon: <CheckCircle className="w-6 h-6" /> },
    { number: "100%", label: "Satisfaction", icon: <Shield className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-md fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl sm:text-2xl font-bold text-teal-600">DermaClinic</h1>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
              <a href="#home" className="text-gray-700 hover:text-teal-600">Home</a>
              <a href="#about" className="text-gray-700 hover:text-teal-600">About</a>
              <a href="#services" className="text-gray-700 hover:text-teal-600">Services</a>
              <a href="#testimonials" className="text-gray-700 hover:text-teal-600">Testimonials</a>
              <a href="#appointments" className="text-gray-700 hover:text-teal-600">Appointments</a>
              <a href="#contact" className="text-gray-700 hover:text-teal-600">Contact</a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-teal-600 p-2"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute w-full bg-white border-b border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-teal-600 hover:bg-gray-50 rounded-md">Home</a>
              <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-teal-600 hover:bg-gray-50 rounded-md">About</a>
              <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-teal-600 hover:bg-gray-50 rounded-md">Services</a>
              <a href="#testimonials" className="block px-3 py-2 text-gray-700 hover:text-teal-600 hover:bg-gray-50 rounded-md">Testimonials</a>
              <a href="#appointments" className="block px-3 py-2 text-gray-700 hover:text-teal-600 hover:bg-gray-50 rounded-md">Appointments</a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-teal-600 hover:bg-gray-50 rounded-md">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div id="home" className="relative bg-white pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight font-extrabold text-gray-900">
              <span className="block">Expert Dermatological Care</span>
              <span className="block text-teal-600 mt-2">For Your Skin Health</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base sm:text-lg md:text-xl text-gray-500">
              Professional skincare solutions tailored to your unique needs. Experience the best in dermatological treatment with our expert team.
            </p>
            <div className="mt-5 max-w-md mx-auto">
              <a
                href="#appointments"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 md:text-lg transition duration-300"
              >
                Book Appointment
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900">
              Why Choose DermaClinic?
            </h2>
            <p className="mt-4 max-w-2xl text-lg sm:text-xl text-gray-500 lg:mx-auto">
              We combine expertise, innovation, and personalized care to deliver the best dermatological treatments.
            </p>
          </div>

          <div className="mt-10 sm:mt-16">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="flex justify-center text-teal-600 mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl sm:text-4xl font-bold text-gray-900">{stat.number}</div>
                  <div className="mt-2 text-base sm:text-lg text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                <img src={service.image} alt={service.title} className="w-full h-48 sm:h-56 object-cover" />
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="mb-8 lg:mb-0">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900">
                Expert Dermatological Care
              </h2>
              <p className="mt-3 max-w-3xl text-base sm:text-lg text-gray-500">
                Our team of certified dermatologists brings years of experience and expertise in treating various skin conditions. We use the latest technology and evidence-based treatments to ensure the best results for our patients.
              </p>
              <div className="mt-8 space-y-4">
                {[
                  "Board-certified dermatologists",
                  "State-of-the-art facilities",
                  "Personalized treatment plans",
                  "Latest skincare technology",
                  "Comprehensive skin health solutions"
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-teal-500 flex-shrink-0" />
                    <span className="ml-2 text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-10 lg:mt-0">
              <img
                className="rounded-lg shadow-xl w-full"
                src="https://i.pinimg.com/736x/26/17/ea/2617ea76412820238e867af741093eee.jpg"
                alt="Dermatologist consultation"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 text-center mb-12">
            What Our Patients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-4 sm:p-6">
                <div className="flex items-center mb-4">
                  <img
                    className="h-12 w-12 rounded-full object-cover"
                    src={testimonial.image}
                    alt={testimonial.name}
                  />
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm sm:text-base">{testimonial.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Appointments Section */}
      <section id="appointments" className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 text-center mb-12">Book an Appointment</h2>
          <Appointments />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 text-center mb-12">Contact Us</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <Phone className="text-teal-600 w-6 h-6 sm:w-8 sm:h-8" />
                <div>
                  <h3 className="text-lg sm:text-xl font-medium text-gray-900">Phone</h3>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="text-teal-600 w-6 h-6 sm:w-8 sm:h-8" />
                <div>
                  <h3 className="text-lg sm:text-xl font-medium text-gray-900">Email</h3>
                  <p className="text-gray-600">contact@dermaclinic.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Clock className="text-teal-600 w-6 h-6 sm:w-8 sm:h-8" />
                <div>
                  <h3 className="text-lg sm:text-xl font-medium text-gray-900">Hours</h3>
                  <p className="text-gray-600">Mon-Fri: 9:00 AM - 6:00 PM</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="text-teal-600 w-6 h-6 sm:w-8 sm:h-8" />
                <div>
                  <h3 className="text-lg sm:text-xl font-medium text-gray-900">Location</h3>
                  <p className="text-gray-600">123 Skin Care Lane, Beauty City, BC 12345</p>
                </div>
              </div>
            </div>
            <Contacts />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-teal-400 mb-4">DermaClinic</h3>
              <p className="text-gray-400">Expert dermatological care for all your skin health needs.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-teal-400">Home</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-teal-400">About</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-teal-400">Services</a></li>
                <li><a href="#testimonials" className="text-gray-400 hover:text-teal-400">Testimonials</a></li>
                <li><a href="#appointments" className="text-gray-400 hover:text-teal-400">Appointments</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-teal-400">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-teal-400">Facebook</a>
                <a href="#" className="text-gray-400 hover:text-teal-400">Instagram</a>
                <a href="#" className="text-gray-400 hover:text-teal-400">Twitter</a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-400">&copy; {new Date().getFullYear()} DermaClinic. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}