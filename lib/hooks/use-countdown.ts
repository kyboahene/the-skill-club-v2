import React, { useEffect, useState } from "react";

function calcTimeLeft(t: number) {
  if (!t) return 0;

  const left = t - new Date().getTime();
  if (left < 0) return 0;

  return left;
}

const useCountdown = (endTime: number) => {
  const [end] = useState(endTime);
  const [timeLeft, setTimeLeft] = useState(() => calcTimeLeft(end));

  useEffect(() => {
    setTimeLeft(calcTimeLeft(end));

    const timer = setInterval(() => {
      const targetLeft = calcTimeLeft(end);
      setTimeLeft(targetLeft);

      if (targetLeft === 0) clearInterval(timer);
    });
  }, [end]);

  return [timeLeft];
};

export default useCountdown;
