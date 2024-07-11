import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { FaCircleCheck } from "react-icons/fa6";

const KnowAbout = () => {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto p-8">
        <div className=" rounded-lg flex flex-col lg:flex-row items-center p-6 space-y-6 lg:space-y-0 lg:space-x-6">
          <div className="flex-1">
            <img
              src="/KnowAbout.webp"
              alt="Illustration"
              className="w-full lg:w-3/4 mx-auto"
            />
          </div>
          <div className="flex-1">
            <h1 className="font-medium text-xl text-indigo-500 flex ">
              {" "}
              <div className="flex   text-red-600 justify-start items-center">
                <FaAngleRight />
                <FaAngleRight />
                <FaAngleRight />
              </div>{" "}
              KNOW ABOUT US
            </h1>
            <h2 className="text-2xl font-bold mb-4">
              Know About Thought Glow Learning Platform
            </h2>
            <p className="text-gray-700 mb-4">
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
            <ul className="space-y-2 grid grid-cols-2">
              <li className="flex items-center text-sm">
                <span className="text-red-500">
                  <FaCircleCheck />
                </span>{" "}
                <span className="ml-2">Online Courses</span>
              </li>
              <li className="flex items-center text-sm">
                <span className="text-red-500">
                  <FaCircleCheck />
                </span>{" "}
                <span className="ml-2">Focus on core concepts</span>
              </li>
              <li className="flex items-center text-sm">
                <span className="text-red-500">
                  <FaCircleCheck />
                </span>{" "}
                <span className="ml-2">Expert Instructor</span>
              </li>
              <li className="flex items-center text-sm">
                <span className="text-red-500">
                  <FaCircleCheck />
                </span>{" "}
                <span className="ml-2">
                  Courses offered: Python, Data Structure & Algo
                </span>
              </li>
            </ul>
            <a
              href="#"
              className="mt-4 inline-block bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600"
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
