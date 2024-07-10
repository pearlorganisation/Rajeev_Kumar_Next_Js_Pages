// "use client";
import Link from "next/link";
import React from "react";
import { FaCircleCheck } from "react-icons/fa6";
import ReactPlayer from "react-player";

export default function HeroSection() {
  return (
    <div className="bg-pink-100">
      <div className="container mx-auto p-8">
        <div className="min-h-[80vh] rounded-lg flex flex-col gap-y-6 lg:gap-y-0 lg:flex-row items-center p-6 space-y-6 lg:space-y-0 lg:space-x-6">
          <div className="flex-1 space-y-8 order-2 lg:order-none">
            <h2 className="text-xl font-bold text-gray-600 mb-2">
              Date: 7 July 2024, 11 AM
            </h2>
            <h1 className="text-5xl font-bold mb-4">
              Launch Your Programming Career
            </h1>
            <p className="text-gray-700 mb-4">
              Join our live session to explore how to start a programming career
              and how Thought Glow&apos;s expert-led courses can set you on the
              path to success.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center text-base">
                <span className="text-indigo-500">
                  <FaCircleCheck size={22} />
                </span>{" "}
                <span className="ml-2">
                  Learn from an instructor with prior engineering roles at
                  Microsoft, Amazon and startups in India and USA.
                </span>
              </li>
              <li className="flex items-center text-base">
                <span className="text-indigo-500">
                  <FaCircleCheck size={22} />
                </span>{" "}
                <span className="ml-2">
                  Discover the path to elevate your programming career to new
                  heights.
                </span>
              </li>
              <li className="flex items-center text-base">
                <span className="text-indigo-500">
                  <FaCircleCheck size={22} />
                </span>{" "}
                <span className="ml-2">
                  Learn a step-by-step guide to land into a programming job.
                </span>
              </li>
              <li className="flex items-center text-base">
                <span className="text-indigo-500">
                  <FaCircleCheck size={22} />
                </span>{" "}
                <span className="ml-2">Limited seats for each session</span>
              </li>
            </ul>
            <Link
              href="#"
              className="mt-4 inline-block bg-indigo-500 text-white py-2 px-4 rounded-3xl hover:bg-indigo-600"
            >
              Book Your Spot @ ₹9
            </Link>
          </div>
          <div className="flex-1 ">
            <div className="w-full  flex items-center justify-center">
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=Zd7sW20f020`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
