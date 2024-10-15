import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!running) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [running]);

  return (
    <>
      <h1>01-stopwatch</h1>
      <div>
        <span>{"0" + Math.floor((time / 60000) % 60)}:</span>
        {/* minutes */}
        <span>{"0" + Math.floor((time / 1000) % 60)}:</span>
        {/* seconds */}
        <span>{"0" + ((time / 10) % 100)}</span>
      </div>
      <div>
        <button
          onClick={() => {
            setRunning(true);
          }}
        >
          Start
        </button>
        <button
          onClick={() => {
            setRunning(false);
          }}
        >
          Stop
        </button>
        <button
          onClick={() => {
            setTime(0);
          }}
        >
          Reset
        </button>
      </div>
    </>
  );
}

export default App;
