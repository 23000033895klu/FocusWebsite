import { Users, Award, Target, Calendar, Sparkles, Star, Zap } from 'lucide-react';

const wings = [
  {
    name: 'Academics & Skill Development',
    description:
      'Dedicated to nurturing academic excellence and holistic development through innovative teaching methods, student-centric evaluation systems, interdisciplinary research opportunities, and personalized timetables. This wing also promotes skill-building workshops, technical certifications, and peer-learning initiatives to prepare students for academic and professional success.',
    color: 'from-[#415A77] to-[#1B263B]',
    icon: Target,
  },
  {
    name: 'Alumni & IRP',
    description:
      'Strengthens the CSE community by building long-term relationships with alumni and maintaining an up-to-date database of alumni achievements and career paths. It also acts as a bridge between industry and students by organizing guest lectures, mentorship programs, internships, and pre-placement training through active collaboration with alumni and corporate partners.',
    color: 'from-[#B3AF8F] to-[#415A77]',
    icon: Users,
  },
  {
    name: 'Events & Extension Activities',
    description:
      'Handles the planning, coordination, and execution of all cultural, technical, and departmental events. This wing promotes community engagement, student participation, and holistic development by organizing fests, workshops, competitions, and social impact initiatives in collaboration with faculty and external organizations.',
    color: 'from-[#1B263B] to-[#0D1B2A]',
    icon: Calendar,
  },
  {
    name: 'Provision',
    description:
      'Responsible for managing logistics, finances, and permissions related to all departmental activities. This includes budgeting, resource allocation, procurement, and ensuring compliance with institutional protocols. The wing ensures that every FOCUS initiative is well-supported, timely, and efficient.',
    color: 'from-[#B3AF8F] to-[#0D1B2A]',
    icon: Award,
  },
  {
    name: 'Resolvance',
    description:
      'Acts as the voice of the student body by addressing academic, administrative, and social grievances submitted through email, forms, or Telegram. The wing ensures transparency, accountability, and resolution by coordinating with faculty and department heads to resolve concerns in a timely and respectful manner.',
    color: 'from-[#0D1B2A] to-[#415A77]',
    icon: Target,
  },
  {
    name: 'Strategy',
    description:
      'Focuses on long-term planning and execution of strategic initiatives that align with departmental vision. This includes goal setting, policy recommendations, process optimizations, and collaborative frameworks. The wing ensures that all FOCUS efforts are impactful, future-ready, and data-driven.',
    color: 'from-[#1B263B] to-[#415A77]',
    icon: Zap,
  },
  {
    name: 'Tech and Society',
    description:
      'Encourages responsible tech development and its application for societal good. It leads technology-based clubs, industry projects, innovation challenges, and knowledge exchange programs. The wing promotes awareness around emerging technologies, sustainable development, and interdisciplinary collaboration.',
    color: 'from-[#0D1B2A] to-[#1B263B]',
    icon: Star,
  },
  {
    name: 'Voice',
    description:
      'Serves as the creative and communication hub of FOCUS. This wing designs promotional materials, handles social media presence, and manages outreach campaigns. It ensures that all departmental events and announcements reach students effectively through posters, videos, newsletters, and strategic branding.',
    color: 'from-[#415A77] to-[#B3AF8F]',
    icon: Sparkles,
  },
];


const WingsSection = () => (
  <div className="mb-20 px-4 md:px-20 animate-slide-up">
    {/* Heading */}
    <div className="text-center mb-16 animate-fade-in">
      <h2 className="text-4xl font-bold bg-gradient-to-r from-[#0D1B2A] to-[#415A77] bg-clip-text text-transparent mb-4">
        Our Wings
      </h2>
      <div className="w-24 h-1 bg-[#B3AF8F] mx-auto rounded-full" />
    </div>

    {/* Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {wings.map((wing, index) => (
        <div key={index} className="group animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
          <div className="relative bg-[#F4F4F2] rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-[#B3AF8F]/30 hover:border-[#415A77]/50 transform hover:-translate-y-1 backdrop-blur-sm">
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#E0E1DD]/30 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Icon */}
            <div className={`relative bg-gradient-to-r ${wing.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
              <wing.icon className="h-8 w-8 text-white" />
            </div>

            {/* Title */}
            <h3 className="text-2xl font-bold text-[#0D1B2A] mb-4 group-hover:text-[#B3AF8F] transition-colors">
              {wing.name}
            </h3>

            {/* Description */}
            <p className="text-[#1B263B] leading-relaxed group-hover:text-[#415A77] transition-colors">
              {wing.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default WingsSection;
