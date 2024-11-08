"use client";

import { useRef, useState } from "react";
import { FaGoogle, FaFacebookF } from "react-icons/fa";
import { useRouter } from "next/navigation";

interface User {
  email: string;
  password: string;
}

export default function RegisterPage() {
  const router = useRouter();
  const [error, setError] = useState<string>("");
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;
    const confirmPassword = confirmPasswordRef.current?.value;

    if (email && password && confirmPassword) {
      if (password !== confirmPassword) {
        setError("Passwords do not match");
        return;
      }

      // Get existing users or initialize empty array
      const existingUsers = JSON.parse(localStorage.getItem("users") || "[]");
      
      // Check if user already exists
      if (existingUsers.some((user: User) => user.email === email)) {
        setError("User already exists");
        return;
      }

      // Add new user
      const newUser = { email, password };
      existingUsers.push(newUser);
      localStorage.setItem("users", JSON.stringify(existingUsers));
      
      // Set current user
      localStorage.setItem("currentUser", JSON.stringify(newUser));
      
      // Redirect to home page or dashboard
      router.push("/dashboard");
    }
  };

  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex w-full max-w-4xl shadow-lg">
        {/* Left Section */}
        <div className="hidden md:flex flex-1 flex-col justify-center items-center bg-white p-10 rounded-l-lg">
          <h1 className="text-3xl font-bold mb-4">TokooLo</h1>
          <p className="text-gray-600 text-center mb-6">Join our community of food lovers and discover amazing local dishes!</p>
          <div className="space-y-4 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <span className="text-orange-500">✓</span>
              <span>Connect with local food enthusiasts</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-orange-500">✓</span>
              <span>Share your favorite food experiences</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-orange-500">✓</span>
              <span>Get personalized food recommendations</span>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 bg-gray-50 p-8 rounded-r-lg">
          <h2 className="text-3xl font-semibold text-center mb-2">Welcome to TokooLo!</h2>
          <p className="text-center text-gray-600 mb-8">Create your account in just a minute</p>
          
          {error && (
            <div className="mb-4 p-2 bg-red-100 text-red-600 rounded-md text-sm text-center">
              {error}
            </div>
          )}
          
          <form onSubmit={handleRegister} className="space-y-5">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                ref={emailRef}
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
                placeholder="Your email"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                ref={passwordRef}
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
                placeholder="Create a password"
                required
              />
            </div>
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                ref={confirmPasswordRef}
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
                placeholder="Confirm your password"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-orange-500 text-white rounded-md font-medium hover:bg-orange-600 transition duration-200"
            >
              Sign up
            </button>
          </form>
          <div className="text-xs text-gray-500 mt-4 space-y-2">
            <p className="flex items-center gap-1">
              <span className="text-green-500">✓</span>
              No credit card required
            </p>
            <p className="flex items-center gap-1">
              <span className="text-green-500">✓</span>
              Free forever for basic features
            </p>
          </div>
          <div className="flex items-center my-4">
            <hr className="flex-grow border-gray-300" />
            <span className="px-2 text-sm text-gray-600">Or</span>
            <hr className="flex-grow border-gray-300" />
          </div>
          <div className="flex justify-center space-x-4">
            <button className="flex items-center justify-center p-2 bg-gray-200 rounded-full">
              <FaGoogle className="text-red-500" />
            </button>
            <button className="flex items-center justify-center p-2 bg-gray-200 rounded-full">
              <FaFacebookF className="text-blue-600" />
            </button>
          </div>
          <p className="text-center text-sm text-gray-600 mt-6">
            Already part of our community?{" "}
            <a href="/login" className="text-orange-500 hover:underline">
              Log in here
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
