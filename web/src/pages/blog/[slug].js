import filterFiles from "@/util/filterFiles";
import fs from "fs";
import path from "path";

export default function PostPage() {
  return <div>Posts</div>;
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("blogs"));
  const paths = filterFiles(files, "md");
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps() {
  return {
    props: {},
  };
}
