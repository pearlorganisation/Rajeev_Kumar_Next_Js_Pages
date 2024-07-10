import React from "react";

const AboutWebinar = () => {
  const data = [
    {
      title: "Format",
      description: "ONLINE",
    },
    {
      title: "Seats",
      description: "LIMITED SEATS",
    },
    {
      title: "Duration",
      description: "2 HOURS",
    },
    {
      title: "Timing",
      description: "11 AM IST",
    },
  ];

  return (
    <div className="container  mx-auto py-10 space-y-8">
      <div className="">
        <h1 className="text-center text-4xl font-medium">About Webinar</h1>
      </div>
      <div className=" mx-auto grid  sm:grid-cols-2 md:grid-cols-3  xl:grid-cols-4 gap-10   px-4">
        {data.map((el, i) => {
          return (
            <div class="relative w-full " key={i}>
              <div class="custom-card p-6 h-52 bg-red-50 rounded-t-lg shadow-md text-center">
                <div class="absolute inset-x-0 top-8 mx-auto w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-sm">
                  <span class="font-semibold">{el.title}</span>
                </div>
                <div class="mt-20 text-gray-700 font-medium pt-5">
                  {el.description}
                </div>
              </div>
              <div class="h-1 bg-red-500 w-full rounded-b-lg"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AboutWebinar;
