import React from "react";
import TanstackProviders from "./tanstack-provider";

type Props = {
  children: React.ReactNode;
};

const index = (props: Props) => {
  return <TanstackProviders>{props.children}</TanstackProviders>;
};

export default index;
