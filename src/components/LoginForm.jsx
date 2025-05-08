import React from 'react';
import '../layout/Login.css';
import LoginPhoto from '../assets/login1.jpeg';

const LoginForm = () => {
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Form submitted');
    };
  
    const handleAppleLogin = () => {
      console.log('Apple login clicked');
    };
  
    const handleGoogleLogin = () => {
      console.log('Google login clicked');
    };
  
    return (
      <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-10 animate-fade-in" style={{ background: 'linear-gradient(to right, #ff69b4, #87ceeb)' }}>
        {/* Centered Card Container */}
        <div className="w-full max-w-6xl bg-white rounded-xl shadow-lg flex flex-col lg:flex-row overflow-hidden">
          {/* Photo Section */}
          <div
            className="w-full lg:w-1/2 h-80 lg:h-180 bg-cover bg-center"
            style={{ backgroundImage: `url(${LoginPhoto})` }}
          ></div>
  
          {/* Form Section */}
          <div className="w-full lg:w-1/2 p-6 lg:p-8 flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Welcome Back</h2>
  
            {/* Form */}
            <form className="flex flex-col gap-4 w-full" onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all duration-300"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all duration-300"
              />
              <p className="text-right text-sm text-purple-600 hover:text-purple-800 cursor-pointer transition-colors duration-200">
                Forgot Password?
              </p>
              <button
                type="submit"
                className="w-full py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all duration-300 transform hover:scale-105"
              >
                Log In
              </button>
            </form>
  
            {/* Sign Up Link */}
            <p className="mt-6 text-center text-sm text-gray-600">
              Don't have an account?{' '}
              <span className="text-purple-600 hover:text-purple-800 font-semibold cursor-pointer transition-colors duration-200">
                Sign up
              </span>
            </p>
  
            {/* Social Login Buttons */}
            <div className="mt-6 flex flex-col gap-3 w-full">
              <button
                onClick={handleAppleLogin}
                className="flex items-center justify-center py-3 bg-black text-white rounded-lg font-semibold hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all duration-300 group"
              >
                <svg
                  className="w-5 h-5 mr-2 transform group-hover:scale-110 transition-transform duration-200"
                  fill="currentColor"
                  viewBox="0 0 1024 1024"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M747.4 535.7c-.4-68.2 30.5-119.6 92.9-157.5-34.9-50-87.7-77.5-157.3-82.8-65.9-5.2-138 38.4-164.4 38.4-27.9 0-91.7-36.6-141.9-36.6C273.1 298.8 163 379.8 163 544.6c0 48.7 8.9 99 26.7 150.8 23.8 68.2 109.6 235.3 199.1 232.6 46.8-1.1 79.9-33.2 140.8-33.2 59.1 0 89.7 33.2 141.9 33.2 90.3-1.3 167.9-153.2 190.5-221.6-121.1-57.1-114.6-167.2-114.6-170.7zm-105.1-305c50.7-60.2 46.1-115 44.6-134.7-44.8 2.6-96.6 30.5-126.1 64.8-32.5 36.8-51.6 82.3-47.5 133.6 48.4 3.7 92.6-21.2 129-63.7z"></path>
                </svg>
                Log in with Apple
              </button>
              <button
                onClick={handleGoogleLogin}
                className="flex items-center justify-center py-3 bg-white border border-gray-300 text-gray-800 rounded-lg font-semibold hover:bg-purple-100 hover:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all duration-300 group"
              >
                <svg
                  className="w-5 h-5 mr-2 transform group-hover:scale-110 transition-transform duration-200"
                  fill="currentColor"
                  viewBox="0 0 48 48"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#FFC107"
                    d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12
                      c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24
                      c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                  ></path>
                  <path
                    fill="#FF3D00"
                    d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657
                      C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                  ></path>
                  <path
                    fill="#4CAF50"
                    d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36
                      c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                  ></path>
                  <path
                    fill="#1976D2"
                    d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571
                      c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                  ></path>
                </svg>
                Log in with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default LoginForm;