import { Crown, } from 'lucide-react';

const heads = [
  {
    name: 'Dr. A Senthil',
    role: 'CSE-H1',
    image: '/images/senthil.jpg',
  },
  {
    name: 'Dr. T Pavan Kumar',
    role: 'CSE-H2',
    image: '/images/pavan.jpg',
  },
  {
    name: 'Dr. V S V Prabhakar',
    role: 'CSE-R',
    image: '/images/prabhakar.jpg',
  },
];

const LeadershipSection = () => (
  <div className="relative animate-slide-up px-4 md:px-16 mb-20">
    {/* Background Blur */}
    <div className="absolute inset-0 bg-gradient-to-r from-[#1B263B]/10 to-[#415A77]/10 rounded-3xl blur-xl" />

    <div className="relative bg-[#E0E1DD]/80 backdrop-blur-xl rounded-3xl shadow-2xl p-12 md:p-16 border border-[#B3AF8F]/30">
      <h2 className="text-4xl font-bold bg-gradient-to-r from-[#0D1B2A] to-[#415A77] bg-clip-text text-transparent mb-12 text-center">
        Leadership
      </h2>

      {/* Heads Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {heads.map((head, index) => (
          <div key={index} className="group text-center">
            <div className="relative bg-gradient-to-br from-[#1B263B] to-[#0D1B2A] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#415A77]/30 transform hover:-translate-y-1">
              <div className="absolute top-4 right-4">
                <Crown className="h-6 w-6 text-[#B3AF8F] opacity-60 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Profile Image */}
              <img
                src={head.image}
                alt={head.name}
                className="w-24 h-24 mx-auto rounded-full object-cover border-4 border-[#E0E1DD] mb-4"
              />

              <h3 className="text-xl font-semibold text-[#E0E1DD] group-hover:text-[#B3AF8F] transition-colors">
                {head.name}
              </h3>
              <p className="text-[#B3AF8F] font-medium group-hover:text-[#E0E1DD] transition-colors">
                {head.role}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Deputy HoD */}
      <div className="text-center">
        <div className="inline-block bg-gradient-to-br from-[#415A77] to-[#1B263B] rounded-2xl p-8 shadow-lg border border-[#B3AF8F]/40">
          <div className="flex justify-center mb-4">
            <img
              src="/images/santhi.jpg"
              alt="Dr. T Santhi Sri"
              className="w-24 h-24 rounded-full object-cover border-4 border-[#E0E1DD]"
            />
          </div>
          <h3 className="text-xl font-semibold text-[#E0E1DD]">Dr. T Santhi Sri</h3>
          <p className="text-[#B3AF8F] font-medium">
            Deputy HoD Student Affairs, CSE Hons
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default LeadershipSection;
