import React, { useState } from 'react';
import { Eye, EyeOff, Mail, Lock, User, Sparkles } from 'lucide-react';
import logo from '../images/focusLogo.png'; // Place your logo in `src/assets/logo.png`

interface AuthPageProps {
  onLogin: () => void;
}

const AuthPage: React.FC<AuthPageProps> = ({ onLogin }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      onLogin();
    }, 1500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0D1B2A] via-[#1B263B] to-[#415A77] flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Motion Blur Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-24 left-24 w-72 h-72 bg-[#B3AF8F]/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-24 right-24 w-96 h-96 bg-[#E0E1DD]/20 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#415A77]/20 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="max-w-md w-full relative z-10">
        {/* Header Logo Section */}
        <div className="text-center mb-8 animate-fade-in">
          <div className="relative inline-flex items-center justify-center w-20 h-20 mb-6">
            <div className="absolute inset-0 bg-gradient-to-r from-[#B3AF8F] to-[#E0E1DD] rounded-full animate-spin-slow opacity-60" />
            <div className="relative w-16 h-16 rounded-full overflow-hidden flex items-center justify-center bg-[#B3AF8F]">
              <img src={logo} alt="Focus Logo" className="w-12 h-12 object-contain" />
            </div>
            <Sparkles className="absolute -top-2 -right-2 h-6 w-6 text-[#E0E1DD] animate-pulse" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-2 bg-gradient-to-r from-[#E0E1DD] via-[#B3AF8F] to-[#415A77] bg-clip-text text-transparent">
            FOCUS
          </h1>
          <p className="text-lg text-[#E0E1DD] font-medium">CSE Student Governance Body</p>
          <p className="text-sm text-[#E0E1DD]/70 mt-1">Empowering Excellence & Innovation</p>
        </div>

        {/* Auth Form Box */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-[#E0E1DD]/10 animate-slide-up">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-[#E0E1DD] mb-2">
              {isLogin ? 'Welcome Back' : 'Join FOCUS'}
            </h2>
            <p className="text-[#B3AF8F]">
              {isLogin ? 'Sign in to access the platform' : 'Create your account to get started'}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {!isLogin && (
              <div className="animate-fade-in">
                <label className="block text-sm text-[#E0E1DD] mb-2">Full Name</label>
                <div className="relative group">
                  <User className="absolute left-3 top-3 h-5 w-5 text-[#E0E1DD]/60" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 bg-transparent border border-[#E0E1DD]/30 rounded-xl text-white placeholder-[#E0E1DD]/40 focus:ring-2 focus:ring-[#B3AF8F]"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block text-sm text-[#E0E1DD] mb-2">Email Address</label>
              <div className="relative group">
                <Mail className="absolute left-3 top-3 h-5 w-5 text-[#E0E1DD]/60" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-3 bg-transparent border border-[#E0E1DD]/30 rounded-xl text-white placeholder-[#E0E1DD]/40 focus:ring-2 focus:ring-[#B3AF8F]"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm text-[#E0E1DD] mb-2">Password</label>
              <div className="relative group">
                <Lock className="absolute left-3 top-3 h-5 w-5 text-[#E0E1DD]/60" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-12 py-3 bg-transparent border border-[#E0E1DD]/30 rounded-xl text-white placeholder-[#E0E1DD]/40 focus:ring-2 focus:ring-[#B3AF8F]"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-[#B3AF8F]"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            {!isLogin && (
              <div className="animate-fade-in">
                <label className="block text-sm text-[#E0E1DD] mb-2">Confirm Password</label>
                <div className="relative group">
                  <Lock className="absolute left-3 top-3 h-5 w-5 text-[#E0E1DD]/60" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 bg-transparent border border-[#E0E1DD]/30 rounded-xl text-white placeholder-[#E0E1DD]/40 focus:ring-2 focus:ring-[#B3AF8F]"
                    placeholder="Confirm your password"
                    required
                  />
                </div>
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-[#B3AF8F] to-[#E0E1DD] text-[#0D1B2A] py-3 rounded-xl font-semibold hover:from-[#B3AF8F]/90 hover:to-[#E0E1DD]/90 transform hover:scale-105 transition-all duration-200 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                  Processing...
                </div>
              ) : (
                isLogin ? 'Sign In' : 'Create Account'
              )}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-[#E0E1DD]/80">
              {isLogin ? "Don't have an account?" : "Already have an account?"}
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="ml-2 text-[#B3AF8F] hover:text-white font-semibold transition-colors"
              >
                {isLogin ? 'Sign up' : 'Sign in'}
              </button>
            </p>
          </div>
        </div>

        <div className="text-center mt-6 text-[#E0E1DD]/60 text-sm animate-fade-in-delay">
          <p>Secure • Trusted • Innovation-Driven</p>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
