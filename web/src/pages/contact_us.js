"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { IoLocationSharp } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";

export default function Page() {
  const { handleSubmit, register } = useForm();

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <div className=" container  mx-auto md:py-10">
      <h2 className="text-4xl font-semibold text-center py-4    ">
        Contact Us
      </h2>

      <section className="grid lg:grid-cols-2 gap-2">
        <div className="flex flex-col   ">
          <div className="px-4">
            <h1 className='  font-bold py-1 text-xl border-b-[0.1rem] before:content-[""] relative before:absolute before:bottom-0 before:border-b-indigo-500 before:border-b-2  before:w-12 border-t-red-50 '>
              Contact Info
            </h1>
          </div>
          <div className="flex py-5 border-b-[0.1rem] border-slate-400 border-dashed mx-4 gap-2 items-center">
            <div className="flex  justify-center items-center border bg-[#DEDCFD] rounded-full w-12 h-12">
              <IoLocationSharp size={26} />
            </div>
            <div className="flex  flex-col gap-2">
              <p className="font-bold">Address</p>
              <p>HSR Layout, Bangalore, India</p>
            </div>
          </div>

          <div className="flex py-5 mx-4 border-b-[0.1rem] border-slate-400 border-dashed gap-2 items-center">
            <div className="flex justify-center items-center border bg-[#DEDCFD] rounded-full w-12 h-12">
              <FaWhatsapp size={22} />
            </div>
            <div className="flex flex-col">
              <p className="font-bold">Whatsapp</p>
              <p>HSR Layout, Bangalore, India</p>
            </div>
          </div>

          <div className="flex py-5 gap-2 mx-4 items-center ">
            <div className="flex  justify-center items-center border  bg-[#DEDCFD] rounded-full w-12 h-12">
              <MdOutlineEmail size={22} />
            </div>
            <div className="flex flex-col">
              <p className="font-bold">Email</p>
              <p>info@thoughtglow.com</p>
            </div>
          </div>
        </div>

        <div className="px-4">
          <div
            className=" rounded-lg px-6 space-y-6 justify-center py-6"
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
                    className="flex flex-col gap-2 "
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
                          Subject <sup className="text-red-500">*</sup>
                        </label>
                        <input
                          type="text"
                          required
                          {...register("subject")}
                          placeholder="Subject"
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
                    <button className=" px-4 py-2 focus:ring-4 ring-indigo-400/30 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
