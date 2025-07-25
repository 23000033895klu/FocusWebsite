import React, { useState } from "react";
import { ArrowRight, X } from "lucide-react";
import logo from "../images/focusLogo.png"; // Make sure logo path is correct

const HeroSection: React.FC = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  return (
    <div className="min-h-screen">
      {/* Popup Modal */}
      {isPopupOpen && (
        <div className="fixed inset-0 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        style={{
    backgroundImage: "url('/images/KL-University.jpeg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
        >
          <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
            <div className="flex justify-between items-center p-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-800">
                Get Started with FOCUS
              </h2>
              <button
                onClick={closePopup}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="h-6 w-6 text-gray-600" />
              </button>
            </div>
            <div className="p-6 flex flex-col items-center">
              <a
                href="https://forms.office.com/r/9CzsGsxqwx?origin=lprLink"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-yellow-500 to-amber-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-yellow-600 hover:to-amber-700 transition-all duration-300 shadow-xl"
              >
                Open Registration Form
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-20 bg-gray-100">
        <div
          className="relative bg-cover bg-center bg-no-repeat rounded-2xl shadow-2xl p-6 sm:p-8 w-full max-w-4xl h-[500px] sm:h-[600px] flex flex-col items-center justify-center text-center overflow-hidden"
          style={{ backgroundImage: "url('/images/KL-University.jpeg')" }} // Put this image in public/images/
        >
          <div className="absolute inset-0 bg-black/50 rounded-2xl"></div>

          <div className="relative z-10 px-4 sm:px-6">
            <img
              src={logo}
              alt="Focus Logo"
              className="w-40 sm:w-60 md:w-72 h-auto object-contain mx-auto mb-4"
            />

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
              Welcome To FOCUS
            </h1>

            <p className="text-base sm:text-lg md:text-xl mb-6 text-gray-100 leading-relaxed max-w-2xl mx-auto">
              FOCUS is a vibrant community that fosters innovation and
              excellence in the CSE Department.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={openPopup}
                className="group bg-gradient-to-r from-yellow-500 to-amber-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-yellow-600 hover:to-amber-700 transform hover:scale-105 transition-all duration-300 shadow-xl inline-flex items-center justify-center"
              >
                <span className="flex items-center">
                  Get Registration
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>

              <button className="group border-2 border-white/50 text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/10 hover:border-white/70 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;