// // // // "use client";

// // // // import React from "react";
// // // // import {
// // // //   FiBarChart2,
// // // //   FiImage,
// // // //   FiActivity,
// // // //   FiLogIn,
// // // //   FiUserPlus,
// // // // } from "react-icons/fi";
// // // // import { motion } from "framer-motion";
// // // // import Link from "next/link";

// // // // const LandingPage: React.FC = () => {
// // // //   return (
// // // //     <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
// // // //       {/* Navbar */}
// // // //       <header className="sticky top-0 z-50 flex justify-between items-center px-8 py-4 bg-white/80 backdrop-blur shadow">
// // // //         <h1 className="text-2xl font-extrabold text-blue-600 tracking-wide">
// // // //           LiverCare <span className="text-gray-800">AI</span>
// // // //         </h1>
// // // //         <nav className="flex gap-6 font-medium text-gray-700">
// // // //           <a href="#home" className="hover:text-blue-600 transition">
// // // //             Home
// // // //           </a>
// // // //           <a href="#features" className="hover:text-blue-600 transition">
// // // //             Features
// // // //           </a>
// // // //           <a href="#contact" className="hover:text-blue-600 transition">
// // // //             Contact Us
// // // //           </a>
// // // //         </nav>
// // // //         <div className="flex gap-4">
// // // //           <Link
// // // //             href="/Signup"
// // // //             className="flex items-center gap-2 border border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition"
// // // //           >
// // // //             <FiUserPlus /> Signup
// // // //           </Link>
// // // //           <Link
// // // //             href="/Login"
// // // //             className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
// // // //           >
// // // //             <FiLogIn /> Login
// // // //           </Link>
// // // //         </div>
// // // //       </header>

// // // //       {/* Hero Section */}
// // // //       <section
// // // //         id="home"
// // // //         className="flex flex-col items-center text-center px-6 py-20 bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 text-white"
// // // //       >
// // // //         <motion.h2
// // // //           initial={{ opacity: 0, y: -30 }}
// // // //           animate={{ opacity: 1, y: 0 }}
// // // //           transition={{ duration: 0.8 }}
// // // //           className="text-5xl font-extrabold mb-6 leading-tight"
// // // //         >
// // // //           AI-Powered <span className="text-yellow-300">Liver Cancer</span> Staging
// // // //         </motion.h2>
// // // //         <motion.p
// // // //           initial={{ opacity: 0 }}
// // // //           animate={{ opacity: 1 }}
// // // //           transition={{ delay: 0.3, duration: 0.8 }}
// // // //           className="max-w-2xl text-lg text-blue-100 mb-8"
// // // //         >
// // // //           Empowering doctors with AI-driven liver cancer staging for accurate,
// // // //           early diagnosis and smarter clinical decisions.
// // // //         </motion.p>
// // // //         <motion.button
// // // //           whileHover={{ scale: 1.08 }}
// // // //           whileTap={{ scale: 0.95 }}
// // // //           className="bg-yellow-400 text-blue-900 px-8 py-3 rounded-xl text-lg font-semibold shadow-lg hover:bg-yellow-300 transition"
// // // //         >
// // // //           Get Started
// // // //         </motion.button>
// // // //       </section>

// // // //       {/* Features */}
// // // //       <section id="features" className="px-6 py-20 max-w-6xl mx-auto">
// // // //         <motion.h3
// // // //           initial={{ opacity: 0, y: 20 }}
// // // //           whileInView={{ opacity: 1, y: 0 }}
// // // //           transition={{ duration: 0.8 }}
// // // //           className="text-3xl font-bold mb-12 text-center"
// // // //         >
// // // //           Features
// // // //         </motion.h3>

// // // //         <div className="grid md:grid-cols-3 gap-10">
// // // //           {[
// // // //             {
// // // //               icon: <FiImage className="text-blue-600 text-4xl mb-4" />,
// // // //               title: "Medical Image Analysis",
// // // //               desc: "Deep learning models analyze CT/MRI scans to detect and stage liver cancer.",
// // // //             },
// // // //             {
// // // //               icon: <FiActivity className="text-blue-600 text-4xl mb-4" />,
// // // //               title: "Clinical Data Insights",
// // // //               desc: "Machine learning processes lab tests, AFP levels, and patient history for accurate staging.",
// // // //             },
// // // //             {
// // // //               icon: <FiBarChart2 className="text-blue-600 text-4xl mb-4" />,
// // // //               title: "Explainable Predictions",
// // // //               desc: "Heatmaps & feature importance explain every prediction, building trust with doctors.",
// // // //             },
// // // //           ].map((feature, i) => (
// // // //             <motion.div
// // // //               key={i}
// // // //               whileHover={{ scale: 1.05 }}
// // // //               className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition cursor-pointer"
// // // //             >
// // // //               {feature.icon}
// // // //               <h3 className="font-bold text-xl mb-3">{feature.title}</h3>
// // // //               <p className="text-gray-600">{feature.desc}</p>
// // // //             </motion.div>
// // // //           ))}
// // // //         </div>
// // // //       </section>

// // // //       {/* Contact Section */}
// // // //       <section className="px-6 py-20 bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 text-white">
// // // //         <motion.h3
// // // //           initial={{ opacity: 0, y: 20 }}
// // // //           whileInView={{ opacity: 1, y: 0 }}
// // // //           transition={{ duration: 0.8 }}
// // // //           className="text-3xl font-bold mb-6 text-center"
// // // //         >
// // // //           Contact Us
// // // //         </motion.h3>
// // // //         <p className="max-w-2xl mx-auto mb-8 text-center">
// // // //           Have questions or want to collaborate with us? Get in touch.
// // // //         </p>
// // // //         <form className="max-w-2xl mx-auto space-y-6">
// // // //           <input
// // // //             type="text"
// // // //             placeholder="Your Name"
// // // //             className="w-full px-4 py-3 rounded-lg border border-white bg-transparent placeholder-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
// // // //           />
// // // //           <input
// // // //             type="email"
// // // //             placeholder="Your Email"
// // // //             className="w-full px-4 py-3 rounded-lg border border-white bg-transparent placeholder-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
// // // //           />
// // // //           <textarea
// // // //             placeholder="Your Message"
// // // //             rows={5}
// // // //             className="w-full px-4 py-3 rounded-lg border border-white bg-transparent placeholder-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
// // // //           ></textarea>
// // // //           <button
// // // //             type="submit"
// // // //             className="w-full bg-yellow-400 text-blue-900 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition"
// // // //           >
// // // //             Send Message
// // // //           </button>
// // // //         </form>
// // // //       </section>

// // // //       {/* Footer */}
// // // //       <footer className="px-6 py-6 bg-white border-t text-center">
// // // //         <p className="text-gray-600 text-sm">
// // // //           © {new Date().getFullYear()}{" "}
// // // //           <span className="font-semibold">LiverCare AI</span>. All Rights
// // // //           Reserved.
// // // //         </p>
// // // //       </footer>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default LandingPage;

// "use client";

// import React, { useState } from "react";
// import {
//   FiBarChart2,
//   FiImage,
//   FiActivity,
//   FiLogIn,
//   FiUserPlus,
//   FiCheckCircle,
//   FiShield,
//   FiClock,
//   FiAward,
//   FiMenu,
//   FiX,
// } from "react-icons/fi";
// import { motion } from "framer-motion";
// import Link from "next/link";

// const EnhancedLandingPage = () => {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   return (
//     <div className="min-h-screen bg-gray-50 text-gray-800 overflow-x-hidden">
//       {/* Enhanced Navbar */}
//       <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-100">
//         <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             className="flex items-center gap-3"
//           >
//             <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
//               <span className="text-white font-bold text-xl">L</span>
//             </div>
//             <h1 className="text-2xl font-extrabold">
//               <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
//                 LiverCare
//               </span>
//               <span className="text-gray-800"> AI</span>
//             </h1>
//           </motion.div>

//           {/* Desktop Nav with Active Indicators */}
//           <nav className="hidden md:flex gap-2 font-medium text-gray-700">
//             {["Home", "Features", "How It Works", "Impact", "Contact"].map((item, i) => (
//               <motion.a
//                 key={item}
//                 href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
//                 initial={{ opacity: 0, y: -10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: i * 0.1 }}
//                 className="px-4 py-2 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-all relative group"
//               >
//                 {item}
//                 <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 group-hover:w-full transition-all duration-300"></span>
//               </motion.a>
//             ))}
//           </nav>

//           <div className="hidden md:flex gap-3">
//             <motion.button
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ delay: 0.3 }}
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="flex items-center gap-2 border-2 border-blue-600 text-blue-600 px-6 py-2.5 rounded-xl hover:bg-blue-600 hover:text-white transition-all font-semibold shadow-sm hover:shadow-md"
//             >
//               <FiUserPlus className="text-lg" /> Signup
//             </motion.button>
//             <motion.button
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ delay: 0.4 }}
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2.5 rounded-xl hover:shadow-xl transition-all font-semibold relative overflow-hidden group"
//             >
//               <span className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity"></span>
//               <span className="relative flex items-center gap-2">
//                 <FiLogIn className="text-lg" /> Login
//               </span>
//             </motion.button>
//           </div>

//           {/* Enhanced Mobile Menu Button */}
//           <motion.button
//             whileTap={{ scale: 0.9 }}
//             className="md:hidden text-2xl text-gray-700 w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
//             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//           >
//             {mobileMenuOpen ? <FiX /> : <FiMenu />}
//           </motion.button>
//         </div>

//         {/* Enhanced Mobile Menu */}
//         {mobileMenuOpen && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: "auto" }}
//             exit={{ opacity: 0, height: 0 }}
//             className="md:hidden bg-gradient-to-b from-white to-gray-50 border-t px-6 py-6 space-y-2"
//           >
//             {["Home", "Features", "How It Works", "Impact", "Contact"].map((item, i) => (
//               <motion.a
//                 key={item}
//                 href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
//                 initial={{ opacity: 0, x: -20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ delay: i * 0.05 }}
//                 onClick={() => setMobileMenuOpen(false)}
//                 className="block px-4 py-3 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-all font-medium"
//               >
//                 {item}
//               </motion.a>
//             ))}
//             <div className="flex flex-col gap-3 pt-4">
//               <Link href="/Signup" className="border-2 border-blue-600 text-blue-600 px-5 py-3 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition-all">
//               Signup
//               </Link>
//               {/* <button className="border-2 border-blue-600 text-blue-600 px-5 py-3 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition-all">
//                 Signup
//               </button> */}
//               <Link href="/Login" className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 py-3 rounded-xl font-semibold hover:shadow-lg transition-all">
//               Login
//               </Link>
//               {/* <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 py-3 rounded-xl font-semibold hover:shadow-lg transition-all">
//                 Login
//               </button> */}
//             </div>
//           </motion.div>
//         )}
//       </header>

//       {/* Hero Section with Animated Background */}
//       <section
//         id="home"
//         className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden"
//       >
//         {/* Animated Background */}
//         <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700">
//           <div className="absolute inset-0 opacity-20">
//             {[...Array(20)].map((_, i) => (
//               <motion.div
//                 key={i}
//                 className="absolute bg-white rounded-full"
//                 style={{
//                   width: Math.random() * 100 + 50,
//                   height: Math.random() * 100 + 50,
//                   left: `${Math.random() * 100}%`,
//                   top: `${Math.random() * 100}%`,
//                 }}
//                 animate={{
//                   y: [0, -30, 0],
//                   opacity: [0.3, 0.6, 0.3],
//                 }}
//                 transition={{
//                   duration: Math.random() * 5 + 3,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                 }}
//               />
//             ))}
//           </div>
//         </div>

//         <div className="relative z-10 max-w-6xl mx-auto text-center text-white">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             <h2 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
//               AI-Powered <span className="text-yellow-300">Liver Cancer</span>
//               <br />
//               Staging Platform
//             </h2>
//             <p className="max-w-3xl mx-auto text-lg md:text-xl text-blue-100 mb-10">
//               Revolutionizing healthcare with cutting-edge AI technology.
//               Empowering doctors with accurate, early diagnosis and smarter
//               clinical decisions for better patient outcomes.
//             </p>

//             <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-xl text-lg font-bold shadow-2xl hover:bg-yellow-300 transition-all"
//               >
//                 Get Started Free
//               </motion.button>
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-white/10 transition-all"
//               >
//                 Watch Demo
//               </motion.button>
//             </div>

//             {/* FYP Project Badge */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.5 }}
//               className="flex justify-center mt-16"
//             >
//               <div className="bg-white/10 backdrop-blur-sm border border-white/30 px-6 py-3 rounded-full text-sm font-medium">
//                 <span>🎓 Final Year Project - NUML University</span>
//               </div>
//             </motion.div>
//           </motion.div>
//         </div>

//         {/* Scroll Indicator */}
//         <motion.div
//           animate={{ y: [0, 10, 0] }}
//           transition={{ duration: 2, repeat: Infinity }}
//           className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
//         >
//           <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
//             <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
//           </div>
//         </motion.div>
//       </section>

//       {/* Stats Section */}
//       <section id="impact" className="py-20 bg-white">
//         <div className="max-w-6xl mx-auto px-6">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//             {[
//               { number: "50K+", label: "Scans Analyzed" },
//               { number: "99.2%", label: "Accuracy Rate" },
//               { number: "200+", label: "Healthcare Partners" },
//               { number: "24/7", label: "AI Support" },
//             ].map((stat, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: i * 0.1 }}
//                 viewport={{ once: true }}
//                 className="text-center"
//               >
//                 <h3 className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
//                   {stat.number}
//                 </h3>
//                 <p className="text-gray-600 font-medium">{stat.label}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section id="features" className="py-20 bg-gradient-to-b from-gray-50 to-white">
//         <div className="max-w-6xl mx-auto px-6">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-center mb-16"
//           >
//             <h3 className="text-4xl md:text-5xl font-bold mb-4">
//               Powerful Features
//             </h3>
//             <p className="text-gray-600 text-lg max-w-2xl mx-auto">
//               Advanced AI technology designed to assist healthcare professionals
//               in making accurate diagnoses
//             </p>
//           </motion.div>

//           <div className="grid md:grid-cols-3 gap-8">
//             {[
//               {
//                 icon: <FiImage />,
//                 title: "Medical Image Analysis",
//                 desc: "State-of-the-art deep learning models analyze CT/MRI scans to detect and accurately stage liver cancer with precision.",
//                 color: "from-blue-500 to-cyan-500",
//                 iconColor: "text-blue-500"
//               },
//               {
//                 icon: <FiActivity />,
//                 title: "Clinical Data Insights",
//                 desc: "Advanced machine learning processes lab results, AFP levels, and comprehensive patient history for precise staging.",
//                 color: "from-indigo-500 to-purple-500",
//                 iconColor: "text-indigo-500"
//               },
//               {
//                 icon: <FiBarChart2 />,
//                 title: "Explainable AI",
//                 desc: "Interactive heatmaps and feature importance visualizations explain every prediction, building trust with medical professionals.",
//                 color: "from-purple-500 to-pink-500",
//                 iconColor: "text-purple-500"
//               },
//             ].map((feature, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: i * 0.2 }}
//                 viewport={{ once: true }}
//                 whileHover={{ y: -10 }}
//                 className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all cursor-pointer overflow-hidden"
//               >
//                 <div
//                   className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity`}
//                 ></div>
//                 <div className={`${feature.iconColor} text-5xl mb-4`}>
//                   {feature.icon}
//                 </div>
//                 <h3 className="font-bold text-xl mb-3">{feature.title}</h3>
//                 <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* How It Works Section */}
//       <section id="how-it-works" className="py-20 bg-white">
//         <div className="max-w-6xl mx-auto px-6">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-center mb-16"
//           >
//             <h3 className="text-4xl md:text-5xl font-bold mb-4">
//               How It Works
//             </h3>
//             <p className="text-gray-600 text-lg max-w-2xl mx-auto">
//               Simple, fast, and accurate diagnosis in three easy steps
//             </p>
//           </motion.div>

//           <div className="grid md:grid-cols-3 gap-8 relative">
//             {/* Connection Lines */}
//             <div className="hidden md:block absolute top-16 left-1/4 right-1/4 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600"></div>

//             {[
//               {
//                 step: "01",
//                 title: "Upload Medical Data",
//                 desc: "Securely upload CT/MRI scans and patient clinical information to our HIPAA-compliant platform.",
//               },
//               {
//                 step: "02",
//                 title: "AI Analysis",
//                 desc: "Our advanced AI models process the data, analyzing images and clinical parameters in real-time.",
//               },
//               {
//                 step: "03",
//                 title: "Get Results",
//                 desc: "Receive detailed staging results with visual explanations and confidence scores within seconds.",
//               },
//             ].map((step, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: i * 0.2 }}
//                 viewport={{ once: true }}
//                 className="relative text-center"
//               >
//                 <div className="relative inline-block mb-6">
//                   <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-xl">
//                     {step.step}
//                   </div>
//                   <div className="absolute -inset-2 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full opacity-20 blur-xl"></div>
//                 </div>
//                 <h4 className="text-xl font-bold mb-3">{step.title}</h4>
//                 <p className="text-gray-600">{step.desc}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Why Choose Us Section */}
//       <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
//         <div className="max-w-6xl mx-auto px-6">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-center mb-16"
//           >
//             <h3 className="text-4xl md:text-5xl font-bold mb-4">
//               Why Choose LiverCare AI?
//             </h3>
//             <p className="text-gray-600 text-lg max-w-2xl mx-auto">
//               Leading the future of medical diagnostics with innovation and reliability
//             </p>
//           </motion.div>

//           <div className="grid md:grid-cols-2 gap-6">
//             {[
//               {
//                 icon: <FiCheckCircle />,
//                 title: "Clinically Validated",
//                 desc: "Tested and approved by leading medical institutions worldwide",
//               },
//               {
//                 icon: <FiShield />,
//                 title: "Secure & Private",
//                 desc: "End-to-end encryption with full HIPAA compliance",
//               },
//               {
//                 icon: <FiClock />,
//                 title: "Real-Time Results",
//                 desc: "Get accurate staging results in seconds, not days",
//               },
//               {
//                 icon: <FiAward />,
//                 title: "Expert Support",
//                 desc: "24/7 support from our team of medical AI specialists",
//               },
//             ].map((benefit, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ delay: i * 0.1 }}
//                 viewport={{ once: true }}
//                 className="flex gap-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
//               >
//                 <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center text-white text-2xl">
//                   {benefit.icon}
//                 </div>
//                 <div>
//                   <h4 className="font-bold text-lg mb-2">{benefit.title}</h4>
//                   <p className="text-gray-600">{benefit.desc}</p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white relative overflow-hidden">
//         <div className="absolute inset-0 opacity-10">
//           {[...Array(10)].map((_, i) => (
//             <motion.div
//               key={i}
//               className="absolute bg-white rounded-full"
//               style={{
//                 width: Math.random() * 200 + 100,
//                 height: Math.random() * 200 + 100,
//                 left: `${Math.random() * 100}%`,
//                 top: `${Math.random() * 100}%`,
//               }}
//               animate={{
//                 scale: [1, 1.2, 1],
//                 opacity: [0.1, 0.3, 0.1],
//               }}
//               transition={{
//                 duration: Math.random() * 5 + 5,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//               }}
//             />
//           ))}
//         </div>

//         <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
//           <motion.h3
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-4xl md:text-5xl font-bold mb-6"
//           >
//             Ready to Transform Your Practice?
//           </motion.h3>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2 }}
//             viewport={{ once: true }}
//             className="text-xl text-blue-100 mb-10"
//           >
//             Join hundreds of healthcare professionals using AI-powered diagnostics
//           </motion.p>
//           <motion.button
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.4 }}
//             viewport={{ once: true }}
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="bg-yellow-400 text-blue-900 px-10 py-4 rounded-xl text-lg font-bold shadow-2xl hover:bg-yellow-300 transition-all"
//           >
//             Start Free Trial
//           </motion.button>
//         </div>
//       </section>

//       {/* Enhanced Contact Section */}
//       <section id="contact" className="py-24 relative overflow-hidden bg-white">
//         {/* Subtle Background Pattern */}
//         <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white"></div>
//         <div className="absolute inset-0 opacity-5">
//           <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200 rounded-full filter blur-3xl"></div>
//           <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-200 rounded-full filter blur-3xl"></div>
//         </div>

//         <div className="relative max-w-6xl mx-auto px-6">
//           <div className="grid md:grid-cols-2 gap-12 items-center">
//             {/* Left Side - Info */}
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               className="text-gray-900"
//             >
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 viewport={{ once: true }}
//                 className="inline-block mb-6"
//               >
//                 <span className="bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold border border-blue-200">
//                   💬 Let's Connect
//                 </span>
//               </motion.div>

//               <h3 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
//                 Get In <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Touch</span>
//               </h3>
//               <p className="text-xl text-gray-600 mb-10 leading-relaxed">
//                 Have questions about our AI-powered diagnostics platform? Want to collaborate or learn more about implementation? We'd love to hear from you!
//               </p>

//               {/* Contact Info Cards */}
//               <div className="space-y-4">
//                 <motion.div
//                   whileHover={{ x: 10 }}
//                   className="flex items-center gap-4 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 p-5 rounded-xl shadow-sm hover:shadow-md transition-all"
//                 >
//                   <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center text-white shadow-lg">
//                     <FiImage className="text-xl" />
//                   </div>
//                   <div>
//                     <p className="text-sm text-gray-500 font-medium">Email Us</p>
//                     <p className="font-semibold text-gray-900">contact@livercareai.com</p>
//                   </div>
//                 </motion.div>

//                 <motion.div
//                   whileHover={{ x: 10 }}
//                   className="flex items-center gap-4 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 p-5 rounded-xl shadow-sm hover:shadow-md transition-all"
//                 >
//                   <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center text-white shadow-lg">
//                     <FiAward className="text-xl" />
//                   </div>
//                   <div>
//                     <p className="text-sm text-gray-500 font-medium">University Project</p>
//                     <p className="font-semibold text-gray-900">NUML - Final Year Project</p>
//                   </div>
//                 </motion.div>

//                 <motion.div
//                   whileHover={{ x: 10 }}
//                   className="flex items-center gap-4 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 p-5 rounded-xl shadow-sm hover:shadow-md transition-all"
//                 >
//                   <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center text-white shadow-lg">
//                     <FiClock className="text-xl" />
//                   </div>
//                   <div>
//                     <p className="text-sm text-gray-500 font-medium">Response Time</p>
//                     <p className="font-semibold text-gray-900">Within 24 hours</p>
//                   </div>
//                 </motion.div>
//               </div>
//             </motion.div>

//             {/* Right Side - Enhanced Form */}
//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               className="relative"
//             >
//               {/* Glowing Background */}
//               <div className="absolute -inset-4 bg-gradient-to-r from-blue-200 to-indigo-200 opacity-30 blur-3xl rounded-3xl"></div>

//               <div className="relative bg-white p-8 md:p-10 rounded-3xl shadow-2xl border-2 border-gray-100">
//                 <h4 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h4>

//                 <form className="space-y-5">
//                   <div className="grid md:grid-cols-2 gap-5">
//                     <div className="relative">
//                       <input
//                         type="text"
//                         placeholder="Your Name"
//                         className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-blue-600 focus:outline-none transition-all bg-white text-gray-900 placeholder-gray-400"
//                       />
//                       <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 hover:opacity-5 transition-opacity pointer-events-none"></div>
//                     </div>
//                     <div className="relative">
//                       <input
//                         type="email"
//                         placeholder="Your Email"
//                         className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-blue-600 focus:outline-none transition-all bg-white text-gray-900 placeholder-gray-400"
//                       />
//                       <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 hover:opacity-5 transition-opacity pointer-events-none"></div>
//                     </div>
//                   </div>

//                   <div className="relative">
//                     <input
//                       type="text"
//                       placeholder="Subject"
//                       className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-blue-600 focus:outline-none transition-all bg-white text-gray-900 placeholder-gray-400"
//                     />
//                     <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 hover:opacity-5 transition-opacity pointer-events-none"></div>
//                   </div>

//                   <div className="relative">
//                     <textarea
//                       placeholder="Your Message"
//                       rows={6}
//                       className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-blue-600 focus:outline-none transition-all resize-none bg-white text-gray-900 placeholder-gray-400"
//                     ></textarea>
//                     <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 hover:opacity-5 transition-opacity pointer-events-none"></div>
//                   </div>

//                   <motion.button
//                     whileHover={{ scale: 1.02 }}
//                     whileTap={{ scale: 0.98 }}
//                     type="submit"
//                     className="w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all relative overflow-hidden group"
//                   >
//                     <span className="relative z-10 flex items-center justify-center gap-2">
//                       Send Message
//                       <motion.span
//                         animate={{ x: [0, 5, 0] }}
//                         transition={{ duration: 1.5, repeat: Infinity }}
//                       >
//                         →
//                       </motion.span>
//                     </span>
//                     <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
//                   </motion.button>
//                 </form>

//                 {/* Decorative Elements */}
//                 <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-200 to-indigo-200 rounded-full filter blur-2xl opacity-40"></div>
//                 <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-br from-blue-200 to-indigo-200 rounded-full filter blur-2xl opacity-40"></div>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-gray-900 text-gray-300 py-12">
//         <div className="max-w-6xl mx-auto px-6">
//           <div className="grid md:grid-cols-4 gap-8 mb-8">
//             <div>
//               <h4 className="text-white font-bold text-xl mb-4">
//                 LiverCare <span className="text-blue-400">AI</span>
//               </h4>
//               <p className="text-sm text-gray-400">
//                 Revolutionizing healthcare with AI-powered liver cancer diagnostics.
//               </p>
//             </div>
//             <div>
//               <h5 className="text-white font-semibold mb-4">Product</h5>
//               <ul className="space-y-2 text-sm">
//                 <li><a href="#" className="hover:text-blue-400 transition">Features</a></li>
//                 <li><a href="#" className="hover:text-blue-400 transition">Pricing</a></li>
//                 <li><a href="#" className="hover:text-blue-400 transition">Security</a></li>
//               </ul>
//             </div>
//             <div>
//               <h5 className="text-white font-semibold mb-4">Company</h5>
//               <ul className="space-y-2 text-sm">
//                 <li><a href="#" className="hover:text-blue-400 transition">About Us</a></li>
//                 <li><a href="#" className="hover:text-blue-400 transition">Careers</a></li>
//                 <li><a href="#" className="hover:text-blue-400 transition">Blog</a></li>
//               </ul>
//             </div>
//             <div>
//               <h5 className="text-white font-semibold mb-4">Legal</h5>
//               <ul className="space-y-2 text-sm">
//                 <li><a href="#" className="hover:text-blue-400 transition">Privacy</a></li>
//                 <li><a href="#" className="hover:text-blue-400 transition">Terms</a></li>
//                 <li><a href="#" className="hover:text-blue-400 transition">HIPAA</a></li>
//               </ul>
//             </div>
//           </div>
//           <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
//             <p>
//               © {new Date().getFullYear()}{" "}
//               <span className="font-semibold text-white">LiverCare AI</span>. All
//               Rights Reserved.
//             </p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default EnhancedLandingPage;

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
            {["Home", "Features", "How It Works", "Impact", "Contact"].map((item, i) => (
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
            {["Home", "Features", "How It Works", "Impact", "Contact"].map((item, i) => (
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
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700">
          <div className="absolute inset-0 opacity-20">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute bg-white rounded-full"
                style={{
                  width: Math.random() * 100 + 50,
                  height: Math.random() * 100 + 50,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: Math.random() * 5 + 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
        </div>

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
              Revolutionizing healthcare with cutting-edge AI technology.
              Empowering doctors with accurate, early diagnosis and smarter
              clinical decisions for better patient outcomes.
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

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section id="impact" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "50K+", label: "Scans Analyzed" },
              { number: "99.2%", label: "Accuracy Rate" },
              { number: "200+", label: "Healthcare Partners" },
              { number: "24/7", label: "AI Support" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <h3 className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </h3>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-white rounded-full"
              style={{
                width: Math.random() * 200 + 100,
                height: Math.random() * 200 + 100,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Ready to Transform Your Practice?
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-blue-100 mb-10"
          >
            Join hundreds of healthcare professionals using AI-powered diagnostics
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-yellow-400 text-blue-900 px-10 py-4 rounded-xl text-lg font-bold shadow-2xl hover:bg-yellow-300 transition-all"
          >
            Start Free Trial
          </motion.button>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section id="contact" className="py-24 relative overflow-hidden bg-white">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white"></div>
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-200 rounded-full filter blur-3xl"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Side - Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-gray-900"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-block mb-6"
              >
                <span className="bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold border border-blue-200">
                  💬 Let's Connect
                </span>
              </motion.div>

              <h3 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
                Get In <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Touch</span>
              </h3>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                Have questions about our AI-powered diagnostics platform? Want to collaborate or learn more about implementation? We'd love to hear from you!
              </p>

              {/* Contact Info Cards */}
              <div className="space-y-4">
                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 p-5 rounded-xl shadow-sm hover:shadow-md transition-all"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center text-white shadow-lg">
                    <FiImage className="text-xl" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Email Us</p>
                    <p className="font-semibold text-gray-900">contact@livercareai.com</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 p-5 rounded-xl shadow-sm hover:shadow-md transition-all"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center text-white shadow-lg">
                    <FiAward className="text-xl" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">University Project</p>
                    <p className="font-semibold text-gray-900">NUML - Final Year Project</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 p-5 rounded-xl shadow-sm hover:shadow-md transition-all"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center text-white shadow-lg">
                    <FiClock className="text-xl" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Response Time</p>
                    <p className="font-semibold text-gray-900">Within 24 hours</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Side - Enhanced Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Glowing Background */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-200 to-indigo-200 opacity-30 blur-3xl rounded-3xl"></div>

              <div className="relative bg-white p-8 md:p-10 rounded-3xl shadow-2xl border-2 border-gray-100">
                <h4 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h4>

                <form className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-blue-600 focus:outline-none transition-all bg-white text-gray-900 placeholder-gray-400"
                      />
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 hover:opacity-5 transition-opacity pointer-events-none"></div>
                    </div>
                    <div className="relative">
                      <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-blue-600 focus:outline-none transition-all bg-white text-gray-900 placeholder-gray-400"
                      />
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 hover:opacity-5 transition-opacity pointer-events-none"></div>
                    </div>
                  </div>

                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Subject"
                      className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-blue-600 focus:outline-none transition-all bg-white text-gray-900 placeholder-gray-400"
                    />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 hover:opacity-5 transition-opacity pointer-events-none"></div>
                  </div>

                  <div className="relative">
                    <textarea
                      placeholder="Your Message"
                      rows={6}
                      className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-blue-600 focus:outline-none transition-all resize-none bg-white text-gray-900 placeholder-gray-400"
                    ></textarea>
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 hover:opacity-5 transition-opacity pointer-events-none"></div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all relative overflow-hidden group"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Send Message
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        →
                      </motion.span>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </motion.button>
                </form>

                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-200 to-indigo-200 rounded-full filter blur-2xl opacity-40"></div>
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-br from-blue-200 to-indigo-200 rounded-full filter blur-2xl opacity-40"></div>
              </div>
            </motion.div>
          </div>
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