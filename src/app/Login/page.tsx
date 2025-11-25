// "use client";

// import { useState, FormEvent, ChangeEvent } from "react";
// import Link from "next/link";
// import { motion } from "framer-motion";
// import { FiLogIn, FiUserPlus } from "react-icons/fi";
// import axios from "axios";

// export default function Login() {
//   const [email, setEmail] = useState<string>("");
//   const [password, setPassword] = useState<string>("");
//   const [forgotEmail, setForgotEmail] = useState<string>("");
//   const [showForgot, setShowForgot] = useState<boolean>(false);
//   const [message, setMessage] = useState<string>("");

//   // ✅ Login Submit
//   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post("http://localhost:5001/api/auth/login", {
//         email,
//         password,
//       });

//       alert("✅ Login successful!");
//       console.log("Login response:", res.data);

//       // token save to localStorage
//       localStorage.setItem("token", res.data.token);

//       // redirect after login
//       window.location.href = "/Dashboard";
//     } catch (err: any) {
//       console.error(err);
//       alert("❌ Invalid email or password");
//     }
//   };

//   // ✅ Forgot Password Submit
//   const handleForgot = async (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post(
//         "http://localhost:5001/api/auth/forgotpassword",
//         { email: forgotEmail }
//       );
//       alert("📩 Password reset link sent to your email");
//       console.log("Forgot password response:", res.data);
//     } catch (err: any) {
//       console.error(err);
//       alert("❌ Failed to send reset email");
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
//       {/* 🔹 Navbar */}
      // <header className="sticky top-0 z-50 flex justify-between items-center px-8 py-4 bg-white/80 backdrop-blur shadow">
      //   <h1 className="text-2xl font-extrabold text-blue-600 tracking-wide">
      //     LiverCare <span className="text-gray-800">AI</span>
      //   </h1>
      //   {/* <nav className="flex gap-6 font-medium text-gray-700">
      //     <a href="/" className="hover:text-blue-600 transition">
      //       Home
      //     </a>
      //     <a href="/about" className="hover:text-blue-600 transition">
      //       About
      //     </a>
      //     <a href="/contact" className="hover:text-blue-600 transition">
      //       Contact
      //     </a>
      //   </nav> */}
      //   <div className="flex gap-4">
      //     <Link
      //       href="/Signup"
      //       className="flex items-center gap-2 border border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition"
      //     >
      //       <FiUserPlus /> Signup
      //     </Link>
      //     <Link
      //       href="/Login"
      //       className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
      //     >
      //       <FiLogIn /> Login
      //     </Link>
      //   </div>
      // </header>

//       {/* 🔹 Main Section */}
//       <div className="flex flex-1 items-center justify-center px-6 py-12">
//         <div className="w-full max-w-5xl bg-white shadow-xl rounded-2xl overflow-hidden flex flex-col lg:flex-row">
//           {/* Left: Login or Forgot Password */}
//           <motion.div
//             initial={{ opacity: 0, x: -40 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             className="w-full lg:w-1/2 p-10 flex flex-col justify-center"
//           >
//             {!showForgot ? (
//               <>
//                 <h2 className="text-3xl font-bold mb-6 text-gray-800">Sign In</h2>
//                 <p className="text-gray-500 text-sm mb-6">
//                   Enter your email and password to continue.
//                 </p>

//                 <form onSubmit={handleSubmit} className="space-y-5">
//                   <input
//                     type="email"
//                     placeholder="Email"
//                     value={email}
//                     onChange={(e: ChangeEvent<HTMLInputElement>) =>
//                       setEmail(e.target.value)
//                     }
//                     className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     required
//                   />
//                   <input
//                     type="password"
//                     placeholder="Password"
//                     value={password}
//                     onChange={(e: ChangeEvent<HTMLInputElement>) =>
//                       setPassword(e.target.value)
//                     }
//                     className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     required
//                   />

//                   <div className="flex justify-between items-center text-sm">
//                     <button
//                       type="button"
//                       onClick={() => setShowForgot(true)}
//                       className="text-blue-600 hover:underline"
//                     >
//                       Forgot your password?
//                     </button>
//                   </div>

//                   <motion.button
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                     type="submit"
//                     className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold shadow-lg hover:bg-blue-700 transition"
//                   >
//                     SIGN IN
//                   </motion.button>
//                 </form>
//               </>
//             ) : (
//               <>
//                 <h2 className="text-3xl font-bold mb-6 text-gray-800">
//                   Forgot Password
//                 </h2>
//                 <p className="text-gray-500 text-sm mb-6">
//                   Enter your email to receive a reset link.
//                 </p>

//                 <form onSubmit={handleForgot} className="space-y-5">
//                   <input
//                     type="email"
//                     placeholder="Enter your email"
//                     value={forgotEmail}
//                     onChange={(e: ChangeEvent<HTMLInputElement>) =>
//                       setForgotEmail(e.target.value)
//                     }
//                     className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     required
//                   />

//                   <motion.button
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                     type="submit"
//                     className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold shadow-lg hover:bg-blue-700 transition"
//                   >
//                     SEND RESET LINK
//                   </motion.button>
//                 </form>

//                 <button
//                   onClick={() => setShowForgot(false)}
//                   className="mt-4 text-sm text-gray-600 hover:text-blue-600"
//                 >
//                   ← Back to Login
//                 </button>
//               </>
//             )}

//             {/* ✅ Show messages */}
//             {message && (
//               <p className="mt-4 text-center text-sm font-medium text-red-600">
//                 {message}
//               </p>
//             )}
//           </motion.div>

//           {/* Right: Welcome Section */}
//           <motion.div
//             initial={{ opacity: 0, x: 40 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             className="w-full lg:w-1/2 bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 text-white flex flex-col items-center justify-center p-10"
//           >
//             <h2 className="text-3xl font-bold mb-4">Welcome Back!</h2>
//             <p className="mb-6 text-center text-blue-100">
//               Don't have an account yet? Create one to access all features.
//             </p>
//             <Link
//               href="/Signup"
//               className="px-6 py-3 border border-white rounded-lg hover:bg-white hover:text-blue-600 transition font-semibold"
//             >
//               SIGN UP
//             </Link>
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// }

// "use client";

// import { useState, FormEvent, ChangeEvent } from "react";
// import Link from "next/link";
// import axios from "axios";
// import { FcGoogle } from "react-icons/fc";
// import { FaLinkedinIn } from "react-icons/fa";
// import { FiLogIn, FiUserPlus } from "react-icons/fi";

// export default function Login() {
//   const [email, setEmail] = useState<string>("");
//   const [password, setPassword] = useState<string>("");
//   const [forgotEmail, setForgotEmail] = useState<string>("");
//   const [showForgot, setShowForgot] = useState<boolean>(false);
//   const [message, setMessage] = useState<string>("");

//   // Login
//   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post("http://localhost:5001/api/auth/login", {
//         email,
//         password,
//       });
//       alert("✅ Login successful!");
//       localStorage.setItem("token", res.data.token);
//       window.location.href = "/Dashboard";
//     } catch (err: any) {
//       console.error(err);
//       alert("❌ Invalid email or password");
//     }
//   };

//   // Forgot Password
//   const handleForgot = async (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post(
//         "http://localhost:5001/api/auth/forgotpassword",
//         { email: forgotEmail }
//       );
//       alert("📩 Password reset link sent to your email");
//       console.log("Forgot password response:", res.data);
//     } catch (err: any) {
//       console.error(err);
//       alert("❌ Failed to send reset email");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-white px-4">
//       <header className="sticky top-0 z-50 flex justify-between items-center px-8 py-4 bg-white/80 backdrop-blur shadow">
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
//       <div className="w-full max-w-xl bg-white shadow-lg rounded-xl p-10 space-y-6">
//         <h2 className="text-3xl font-bold text-center text-gray-800">
//           {showForgot ? "Forgot Password" : "Welcome Back!"}
//         </h2>

//         <p className="text-center text-gray-500 text-sm">
//           {showForgot
//             ? "Enter your email to receive a reset link."
//             : "Sign in to continue your job search"}
//         </p>

//         {!showForgot ? (
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div>
//               <label className="text-sm text-gray-600 mb-1 block">
//                 Email Address
//               </label>
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 value={email}
//                 onChange={(e: ChangeEvent<HTMLInputElement>) =>
//                   setEmail(e.target.value)
//                 }
//                 className="w-full px-4 py-3 text-gray-700 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
//                 required
//               />
//             </div>

//             <div>
//               <label className="text-sm text-gray-600 mb-1 block">
//                 Password
//               </label>
//               <input
//                 type="password"
//                 placeholder="Enter your password"
//                 value={password}
//                 onChange={(e: ChangeEvent<HTMLInputElement>) =>
//                   setPassword(e.target.value)
//                 }
//                 className="w-full px-4 py-3 text-gray-700 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
//                 required
//               />
//             </div>

//             <div className="flex items-center justify-between text-sm text-gray-600">
//               <div className="flex items-center gap-2">
//                 <input type="checkbox" id="remember" className="w-4 h-4 accent-blue-600" />
//                 <label htmlFor="remember">Remember me</label>
//               </div>
//               <button
//                 type="button"
//                 onClick={() => setShowForgot(true)}
//                 className="text-blue-600 hover:underline"
//               >
//                 Forgot password?
//               </button>
//             </div>

//             <button
//               type="submit"
//               className="w-full py-3 bg-blue-600 text-white rounded-md font-semibold hover:opacity-90 transition"
//             >
//               Sign In
//             </button>
//           </form>
//         ) : (
//           <form onSubmit={handleForgot} className="space-y-4">
//             <div>
//               <label className="text-sm text-gray-600 mb-1 block">
//                 Email Address
//               </label>
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 value={forgotEmail}
//                 onChange={(e: ChangeEvent<HTMLInputElement>) =>
//                   setForgotEmail(e.target.value)
//                 }
//                 className="w-full px-4 py-3 text-gray-700 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
//                 required
//               />
//             </div>

//             <button
//               type="submit"
//               className="w-full py-3 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 transition"
//             >
//               Send Reset Link
//             </button>

//             <button
//               type="button"
//               onClick={() => setShowForgot(false)}
//               className="text-sm text-gray-600 hover:text-blue-600"
//             >
//               ← Back to Login
//             </button>
//           </form>
//         )}

//         {!showForgot && (
//           <>
//             <div className="flex items-center gap-4 mt-4">
//               <hr className="flex-grow border-gray-300" />
//               <span className="text-sm text-gray-500">Or continue with</span>
//               <hr className="flex-grow border-gray-300" />
//             </div>

//             <div className="flex gap-4">
//               <button className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-md text-sm font-medium hover:shadow-md transition bg-white text-gray-700 hover:bg-gray-50">
//                 <FcGoogle className="text-lg" />
//                 Google
//               </button>
//               <button className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-md text-sm font-medium hover:shadow-md transition bg-white text-gray-700 hover:bg-gray-50">
//                 <FaLinkedinIn className="text-lg" />
//                 LinkedIn
//               </button>
//             </div>
//           </>
//         )}

//         {!showForgot && (
//           <p className="text-center text-sm text-gray-600">
//             Don’t have an account?{" "}
//             <Link href="/Signup" className="text-blue-600 hover:underline">
//               Sign up
//             </Link>
//           </p>
//         )}

//         {message && (
//           <p className="mt-2 text-center text-sm font-medium text-red-600">
//             {message}
//           </p>
//         )}
//       </div>
//     </div>
//   );
// }

"use client";

import { useState, FormEvent, ChangeEvent } from "react";
import Link from "next/link";
import axios from "axios";
import { FcGoogle } from "react-icons/fc";
import { FaLinkedinIn } from "react-icons/fa";
import { FiLogIn, FiUserPlus } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [forgotEmail, setForgotEmail] = useState<string>("");
  const [showForgot, setShowForgot] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5001/api/auth/login", {
        email,
        password,
      });
      alert("✅ Login successful!");
      localStorage.setItem("token", res.data.token);
      window.location.href = "/Dashboard";
    } catch (err: any) {
      console.error(err);
      alert("❌ Invalid email or password");
    }
  };

  const handleForgot = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5001/api/auth/forgotpassword",
        { email: forgotEmail }
      );
      alert("📩 Password reset link sent to your email");
      console.log("Forgot password response:", res.data);
    } catch (err: any) {
      console.error(err);
      alert("❌ Failed to send reset email");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-white px-4">
      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-8 py-4 bg-white/90 backdrop-blur shadow">
        <h1 className="text-2xl font-extrabold text-blue-600 tracking-wide">
          LiverCare <span className="text-gray-800">AI</span>
        </h1>
        <div className="flex gap-4">
          <Link
            href="/Signup"
            className="flex items-center gap-2 border border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition"
          >
            <FiUserPlus /> Signup
          </Link>
          <Link
            href="/Login"
            className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            <FiLogIn /> Login
          </Link>
        </div>
      </header>

      {/* Form Card */}
      <div className="w-full max-w-xl mt-24 bg-white shadow-lg rounded-xl p-10 space-y-6">
        <h2 className="text-3xl font-bold text-center text-gray-800">
          {showForgot ? "Forgot Password" : "Welcome Back!"}
        </h2>

        <p className="text-center text-gray-500 text-sm">
          {showForgot
            ? "Enter your email to receive a reset link."
            : "Sign in to continue your job search"}
        </p>

        {/* LOGIN FORM */}
        {!showForgot ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email */}
            <div className="relative">
              <label className="text-sm text-gray-600 mb-1 block">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setEmail(e.target.value)
                }
                className="w-full px-4 py-3 text-gray-700 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              />
            </div>

            {/* Password */}
            <div className="relative">
              <label className="text-sm text-gray-600 mb-1 block">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setPassword(e.target.value)
                }
                className="w-full px-4 py-3 text-gray-700 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              />
            </div>

            {/* Remember + Forgot */}
            <div className="flex items-center justify-between text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="remember"
                  className="w-4 h-4 accent-blue-600"
                />
                <label htmlFor="remember">Remember me</label>
              </div>
              <button
                type="button"
                onClick={() => setShowForgot(true)}
                className="text-blue-600 hover:underline"
              >
                Forgot password?
              </button>
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white rounded-md font-semibold hover:opacity-90 transition"
            >
              Sign In
            </button>
          </form>
        ) : (
          // FORGOT PASSWORD FORM
          <form onSubmit={handleForgot} className="space-y-4">
            <div className="relative">
              <label className="text-sm text-gray-600 mb-1 block">
                Email Address
              </label>
              <span className="absolute left-3 top-10 transform -translate-y-1/2 text-gray-400">
                <MdEmail className="text-lg" />
              </span>
              <input
                type="email"
                placeholder="Enter your email"
                value={forgotEmail}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setForgotEmail(e.target.value)
                }
                className="w-full px-10 py-3 text-gray-700 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 transition"
            >
              Send Reset Link
            </button>

            <button
              type="button"
              onClick={() => setShowForgot(false)}
              className="text-sm text-gray-600 hover:text-blue-600"
            >
              ← Back to Login
            </button>
          </form>
        )}

        {/* Social Auth */}
        {!showForgot && (
          <>
            <div className="flex items-center gap-4 mt-4">
              <hr className="flex-grow border-gray-300" />
              <span className="text-sm text-gray-500">Or continue with</span>
              <hr className="flex-grow border-gray-300" />
            </div>

            <div className="flex gap-4">
              <button className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-md text-sm font-medium hover:shadow-md transition bg-white text-gray-700 hover:bg-gray-50">
                <FcGoogle className="text-lg" />
                Google
              </button>
              <button className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-md text-sm font-medium hover:shadow-md transition bg-white text-gray-700 hover:bg-gray-50">
                <FaLinkedinIn className="text-lg" />
                LinkedIn
              </button>
            </div>
          </>
        )}

        {/* Footer */}
        {!showForgot && (
          <p className="text-center text-sm text-gray-600">
            Don’t have an account?{" "}
            <Link href="/Signup" className="text-blue-600 hover:underline">
              Sign up
            </Link>
          </p>
        )}

        {/* Message */}
        {message && (
          <p className="mt-2 text-center text-sm font-medium text-red-600">
            {message}
          </p>
        )}
      </div>
    </div>
  );
}
