import React from "react";

const WhatYour = () => {
  const data = [
    {
      title: "Path to successful programming career",
      desc: "Explore how to get into a successful programming career. Understand what top companies are expecting from programmers and how to prepare for that.",
    },
    {
      title: `Recognizing Python's Significance`,
      desc: `Python opens doors to endless opportunities in the world of technology, as it is widely used across various industries for tasks ranging from web development, test automation, dev ops to data analysis and artificial intelligence.`,
    },
    {
      title: `Thought Glow Methodology`,
      desc: `Explore how Thought Glow's teaching methodology emphasizes hands-on learning and practical application, ensuring learners develop a deep understanding of concepts through real-world projects and exercises.`,
    },
  ];
  return (
    <div className="container mx-auto py-5 space-y-10 min-h-[50vh]">
      <h1 className="font-semibold text-4xl text-center">
        What You&apos; ll Learn
      </h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {data.map((item, idx) => {
          return (
            <div className="" key={idx}>
              <div className=" mx-auto ">
                <div className="bg-white shadow-lg rounded-lg p-6 relative min-h-[16rem]">
                  <h2 className="text-lg font-bold mb-2">{item?.title}</h2>
                  <p className="text-gray-700 mb-4 text-sm">{item?.desc}</p>
                  <div className="absolute bottom-0 right-0 bg-red-500 text-white w-10 h-10 flex items-center justify-center rounded-tl-full">
                    {idx + 1}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="grid place-items-center">
        <button
          className="bg-slate-600 text-white px-6 py-3 rounded-3xl"
          type="button"
        >
          Book Your Spot @ Rs.9
        </button>
      </div>
    </div>
  );
};

export default WhatYour;
