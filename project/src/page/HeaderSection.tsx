import { Calendar, Sparkles } from "lucide-react";

const HeaderSection = () => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div className="text-center mb-20 animate-fade-in">
      <div className="flex justify-center mb-8">
        <div className="relative">
          <div className="bg-[#B3AF8F] p-4 rounded-2xl shadow-lg">
            <Calendar className="h-12 w-12 text-white" />
          </div>
          <Sparkles className="absolute -top-2 -right-2 h-6 w-6 text-[#B3AF8F] animate-pulse" />
        </div>
      </div>
      <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#415A77] via-[#1B263B] to-[#0D1B2A] bg-clip-text text-transparent mb-6">
        Our Events
      </h1>
      <p className="text-xl text-[#415A77] max-w-3xl mx-auto leading-relaxed">
        Discover the journey of innovation and learning through our organized
        events across the years.
      </p>
      <div className="w-32 h-1 bg-[#B3AF8F] mx-auto mt-8 rounded-full"></div>
    </div>
  </div>
);

export default HeaderSection;
