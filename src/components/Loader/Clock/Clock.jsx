import "./Clock.css";
import useClock from "../../../hooks/useClock";

function Clock() {
  const time = useClock();

  return (
    <div className="clock-container">
      <span className="clock-label">
        LOCAL TIME
      </span>

      <span className="clock-time">
        {time}
      </span>
    </div>
  );
}

export default Clock;