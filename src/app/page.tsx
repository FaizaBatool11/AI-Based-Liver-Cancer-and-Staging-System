"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  FiBarChart2,
  FiImage,
  FiActivity,
  FiLogIn,
  FiUserPlus,
  FiCheckCircle,
  FiShield,
  FiClock,
  FiAward,
  FiMenu,
  FiX,
} from "react-icons/fi";
import { motion } from "framer-motion";

const EnhancedLandingPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 overflow-x-hidden">
      {/* Enhanced Navbar */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">L</span>
            </div>
            <h1 className="text-2xl font-extrabold">
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                LiverCare
              </span>
              <span className="text-gray-800"> AI</span>
            </h1>
          </motion.div>

          {/* Desktop Nav with Active Indicators */}
          <nav className="hidden md:flex gap-2 font-medium text-gray-700">
            {["Home", "Features", "How It Works", "Contact"].map((item, i) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="px-4 py-2 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-all relative group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 group-hover:w-full transition-all duration-300"></span>
              </motion.a>
            ))}
          </nav>

          <div className="hidden md:flex gap-3">
            <Link href="/Signup">
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 border-2 border-blue-600 text-blue-600 px-6 py-2.5 rounded-xl hover:bg-blue-600 hover:text-white transition-all font-semibold shadow-sm hover:shadow-md"
              >
                <FiUserPlus className="text-lg" /> Signup
              </motion.button>
            </Link>
            <Link href="/Login">
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2.5 rounded-xl hover:shadow-xl transition-all font-semibold relative overflow-hidden group"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                <span className="relative flex items-center gap-2">
                  <FiLogIn className="text-lg" /> Login
                </span>
              </motion.button>
            </Link>
          </div>

          {/* Enhanced Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="md:hidden text-2xl text-gray-700 w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <FiX /> : <FiMenu />}
          </motion.button>
        </div>

        {/* Enhanced Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-gradient-to-b from-white to-gray-50 border-t px-6 py-6 space-y-2"
          >
            {["Home", "Features", "How It Works", "Contact"].map((item, i) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-all font-medium"
              >
                {item}
              </motion.a>
            ))}
            <div className="flex flex-col gap-3 pt-4">
              <Link 
                href="/Signup" 
                className="border-2 border-blue-600 text-blue-600 px-5 py-3 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition-all text-center"
              >
                Signup
              </Link>
              <Link 
                href="/Login" 
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 py-3 rounded-xl font-semibold hover:shadow-lg transition-all text-center"
              >
                Login
              </Link>
            </div>
          </motion.div>
        )}
      </header>

      {/* Hero Section with Animated Background */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden"
      >
        {/* Background Image with Blur */}
        <div className="absolute inset-0">
          <img
            src="/images/contactpart.png"
            alt="Background"
            className="w-full h-full object-cover filter blur-sm"
          />
          {/* Optional semi-transparent overlay for contrast */}
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-6xl mx-auto text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
              AI-Powered <span className="text-yellow-300">Liver Cancer</span>
              <br />
              Staging Platform
            </h2>
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-blue-100 mb-10">
              Revolutionizing healthcare with cutting-edge AI technology. Empowering doctors with accurate, early diagnosis and smarter clinical decisions for better patient outcomes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-xl text-lg font-bold shadow-2xl hover:bg-yellow-300 transition-all"
              >
                Get Started Free
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-white/10 transition-all"
              >
                Watch Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h3 className="text-4xl md:text-5xl font-bold mb-4">
              Powerful Features
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Advanced AI technology designed to assist healthcare professionals
              in making accurate diagnoses
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <FiImage />,
                title: "Medical Image Analysis",
                desc: "State-of-the-art deep learning models analyze CT/MRI scans to detect and accurately stage liver cancer with precision.",
                color: "from-blue-500 to-cyan-500",
                iconColor: "text-blue-500"
              },
              {
                icon: <FiActivity />,
                title: "Clinical Data Insights",
                desc: "Advanced machine learning processes lab results, AFP levels, and comprehensive patient history for precise staging.",
                color: "from-indigo-500 to-purple-500",
                iconColor: "text-indigo-500"
              },
              {
                icon: <FiBarChart2 />,
                title: "Explainable AI",
                desc: "Interactive heatmaps and feature importance visualizations explain every prediction, building trust with medical professionals.",
                color: "from-purple-500 to-pink-500",
                iconColor: "text-purple-500"
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all cursor-pointer overflow-hidden"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity`}
                ></div>
                <div className={`${feature.iconColor} text-5xl mb-4`}>
                  {feature.icon}
                </div>
                <h3 className="font-bold text-xl mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h3 className="text-4xl md:text-5xl font-bold mb-4">
              How It Works
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Simple, fast, and accurate diagnosis in three easy steps
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connection Lines */}
            <div className="hidden md:block absolute top-16 left-1/4 right-1/4 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600"></div>

            {[
              {
                step: "01",
                title: "Upload Medical Data",
                desc: "Securely upload CT/MRI scans and patient clinical information to our HIPAA-compliant platform.",
              },
              {
                step: "02",
                title: "AI Analysis",
                desc: "Our advanced AI models process the data, analyzing images and clinical parameters in real-time.",
              },
              {
                step: "03",
                title: "Get Results",
                desc: "Receive detailed staging results with visual explanations and confidence scores within seconds.",
              },
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
                className="relative text-center"
              >
                <div className="relative inline-block mb-6">
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-xl">
                    {step.step}
                  </div>
                  <div className="absolute -inset-2 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full opacity-20 blur-xl"></div>
                </div>
                <h4 className="text-xl font-bold mb-3">{step.title}</h4>
                <p className="text-gray-600">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h3 className="text-4xl md:text-5xl font-bold mb-4">
              Why Choose LiverCare AI?
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Leading the future of medical diagnostics with innovation and reliability
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: <FiCheckCircle />,
                title: "Clinically Validated",
                desc: "Tested and approved by leading medical institutions worldwide",
              },
              {
                icon: <FiShield />,
                title: "Secure & Private",
                desc: "End-to-end encryption with full HIPAA compliance",
              },
              {
                icon: <FiClock />,
                title: "Real-Time Results",
                desc: "Get accurate staging results in seconds, not days",
              },
              {
                icon: <FiAward />,
                title: "Expert Support",
                desc: "24/7 support from our team of medical AI specialists",
              },
            ].map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center text-white text-2xl">
                  {benefit.icon}
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">{benefit.title}</h4>
                  <p className="text-gray-600">{benefit.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section id="contact" className="py-24 relative overflow-hidden bg-white flex flex-col items-center">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white"></div>
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-200 rounded-full filter blur-3xl"></div>
        </div>

        <div className="relative z-10 flex flex-col items-center w-full px-2 max-w-4xl">
          {/* Heading */}
          <motion.h3
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-extrabold mb-6 text-center leading-tight text-gray-900"
          >
            Get In <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Touch</span>
          </motion.h3>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-center text-lg md:text-xl text-gray-600 mb-12 max-w-3xl"
          >
            Have questions about our AI-powered diagnostics platform? Want to collaborate or learn more about implementation? We'd love to hear from you! Fill out the form below and we'll get back to you promptly.
          </motion.p>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full flex justify-center"
          >
            {/* Glowing Background */}
            <div className="absolute -inset-6 bg-white opacity-20 blur-3xl rounded-3xl pointer-events-none"></div>

            <div className="relative bg-gradient-to-r from-blue-50 to-indigo-20 p-10 md:p-12 rounded-3xl shadow-2xl w-full max-w-2xl">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.input
                    type="text"
                    placeholder="Your Name"
                    whileFocus={{ scale: 1.02 }}
                    className="w-full px-6 py-4 rounded-lg border-2 border-gray-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 focus:outline-none transition-all bg-white text-gray-900 placeholder-gray-400 shadow-sm hover:shadow-md"
                  />
                  <motion.input
                    type="email"
                    placeholder="Your Email"
                    whileFocus={{ scale: 1.02 }}
                    className="w-full px-6 py-4 rounded-lg border-2 border-gray-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 focus:outline-none transition-all bg-white text-gray-900 placeholder-gray-400 shadow-sm hover:shadow-md"
                  />
                </div>

                <motion.input
                  type="text"
                  placeholder="Subject"
                  whileFocus={{ scale: 1.02 }}
                  className="w-full px-6 py-4 rounded-lg border-2 border-gray-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 focus:outline-none transition-all bg-white text-gray-900 placeholder-gray-400 shadow-sm hover:shadow-md"
                />

                <motion.textarea
                  placeholder="Your Message"
                  rows={6}
                  whileFocus={{ scale: 1.02 }}
                  className="w-full px-6 py-4 rounded-lg border-2 border-gray-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 focus:outline-none transition-all resize-none bg-white text-gray-900 placeholder-gray-400 shadow-sm hover:shadow-md"
                ></motion.textarea>

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-4 rounded-lg font-bold text-lg shadow-xl hover:shadow-2xl transition-all relative overflow-hidden group"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Send Message
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-white font-bold text-xl mb-4">
                LiverCare <span className="text-blue-400">AI</span>
              </h4>
              <p className="text-sm text-gray-400">
                Revolutionizing healthcare with AI-powered liver cancer diagnostics.
              </p>
            </div>
            <div>
              <h5 className="text-white font-semibold mb-4">Product</h5>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-blue-400 transition">Features</a></li>
                <li><a href="#" className="hover:text-blue-400 transition">Pricing</a></li>
                <li><a href="#" className="hover:text-blue-400 transition">Security</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-white font-semibold mb-4">Company</h5>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-blue-400 transition">About Us</a></li>
                <li><a href="#" className="hover:text-blue-400 transition">Careers</a></li>
                <li><a href="#" className="hover:text-blue-400 transition">Blog</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-white font-semibold mb-4">Legal</h5>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-blue-400 transition">Privacy</a></li>
                <li><a href="#" className="hover:text-blue-400 transition">Terms</a></li>
                <li><a href="#" className="hover:text-blue-400 transition">HIPAA</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>
              © {new Date().getFullYear()}{" "}
              <span className="font-semibold text-white">LiverCare AI</span>. All
              Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default EnhancedLandingPage;