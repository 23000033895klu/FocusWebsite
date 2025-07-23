import { ArrowRight, Users } from 'lucide-react';

const CallToAction = () => (
    <div className="min-h-70 pt-10 pb-10 px-4 sm:px-8">
  <div className="relative animate-fade-in">
    <div className="relative z-10 p-8 md:p-10 text-center rounded-2xl bg-gradient-to-r from-[#415A77] to-[#1B263B] text-white max-w-7xl mx-auto shadow-lg">
      <div className="flex justify-center mb-6">
        <div className="bg-[#B3AF8F] p-3 rounded-xl shadow-md">
          <Users className="h-10 w-10 text-white" />
        </div>
      </div>
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Join a Club Today</h2>
      <p className="text-lg md:text-xl mb-6 max-w-xl mx-auto leading-relaxed text-white/90">
        Ready to dive into technology and innovation? Find your passion and connect with fellow tech enthusiasts.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button className="group bg-gradient-to-r from-[#415A77] to-[#1B263B] text-white px-6 py-3 rounded-lg font-medium hover:from-[#1B263B] hover:to-[#0D1B2A] transform hover:scale-105 transition-all duration-300 flex items-center justify-center">
          Explore Clubs
          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
        </button>
        <button className="group border-2 border-[#B3AF8F] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#B3AF8F]/10 hover:border-[#B3AF8F] backdrop-blur-sm transition-all duration-300">
          Contact Us
        </button>
      </div>
    </div>
  </div>
  </div>
);

export default CallToAction;
