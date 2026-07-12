import { useEffect, useState } from "react";
import bootLogs from "../data/bootLogs";

export default function useLoader() {
  // Current Screen
  const [screen, setScreen] = useState("intro");

  // Current Boot Log
  const [currentLog, setCurrentLog] = useState(-1);

  // Boot Finished
  const [finished, setFinished] = useState(false);

  // Landing Ready
  const [showLanding, setShowLanding] = useState(false);

  /* ==========================================
     INTRO SCREEN
  ========================================== */

  useEffect(() => {
    const introTimer = setTimeout(() => {
      setScreen("boot");
    }, 3500);

    return () => clearTimeout(introTimer);
  }, []);

  /* ==========================================
     BOOT SEQUENCE
  ========================================== */

  useEffect(() => {
    if (screen !== "boot") return;

    const timeouts = [];

    let totalDelay = 0;

    bootLogs.forEach((log, index) => {
      totalDelay += log.delay;

      const timeout = setTimeout(() => {
        setCurrentLog(index);
      }, totalDelay);

      timeouts.push(timeout);
    });

    // Show "THE EXPERIENCE STARTS NOW..."
    const finishTimeout = setTimeout(() => {
      setFinished(true);
    }, totalDelay + 1200);

    timeouts.push(finishTimeout);

    // Switch to Landing Page
    const landingTimeout = setTimeout(() => {
      setShowLanding(true);
    }, totalDelay + 3000);

    timeouts.push(landingTimeout);

    return () => {
      timeouts.forEach((timeout) => clearTimeout(timeout));
    };
  }, [screen]);

  return {
    screen,
    currentLog,
    finished,
    showLanding,
  };
}