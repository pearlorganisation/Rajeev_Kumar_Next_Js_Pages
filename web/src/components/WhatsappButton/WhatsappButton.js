"use client";
import Link from "next/link";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsappButton = () => {
  return (
    <div>
      <button>Click me</button>
      <Link
        href="https://web.whatsapp.com/send?phone=+91 7494984047&text=Hi, I had some queries."
        target="_blank"
        s
      >
        <div className=" fixed cursor-pointer right-4 bottom-4 size-12 rounded-full grid place-items-center bg-[#53EC66] text-white">
          <FaWhatsapp size={30} />
        </div>
      </Link>
    </div>
  );
};

export default WhatsappButton;
