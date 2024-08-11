import { useState, useEffect, useCallback } from "react";

const useTimer = (initialMinutes = 1) => {
  const [seconds, setSeconds] = useState(initialMinutes * 60);
  const [isActive, setIsActive] = useState(false);

  const start = useCallback(() => {
    setIsActive(true);
  }, []);

  const stop = useCallback(() => {
    setIsActive(false);
  }, []);

  const restart = useCallback(() => {
    setSeconds(initialMinutes * 60);
    setIsActive(true);
  }, [initialMinutes]);

  useEffect(() => {
    let interval = null;

    if (isActive && seconds > 0) {
      interval = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds - 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, seconds]);

  useEffect(() => {
    if (seconds <= 0) {
      setIsActive(false);
    }
  }, [seconds]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  };

  return {
    seconds,
    formattedTime: formatTime(seconds),
    isActive,
    start,
    stop,
    restart,
  };
};

export default useTimer;
