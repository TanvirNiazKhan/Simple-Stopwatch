import Button from "../ui/Button/Button";
import useTimer from "../../hooks/useTimer";
function Timer() {
  const { time, handleDisable, handlePause, pause } = useTimer();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <p>
          {time.hr}:{time.min}:{time.sec}
        </p>
        <div>
          <Button onClick={handlePause} color="">
            {pause ? "Stop" : "Start"}
          </Button>
          <Button onClick={handleDisable} color="#f50057">
            Reset
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Timer;
