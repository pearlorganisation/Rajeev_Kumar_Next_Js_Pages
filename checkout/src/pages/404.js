import Head from "next/head"

export default function NotFound() {
  return <>
    <Head>
      <title>Not Found</title>
    </Head>
    <h1 className="lg:text-4xl text-2xl font-semibold text-center pb-2">404 Not Found</h1>
    <h2
        className="
          text-lkhAsh text-lg
          lg:text-xl
          font-Graphik
          text-center
          my-8
        "
      >
      <p>Page not found :(</p>
      <p>The requested page could not be found.</p>
      </h2>
  </>
}
