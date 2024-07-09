
import Blog from "@/components/Blog/Blog";
import React from "react";

const page = () => {
  const blogData = [
    {
      img: "python-blog.png",
      title: "Mastering Python: A Step-by-Step Guide for Beginners",
      publishedDate: "April 19, 2024",
      body: "Python has emerged as one of the most popular programming languages in the world, known for its",
    },
    {
      img: "python-blog.png",
      title: "Mastering Python: A Step-by-Step Guide for Beginners",
      publishedDate: "April 19, 2024",
      body: "Python has emerged as one of the most popular programming languages in the world, known for its",
    },
    {
      img: "python-blog.png",
      title: "Mastering Python: A Step-by-Step Guide for Beginners",
      publishedDate: "April 19, 2024",
      body: "Python has emerged as one of the most popular programming languages in the world, known for its",
    },
  ];

  return (
    <div className="p-2">
      <div className="flex justify-center">
        <h1 className="text-4xl py-4  text-center font-semibold border-b-[0.2rem] border-gray-400">
          Blog
        </h1>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 p-10 justify-center items-center ">
        {blogData.map((el, idx) => {
          return (
            <div key={idx}>
              <Blog blogData={el} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default page;
