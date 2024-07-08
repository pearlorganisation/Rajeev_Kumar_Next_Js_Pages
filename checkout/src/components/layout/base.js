import Navbar from "./navbar"
import Footer from "./footer"
import Head from "next/head"
import popupManager from '../popup'

export default function BaseLayout({ children }) {
    return (
        <div className="w-full min-h-screen global-layout font-Graphik">
            <Head>
                <title>Thought Glow</title>
            </Head>
            <Navbar />
            <div>{children}</div>
            <Footer />
            {popupManager.popup}
        </div>
    )
}