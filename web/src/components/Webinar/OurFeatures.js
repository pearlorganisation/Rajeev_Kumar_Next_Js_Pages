import Image from "next/image";
import React from "react";

const OurFeatures = () => {
  return (
    <div className="grid lg:grid-cols-3 gap-4 lg:gap-6 grid-rows-2 container mx-auto py-8">
      <div className="md:col-span-2 lg:col-span-1 lg:row-span-2 flex flex-col justify-center items-center lg:items-start">
        <span className="font-bold text-3xl">Our Features</span>
        <p className="text-center lg:text-left">
          Thought Glow&apos;s DS Algo with Python course offers unparalleled
          expertise from industry professionals, providing comprehensive
          training in Python, Data Structure, Algorithm from beginner to
          advanced levels. With Thought Glow, students not only gain mastery in
          Python but also access a supportive learning environment designed to
          accelerate their career growth in the dynamic field of technology.
        </p>
      </div>
      <div className="flex justify-start items-center gap-2 shadow-lg px-6 py-8">
        <Image src="/ExperienceT.svg" alt="img" width={60} height={60} />
        <div>
          <span className="font-semibold text-lg">Experience Trainer</span>
          <p>
            You&apos;ll be trained by an instructor with close to two decades of
            engineering experience in renowned companies.
          </p>
        </div>
      </div>
      <div className="flex justify-start items-center gap-2 shadow-lg px-6 py-8">
        <Image src="/IndustryR.svg" alt="img" width={60} height={60} />
        <div>
          <span className="font-semibold text-lg">
            Industry Relevant Curriculum
          </span>
          <p>
            Our course features an industry-relevant curriculum designed to
            equip learners with the skills and knowledge needed to excel in
            today&apos;s competitive tech landscape.
          </p>
        </div>
      </div>
      <div className="flex justify-start items-center gap-2 shadow-lg px-6 py-8">
        <Image src="/VibrantC.svg" alt="img" width={60} height={60} />
        <div>
          <span className="font-semibold text-lg">Vibrant Community</span>
          <p>
            Joining Thought Glow&apos;s learner community provides access to a
            network of peers, mentors, and industry experts, fostering
            collaboration, networking, and ongoing support throughout the
            learning journey.
          </p>
        </div>
      </div>
      <div className="flex justify-start items-center gap-2 shadow-lg px-6 py-8">
        <Image src="/Networking.svg" alt="img" width={60} height={60} />
        <div>
          <span className="font-semibold text-lg">Networking</span>
          <p>
            Thought Glow&apos;s learner community offers valuable networking
            opportunities, allowing members to connect with peers, industry
            professionals, and experts and engage in discussions, share
            insights, and forge meaningful connections that can propel your
            career forward in the tech industry.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurFeatures;
