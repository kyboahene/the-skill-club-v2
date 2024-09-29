"use client";

import React, { useState } from "react";
import { Pen, Trash } from "lucide-react";

// lib
import { Certificate } from "@/lib/types/misc";
import { CertificateModal } from "../modals/certificate";

type ResumeCertificateProps = {
  certificates?: Certificate[];
};

const ResumeCertificate = ({ certificates }: ResumeCertificateProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="bg-white p-6 rounded-[15px] mt-5">
      <h1 className="header-font font-bold text-md pb-2">
        Certificates & Awards
      </h1>
      <div>
        {certificates && certificates.length > 0
          ? certificates.map((cert, index) => (
              <div className="flex justify-between mb-5 text-sm" key={index}>
                <div>
                  <h3 className="font-bold">{cert.title}</h3>
                  <p>
                    <span className="text-sm pr-2">{cert.company}</span>
                    {(cert.month || cert.year) && "|"}
                    &nbsp;
                    <span className="text-sm pl-2">
                      {cert.month} {cert.year}
                    </span>
                  </p>
                </div>
                <div className="flex gap-3">
                  <p className="cursor-pointer">
                    <Pen />
                  </p>
                  <p className="cursor-pointer">
                    <Trash color="#ff0000" />
                  </p>
                </div>
              </div>
            ))
          : ""}
        <CertificateModal isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </section>
  );
};

export default ResumeCertificate;
