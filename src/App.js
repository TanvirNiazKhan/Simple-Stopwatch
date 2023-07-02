import { useEffect } from "react";
import { useState } from "react";

const init = {
  hr: "00",
  min: "00",
  sec: "00",
};

function App() {
  const [time, setTime] = useState({ ...init });
  const [pause, setPause] = useState(false);
  const [disable, setDisable] = useState(false);
  useEffect(() => {
    if (pause === false) {
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
    setTime({ ...init });
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "70%",
        margin: "auto",
        alignItems: "center",
      }}
    >
      <div style={{ height: "450px" }}>
        <p>
          {time.hr}:{time.min}:{time.sec}
        </p>
      </div>
      <div>
        <button
          style={{
            color: "black",
            backgroundColor: pause ? "cyan" : "#e91e63",
            height: "50px",
            width: "150px",
            fontWeight: "bold",
            fontFamily: "Arial",
            border: "none",
            cursor: "pointer",
            marginRight: "10px",
            borderRadius: "5px",
          }}
          onClick={() => setPause(!pause)}
        >
          {pause ? "Resume" : "Pause"}
        </button>
        <button
          style={{
            color: "black",
            backgroundColor: "#00e676",
            height: "50px",
            width: "150px",
            fontWeight: "bolder",
            fontFamily: "Arial",
            border: "none",
            cursor: "pointer",
            boxShadow: "initial",
            borderRadius: "5px",
          }}
          onClick={handleDisable}
          // disabled={disable === true}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
