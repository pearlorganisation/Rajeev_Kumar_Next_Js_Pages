import mkLink from "@/util/mklink";
import React from "react";
import { IoLocation } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="grid md:grid-cols-3 bg-[#f7f6fe]   items-center justify-between   p-5 ">
      <div className="flex flex-col gap-4   justify-center  ">
        <h1 className="text-2xl font-bold ">Contact Us</h1>
        <div className=" p-4 flex gap-5 flex-col">
          <div className="flex gap-2">
            <IoLocation /> <p>HSR Layout,Bangalore, India</p>{" "}
          </div>
          <div className="flex gap-2">
            <FaWhatsapp /> <p>+91 7494984047</p>
          </div>
          <div className="flex gap-2">
            <MdEmail /> <p>info@thoughtglow.com</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 justify-center items-baseline">
        <h1 className="text-2xl font-bold">Quick Links</h1>
        <div className="p-2 flex gap-3 flex-col">
          <p>Home</p>
          <p>Blog</p>
          <p>About Us</p>
          <p>Webinar</p>
        </div>
      </div>

      <div className="flex flex-col  gap-4 justify-end items-baseline">
        <h1 className="text-2xl font-bold">Information</h1>
        <div className="p-2 flex gap-3 flex-col">
          <p>Contact Us</p>
          <p>FAQ&apos;s</p>
          <p>Privacy Policy</p>
          <p>Terms and Conditions</p>
        </div>
      </div>
    </footer>
  );
}
