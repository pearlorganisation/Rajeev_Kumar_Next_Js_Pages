import AboutWebinar from "@/components/Webinar/AboutWebinar";
import Faq from "@/components/Webinar/Faq";
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
      <Faq/>
    </div>
  );
};

export default webinar;
