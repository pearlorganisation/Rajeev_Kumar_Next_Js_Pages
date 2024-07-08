import AboutWebinar from "@/components/Webinar/AboutWebinar";
import HeroSection from "@/components/Webinar/HeroSection";
import OurFeatures from "@/components/Webinar/OurFeatures";
import WhatYour from "@/components/Webinar/WhatYour";
import React from "react";

const webinar = () => {
  return (
    <div>
      <HeroSection />
      <AboutWebinar />
      <WhatYour />
      <OurFeatures />
    </div>
  );
};

export default webinar;
