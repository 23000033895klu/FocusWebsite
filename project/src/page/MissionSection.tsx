import React from 'react';
import { Zap, Sparkles } from 'lucide-react';
import kl2 from '../images/kl2.png';
import kl4 from '../images/kl4.jpg';

const MissionSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#415A77]/10 relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-[#1B263B] mb-6">Our Mission</h2>
          <div className="w-32 h-1 bg-[#415A77] mx-auto mb-8 rounded-full"></div>
        </div>

        {/* Mission Text Box */}
        <div className="relative bg-[#E0E1DD]/80 backdrop-blur-xl rounded-3xl p-12 md:p-16 shadow-2xl border border-[#415A77]/20">
          <div className="absolute top-6 left-6">
            <Zap className="h-8 w-8 text-[#B3AF8F]" />
          </div>
          <div className="absolute bottom-6 right-6">
            <Sparkles className="h-6 w-6 text-[#415A77]" />
          </div>
          <blockquote className="text-2xl md:text-3xl text-[#1B263B] leading-relaxed text-center italic font-light">
            "Our mission is to unlock the hidden talents of students while building a close-knit community..."
          </blockquote>
        </div>

        {/* Images Below the Mission */}
        <div className="flex justify-center gap-6 mt-12 flex-wrap">
          <img src={kl2} alt="Mission Image 1" className="w-40 rounded-xl shadow-md" />
          <img src={kl4} alt="Mission Image 2" className="w-40 rounded-xl shadow-md" />
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
