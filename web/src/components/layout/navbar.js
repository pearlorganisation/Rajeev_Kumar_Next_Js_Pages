"use client";
import Link from "next/link";
import { useState } from "react";
import { IoMdMail } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Navbar() {
  const [state, setState] = useState(false);

  const navigation = [
    { title: "Home", path: "/" },
    { title: "About Us", path: "about_us" },
    { title: "Webinar", path: "webinar" },
    { title: "Blog", path: "#" },
    { title: "Contact Us", path: "contact_us" },
  ];
  return (
    <nav>
      <div className="bg-[#4F5DF5] w-full py-2">
        <div className="container mx-auto flex justify-between items-center text-white">
          <div className="flex justify-start items-center gap-1 text-base">
            {" "}
            <IoMdMail />
            info@thoughtglow.com
          </div>
          <div className="flex justify-start items-center gap-5">
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
            <FaLinkedin />
          </div>
        </div>
      </div>
      <nav
        style={{
          boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px",
        }}
        className="bg-white border-b w-full md:static md:text-sm "
      >
        <div className="items-center px-4 max-w-screen-2xl mx-auto md:flex md:px-8">
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Link href="/">
              <img
                src="https://www.thoughtglow.com/wp-content/uploads/2024/06/thoughtglow-full.png"
                width={100}
                height={50}
                alt="Float UI logo"
              />
            </Link>
            <div className="md:hidden">
              <button
                className="text-gray-500 hover:text-gray-800"
                onClick={() => setState(!state)}
              >
                {state ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
          <div
            className={`flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              state ? "block" : "hidden"
            }`}
          >
            <ul className="justify-end items-center font-medium space-y-6 md:flex md:space-x-12 md:space-y-0">
              {navigation.map((item, idx) => {
                return (
                  <li
                    key={idx}
                    className="text-gray-700 text-md font-bold hover:text-indigo-600"
                  >
                    <Link href={"/" + item.path} className="block">
                      {item.title}
                    </Link>
                  </li>
                );
              })}
              <div className="space-y-3 items-center gap-x-6 md:flex md:space-y-0">
                <li>
                  <Link
                    href="https://learn.thoughtglow.com/login/index.php"
                    className="block py-3 px-4 font-medium text-center text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 active:shadow-none rounded-md shadow md:inline"
                  >
                    My Account
                  </Link>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </nav>
  );
}
