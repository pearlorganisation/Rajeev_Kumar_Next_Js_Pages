import WhatsappButton from "../WhatsappButton/WhatsappButton";
import BaseLayout from "./base";

export default function PageLayout({ children }) {
  return (
    <BaseLayout>
      <div style={{ scrollBehavior: "smooth" }} className="global-container">
        <div>{children}</div>
      </div>
      <WhatsappButton />
    </BaseLayout>
  );
}
