import Features from "@/components/HomePage/Features";
import HeroSection from "@/components/HomePage/HeroSection";
import KnowAbout from "@/components/HomePage/KnowAbout";
import matter from "gray-matter";
import fs from "fs";
import path from "path";
import Link from "next/link";
import Head from "next/head";

function Home({ blogs }) {
  return (
    <div className="relative">
      <Head>
        <title>Home</title>
      </Head>
      <HeroSection />
      <KnowAbout />
      <Features />
      
      <div className="flex justify-center ">

        <div className="flex flex-col justify-center items-center py-4">
<h4 className=" font-bold text-red-600">LATEST ARTICLES</h4>
        <h1 className="text-4xl py-4  text-center font-semibold ">
          Get News with Thought Glow 
        </h1> 
        </div>
        
      </div>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4 p-10 justify-center items-center ">
        {blogs.map((item, idx) => {
          return (
            <div
              key={idx}
              className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 min-h-[35rem]"
            >
              <Link href={`/blog/${item.slug}`}>
                <img
                  className=" rounded-t-lg w-full  h-[20rem] "
                  src={`${item.frontmatter.cover_image}`}
                  alt=""
                />
              </Link>
              <div className="p-5">
                <span classNameName="font-medium">{item.frontmatter.type}</span>

                <a href="#">
                  <h5 className="mb-2 text-xl line-clamp-2 font-bold tracking-tight text-gray-900 dark:text-white">
                    {item.frontmatter.title}
                  </h5>
                </a>
                <span classNameName="font-medium">{item.frontmatter.date}</span>

                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-2">
                  {item.frontmatter.excerpt}
                </p>
                <Link
                  href={`/blog/${item.slug}`}
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join("blogs"));
  // console.log(files, "files");
  // Get slug and frontmatter from posts
  const posts = files.map((filename) => {
    // Create slug
    const slug = filename.replace(".mdx", "");

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join("blogs", filename),
      "utf-8"
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      blogs: posts,
    },
  };
}

export default Home;
