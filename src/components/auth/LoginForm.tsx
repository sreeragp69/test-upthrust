import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, EyeOff, Mail, Lock, Sparkles, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/authSlice";
import { saveAuth } from "../../utils/auth";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    if (!email || !password) {
      setIsLoading(false);
      setError("Please enter your email and password");
      return;
    }

    // Simulate login process
    setTimeout(() => {
      // Mock user data for demo purposes
      const mockUser = {
        id: "1",
        email: email,
        name: "Demo User",
        role: "Student",
      };
      const mockToken = "mock-jwt-token";

      saveAuth(mockUser, mockToken);
      dispatch(setUser({ user: mockUser, token: mockToken }));

      // Navigate to dashboard
      navigate("/");

      setEmail("");
      setPassword("");
      setShowPassword(false);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-white  flex items-center justify-center px-4 relative overflow-hidden transition-colors duration-300">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-30 ">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #3b82f6 1px, transparent 1px),
                            radial-gradient(circle at 75% 75%, #8b5cf6 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Floating geometric shapes */}
      <motion.div
        className="absolute top-20 left-20 w-24 h-24 border-2 border-blue-300/30  rounded-full"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-20 h-20 border-2 border-purple-300/30  rounded-lg"
        animate={{
          rotate: [360, 0],
          scale: [1, 0.8, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <div className="max-w-4xl w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left side - Welcome Animation */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            {/* Main Welcome with 3D effect */}
            <div className="relative mb-6">
              <motion.div
                className="relative"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <h1 className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 select-none tracking-tighter">
                  Welcome
                </h1>
                {/* 3D shadow effect */}
                <div className="absolute inset-0 text-6xl md:text-7xl font-black text-gray-300/20  select-none tracking-tighter transform translate-x-2 translate-y-2 -z-10">
                  Welcome
                </div>
              </motion.div>

              {/* Orbiting elements around Welcome */}
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
                  animate={{
                    x: [0, Math.cos((i * 90 * Math.PI) / 180) * 60],
                    y: [0, Math.sin((i * 90 * Math.PI) / 180) * 60],
                    scale: [0, 1, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: i * 0.5,
                  }}
                  style={{
                    left: "50%",
                    top: "50%",
                    transform: "translate(-50%, -50%)",
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
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800  mb-2">
                Upthrust Institute
              </h2>
              <div className="flex items-center justify-center lg:justify-start gap-2 text-gray-600 ">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <Sparkles className="w-4 h-4 text-blue-500" />
                </motion.div>
                <span className="text-base">
                  3D & Web Development Institute
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right side - Login Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="space-y-6"
          >
            {/* Main login form */}
            <div className="bg-white/70  backdrop-blur-xl rounded-2xl p-6 border border-white/20  shadow-xl">
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
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center"
                  >
                    <Zap className="w-5 h-5 text-white" />
                  </motion.div>
                </div>
                <h3 className="text-lg font-semibold text-gray-800  mb-2">
                  Sign In to Your Account
                </h3>
                <p className="text-sm text-gray-600 ">
                  Enter your credentials to access your learning portal
                </p>
              </motion.div>

              {/* Error message */}
              {error && (
                <motion.div
                  className="mb-4 text-center text-red-600  text-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  {error}
                </motion.div>
              )}

              {/* Form */}
              <form onSubmit={handleLogin} className="space-y-4">
                {/* Email field */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                >
                  <label className="block text-sm font-medium text-gray-700  mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <motion.div
                      className={`absolute left-3 top-1/2 transform -translate-y-1/2 transition-colors duration-200 ${
                        focusedField === "email"
                          ? "text-blue-500"
                          : "text-gray-400"
                      }`}
                    >
                      <Mail className="w-4 h-4" />
                    </motion.div>
                    <motion.input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onFocus={() => setFocusedField("email")}
                      onBlur={() => setFocusedField(null)}
                      className="w-full pl-10 pr-4 py-3 bg-gray-50  border border-gray-200  rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900  placeholder-gray-500  text-sm"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </motion.div>

                {/* Password field */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  <label className="block text-sm font-medium text-gray-700  mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <motion.div
                      className={`absolute left-3 top-1/2 transform -translate-y-1/2 transition-colors duration-200 ${
                        focusedField === "password"
                          ? "text-blue-500"
                          : "text-gray-400"
                      }`}
                    >
                      <Lock className="w-4 h-4" />
                    </motion.div>
                    <motion.input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      onFocus={() => setFocusedField("password")}
                      onBlur={() => setFocusedField(null)}
                      className="w-full pl-10 pr-10 py-3 bg-gray-50  border border-gray-200  rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900  placeholder-gray-500  text-sm"
                      placeholder="Enter your password"
                      required
                    />
                    <motion.button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600  transition-colors duration-200"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <AnimatePresence mode="wait">
                        {showPassword ? (
                          <motion.div
                            key="eye-off"
                            initial={{ opacity: 0, rotate: 90 }}
                            animate={{ opacity: 1, rotate: 0 }}
                            exit={{ opacity: 0, rotate: -90 }}
                            transition={{ duration: 0.2 }}
                          >
                            <EyeOff className="w-4 h-4" />
                          </motion.div>
                        ) : (
                          <motion.div
                            key="eye"
                            initial={{ opacity: 0, rotate: -90 }}
                            animate={{ opacity: 1, rotate: 0 }}
                            exit={{ opacity: 0, rotate: 90 }}
                            transition={{ duration: 0.2 }}
                          >
                            <Eye className="w-4 h-4" />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.button>
                  </div>
                </motion.div>

                {/* Submit button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                >
                  <motion.button
                    type="submit"
                    disabled={isLoading}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                  >
                    <AnimatePresence mode="wait">
                      {isLoading ? (
                        <motion.div
                          key="loading"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="flex items-center justify-center space-x-2"
                        >
                          <motion.div
                            className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{
                              duration: 1,
                              repeat: Number.POSITIVE_INFINITY,
                              ease: "linear",
                            }}
                          />
                          <span>Signing in...</span>
                        </motion.div>
                      ) : (
                        <motion.span
                          key="signin"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        >
                          Sign In
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </motion.button>
                </motion.div>
              </form>

              {/* Footer */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.1 }}
                className="mt-6 text-center"
              >
                <p className="text-xs text-gray-600 ">
                  New to Upthrust?{" "}
                  <motion.a
                    href="#"
                    className="text-blue-600 hover:text-blue-500  font-medium transition-colors duration-200"
                  >
                    Contact us for enrollment
                  </motion.a>
                </p>
              </motion.div>
            </div>

            {/* Footer branding */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.3 }}
              className="text-center pt-4 border-t border-gray-200 "
            >
              <div className="flex items-center justify-center gap-2 mb-1">
                <motion.div
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="w-6 h-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center"
                >
                  <Sparkles className="w-3 h-3 text-white" />
                </motion.div>
                <span className="text-sm font-semibold text-gray-800 ">
                  Upthrust Institute
                </span>
              </div>
              <p className="text-xs text-gray-600 ">
                3D & Web Development Institute
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
