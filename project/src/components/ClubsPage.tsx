import React from "react";
import ClubTitle from "../page/ClubTitle";
import StatsSection from "../page/StatsSection";
import ClubCard from "../page/ClubCard";
import CallToAction from "../page/CallToAction";

const ClubsPage: React.FC = () => {
  return (
    <main>
      <ClubTitle />
      <StatsSection />
      <ClubCard />
      <CallToAction />
      

    </main>
  );
};

export default ClubsPage;
