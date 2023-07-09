"use client";
import React, { useState, useEffect } from "react";

export default function ClosePageIn({
  timeInSeconds,
}: {
  timeInSeconds: number;
}) {
  const [timeRemaining, setTimeRemaining] = useState(timeInSeconds);

  useEffect(() => {
    setTimeout(() => {
      const left = timeRemaining - 1;
      console.log(left);
      if (left === 0) {
        window.close();
        return;
      }
      setTimeRemaining(left);
    }, 1000);
  }, [timeRemaining]);

  return <div>Closing in {timeRemaining}</div>;
}
