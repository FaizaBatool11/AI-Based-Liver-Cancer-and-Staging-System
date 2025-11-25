// "use client";

// import { useState, FormEvent, ChangeEvent } from "react";
// import Link from "next/link";
// import axios from "axios";
// import { FcGoogle } from "react-icons/fc";
// import { FaLinkedinIn } from "react-icons/fa";
// import { FiLogIn, FiUserPlus } from "react-icons/fi";

// export default function Signup() {
//   const [name, setName] = useState<string>("");
//   const [email, setEmail] = useState<string>("");
//   const [password, setPassword] = useState<string>("");
//   const [confirmPassword, setConfirmPassword] = useState<string>("");
//   const [message, setMessage] = useState<string>("");

//   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     if (password !== confirmPassword) {
//       setMessage("Passwords do not match!");
//       return;
//     }

//     try {
//       const res = await axios.post("http://localhost:5001/api/auth/signup", {
//         name,
//         email,
//         password,
//         confirmPassword,
//       });

//       alert("✅ Signup successful! Please login.");
//       setName("");
//       setEmail("");
//       setPassword("");
//       setConfirmPassword("");
//       setMessage(res.data.message);
//     } catch (error: any) {
//       setMessage(error.response?.data?.message || "Something went wrong");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-white px-4">
//       {/* Navbar */}
//       <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-8 py-4 bg-white/90 backdrop-blur shadow">
//         <h1 className="text-2xl font-extrabold text-blue-600 tracking-wide">
//           LiverCare <span className="text-gray-800">AI</span>
//         </h1>
//         <div className="flex gap-4">
//           <Link
//             href="/Signup"
//             className="flex items-center gap-2 border border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition"
//           >
//             <FiUserPlus /> Signup
//           </Link>
//           <Link
//             href="/Login"
//             className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
//           >
//             <FiLogIn /> Login
//           </Link>
//         </div>
//       </header>

//       {/* Form Card */}
//       <div className="w-full max-w-xl mt-24 bg-white shadow-lg rounded-xl p-10 space-y-6">
//         <h2 className="text-3xl font-bold text-center text-gray-800">
//           Create Account
//         </h2>
//         <p className="text-center text-gray-500 text-sm">
//           Sign up to continue your journey
//         </p>

//         {/* Signup Form */}
//         <form onSubmit={handleSubmit} className="space-y-4">
//           {/* Name */}
//           <div>
//             <label className="text-sm text-gray-600 mb-1 block">Full Name</label>
//             <input
//               type="text"
//               placeholder="Enter your full name"
//               value={name}
//               onChange={(e: ChangeEvent<HTMLInputElement>) =>
//                 setName(e.target.value)
//               }
//               className="w-full px-4 py-3 text-gray-700 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
//               required
//             />
//           </div>

//           {/* Email */}
//           <div>
//             <label className="text-sm text-gray-600 mb-1 block">Email Address</label>
//             <input
//               type="email"
//               placeholder="Enter your email"
//               value={email}
//               onChange={(e: ChangeEvent<HTMLInputElement>) =>
//                 setEmail(e.target.value)
//               }
//               className="w-full px-4 py-3 text-gray-700 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
//               required
//             />
//           </div>

//           {/* Password */}
//           <div>
//             <label className="text-sm text-gray-600 mb-1 block">Password</label>
//             <input
//               type="password"
//               placeholder="Enter your password"
//               value={password}
//               onChange={(e: ChangeEvent<HTMLInputElement>) =>
//                 setPassword(e.target.value)
//               }
//               className="w-full px-4 py-3 text-gray-700 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
//               required
//             />
//           </div>

//           {/* Confirm Password */}
//           <div>
//             <label className="text-sm text-gray-600 mb-1 block">Confirm Password</label>
//             <input
//               type="password"
//               placeholder="Re-enter your password"
//               value={confirmPassword}
//               onChange={(e: ChangeEvent<HTMLInputElement>) =>
//                 setConfirmPassword(e.target.value)
//               }
//               className="w-full px-4 py-3 text-gray-700 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
//               required
//             />
//           </div>

//           {/* Sign Up Button */}
//           <button
//             type="submit"
//             className="w-full py-3 bg-blue-600 text-white rounded-md font-semibold hover:opacity-90 transition"
//           >
//             SIGN UP
//           </button>
//         </form>

//         {/* Footer */}
//         <p className="text-center text-sm text-gray-600">
//           Already have an account?{" "}
//           <Link href="/Login" className="text-blue-600 hover:underline">
//             Login
//           </Link>
//         </p>

//         {/* Error / Success Message */}
//         {message && (
//           <p className="mt-2 text-center text-sm font-medium text-red-600">
//             {message}
//           </p>
//         )}
//       </div>
//     </div>
//   );
// }

// "use client";

// import { useState, FormEvent, ChangeEvent } from "react";
// import Link from "next/link";
// import axios from "axios";
// import { motion } from "framer-motion";
// import { FiLogIn, FiUserPlus, FiMail, FiLock, FiUser, FiEye, FiEyeOff, FiCheckCircle, FiShield, FiMenu, FiX } from "react-icons/fi";

// export default function Signup() {
//   const [name, setName] = useState<string>("");
//   const [email, setEmail] = useState<string>("");
//   const [password, setPassword] = useState<string>("");
//   const [confirmPassword, setConfirmPassword] = useState<string>("");
//   const [message, setMessage] = useState<string>("");
//   const [showPassword, setShowPassword] = useState<boolean>(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     if (password !== confirmPassword) {
//       setMessage("Passwords do not match!");
//       return;
//     }

//     try {
//       const res = await axios.post("http://localhost:5001/api/auth/signup", {
//         name,
//         email,
//         password,
//         confirmPassword,
//       });

//       alert("✅ Signup successful! Please login.");
//       setName("");
//       setEmail("");
//       setPassword("");
//       setConfirmPassword("");
//       setMessage(res.data.message);
//     } catch (error: any) {
//       setMessage(error.response?.data?.message || "Something went wrong");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 text-gray-800 overflow-x-hidden">
//       {/* Enhanced Navbar - Matching Landing Page */}
//       <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-100">
//         <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
//           <Link href="/">
//             <motion.div
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               className="flex items-center gap-3 cursor-pointer"
//             >
//               <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
//                 <span className="text-white font-bold text-xl">L</span>
//               </div>
//               <h1 className="text-2xl font-extrabold">
//                 <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
//                   LiverCare
//                 </span>
//                 <span className="text-gray-800"> AI</span>
//               </h1>
//             </motion.div>
//           </Link>

//           {/* Desktop Nav */}
//           <nav className="hidden md:flex gap-2 font-medium text-gray-700">
//             {["Home", "Features", "Contact"].map((item, i) => (
//               <motion.a
//                 key={item}
//                 href={item === "Home" ? "/" : `/#${item.toLowerCase()}`}
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
//             <Link href="/Signup">
//               <motion.button
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ delay: 0.3 }}
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2.5 rounded-xl hover:shadow-xl transition-all font-semibold relative overflow-hidden group"
//               >
//                 <span className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity"></span>
//                 <span className="relative flex items-center gap-2">
//                   <FiUserPlus className="text-lg" /> Signup
//                 </span>
//               </motion.button>
//             </Link>
//             <Link href="/Login">
//               <motion.button
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ delay: 0.4 }}
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="flex items-center gap-2 border-2 border-blue-600 text-blue-600 px-6 py-2.5 rounded-xl hover:bg-blue-600 hover:text-white transition-all font-semibold shadow-sm hover:shadow-md"
//               >
//                 <FiLogIn className="text-lg" /> Login
//               </motion.button>
//             </Link>
//           </div>

//           {/* Mobile Menu Button */}
//           <motion.button
//             whileTap={{ scale: 0.9 }}
//             className="md:hidden text-2xl text-gray-700 w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
//             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//           >
//             {mobileMenuOpen ? <FiX /> : <FiMenu />}
//           </motion.button>
//         </div>

//         {/* Mobile Menu */}
//         {mobileMenuOpen && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: "auto" }}
//             exit={{ opacity: 0, height: 0 }}
//             className="md:hidden bg-gradient-to-b from-white to-gray-50 border-t px-6 py-6 space-y-2"
//           >
//             {["Home", "Features", "Contact"].map((item, i) => (
//               <motion.a
//                 key={item}
//                 href={item === "Home" ? "/" : `/#${item.toLowerCase()}`}
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
//               <Link 
//                 href="/Signup" 
//                 className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 py-3 rounded-xl font-semibold hover:shadow-lg transition-all text-center"
//               >
//                 Signup
//               </Link>
//               <Link 
//                 href="/Login" 
//                 className="border-2 border-blue-600 text-blue-600 px-5 py-3 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition-all text-center"
//               >
//                 Login
//               </Link>
//             </div>
//           </motion.div>
//         )}
//       </header>

//       {/* Hero Section with Split Layout */}
//       <section className="relative min-h-screen flex items-center justify-center py-20 px-4">
//         {/* Background Elements */}
//         <div className="absolute inset-0 overflow-hidden pointer-events-none">
//           {[...Array(15)].map((_, i) => (
//             <motion.div
//               key={i}
//               className="absolute bg-blue-200 rounded-full"
//               style={{
//                 width: Math.random() * 100 + 50,
//                 height: Math.random() * 100 + 50,
//                 left: `${Math.random() * 100}%`,
//                 top: `${Math.random() * 100}%`,
//               }}
//               animate={{
//                 y: [0, -20, 0],
//                 opacity: [0.1, 0.2, 0.1],
//               }}
//               transition={{
//                 duration: Math.random() * 5 + 3,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//               }}
//             />
//           ))}
//         </div>

//         <div className="relative max-w-7xl mx-auto w-full">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             {/* Left Side - Information
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.6 }}
//               className="hidden lg:block"
//             >
//               <div className="space-y-8">
//                 <div>
//                   <motion.div
//                     initial={{ opacity: 0, scale: 0.8 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     className="inline-block mb-4"
//                   >
//                     <span className="bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold border border-blue-200">
//                       🎓 Join LiverCare AI
//                     </span>
//                   </motion.div>
//                   <h2 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
//                     Start Your <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">AI Journey</span>
//                   </h2>
//                   <p className="text-xl text-gray-600 leading-relaxed mb-8">
//                     Create your account to access cutting-edge AI-powered liver cancer diagnostics and join the future of healthcare technology.
//                   </p>
//                 </div>

//                 {/* Benefits */}
//                 {/* <div className="space-y-4">
//                   {[
//                     { icon: <FiCheckCircle />, text: "Advanced AI Diagnostics" },
//                     { icon: <FiShield />, text: "Secure & HIPAA Compliant" },
//                     { icon: <FiCheckCircle />, text: "Real-Time Results" },
//                   ].map((benefit, i) => (
//                     <motion.div
//                       key={i}
//                       initial={{ opacity: 0, x: -20 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       transition={{ delay: 0.3 + i * 0.1 }}
//                       className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100"
//                     >
//                       <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center text-white text-lg">
//                         {benefit.icon}
//                       </div>
//                       <p className="font-semibold text-gray-800">{benefit.text}</p>
//                     </motion.div>
//                   ))}
//                 </div>
//               </div>
//             </motion.div> */}

//             {/* Right Side - Signup Form */}
//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.6 }}
//               className="w-full max-w-md mx-auto lg:mx-0"
//             >
//               {/* Card with Enhanced Design */}
//               <div className="relative">
//                 {/* Glowing Background Effect */}
//                 <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl blur-lg opacity-20"></div>

//                 {/* Main Card */}
//                 <div className="relative bg-white shadow-2xl rounded-3xl p-8 md:p-10 border-2 border-gray-100">
//                   {/* Header */}
//                   <div className="text-center mb-8">
//                     <motion.div
//                       initial={{ scale: 0 }}
//                       animate={{ scale: 1 }}
//                       transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
//                       className="inline-block mb-4"
//                     >
//                       <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto shadow-xl">
//                         <FiUserPlus className="text-3xl text-white" />
//                       </div>
//                     </motion.div>
//                     <h2 className="text-3xl md:text-4xl font-extrabold mb-2">
//                       <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
//                         Create Account
//                       </span>
//                     </h2>
//                     <p className="text-gray-600">
//                       Sign up to access AI-powered diagnostics
//                     </p>
//                   </div>

//                   {/* Signup Form */}
//                   <form onSubmit={handleSubmit} className="space-y-5">
//                     {/* Full Name */}
//                     <div>
//                       <label className="text-sm font-semibold text-gray-700 mb-2 block">
//                         Full Name
//                       </label>
//                       <div className="relative group">
//                         <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
//                           <FiUser className="text-gray-400 group-focus-within:text-blue-600 transition-colors text-lg" />
//                         </div>
//                         <input
//                           type="text"
//                           placeholder="Enter your full name"
//                           value={name}
//                           onChange={(e: ChangeEvent<HTMLInputElement>) =>
//                             setName(e.target.value)
//                           }
//                           className="w-full pl-12 pr-4 py-4 text-gray-900 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-blue-600 focus:bg-white focus:outline-none transition-all"
//                           required
//                         />
//                       </div>
//                     </div>

//                     {/* Email */}
//                     <div>
//                       <label className="text-sm font-semibold text-gray-700 mb-2 block">
//                         Email Address
//                       </label>
//                       <div className="relative group">
//                         <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
//                           <FiMail className="text-gray-400 group-focus-within:text-blue-600 transition-colors text-lg" />
//                         </div>
//                         <input
//                           type="email"
//                           placeholder="Enter your email"
//                           value={email}
//                           onChange={(e: ChangeEvent<HTMLInputElement>) =>
//                             setEmail(e.target.value)
//                           }
//                           className="w-full pl-12 pr-4 py-4 text-gray-900 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-blue-600 focus:bg-white focus:outline-none transition-all"
//                           required
//                         />
//                       </div>
//                     </div>

//                     {/* Password */}
//                     <div>
//                       <label className="text-sm font-semibold text-gray-700 mb-2 block">
//                         Password
//                       </label>
//                       <div className="relative group">
//                         <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
//                           <FiLock className="text-gray-400 group-focus-within:text-blue-600 transition-colors text-lg" />
//                         </div>
//                         <input
//                           type={showPassword ? "text" : "password"}
//                           placeholder="Create a strong password"
//                           value={password}
//                           onChange={(e: ChangeEvent<HTMLInputElement>) =>
//                             setPassword(e.target.value)
//                           }
//                           className="w-full pl-12 pr-12 py-4 text-gray-900 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-blue-600 focus:bg-white focus:outline-none transition-all"
//                           required
//                         />
//                         <button
//                           type="button"
//                           onClick={() => setShowPassword(!showPassword)}
//                           className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-blue-600 transition-colors"
//                         >
//                           {showPassword ? <FiEyeOff className="text-lg" /> : <FiEye className="text-lg" />}
//                         </button>
//                       </div>
//                     </div>

//                     {/* Confirm Password */}
//                     <div>
//                       <label className="text-sm font-semibold text-gray-700 mb-2 block">
//                         Confirm Password
//                       </label>
//                       <div className="relative group">
//                         <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
//                           <FiLock className="text-gray-400 group-focus-within:text-blue-600 transition-colors text-lg" />
//                         </div>
//                         <input
//                           type={showConfirmPassword ? "text" : "password"}
//                           placeholder="Re-enter your password"
//                           value={confirmPassword}
//                           onChange={(e: ChangeEvent<HTMLInputElement>) =>
//                             setConfirmPassword(e.target.value)
//                           }
//                           className="w-full pl-12 pr-12 py-4 text-gray-900 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-blue-600 focus:bg-white focus:outline-none transition-all"
//                           required
//                         />
//                         <button
//                           type="button"
//                           onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//                           className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-blue-600 transition-colors"
//                         >
//                           {showConfirmPassword ? <FiEyeOff className="text-lg" /> : <FiEye className="text-lg" />}
//                         </button>
//                       </div>
//                     </div>

//                     {/* Error / Success Message */}
//                     {message && (
//                       <motion.div
//                         initial={{ opacity: 0, y: -10 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         className={`p-4 rounded-xl text-sm font-semibold flex items-center gap-2 ${
//                           message.includes("successful")
//                             ? "bg-green-50 text-green-700 border-2 border-green-200"
//                             : "bg-red-50 text-red-700 border-2 border-red-200"
//                         }`}
//                       >
//                         {message.includes("successful") ? (
//                           <FiCheckCircle className="text-lg flex-shrink-0" />
//                         ) : (
//                           <span className="text-lg flex-shrink-0">⚠️</span>
//                         )}
//                         <span>{message}</span>
//                       </motion.div>
//                     )}

//                     {/* Sign Up Button */}
//                     <motion.button
//                       whileHover={{ scale: 1.02 }}
//                       whileTap={{ scale: 0.98 }}
//                       type="submit"
//                       className="w-full py-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all relative overflow-hidden group"
//                     >
//                       <span className="relative z-10 flex items-center justify-center gap-2">
//                         <FiUserPlus className="text-xl" />
//                         Create Account
//                       </span>
//                       <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
//                     </motion.button>
//                   </form>

//                   {/* Divider */}
//                   <div className="relative my-8">
//                     <div className="absolute inset-0 flex items-center">
//                       <div className="w-full border-t-2 border-gray-200"></div>
//                     </div>
//                     <div className="relative flex justify-center text-sm">
//                       <span className="px-4 bg-white text-gray-500 font-semibold">Already have an account?</span>
//                     </div>
//                   </div>

//                   {/* Login Link */}
//                   <Link href="/Login">
//                     <motion.button
//                       whileHover={{ scale: 1.02 }}
//                       whileTap={{ scale: 0.98 }}
//                       type="button"
//                       className="w-full py-4 border-2 border-blue-600 text-blue-600 rounded-xl font-bold text-lg hover:bg-blue-600 hover:text-white transition-all flex items-center justify-center gap-2"
//                     >
//                       <FiLogIn className="text-xl" />
//                       Login to Your Account
//                     </motion.button>
//                   </Link>

//                   {/* Decorative Elements */}
//                   <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-200 to-indigo-200 rounded-full filter blur-2xl opacity-40 pointer-events-none"></div>
//                   <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full filter blur-2xl opacity-40 pointer-events-none"></div>
//                 </div>
//               </div>

//               {/* Terms */}
//               <motion.p
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 0.6 }}
//                 className="text-center text-xs text-gray-500 mt-6 leading-relaxed"
//               >
//                 By creating an account, you agree to our{" "}
//                 <a href="#" className="text-blue-600 hover:underline font-semibold">
//                   Terms of Service
//                 </a>{" "}
//                 and{" "}
//                 <a href="#" className="text-blue-600 hover:underline font-semibold">
//                   Privacy Policy
//                 </a>
//               </motion.p>
//             </motion.div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

"use client";

import { useState, FormEvent, ChangeEvent } from "react";
import Link from "next/link";
import axios from "axios";
import { motion } from "framer-motion";
import { FiLogIn, FiUserPlus, FiMail, FiLock, FiUser, FiEye, FiEyeOff, FiCheckCircle, FiShield, FiMenu, FiX } from "react-icons/fi";

export default function Signup() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage("Passwords do not match!");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5001/api/auth/signup", {
        name,
        email,
        password,
        confirmPassword,
      });

      alert("✅ Signup successful! Please login.");
      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setMessage(res.data.message);
    } catch (error: any) {
      setMessage(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 overflow-x-hidden">
      {/* Enhanced Navbar - Matching Landing Page */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <Link href="/">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 cursor-pointer"
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
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-2 font-medium text-gray-700">
            {["Home", "Features", "Contact"].map((item, i) => (
              <motion.a
                key={item}
                href={item === "Home" ? "/" : `/#${item.toLowerCase()}`}
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
                className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2.5 rounded-xl hover:shadow-xl transition-all font-semibold relative overflow-hidden group"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                <span className="relative flex items-center gap-2">
                  <FiUserPlus className="text-lg" /> Signup
                </span>
              </motion.button>
            </Link>
            <Link href="/Login">
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 border-2 border-blue-600 text-blue-600 px-6 py-2.5 rounded-xl hover:bg-blue-600 hover:text-white transition-all font-semibold shadow-sm hover:shadow-md"
              >
                <FiLogIn className="text-lg" /> Login
              </motion.button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="md:hidden text-2xl text-gray-700 w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <FiX /> : <FiMenu />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-gradient-to-b from-white to-gray-50 border-t px-6 py-6 space-y-2"
          >
            {["Home", "Features", "Contact"].map((item, i) => (
              <motion.a
                key={item}
                href={item === "Home" ? "/" : `/#${item.toLowerCase()}`}
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
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 py-3 rounded-xl font-semibold hover:shadow-lg transition-all text-center"
              >
                Signup
              </Link>
              <Link 
                href="/Login" 
                className="border-2 border-blue-600 text-blue-600 px-5 py-3 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition-all text-center"
              >
                Login
              </Link>
            </div>
          </motion.div>
        )}
      </header>

      {/* Hero Section with Split Layout */}
      <section className="relative min-h-screen flex items-center justify-center py-20 px-4">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-blue-200 rounded-full"
              style={{
                width: Math.random() * 100 + 50,
                height: Math.random() * 100 + 50,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: Math.random() * 5 + 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="hidden lg:block"
            >
              <div className="space-y-8">
                <div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="inline-block mb-4"
                  >
                    <span className="bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold border border-blue-200">
                      🎓 Join LiverCare AI
                    </span>
                  </motion.div>
                  <h2 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
                    Start Your <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">AI Journey</span>
                  </h2>
                  <p className="text-xl text-gray-600 leading-relaxed mb-8">
                    Create your account to access cutting-edge AI-powered liver cancer diagnostics and join the future of healthcare technology.
                  </p>
                </div>

                {/* Benefits */}
                <div className="space-y-4">
                  {[
                    { icon: <FiCheckCircle />, text: "Advanced AI Diagnostics" },
                    { icon: <FiShield />, text: "Secure & HIPAA Compliant" },
                    { icon: <FiCheckCircle />, text: "Real-Time Results" },
                  ].map((benefit, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100"
                    >
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center text-white text-lg">
                        {benefit.icon}
                      </div>
                      <p className="font-semibold text-gray-800">{benefit.text}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Side - Signup Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full max-w-md mx-auto lg:mx-0"
            >
              {/* Card with Enhanced Design */}
              <div className="relative">
                {/* Glowing Background Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl blur-lg opacity-20"></div>

                {/* Main Card */}
                <div className="relative bg-white shadow-2xl rounded-3xl p-8 md:p-10 border-2 border-gray-100">
                  {/* Header */}
                  <div className="text-center mb-8">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                      className="inline-block mb-4"
                    >
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto shadow-xl">
                        <FiUserPlus className="text-3xl text-white" />
                      </div>
                    </motion.div>
                    <h2 className="text-3xl md:text-4xl font-extrabold mb-2">
                      <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                        Create Account
                      </span>
                    </h2>
                    <p className="text-gray-600">
                      Sign up to access AI-powered diagnostics
                    </p>
                  </div>

                  {/* Signup Form */}
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Full Name */}
                    <div>
                      <label className="text-sm font-semibold text-gray-700 mb-2 block">
                        Full Name
                      </label>
                      <div className="relative group">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <FiUser className="text-gray-400 group-focus-within:text-blue-600 transition-colors text-lg" />
                        </div>
                        <input
                          type="text"
                          placeholder="Enter your full name"
                          value={name}
                          onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            setName(e.target.value)
                          }
                          className="w-full pl-12 pr-4 py-4 text-gray-900 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-blue-600 focus:bg-white focus:outline-none transition-all"
                          required
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label className="text-sm font-semibold text-gray-700 mb-2 block">
                        Email Address
                      </label>
                      <div className="relative group">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <FiMail className="text-gray-400 group-focus-within:text-blue-600 transition-colors text-lg" />
                        </div>
                        <input
                          type="email"
                          placeholder="Enter your email"
                          value={email}
                          onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            setEmail(e.target.value)
                          }
                          className="w-full pl-12 pr-4 py-4 text-gray-900 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-blue-600 focus:bg-white focus:outline-none transition-all"
                          required
                        />
                      </div>
                    </div>

                    {/* Password */}
                    <div>
                      <label className="text-sm font-semibold text-gray-700 mb-2 block">
                        Password
                      </label>
                      <div className="relative group">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <FiLock className="text-gray-400 group-focus-within:text-blue-600 transition-colors text-lg" />
                        </div>
                        <input
                          type={showPassword ? "text" : "password"}
                          placeholder="Create a strong password"
                          value={password}
                          onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            setPassword(e.target.value)
                          }
                          className="w-full pl-12 pr-12 py-4 text-gray-900 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-blue-600 focus:bg-white focus:outline-none transition-all"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-blue-600 transition-colors"
                        >
                          {showPassword ? <FiEyeOff className="text-lg" /> : <FiEye className="text-lg" />}
                        </button>
                      </div>
                    </div>

                    {/* Confirm Password */}
                    <div>
                      <label className="text-sm font-semibold text-gray-700 mb-2 block">
                        Confirm Password
                      </label>
                      <div className="relative group">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <FiLock className="text-gray-400 group-focus-within:text-blue-600 transition-colors text-lg" />
                        </div>
                        <input
                          type={showConfirmPassword ? "text" : "password"}
                          placeholder="Re-enter your password"
                          value={confirmPassword}
                          onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            setConfirmPassword(e.target.value)
                          }
                          className="w-full pl-12 pr-12 py-4 text-gray-900 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-blue-600 focus:bg-white focus:outline-none transition-all"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-blue-600 transition-colors"
                        >
                          {showConfirmPassword ? <FiEyeOff className="text-lg" /> : <FiEye className="text-lg" />}
                        </button>
                      </div>
                    </div>

                    {/* Error / Success Message */}
                    {message && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`p-4 rounded-xl text-sm font-semibold flex items-center gap-2 ${
                          message.includes("successful")
                            ? "bg-green-50 text-green-700 border-2 border-green-200"
                            : "bg-red-50 text-red-700 border-2 border-red-200"
                        }`}
                      >
                        {message.includes("successful") ? (
                          <FiCheckCircle className="text-lg flex-shrink-0" />
                        ) : (
                          <span className="text-lg flex-shrink-0">⚠️</span>
                        )}
                        <span>{message}</span>
                      </motion.div>
                    )}

                    {/* Sign Up Button */}
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="w-full py-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all relative overflow-hidden group"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        <FiUserPlus className="text-xl" />
                        Create Account
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </motion.button>
                  </form>

                  {/* Divider */}
                  <div className="relative my-8">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t-2 border-gray-200"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-4 bg-white text-gray-500 font-semibold">Already have an account?</span>
                    </div>
                  </div>

                  {/* Login Link */}
                  <Link href="/Login">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="button"
                      className="w-full py-4 border-2 border-blue-600 text-blue-600 rounded-xl font-bold text-lg hover:bg-blue-600 hover:text-white transition-all flex items-center justify-center gap-2"
                    >
                      <FiLogIn className="text-xl" />
                      Login to Your Account
                    </motion.button>
                  </Link>

                  {/* Decorative Elements */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-200 to-indigo-200 rounded-full filter blur-2xl opacity-40 pointer-events-none"></div>
                  <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full filter blur-2xl opacity-40 pointer-events-none"></div>
                </div>
              </div>

              {/* Terms */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-center text-xs text-gray-500 mt-6 leading-relaxed"
              >
                By creating an account, you agree to our{" "}
                <a href="#" className="text-blue-600 hover:underline font-semibold">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="text-blue-600 hover:underline font-semibold">
                  Privacy Policy
                </a>
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}