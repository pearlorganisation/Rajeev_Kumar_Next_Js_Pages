import Head from "next/head"

export default function PlainLayout({ children }) {
    return (
        <div className="w-full min-h-screen global-layout font-Graphik">
            <Head>
                <title>Thought Glow</title>
                <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
            </Head>
            <div>{children}</div>
        </div>
    )
}