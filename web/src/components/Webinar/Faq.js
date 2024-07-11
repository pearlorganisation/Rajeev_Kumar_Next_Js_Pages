"use client";
import { useRef, useState } from "react";

const FaqsCard = (props) => {
  const { setFlag, flag, index } = props;
  const answerElRef = useRef();
  const [state, setState] = useState(true);
  const [answerH, setAnswerH] = useState("0px");
  const { faqsList, idx } = props;

  const handleOpenAnswer = () => {
    const answerElH = answerElRef.current.childNodes[0].offsetHeight;
    // setState(!state);
    setAnswerH(`${answerElH + 20}px`);
  };

  return (
    <div
      className="space-y-3 mt-5 overflow-hidden border-1 rounded-md px-2  pt-2"
      style={{
        boxShadow:
          "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
      }}
      key={idx}
      onClick={() => {
        setFlag((prev) => {
          console.log(prev === index);
          if (prev === index) return null;
          return index;
        });
        handleOpenAnswer();

        // setState((prevState) => !prevState);
      }}
    >
      <h4 className="cursor-pointer mx-2  flex items-center justify-between text-sm md:text-lg font-semibold text-gray-700 ">
        Q {faqsList.q}
        {flag === index ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-500 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M20 12H4"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-500 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
        )}
      </h4>
      <div
        ref={answerElRef}
        className="duration-300 "
        style={flag === index ? { height: answerH } : { height: "0px" }}
      >
        <div className="flex flex-col gap-4 py-4 px-6 border-t-2">
          <div className="w-full"></div>
          <p className="text-gray-500    text-sm">{faqsList.a}</p>
        </div>
      </div>
    </div>
  );
};

export default function Faq() {
  const [flag, setFlag] = useState(null);
  const faqsList = [
    {
      q: "What is the webinar and what is the course",
      a: "The webinar is a 2-hour online information session that guides you on starting a successful software engineering career at top companies like Microsoft and other leading firms in India. Our course, spanning 2 months, teaches you the essential skills needed to secure a position in these prestigious organizations.",
    },
    {
      q: "How do i enroll into the course?",
      a: "We enroll students in the course after they attend the webinar. In the webinar we discuss the details of enrollment and fees",
    },
    {
      q: "What prerequisites do i need for the course?",
      a: "No prior programming experience is required. Our course is designed to accommodate learners of all levels, from beginners to experienced programmers.",
    },
    {
      q: "Will I receive a certificate upon completion of the course?",
      a: "Yes, learners who successfully complete the course requirements will receive a certificate of completion from Thought Glow.",
    },
    {
      q: "Can I access course material after completing the course?",
      a: "Yes, students have access to course materials, including lecture recordings, slides, and supplementary resources, even after completing the course.",
    },
    {
      q: "Who can join the course?",
      a: "Individuals seeking to embark on a programming career or enhance their current roles as programmers can enroll in this course, whether they are students or professionals.",
    },
  ];

  return (
    <section className="leading-relaxed  max-w-screen-4xl mt-12 mx-auto px-4 md:px-8 py-6">
      <div className="space-y-3 text-center ">
        <h1 className="text-3xl text-gray-800 font-bold">FAQs</h1>
      </div>

      <div className="conatiner mx-auto grid md:grid-cols-2 py-6 ">
        <div className="grid place-items-center h-[30rem]">
          <img src="faq.svg" alt="img" className="" />
        </div>
        <div className="mt-14 max-w-4xl mx-auto ">
          {faqsList.map((item, idx) => (
            <FaqsCard
              key={idx}
              faqsList={item}
              setFlag={setFlag}
              flag={flag}
              index={idx}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
