import { useState, useEffect } from "react";

function Timer({ onTimerChange, startFrom }) {
  const [time, setTime] = useState(startFrom);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setTime((time) => time + 1);
      }, 1000);
    } else if (!isActive && time !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, time]);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    };
  
    const handleWindowFocus = () => {
      setIsActive(true);
    };
  
    const handleWindowBlur = () => {
      setIsActive(false);
    };
  
    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("focus", handleWindowFocus);
    window.addEventListener("blur", handleWindowBlur);
  
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("focus", handleWindowFocus);
      window.removeEventListener("blur", handleWindowBlur);
    };
  }, []);

  useEffect(() => {
    onTimerChange(time);
    }, [time, onTimerChange]);

}

export default Timer;
