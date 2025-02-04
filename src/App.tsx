import React from 'react';
import { Compass, BookOpen, Users, ArrowRight, GraduationCap, Briefcase, Building2, Search } from 'lucide-react';
import BlogCard from './components/BlogCard';
import TeamMember from './components/TeamMember';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Navigation */}
      <nav className="bg-gray-800/95 backdrop-blur-sm fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <Compass className="w-6 h-6 text-purple-400" />
              <span className="font-bold text-xl">Daseinify</span>
            </div>
            <div className="hidden md:flex items-center gap-4">
              <button 
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-4 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-700 transition-colors"
              >
                About Us
              </button>
              <button 
                onClick={() => document.getElementById('blog')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-4 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-700 transition-colors"
              >
                Blog
              </button>
              <button 
                onClick={() => document.getElementById('sponsorships')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-4 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-700 transition-colors"
              >
                For Companies
              </button>
              <button className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg text-white transition-colors">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
            alt="Space background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-300 mb-6">
              Find Your Path, Live Your Purpose
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12">
              Don't let life live you. Take control of your future with our AI-powered guidance platform.
            </p>
            <div className="bg-gray-800/80 backdrop-blur-sm p-8 rounded-2xl max-w-2xl mx-auto shadow-xl">
              <h2 className="text-2xl font-semibold mb-4">Discover Your True Calling</h2>
              <p className="text-gray-300 mb-6">Take our comprehensive assessment to find the perfect career path that matches your passions and strengths.</p>
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-10 py-5 rounded-xl text-xl font-semibold flex items-center gap-3 mx-auto">
                Start Free Assessment <ArrowRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">Discover Your Perfect Path</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: GraduationCap, title: 'Find Your Major', description: 'Discover the perfect major that aligns with your passions and strengths' },
              { icon: Building2, title: 'Choose Your College', description: 'Find the ideal college that matches your academic goals and preferences' },
              { icon: Briefcase, title: 'Land Internships', description: 'Connect with relevant internships to build real-world experience' },
              { icon: Compass, title: 'Career Guidance', description: 'Navigate toward jobs that match your skills and values' }
            ].map((feature, index) => (
              <div key={index} className="bg-gray-700 p-6 rounded-xl">
                <feature.icon className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">Latest Insights</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <BlogCard
              image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80"
              title="Finding Purpose in Your Career"
              excerpt="Learn how to align your passion with professional success"
              date="Mar 15, 2024"
            />
            <BlogCard
              image="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80"
              title="The Future of Work"
              excerpt="Emerging careers and skills for tomorrow's workplace"
              date="Mar 12, 2024"
            />
            <BlogCard
              image="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80"
              title="Making the Right Choice"
              excerpt="How to choose a college major with confidence"
              date="Mar 10, 2024"
            />
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">Our Mission</h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xl text-gray-300 mb-6">
                At Daseinify, we believe everyone deserves to find their true calling. Our platform combines cutting-edge AI technology with deep understanding of career development to help you make informed decisions about your future.
              </p>
              <p className="text-xl text-gray-300">
                We're committed to proving that pursuing your passion and achieving financial success aren't mutually exclusive. Let us help you write your success story.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <TeamMember
                image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80"
                name="Sarah Johnson"
                role="Founder & CEO"
              />
              <TeamMember
                image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80"
                name="David Chen"
                role="Head of AI"
              />
              <TeamMember
                image="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80"
                name="Emily Rodriguez"
                role="Career Expert"
              />
              <TeamMember
                image="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80"
                name="Michael Park"
                role="Education Director"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sponsorship Section */}
      <section id="sponsorships" className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">For Companies</h2>
          <p className="text-xl text-gray-300 mb-8">
            Connect with top talent and showcase your internship opportunities. Partner with Daseinify to reach motivated students and young professionals.
          </p>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg text-lg font-semibold">
            Become a Partner
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Daseinify</h3>
              <p className="text-gray-400">Empowering futures, one decision at a time.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Home</li>
                <li>About Us</li>
                <li>Blog</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Career Quiz</li>
                <li>College Finder</li>
                <li>Internships</li>
                <li>Success Stories</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Twitter</li>
                <li>LinkedIn</li>
                <li>Instagram</li>
                <li>Facebook</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Daseinify. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

export default App