import React from 'react';

const EventDetail = ({ icon, text }: { icon: React.ReactNode; text: string }) => (
  <div className="flex items-center text-[#1B263B] group-hover:text-[#0D1B2A] transition-colors">
    <div className="bg-[#B3AF8F] w-8 h-8 rounded-lg flex items-center justify-center mr-3">
      {React.cloneElement(icon as React.ReactElement, { className: 'h-4 w-4 text-white' })}
    </div>
    <span className="font-medium">{text}</span>
  </div>
);

export default EventDetail;
