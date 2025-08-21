import React from 'react';
import { motion } from 'framer-motion';
import { Shield, ArrowLeft, Lock, AlertTriangle, Sparkles } from 'lucide-react';

const Unauthorized: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-red-100 flex items-center justify-center px-4 relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #ef4444 1px, transparent 1px),
                            radial-gradient(circle at 75% 75%, #f97316 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Floating geometric shapes */}
      <motion.div
        className="absolute top-20 left-20 w-24 h-24 border-2 border-red-300/30 rounded-full"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-20 h-20 border-2 border-orange-300/30 rounded-lg"
        animate={{
          rotate: [360, 0],
          scale: [1, 0.8, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <div className="max-w-4xl w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          
          {/* Left side - 401 Animation */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            {/* Main 401 with 3D effect */}
            <div className="relative mb-6">
              <motion.div
                className="relative"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <h1 className="text-7xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-orange-600 to-red-600 select-none tracking-tighter">
                  401
                </h1>
                {/* 3D shadow effect */}
                <div className="absolute inset-0 text-7xl md:text-8xl font-black text-gray-300/20 select-none tracking-tighter transform translate-x-2 translate-y-2 -z-10">
                  401
                </div>
              </motion.div>

              {/* Orbiting elements around 401 */}
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-gradient-to-r from-red-400 to-orange-400 rounded-full"
                  animate={{
                    x: [0, Math.cos(i * 90 * Math.PI / 180) * 60],
                    y: [0, Math.sin(i * 90 * Math.PI / 180) * 60],
                    scale: [0, 1, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: i * 0.5,
                  }}
                  style={{
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                  }}
                />
              ))}
            </div>

            {/* Animated subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-4"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                Access Denied
              </h2>
              <div className="flex items-center justify-center lg:justify-start gap-2 text-gray-600">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <Shield className="w-4 h-4 text-red-500" />
                </motion.div>
                <span className="text-base">Authentication required</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="space-y-6"
          >
            {/* Main message */}
            <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-center mb-4"
              >
                <div className="flex items-center justify-center mb-3">
                  <motion.div
                    animate={{ 
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="w-10 h-10 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl flex items-center justify-center"
                  >
                    <Lock className="w-5 h-5 text-white" />
                  </motion.div>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Authentication Required
                </h3>
                <p className="text-sm text-gray-600">
                  Please log in with valid credentials
                </p>
              </motion.div>

              {/* Action buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="flex flex-col sm:flex-row gap-3"
              >
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-sm"
                  onClick={() => window.location.href = '/login'}
                >
                  <Shield className="w-4 h-4" />
                  Login
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-white/80 hover:bg-white text-gray-700 font-semibold rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 text-sm"
                  onClick={() => window.history.back()}
                >
                  <ArrowLeft className="w-4 h-4" />
                  Go Back
                </motion.button>
              </motion.div>
            </div>

            {/* Compact permissions and actions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Required permissions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-4 border border-red-200"
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="p-1.5 bg-red-100 rounded-lg">
                    <AlertTriangle className="w-4 h-4 text-red-600" />
                  </div>
                  <h4 className="font-semibold text-gray-800 text-sm">Required</h4>
                </div>
                <ul className="space-y-1.5">
                  <li className="flex items-center gap-2 text-xs text-gray-600">
                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                    Valid credentials
                  </li>
                  <li className="flex items-center gap-2 text-xs text-gray-600">
                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                    User permissions
                  </li>
                  <li className="flex items-center gap-2 text-xs text-gray-600">
                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                    Active session
                  </li>
                </ul>
              </motion.div>

              {/* Quick actions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.1 }}
                className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-4 border border-orange-200"
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="p-1.5 bg-orange-100 rounded-lg">
                    <Shield className="w-4 h-4 text-orange-600" />
                  </div>
                  <h4 className="font-semibold text-gray-800 text-sm">Actions</h4>
                </div>
                <div className="space-y-2">
                  <div className="text-xs text-gray-600 cursor-pointer hover:text-orange-600 transition-colors">
                    • Contact administrator
                  </div>
                  <div className="text-xs text-gray-600 cursor-pointer hover:text-orange-600 transition-colors">
                    • View public resources
                  </div>
                  <div className="text-xs text-gray-600 cursor-pointer hover:text-orange-600 transition-colors">
                    • Request access
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Footer branding */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.3 }}
              className="text-center pt-4 border-t border-gray-200"
            >
              <div className="flex items-center justify-center gap-2 mb-1">
                <motion.div
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "linear" 
                  }}
                  className="w-6 h-6 bg-gradient-to-r from-red-600 to-orange-600 rounded-lg flex items-center justify-center"
                >
                  <Sparkles className="w-3 h-3 text-white" />
                </motion.div>
                <span className="text-sm font-semibold text-gray-800">
                  Upthrust Institute
                </span>
              </div>
              <p className="text-xs text-gray-600">
                3D & Web Development Institute • ID: {Math.random().toString(36).substr(2, 9).toUpperCase()}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Unauthorized;