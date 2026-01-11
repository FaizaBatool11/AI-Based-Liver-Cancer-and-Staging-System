"use client";

import { useState, FormEvent, ChangeEvent } from "react";
import Link from "next/link";
import axios from "axios";
import { motion } from "framer-motion";
import { FiLogIn, FiUserPlus, FiMail, FiLock, FiEye, FiEyeOff, FiCheckCircle, FiX, FiMenu } from "react-icons/fi";

export default function Login() {
  // -------------------------------
  // State variables
  // -------------------------------
  const [email, setEmail] = useState<string>(""); // User email input
  const [password, setPassword] = useState<string>(""); // User password input
  const [showPassword, setShowPassword] = useState<boolean>(false); // Toggle password visibility
  const [message, setMessage] = useState<string>(""); // Error or info messages
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // Mobile navbar toggle

  // -------------------------------
  // Form submit handler
  // -------------------------------
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default page reload

    try {
      // Send login request to backend API
      const res = await axios.post("http://localhost:5001/api/auth/login", { email, password });

      // On success, show alert and store token
      alert("✅ Login successful!");
      localStorage.setItem("token", res.data.token);

      // Redirect to Dashboard
      window.location.href = "/Dashboard";
    } catch (err: any) {
      // Handle error and show message to user
      setMessage(err.response?.data?.message || "❌ Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 overflow-x-hidden">
      {/* -------------------------------
          Navbar Section
      ------------------------------- */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          {/* Logo and Title */}
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

          {/* Desktop Menu Buttons */}
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

      {/* -------------------------------
          Main Login Section
      ------------------------------- */}
      <div className="min-h-screen bg-gray-50 text-gray-800 flex flex-col items-center px-4 pt-16">
        {/* Added pt-24 to give space below navbar */}

        {/* Centered Login Card */}
        <div className="relative max-w-xl mx-auto w-full">
          {/* Card Glowing Effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl blur-lg opacity-20"></div>

          {/* Login Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative bg-white shadow-2xl rounded-3xl p-8 md:p-10 border-2 border-gray-100"
          >
            {/* Header */}
            <div className="mb-4">
              <div className="flex items-center justify-center gap-4 mb-2">
                {/* Icon Animation */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                    <FiLogIn className="text-2xl text-white" />
                  </div>
                </motion.div>

                {/* Welcome Text */}
                <h2 className="text-3xl md:text-4xl font-extrabold">
                  <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    Welcome Back
                  </span>
                </h2>
              </div>
              <p className="text-gray-600 text-center mt-2">Sign in to access your account</p>
            </div>

            {/* -------------------------------
                Login Form
            ------------------------------- */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Email Input */}
              <div className="relative group">
                <label className="text-sm font-semibold text-gray-700 mb-2 block">Email</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <FiMail className="text-gray-400 group-focus-within:text-blue-600 transition-colors text-lg" />
                  </div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full pl-12 pr-4 py-4 text-gray-900 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-blue-600 focus:bg-white focus:outline-none transition-all"
                    required
                  />
                </div>
              </div>

              {/* Password Input */}
              <div className="relative">
                <label className="text-sm font-semibold text-gray-700 mb-2 block">Password</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <FiLock className="text-gray-400 group-focus-within:text-blue-600 transition-colors text-lg" />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="w-full pl-12 pr-12 py-4 text-gray-900 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-blue-600 focus:bg-white focus:outline-none transition-all"
                    required
                  />
                  {/* Password toggle */}
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-blue-600 transition-colors"
                  >
                    {showPassword ? <FiEyeOff className="text-lg" /> : <FiEye className="text-lg" />}
                  </button>
                </div>
              </div>

              {/* Message Box for errors */}
              {message && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-xl text-sm font-semibold flex items-center gap-2 bg-red-50 text-red-700 border-2 border-red-200"
                >
                  <span className="text-lg flex-shrink-0">⚠️</span>
                  <span>{message}</span>
                </motion.div>
              )}

              {/* Login Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <FiLogIn className="text-xl" />
                  Login an Account
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </motion.button>
            </form>

            {/* Footer */}
            <div className="mt-6 flex justify-center items-center">
              <p className="text-sm text-gray-600">
                Don’t have an account?{" "}
                <motion.span
                  className="text-blue-600 font-semibold cursor-pointer"
                  whileHover={{ scale: 1.1, textDecoration: "underline" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href="/Signup">Sign up</Link>
                </motion.span>
              </p>
            </div>

            {/* Decorative Background Elements
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-200 to-indigo-200 rounded-full filter blur-2xl opacity-40 pointer-events-none"></div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full filter blur-2xl opacity-40 pointer-events-none"></div> */}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
