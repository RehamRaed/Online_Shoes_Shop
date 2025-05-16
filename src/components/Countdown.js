import React, { useEffect, useState } from "react";
import "../styles/Countdown.css"; 

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState(15 * 60 * 60);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (totalSeconds) => {
    const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
    const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, "0");
    const seconds = String(totalSeconds % 60).padStart(2, "0");

    return `${hours}h ${minutes}m ${seconds}s`;
  };

  return (
    <div className="countdown-container">
      <h4 className="countdown-title">Offer ends in:</h4>
      <div className="countdown-time">{formatTime(timeLeft)}</div>
    </div>
  );
}