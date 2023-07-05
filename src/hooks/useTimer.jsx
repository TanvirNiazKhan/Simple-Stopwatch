import { useEffect } from "react";
import { useState } from "react";
const init = {
  hr: "00",
  min: "00",
  sec: "00",
};
const useTimer = () => {
  const [time, setTime] = useState({ ...init });
  const [pause, setPause] = useState(false);
  const [disable, setDisable] = useState(false);
  useEffect(() => {
    if (pause === true) {
      const interval = setInterval(() => {
        setTime((prev) => {
          const newSec = Number(prev.sec) + 1;
          let newtime = { ...prev, sec: String(newSec).padStart(2, "0") };
          if (newSec === 60) {
            const newMin = Number(prev.min) + 1;
            newtime = {
              ...prev,
              sec: "00",
              min: String(newMin).padStart(2, "0"),
            };
            if (newMin === 60) {
              const newHr = Number(prev.hr) + 1;
              newtime = {
                ...prev,
                sec: "00",
                hr: String(newHr).padStart(2, "0"),
                min: "00",
              };
            }
          }
          return newtime;
        });
      }, 1000);
      return () => {
        clearInterval(interval);
      };
    }
  }, [pause]);
  function handleDisable() {
    setDisable(!disable);
    setPause(false);
    setTime({ ...init });
  }
  function handlePause() {
    setPause(!pause);
  }
  return {
    time,
    handleDisable,
    handlePause,
    pause,
  };
};
export default useTimer;
