import Intro from "./Intro/Intro";
import BootSequence from "./BootSequence/BootSequence";

function Loader({
  screen,
  currentLog,
  finished,
}) {
  if (screen === "intro") {
    return <Intro />;
  }

  return (
    <BootSequence
      currentLog={currentLog}
      finished={finished}
    />
  );
}

export default Loader;