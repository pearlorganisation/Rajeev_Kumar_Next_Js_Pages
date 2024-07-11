"use client";import PostPage from "@/pages/blog/[slug]";
import React from "react";
import { useForm } from "react-hook-form";

export default function Features() {
  const { handleSubmit, register } = useForm();

  function onSubmit(data) {
    console.log(data);
  }

  const featuresData = [
    {
      cardColor: "#F2F1FE",
      title: "Video Lecture",
      img: "imgTemp.svg",
      body: "Experience the future of learning with Thought Glow's dynamic video lectures. Our meticulously crafted video content transcends traditional boundaries, offering you unparalleled flexibility to learn from anywhere.",
    },
    {
      cardColor: "red",
      title: "Flexible Classes",
      img: "imgTemp.svg",
      body: "We offer a class structure designed to fit seamlessly into your life. Whether you're juggling work commitments, family responsibilities, or other obligations, our class timing and pace options ensure that you can pursue your educational goals without compromise.",
    },
    {
      cardColor: "red",
      title: "Affordable Pricing",
      img: "imgTemp.svg",
      body: "At Thought Glow, we believe that quality education should be accessible to everyone. That's why we've made it our mission to offer affordable pricing options that fit every budget.",
    },
    {
      cardColor: "red",
      title: "Expert Trainers",
      img: "imgTemp.svg",
      body: "You'll be guided by an instructor with extensive experience at renowned companies such as Microsoft, Amazon, and numerous startups across India and the USA.",
    },
  ];

  return (
    <>
      <div className=" p-4 md:p-12 grid  md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
        
        {featuresData.map((el, index) => (
          <div
            key={index}
            className="border-b-[0.3rem] rounded-t-xl rounded-b-2xl hover:border-red-500 border-blue-700 p-12 bg-[#F2F1FE]"
          >
            <div className="flex justify-center items-center rounded-full">
              <div className="flex justify-center p-4 bg-[#E3E1FD]  rounded-full">
                <img src={el.img} className="h-14 w-14" alt={el.title} />
              </div>
            </div>
            <div className="flex justify-between gap-5 flex-col py-4">
              <h1 className="text-center text-xl font-bold">{el.title}</h1>
              <p className="lg:text-center font-normal text-md">{el.body}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-[auto_auto] gap-5  p-2 md:p-10">
        <div>
          <div className="p-4 md:p-10  flex flex-col gap-4">
            <p className="text-red-600 font-bold">ENQUIRY NOW</p>

            <div className="flex flex-col gap-4">
              <p className="md:text-4xl font-bold">
                Want to stay informed about us?
              </p>
              <p className="text-sm">
                Don&apos; hesitate to contact us via email or WhatsApp.
                We&apos;re here to assist you and address any questions you may
                have with pleasure.
              </p>
              <p className="md:text-xl">WhatsApp on</p>
              <p className="md:text-xl">+91 7494984047</p>
            </div>
          </div>
        </div>

        <div className="px-2">
          <div
            className=" rounded-lg px-4  md:px-6 space-y-6 justify-center py-6"
            style={{
              boxShadow:
                "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
            }}
          >
            <p className='font-bold py-1 text-xl border-b-[0.1rem] before:content-[""] relative before:absolute before:bottom-0 before:border-b-indigo-500 before:border-b-2  before:w-12 '>
              Get in Touch With us!
            </p>

            <div>
              <div className=" mx-auto  text-gray-600">
                <div className="  mx-auto">
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col gap-2"
                  >
                    <div className="flex flex-col items-center gap-y-5 gap-x-6 [&>*]:w-full sm:flex-row">
                      <div>
                        <label className="font-medium">
                          Name <sup className="text-red-500">*</sup>
                        </label>
                        <input
                          type="text"
                          required
                          {...register("name")}
                          placeholder="Name"
                          className="w-full focus:ring-4 ring-indigo-400/30 mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                        />
                      </div>
                      <div>
                        <label className="font-medium">
                          Email <sup className="text-red-500">*</sup>
                        </label>
                        <input
                          type="email"
                          required
                          {...register("email")}
                          placeholder="Email"
                          className="w-full focus:ring-4 ring-indigo-400/30 mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col items-center gap-y-5 gap-x-6 [&>*]:w-full sm:flex-row">
                      <div>
                        <label className="font-medium">
                          Phone <sup className="text-red-500">*</sup>
                        </label>
                        <input
                          type="text"
                          required
                          {...register("phone")}
                          placeholder="Phone"
                          className="w-full focus:ring-4 ring-indigo-400/30 mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                        />
                      </div>
                      <div>
                        <label className="font-medium">
                          Enquiry <sup className="text-red-500">*</sup>
                        </label>
                        <input
                          type="text"
                          required
                          {...register("enquiry")}
                          placeholder="Enquiry"
                          className="w-full focus:ring-4 ring-indigo-400/30 mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="font-medium">Message</label>
                      <textarea
                        required
                        {...register("message")}
                        className="w-full mt-2  px-3 py-2 h-28 resize-none appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                      ></textarea>
                    </div>
                    <button className=" px-6 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
