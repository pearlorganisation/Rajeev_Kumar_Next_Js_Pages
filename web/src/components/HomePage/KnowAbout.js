import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { FaCircleCheck } from "react-icons/fa6";

const KnowAbout = () => {
  return (
    <div class="bg-gray-100">
      <div class="container mx-auto p-8">
        <div class=" rounded-lg flex flex-col lg:flex-row items-center p-6 space-y-6 lg:space-y-0 lg:space-x-6">
          <div class="flex-1">
            <img
              src="/KnowAbout.webp"
              alt="Illustration"
              class="w-full lg:w-3/4 mx-auto"
            />
          </div>
          <div class="flex-1">
            <h1 className="font-medium text-xl text-indigo-500 flex ">
              {" "}
              <div className="flex justify-start items-center">
                <FaAngleRight />
                <FaAngleRight />
                <FaAngleRight />
              </div>{" "}
              KNOW ABOUT US
            </h1>
            <h2 class="text-2xl font-bold mb-4">
              Know About Thought Glow Learning Platform
            </h2>
            <p class="text-gray-700 mb-4">
              At Thought Glow, our mission is to illuminate the paths of
              aspiring individuals and seasoned professionals alike, empowering
              them with cutting-edge knowledge and practical skills in
              programming languages, data structures, and algorithms. Through
              our innovative online training platform, we strive to cultivate a
              community of lifelong learners dedicated to continuous growth and
              excellence in their careers. With a commitment to personalized
              guidance and top-tier resources, we aim to be the beacon guiding
              every individual towards their brightest future.
            </p>
            <ul class="space-y-2 grid grid-cols-2">
              <li class="flex items-center text-sm">
                <span class="text-red-500">
                  <FaCircleCheck />
                </span>{" "}
                <span class="ml-2">Online Courses</span>
              </li>
              <li class="flex items-center text-sm">
                <span class="text-red-500">
                  <FaCircleCheck />
                </span>{" "}
                <span class="ml-2">Focus on core concepts</span>
              </li>
              <li class="flex items-center text-sm">
                <span class="text-red-500">
                  <FaCircleCheck />
                </span>{" "}
                <span class="ml-2">Expert Instructor</span>
              </li>
              <li class="flex items-center text-sm">
                <span class="text-red-500">
                  <FaCircleCheck />
                </span>{" "}
                <span class="ml-2">
                  Courses offered: Python, Data Structure & Algo
                </span>
              </li>
            </ul>
            <a
              href="#"
              class="mt-4 inline-block bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600"
            >
              Read About Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KnowAbout;
