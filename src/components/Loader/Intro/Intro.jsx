import { useEffect, useState } from "react";
import "./Intro.css";

const introMessages = [
  "Searching For Developer...",
  "Candidate Found.",
  "Verifying Identity...",
  "Access Granted.",
  "Welcome Recruiter.",
  "Entering DeepVerse..."
];

function Intro() {
  const [currentMessage, setCurrentMessage] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  // Cursor Blink
  useEffect(() => {
    const cursor = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursor);
  }, []);

  // Message Change
  useEffect(() => {
    if (currentMessage >= introMessages.length - 1) return;

    const timer = setTimeout(() => {
      setCurrentMessage((prev) => prev + 1);
    }, 550);

    return () => clearTimeout(timer);
  }, [currentMessage]);

  return (
    <div className="intro-screen">

      {/* Background Noise */}
      <div className="intro-noise"></div>

      {/* Center Content */}

      <div className="intro-container">

        <div className="intro-header">

          <p className="intro-small">
            DEEPVERSE INITIALIZATION
          </p>

          <h1>
            ENTERING SYSTEM
          </h1>

        </div>

        <div className="intro-terminal">

          {introMessages
            .slice(0, currentMessage + 1)
            .map((message, index) => (
              <div
                key={index}
                className={`terminal-line ${
                  index === currentMessage
                    ? "active"
                    : "completed"
                }`}
              >
                <span className="arrow">
                  ❯
                </span>

                <span className="message">
                  {message}
                </span>

                {index === currentMessage && (
                  <span className="cursor">
                    {showCursor ? "█" : ""}
                  </span>
                )}
              </div>
            ))}

        </div>

        <div className="intro-footer">

          <span>
            Preparing Cinematic Experience...
          </span>

        </div>

      </div>

    </div>
  );
}

export default Intro;