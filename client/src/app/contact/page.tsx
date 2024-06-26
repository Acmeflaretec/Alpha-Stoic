import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page ",
  description: "This is Contact Page ",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Page"
        subHead=''
        description="Connect with us for personalized financial guidance and inquiries. Reach out today for tailored wealth management solutions."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
