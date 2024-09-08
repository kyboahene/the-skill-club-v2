import React from "react";
import { Metadata } from "next";

import ContactPageTemplate from "@/modules/contact";

export const metadata: Metadata = {
  title: "Contact Us",
};

const ContactUs = () => {
  return <ContactPageTemplate />;
};

export default ContactUs;
