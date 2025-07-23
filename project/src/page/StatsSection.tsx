import React from "react";
import { Users, Star, Trophy } from "lucide-react";

const stats = [
  { icon: Users, number: "16", label: "Active Clubs" },
  { icon: Star, number: "650+", label: "Active Members" },
  { icon: Trophy, number: "50+", label: "Projects" },
];

const StatsSection: React.FC = () => {
  return (
    <section className="py-12 bg-[#f9fafb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-transform duration-300 transform hover:-translate-y-2 border border-gray-200">
                <div className="flex justify-center items-center mb-4">
                  <div className="bg-gradient-to-r from-[#415A77] to-[#1B263B] w-12 h-12 rounded-lg flex items-center justify-center shadow">
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-[#1B263B]">
                  {stat.number}
                </div>
                <div className="text-[#415A77] mt-1 font-medium">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
