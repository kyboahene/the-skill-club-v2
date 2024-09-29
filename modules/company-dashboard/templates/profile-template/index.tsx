import React from "react";

// components
import CompanyProfileForm from "../../components/profile-form";

const CompanyProfilePageTemplate = () => {
  return (
    <section className="flex justify-center mt-16 w-full">
      <div className="flex flex-col gap-8 text-sm w-full">
        <h1 className="header-font font-bold text-2xl">Profile</h1>
        <CompanyProfileForm />
      </div>
    </section>
  );
};

export default CompanyProfilePageTemplate;
