import React from 'react';
import { Target, Users, Trophy, Lightbulb, ArrowRight } from 'lucide-react';

const plans = [
  {
    icon: Target,
    title: 'Identify Talents',
    description: 'Discover and nurture individual talents within our community',
    color: '#415A77'
  },
  {
    icon: Users,
    title: 'Build Community',
    description: 'Foster strong connections through events and collaborative activities',
    color: '#1B263B'
  },
  {
    icon: Trophy,
    title: 'Academic Excellence',
    description: 'Achieve outstanding results with comprehensive support systems',
    color: '#B3AF8F'
  },
  {
    icon: Lightbulb,
    title: 'Innovation Culture',
    description: 'Cultivate creativity and innovative thinking in technology',
    color: '#0D1B2A'
  }
];

const PlanSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#E0E1DD]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-[#1B263B] mb-6">Our Plan</h2>
          <div className="w-32 h-1 bg-[#415A77] mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-[#415A77] max-w-3xl mx-auto">
            Strategic initiatives designed to empower every student in their journey towards excellence
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((item, index) => (
            <div key={index} className="group transition-all">
              <div className="relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl border border-[#E0E1DD] hover:border-[#415A77] transition-all duration-300">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg" style={{ backgroundColor: item.color }}>
                  <item.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#0D1B2A] mb-4">{item.title}</h3>
                <p className="text-[#415A77] leading-relaxed">{item.description}</p>
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowRight className="h-5 w-5 text-[#415A77]" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlanSection;
