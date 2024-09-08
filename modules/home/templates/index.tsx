import React from "react";
import Hero from "../components/hero";
import Modes from "../components/modes";
import WhyJoin from "../components/why-join";
import HowToHire from "../components/how-to-hire";
import Footer from "@/modules/layout/templates/footer";
import ForCompanies from "../components/for-companies";

const HomePageTemplate = () => {
  return (
    <>
      <Hero />
      <Modes />
      <WhyJoin />
      <ForCompanies />
      {/* <ShowTalents />  */}
      <HowToHire />
      <Footer />
    </>
  );
};

export default HomePageTemplate;
