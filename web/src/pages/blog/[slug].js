import filterFiles from "@/util/filterFiles";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import Link from "next/link";
import { remark } from "remark";
import html from "remark-html";
import Head from "next/head";

export default function PostPage({
  frontmatter: { title, date, type, cover_image },
  slug,
  content,
  posts,
}) {
  const htmlContent = marked(content);

  const allBlogPaths = posts;
  const currentIndex = allBlogPaths.findIndex((path) => path.slug === slug);

  console.log("algoPath", allBlogPaths);

  // // Determine previous and next slugs
  const previousSlug =
    currentIndex >= 1 ? allBlogPaths[currentIndex - 1]?.slug : null;
  const nextSlug =
    currentIndex < allBlogPaths.length - 1
      ? allBlogPaths[currentIndex + 1]?.slug
      : null;
  console.log(previousSlug, "prevSlug");
  console.log(nextSlug, "nextSlug");
  return (
    <div className="grid md:grid-cols-[auto_25rem] p-10 container mx-auto">
      <Head>
      <title>{slug}</title>
    </Head>
      <div className="card card-page ">
        <div>
          <img src={cover_image} className="w-full min-h-[50vh]" alt={title} />
        </div>
        <h1 className="text-sm font-semibold text-gray-500 py-2">{type}</h1>
        <h1 className="text-4xl font-bold py-4">{title}</h1>
        <i className="py-6">{date}</i>
        <div
          className="post-body prose"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        ></div>

        <div className="flex justify-between mt-6">
          {previousSlug && (
            <Link href={`/blog/${previousSlug}`} passHref>
              <div className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                <FaAngleLeft className="inline-block mr-2" /> Previous
              </div>
            </Link>
          )}
          {nextSlug && (
            <Link href={`/blog/${nextSlug}`} passHref>
              <div className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                Next <FaAngleRight className="inline-block ml-2" />
              </div>
            </Link>
          )}
        </div>
      </div>
      <div className="px-6">
        <div className="border rounded-lg w-full px-4  ">
          <p className='font-bold py-1 text-xl border-b-[0.1rem] before:content-[""] relative before:absolute before:bottom-0 before:border-b-indigo-500 before:border-b-2  before:w-12  '>
            Latest Blog
          </p>

          <div>
            {allBlogPaths.map((el, index) => {
              return (
                <Link key={index} href={el?.slug}>
                  <p className="text-md hover:text-blue-600  py-3">
                    {el.frontmatter.title}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      <div>
        <div>
          <h1 className="text-2xl font-bold  py-4 border-b-2 border-black">
            Related Blog
          </h1>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 py-3 ">
            {allBlogPaths.filter((el)=>el.slug !== slug).map((el, index) => {
              return (
                <Link href={el?.slug} key={index}>
                  <div className=" relative h-[15rem]">
                    <h1 className="absolute bottom-0 bg-indigo-500 m-2 text-sm rounded-md text-white font-bold px-4 py-2 text-center">
                      {el.frontmatter.title}
                    </h1>

                    <img
                      className="w-full h-full "
                      alt="img"
                      src={el.frontmatter.cover_image}
                    />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("blogs"));
  const paths = filterFiles(files, "mdx");

  console.log(paths, "shashank");

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const markdownWithMeta = fs.readFileSync(
    path.join("blogs", params.slug + ".mdx"),
    "utf-8"
  );

  const files = fs.readdirSync(path.join("blogs"));

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

  const slug = params.slug;

  const { data: frontmatter, content } = matter(markdownWithMeta);

  console.log(content, "parsed to html");
  return {
    props: {
      frontmatter,
      slug,
      content,
      posts,
    },
  };
}
