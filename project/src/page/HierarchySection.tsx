const HierarchySection = () => (
  <div className="relative mb-20 animate-slide-up px-4 md:px-16">
    {/* Gradient BG Blur */}
    <div className="absolute inset-0 bg-gradient-to-br from-[#1B263B]/20 to-[#0D1B2A]/20 rounded-3xl blur-2xl z-0" />

    <div className="relative z-10 bg-[#1B263B]/80 backdrop-blur-2xl rounded-3xl shadow-2xl p-10 md:p-16 border border-[#B3AF8F]/30">
      <h2 className="text-4xl font-bold bg-gradient-to-r from-[#E0E1DD] to-[#B3AF8F] bg-clip-text text-transparent mb-12 text-center">
        Hierarchy Structure
      </h2>

      <div className="space-y-10 flex flex-col items-center">
        {/* HOD */}
        <div className="bg-gradient-to-r from-[#0D1B2A] to-[#1B263B] text-[#E0E1DD] px-10 py-4 rounded-2xl shadow-lg font-semibold text-lg w-fit hover:scale-105 transition-transform">
          CSE HOD
        </div>

        {/* Line */}
        <div className="w-1 h-8 bg-[#415A77] rounded-full" />

        {/* Deputy HOD */}
        <div className="bg-gradient-to-r from-[#1B263B] to-[#415A77] text-[#E0E1DD] px-10 py-4 rounded-2xl shadow-lg font-semibold text-lg w-fit hover:scale-105 transition-transform">
          Deputy HoD Student Affairs
        </div>

        {/* Line */}
        <div className="w-1 h-8 bg-[#B3AF8F] rounded-full" />

        {/* FOCUS */}
        <div className="bg-gradient-to-r from-[#415A77] to-[#B3AF8F] text-[#0D1B2A] px-10 py-4 rounded-2xl shadow-lg font-semibold text-lg w-fit hover:scale-105 transition-transform">
          FOCUS Student Governance Body
        </div>

        {/* Line */}
        <div className="w-1 h-8 bg-[#0D1B2A] rounded-full" />

        {/* Roles Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center w-full max-w-4xl">
          {['Secretary', 'President', 'Treasurer', 'Leads'].map((role, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-[#0D1B2A] to-[#415A77] text-[#E0E1DD] px-6 py-4 rounded-xl shadow-md font-medium hover:shadow-lg transition duration-300"
            >
              {role}
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default HierarchySection;
