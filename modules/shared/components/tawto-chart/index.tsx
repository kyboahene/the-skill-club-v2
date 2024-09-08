"use client";

import TawkTo from "tawkto-react";
import React, { useEffect } from "react";

const TawkToChart = () => {
  useEffect(() => {
    var tawk = new TawkTo(`${process.env.TAWK_TO_ID}`, "1galgpu56");

    tawk.onStatusChange((status: any) => {
      // console.log(status)
    });
  }, []);

  return <></>;
};

export default TawkToChart;
