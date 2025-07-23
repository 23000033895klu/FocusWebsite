import { Star, Zap } from 'lucide-react';

const MainDescription = () => (
  <div className="relative mb-12 animate-slide-up px-4 md:px-16">
    {/* Subtle Blurred BG */}
    <div className="absolute inset-0 bg-[#B3AF8F]/10 rounded-3xl blur-2xl z-0" />

    {/* Main Card */}
    <div className="relative z-10 bg-[#E0E1DD]/90 backdrop-blur-xl rounded-3xl shadow-2xl px-6 py-10 md:px-12 md:py-14 border border-[#415A77]/30">
      
      {/* Top Left Icon */}
      <div className="absolute top-6 left-6">
        <Star className="h-8 w-8 text-[#B3AF8F] animate-pulse" />
      </div>
      
      {/* Bottom Right Icon */}
      <div className="absolute bottom-6 right-6">
        <Zap className="h-6 w-6 text-[#415A77] animate-pulse" />
      </div>

      {/* Text Block */}
      <div className="space-y-6 text-[#0D1B2A] text-lg leading-relaxed font-light">
        <p className="text-2xl font-semibold text-[#1B263B] mb-4">
          FOCUS serves as a student governance body for Computer Science and Engineering (CSE) students at the University. 
          Its primary objective is to provide a platform for students to voice their concerns and address them effectively.
        </p>
        <p>
          FOCUS is dedicated to offering opportunities in various academic domains, fostering individual and teamwork capabilities, 
          and promoting excellence in decision-making and perceptual skills among students.
        </p>
        <p>
          Having operated for 10 years, FOCUS has been particularly effective since 2013. The term "FOCUS" symbolizes futuristic 
          vision, sound decision-making, and students' keen perception abilities. The forum's purpose is to equip students with 
          the essential skills needed to thrive in a rapidly evolving, quality-conscious, and globalized technological landscape.
        </p>
        <p>
          FOCUS provides an ideal platform for students to share ideas, expand their knowledge, realize their potential, and gain 
          valuable experience. In today's technology-driven world, true leadership and knowledge are enriched through sharing.
        </p>
        <p>
          Additionally, FOCUS organizes National Level Techno Management Fests, providing students with a chance to explore new 
          technologies and insights during a 2 to 3-day break from their academic routines.
        </p>
      </div>
    </div>
  </div>
);

export default MainDescription;
