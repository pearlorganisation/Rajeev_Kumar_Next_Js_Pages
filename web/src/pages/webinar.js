import AboutWebinar from "@/components/Webinar/AboutWebinar";
import Faq from "@/components/Webinar/Faq";
import HeroSection from "@/components/Webinar/HeroSection";
import OurFeatures from "@/components/Webinar/OurFeatures";
import WhatYour from "@/components/Webinar/WhatYour";
import Head from "next/head";
import React from "react";

const webinar = () => {
  return (
    <div>
     
<Head >
      <title>Webinar</title>
    </Head>      
      <HeroSection />
      <AboutWebinar />
      <WhatYour />
      <OurFeatures />
      <Faq/>
    </div>
  );
};

export default webinar;
