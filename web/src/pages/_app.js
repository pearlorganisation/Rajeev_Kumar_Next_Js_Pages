import PageLayout from "@/components/layout/page";
import WhatsappButton from "@/components/WhatsappButton/WhatsappButton";

import "@/styles/globals.css";
import "@/styles/styles.scss";

export default function App({ Component, pageProps }) {
  const Layout = Component.layout ? Component.layout : PageLayout;
  return (
    <Layout>
      <Component {...pageProps} />
      <WhatsappButton />
    </Layout>
  );
}
