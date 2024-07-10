import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeroSection = () => {
  return (
    <div className="bg-[#F5F1EB]">
      <div className="flex flex-col lg:flex-row items-center justify-between px-4 lg:px-24 py-16 container mx-auto">
        <div className="max-w-xl">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Build The Skills To Elevate Your Programming Career
          </h1>
          <p className="text-gray-700 mb-8">
            With the surge of startups and unicorns, the demand for programmers
            in India is skyrocketing. Now is the perfect time to learn
            programming and launch your career, whether you&apos;re a student or
            already in the tech industry but not yet programming. Join our live
            session to discover how to embark on this exciting journey.
          </p>
          <Link
            href="#"
            className="inline-block bg-[#4F46E5] text-white px-6 py-3 rounded-md hover:bg-[#4F46E5]/70 transition"
          >
            Start Now
          </Link>
        </div>
        <div className="mt-8 lg:mt-0">
          <div className="flex items-center justify-center">
            <Image
              src="/HeroImage.webp"
              alt="HeroImage"
              width={600}
              height={600}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
