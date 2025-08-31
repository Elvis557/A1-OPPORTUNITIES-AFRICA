import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState('success'); 

  const navigate = useNavigate(); 

  // Load credentials from environment variables
  const ADMIN_USERNAME = import.meta.env.VITE_ADMIN_USERNAME;
  const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD;

  // Toast functionality
  const showToastMessage = (title, description = '', type = 'success') => {
    setToastMessage({ title, description });
    setToastType(type);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  const handleLogin = () => {
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      localStorage.setItem("isAdminLoggedIn", true);
      showToastMessage("Login Successful", "", "success");
      setTimeout(() => navigate("/dashboard"), 1000);
    } else {
      showToastMessage("Login Failed", "Invalid username or password", "error");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="relative w-full max-w-md mt-24 mb-10">
        
        {/* Toast Notification */}
        {showToast && (
          <div className={`fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg border-l-4 ${
            toastType === 'success' 
              ? 'bg-green-50 border-green-400 text-green-800' 
              : 'bg-red-50 border-red-400 text-red-800'
          } transition-all duration-300`}>
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">{toastMessage.title}</h4>
                {toastMessage.description && (
                  <p className="text-sm mt-1">{toastMessage.description}</p>
                )}
              </div>
              <button 
                onClick={() => setShowToast(false)}
                className="ml-4 text-gray-400 hover:text-gray-600"
              >
                ×
              </button>
            </div>
          </div>
        )}

        {/* Logo/Brand Section */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-900 text-white rounded-xl mb-4 shadow-lg">
            <span className="text-xl font-bold">A1</span>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">A1 Opportunities Africa</h1>
          <p className="text-gray-600">Admin Dashboard Login</p>
        </div>

        {/* Login Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Welcome Back</h2>
            <p className="text-gray-600">Sign in to access your admin dashboard</p>
          </div>

          <div className="space-y-6">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
                Username
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-gray-900 transition-colors"
                placeholder="admin"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-gray-900 transition-colors"
                placeholder="Enter your password"
              />
            </div>

            <button
              onClick={handleLogin}
              className="w-full bg-gray-900 text-white py-3 px-4 rounded-lg font-medium hover:bg-gray-800 focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 transition-colors"
            >
              Login
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
