"use client";

import React from "react";
import Lottie from "lottie-react";

type LottieAnimationProps = {
  animationData: any;
};

const LottieAnimation = ({ animationData }: LottieAnimationProps) => {
  return <Lottie animationData={animationData} loop={true} />;
};

export default LottieAnimation;
