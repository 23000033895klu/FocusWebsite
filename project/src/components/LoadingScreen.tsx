import React from 'react';
import { GraduationCap } from 'lucide-react';
import logo from '../images/focusLogo.png';

const LoadingScreen: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1B263B] via-[#0D1B2A] to-[#415A77] flex items-center justify-center">
      <div className="text-center">
        {/* Pulsing Gradient Circle */}
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-gradient-to-r from-[#B3AF8F] to-[#E0E1DD] rounded-full animate-ping opacity-60"></div>
          <div className="relative bg-gradient-to-r from-[#B3AF8F] to-[#E0E1DD] p-6 rounded-full">
            <GraduationCap className="h-12 w-12 text-[#0D1B2A] animate-pulse" />
          </div>
        </div>

        {/* Logo */}
        <div className="flex justify-center mt-6 animate-fade-in">
          <img src={logo} alt="Focus Logo" className="h-60 w-auto animate-fade-in" />
        </div>

        {/* Subtitle */}
        <p className="text-xl text-[#B3AF8F] mb-2 animate-fade-in-delay">
          CSE Student Governance Body
        </p>

        {/* Decorative Line */}
        <div className="flex justify-center">
          <div className="w-16 h-1 bg-gradient-to-r from-[#B3AF8F] to-[#E0E1DD] rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
