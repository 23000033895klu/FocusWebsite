import React from 'react';
import { ArrowRight } from 'lucide-react';

const CallToActionMain: React.FC = () => {
  return (
    <section className="relative py-24 bg-[#0D1B2A] text-white text-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-5xl font-bold mb-6">Join the FOCUS Community</h2>
        <p className="text-xl mb-12 text-[#E0E1DD] max-w-3xl mx-auto leading-relaxed">
          Be part of a community that values excellence, innovation, and personal growth in CSE.
        </p>
        <button className="group bg-[#B3AF8F] text-[#0D1B2A] px-12 py-4 rounded-xl font-semibold hover:bg-[#a8a278] transform hover:scale-105 transition-all duration-300 shadow-xl">
          <span className="flex items-center justify-center text-lg">
            Get Involved
            <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
          </span>
        </button>
      </div>
    </section>
  );
};

export default CallToActionMain;
