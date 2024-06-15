import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Fonter from "@/components/About/Fonter";
import Team from "@/components/About/Team";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page ",
  description: "This is About Page",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Page"
        subHead=''
        description="Empowering through personalized financial guidance, Alpha Stoic Finserve fosters security and prosperity in India's evolving financial landscape."
      />
      <hr />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Fonter />
      <Team />
    </>
  );
};

export default AboutPage;
