import React from "react";
import { Calendar, MapPin, Users, Star, Trophy } from "lucide-react";
import EventDetail from "../page/EventDetail";

interface Event {
  name: string;
  date: string;
  location: string;
  attendees: string;
  description: string;
  status: "upcoming" | "completed";
}

interface YearlyEventsProps {
  yearData: {
    year: string;
    events: Event[];
  };
  delay: number;
}

const YearlyEvents: React.FC<YearlyEventsProps> = ({ yearData, delay }) => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div
      className="relative animate-slide-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-center mb-12">
        <div className="relative">
          <div className="bg-gradient-to-r from-[#415A77] to-[#1B263B] text-white px-8 py-4 rounded-xl shadow-md">
            <h2 className="text-3xl font-bold flex items-center">
              <Trophy className="mr-3 h-8 w-8" />
              {yearData.year}
            </h2>
          </div>
          <div className="absolute -top-2 -right-2">
            <Star className="h-6 w-6 text-[#B3AF8F] animate-pulse" />
          </div>
        </div>
        <div className="flex-1 h-1 bg-[#B3AF8F] ml-8 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {yearData.events.map((event, i) => (
          <div
            key={i}
            className="group animate-slide-up"
            style={{ animationDelay: `${delay + i * 100}ms` }}
          >
            <div className="relative bg-white/90 backdrop-blur-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-[#E0E1DD] hover:border-[#B3AF8F] hover:-translate-y-2 overflow-hidden">
              <div
                className={`h-1 ${
                  event.status === "upcoming"
                    ? "bg-gradient-to-r from-green-400 to-emerald-500"
                    : "bg-gradient-to-r from-[#415A77] to-[#1B263B]"
                }`}
              />
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-[#0D1B2A] group-hover:text-[#415A77] transition-colors">
                    {event.name}
                  </h3>
                  {event.status === "upcoming" && (
                    <div className="bg-[#B3AF8F]/20 text-[#415A77] px-3 py-1 rounded-full text-xs font-semibold">
                      Upcoming
                    </div>
                  )}
                </div>
                <p className="text-[#415A77] mb-6 leading-relaxed group-hover:text-[#1B263B] transition-colors">
                  {event.description}
                </p>
                <div className="space-y-3 text-sm">
                  <EventDetail icon={<Calendar />} text={event.date} />
                  <EventDetail icon={<MapPin />} text={event.location} />
                  <EventDetail
                    icon={<Users />}
                    text={`${event.attendees} attendees`}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default YearlyEvents;
