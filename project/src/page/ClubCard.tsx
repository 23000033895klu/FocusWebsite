import React from "react";
import {
  Star, Globe, Palette, Zap, Plane, Code,
  Cpu, Settings, Database, Users, Shield
} from "lucide-react";

const ClubCard: React.FC = () => {
  const clubs = [
    { name: 'Aprameya', description: 'Focused on advanced research and development in computer science applications.', icon: <Star className="h-6 w-6" />, color: 'from-[#415A77] to-[#1B263B]', members: '45+' },
    { name: 'Broad Band Networks', description: 'Specializing in network technologies and communication systems.', icon: <Globe className="h-6 w-6" />, color: 'from-[#415A77] to-[#1B263B]', members: '38+' },
    { name: 'Design Circle', description: 'Creative hub for UI/UX design and digital art enthusiasts.', icon: <Palette className="h-6 w-6" />, color: 'from-[#B3AF8F] to-[#415A77]', members: '52+' },
    { name: 'Expedite', description: 'High-performance computing and optimization solutions.', icon: <Zap className="h-6 w-6" />, color: 'from-[#1B263B] to-[#0D1B2A]', members: '30+' },
    { name: 'Garuda (Drone Club)', description: 'Aerial robotics and drone technology development.', icon: <Plane className="h-6 w-6" />, color: 'from-[#B3AF8F] to-[#415A77]', members: '28+' },
    { name: 'Google Developer Groups (GDG)', description: 'Google technologies and development practices.', icon: <Code className="h-6 w-6" />, color: 'from-[#415A77] to-[#1B263B]', members: '65+' },
    { name: 'Intel Innovation Club', description: 'Hardware innovation and Intel technology exploration.', icon: <Cpu className="h-6 w-6" />, color: 'from-[#1B263B] to-[#0D1B2A]', members: '35+' },
    { name: 'Kognitiv', description: 'Artificial intelligence and cognitive computing research.', icon: <Settings className="h-6 w-6" />, color: 'from-[#415A77] to-[#1B263B]', members: '42+' },
    { name: 'Mayavi', description: 'Virtual reality and augmented reality development.', icon: <Globe className="h-6 w-6" />, color: 'from-[#0D1B2A] to-[#1B263B]', members: '33+' },
    { name: 'Megha', description: 'Cloud computing and distributed systems.', icon: <Database className="h-6 w-6" />, color: 'from-[#415A77] to-[#1B263B]', members: '48+' },
    { name: 'Robotic Process Automation (RPA)', description: 'Automation solutions and process optimization.', icon: <Settings className="h-6 w-6" />, color: 'from-[#B3AF8F] to-[#415A77]', members: '40+' },
    { name: 'S.E.A Club', description: 'Software engineering and architecture principles.', icon: <Code className="h-6 w-6" />, color: 'from-[#1B263B] to-[#0D1B2A]', members: '55+' },
    { name: 'SOCC', description: 'Service-oriented and cloud computing solutions.', icon: <Globe className="h-6 w-6" />, color: 'from-[#415A77] to-[#1B263B]', members: '37+' },
    { name: 'SODS', description: 'Data science and analytics for modern applications.', icon: <Database className="h-6 w-6" />, color: 'from-[#B3AF8F] to-[#415A77]', members: '46+' },
    { name: 'Trailblazers (Salesforce)', description: 'Salesforce platform development and CRM solutions.', icon: <Users className="h-6 w-6" />, color: 'from-[#415A77] to-[#1B263B]', members: '32+' },
    { name: 'White Hat Hackers', description: 'Cybersecurity and ethical hacking practices.', icon: <Shield className="h-6 w-6" />, color: 'from-[#0D1B2A] to-[#1B263B]', members: '29+' },
  ];

  return (
    <div className="min-h-screen bg-[#E0E1DD] pt-10 pb-10 px-4 sm:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        <div className="col-span-full text-center mb-8">
          <h2 className="text-3xl font-bold text-[#1B263B] mb-4">Our Clubs</h2>
          <p className="text-lg text-[#415A77] max-w-2xl mx-auto">
            Join our diverse technology clubs and explore your passion for innovation and collaboration.
          </p>
        </div>

        {clubs.map((club, index) => (
          <div
            key={index}
            className="group cursor-pointer animate-slide-up"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <div className="relative bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105">
              
              {/* Curved Top */}
              <div className={`relative h-36 bg-gradient-to-r ${club.color} z-1`}>
                <svg
                  className="absolute bottom-0 left-0 w-full"
                  viewBox="0 0 500 120"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0.00,60.00 C150.00,180.00 350.00,-30.00 500.00,60.00 L500.00,150.00 L0.00,150.00 Z"
                    style={{ stroke: "none", fill: "white" }}
                  />
                </svg>
              </div>

              {/* Content */}
              <div className="p-6 text-center z-10 relative">
                <div className="-mt-12 w-14 h-14 mx-auto mb-3 flex items-center justify-center rounded-full shadow-md bg-gradient-to-r from-[#E0E1DD] to-[#B3AF8F]">
                  {club.icon}
                </div>
                <h3 className="text-lg font-bold text-[#0D1B2A] mb-1">
                  {club.name}
                </h3>
                <p className="text-sm text-[#415A77] mb-1">
                  {club.members} members
                </p>
                <p className="text-sm text-[#1B263B] leading-snug">
                  {club.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClubCard;
