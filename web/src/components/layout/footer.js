import mkLink from "@/util/mklink";
import React from "react";
import { IoLocation } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#f7f6fe]">
      <div className="grid md:grid-cols-3    items-center justify-between   p-5 container mx-auto">
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
            <Link href="/">Home</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/about_us">About Us</Link>
            <Link href="/webinar">Webinar</Link>
            <Link href="/contact_us">Contact Us</Link>
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
      </div>
    </footer>
  );
}
