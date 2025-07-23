import React from "react";
import { Code, Sparkles } from "lucide-react";

const ClubTitle: React.FC = () => {
  return (
    <section className="pt-40 pb-10 bg-white">
      <div className="text-center mb-12 animate-fade-in">
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="bg-gradient-to-r from-[#415A77] to-[#1B263B] p-4 rounded-2xl shadow-2xl">
              <Code className="h-12 w-12 text-white" />
            </div>
            <Sparkles className="absolute -top-2 -right-2 h-6 w-6 text-[#B3AF8F] animate-pulse" />
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#1B263B] via-[#415A77] to-[#0D1B2A] bg-clip-text text-transparent mb-6">
          Technology Clubs
        </h1>

        <p className="text-lg md:text-xl text-[#1B263B] max-w-3xl mx-auto leading-relaxed">
          Explore our diverse technology clubs where innovation meets collaboration. Join a
          community of like-minded students passionate about technology.
        </p>

        <div className="w-24 h-1 bg-gradient-to-r from-[#415A77] via-[#1B263B] to-[#0D1B2A] mx-auto mt-6 rounded-full"></div>
      </div>
    </section>
  );
};

export default ClubTitle;
