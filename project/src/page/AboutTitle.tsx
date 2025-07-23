import { Crown, Sparkles } from 'lucide-react';

const AboutTitle = () => (
  <div className="text-center mb-20 mt-10 py-20 px-20 animate-fade-in">
    <div className="flex justify-center mb-8">
      <div className="relative">
        <div className="bg-[#415A77] p-4 rounded-2xl shadow-2xl">
          <Crown className="h-12 w-12 text-[#E0E1DD]" />
        </div>
        <Sparkles className="absolute -top-2 -right-2 h-6 w-6 text-[#B3AF8F] animate-pulse" />
      </div>
    </div>

    <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#0D1B2A] via-[#1B263B] to-[#415A77] bg-clip-text text-transparent mb-8 leading-tight">
      FOCUS: Empowering CSE Students for Excellence and Innovation
    </h1>
    
    <div className="w-32 h-1 bg-gradient-to-r from-[#0D1B2A] via-[#1B263B] to-[#415A77] mx-auto rounded-full"></div>
  </div>
);

export default AboutTitle;
