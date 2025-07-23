import React from 'react';
import HeaderSection from '../page/HeaderSection';
import YearlyEvents from '../page/YearlyEvents';
import CallToActionevent from '../page/CallToActionevent';

const eventsByYear = [
  {
    year: '2024–2025',
    events: [
      {
        name: 'Committee Meeting',
        date: 'March 15, 2025',
        location: 'CSE Department',
        attendees: '50+',
        description: 'Monthly committee meeting to discuss upcoming initiatives and student feedback.',
        status: 'upcoming',
      },
    ],
  },
  {
    year: '2023–2024',
    events: [
      {
        name: 'Cloud Computing Workshop',
        date: 'February 10, 2024',
        location: 'Lab 301',
        attendees: '80+',
        description: 'Hands-on workshop on AWS cloud services and deployment strategies.',
        status: 'completed',
      },
      {
        name: 'Aptitude Training Session',
        date: 'January 20, 2024',
        location: 'Auditorium',
        attendees: '150+',
        description: 'Comprehensive aptitude training for placement preparation.',
        status: 'completed',
      },
      {
        name: 'Design Thinking Workshop',
        date: 'December 15, 2023',
        location: 'Innovation Lab',
        attendees: '60+',
        description: 'Interactive workshop on design thinking methodology and problem-solving.',
        status: 'completed',
      },
    ],
  },
  {
    year: '2022–2023',
    events: [
      {
        name: 'Resume Hacks',
        date: 'November 25, 2022',
        location: 'Seminar Hall',
        attendees: '120+',
        description: 'Expert guidance on crafting effective resumes for tech industry roles.',
        status: 'completed',
      },
      {
        name: 'UI/UX Workshop',
        date: 'October 18, 2022',
        location: 'Design Studio',
        attendees: '70+',
        description: 'Comprehensive workshop on user interface and experience design principles.',
        status: 'completed',
      },
      {
        name: 'Blockchain & Cloud Computing',
        date: 'September 30, 2022',
        location: 'Tech Hub',
        attendees: '100+',
        description: 'Technical session on blockchain technology and cloud computing integration.',
        status: 'completed',
      },
    ],
  },
  {
    year: '2021–2022',
    events: [
      {
        name: 'Panel Discussion on Future Tech',
        date: 'March 22, 2022',
        location: 'Virtual',
        attendees: '200+',
        description: 'Industry experts discuss emerging technologies and career opportunities.',
        status: 'completed',
      },
      {
        name: 'Cultural Festival',
        date: 'February 14, 2022',
        location: 'Campus Grounds',
        attendees: '500+',
        description: 'Annual cultural celebration with tech-themed competitions and performances.',
        status: 'completed',
      },
    ],
  },
];

const EventsPage: React.FC = () => {
  return (
      <div className=" px-4 sm:px-6 lg:px-8 py-12">
        <HeaderSection />
        <div className="space-y-20">
          {eventsByYear.map((yearData, index) => (
            <YearlyEvents key={index} yearData={yearData} delay={index * 200} />
          ))}
        </div>
        <CallToActionevent />
      </div>
  );
};

export default EventsPage;
