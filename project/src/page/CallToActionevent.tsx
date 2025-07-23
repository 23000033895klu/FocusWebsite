import { Clock, Sparkles } from 'lucide-react';

const CallToActionevent = () => (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

  <div className="mt-24 relative animate-fade-in">
    <div className="relative z-10 p-12 md:p-16 text-center bg-gradient-to-br from-[#415A77] via-[#1B263B] to-[#0D1B2A] text-white rounded-3xl shadow-xl overflow-hidden">
      <div className="flex justify-center mb-8">
        <div className="bg-[#B3AF8F] p-4 rounded-2xl shadow-lg">
          <Clock className="h-12 w-12 text-white" />
        </div>
      </div>
      <h2 className="text-4xl font-bold mb-6">Stay Updated</h2>
      <p className="text-xl mb-8 text-[#E0E1DD] max-w-2xl mx-auto leading-relaxed">
        Don't miss out on our upcoming events and workshops. Join our community to stay informed!
      </p>
      <button className="group bg-[#B3AF8F] text-[#1B263B] px-10 py-4 rounded-xl font-semibold hover:bg-[#A3A077] transform hover:scale-105 transition-all duration-300 shadow-md flex items-center justify-center text-lg">
        Join Our Community
        <Sparkles className="ml-3 h-6 w-6 group-hover:rotate-12 transition-transform" />
      </button>
    </div>
    </div>
    </div>
);

export default CallToActionevent;
