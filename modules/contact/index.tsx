"use client";

import React from "react";
import Lottie from "react-lottie";
import { useMediaQuery } from "react-responsive";

// lottie
import email from "@/lottie/email.json";

// utils
import { reactLottieConfig } from "@/lib/utils/react-lottie-config";

const ContactPageTemplate = () => {
  const isTabletAndIsMobile = useMediaQuery({ maxWidth: 991 });

  return (
    <section className="container mx-auto pt-[10em] pb-[13em] md:pb-[8em] px-[2em] md:px-[4em]">
      <div className="mt-[4.5rem] md:mt-0">
        <Lottie
          options={reactLottieConfig(email)}
          width={isTabletAndIsMobile ? 200 : 300}
          height={isTabletAndIsMobile ? 200 : 300}
        />
      </div>
      <h1 className="header-font font-bold text-4xl text-center">
        Get in touch
      </h1>
      <div className="text-center text-md mt-5">
        <p>
          Talk to us via{" "}
          <a
            href="tel:0544813264"
            target="_blank"
            rel="noreferrer"
            className=""
          >
            +233544813264
          </a>
          .
        </p>
        <p className="mt-3">
          Or send us a mail via{" "}
          <a
            href="mailto:support@theskill.club"
            target="_blank"
            rel="noreferrer"
            className="font-bold"
          >
            support@theskill.club
          </a>
        </p>
      </div>
    </section>
  );
};

export default ContactPageTemplate;
