import { Award, Calendar, Target, Users } from 'lucide-react';

const MetricsSection = () => {
  const metrics = [
    {
      icon: Target,
      number: "8",
      label: "Wings",
      gradient: "from-[#1B263B] to-[#0D1B2A]",
      bgImage: "../src/images/klLib.png",
    },
    {
      icon: Award,
      number: "8",
      label: "Advisors",
      gradient: "from-[#1B263B] to-[#0D1B2A]",
      bgImage: "../src/images/kl2.png",
    },
    {
      icon: Users,
      number: "8",
      label: "Directors",
      gradient: "from-[#1B263B] to-[#0D1B2A]",
      bgImage: "../src/images/l32.jpeg",
    },
    {
      icon: Calendar,
      number: "150",
      label: "Active Leads",
      gradient: "from-[#1B263B] to-[#0D1B2A]",
      bgImage: "../src/images/kl4.jpg",
    }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-10 px-10 md:px-40 py-8 mb-10">
      {metrics.map((metric, index) => (
        <div
          key={index}
          className="group animate-fade-in-up transition-transform duration-300"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <div
            className="relative rounded-2xl overflow-hidden text-white shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500"
            style={{
              backgroundImage: `url(${metric.bgImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '320px',       // 🔼 Increased height
              width: '100%',         // 🔼 Full width of grid cell
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-[#0D1B2A]/50 z-0"></div>

            {/* Content */}
            <div className="relative z-10 p-6 md:p-8 text-center backdrop-blur-sm h-full flex flex-col justify-center">
              <div
                className={`mx-auto mb-6 w-16 h-16 flex items-center justify-center rounded-2xl shadow-md bg-gradient-to-r ${metric.gradient} group-hover:scale-110 transition-transform duration-300`}
              >
                <metric.icon className="h-8 w-8 text-white" />
              </div>

              <div className="text-4xl font-bold text-white mb-2 group-hover:text-[#B3AF8F] transition-colors duration-300">
                {metric.number}
              </div>
              <div className="text-sm font-medium text-[#E0E1DD] group-hover:text-white transition-colors duration-300">
                {metric.label}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MetricsSection;
