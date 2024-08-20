import React from "react";
import Modes from "../components/modes";
import WhyJoin from "../components/why-join";
import HowToHire from "../components/how-to-hire";
import Footer from "@/modules/layout/templates/footer";
import Hero from "../components/hero";

const HomePageTemplate = () => {
  return (
    <>
      <Hero />
      <Modes />
      <WhyJoin />
      {/* <ForCompany />
      <ShowTalents /> */}
      <HowToHire />
      <Footer />
    </>
  );
};

export default HomePageTemplate;
