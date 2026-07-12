import "./CRTFrame.css";

import Noise from "../Noise/Noise";
import Scanlines from "../Scanlines/Scanlines";

function CRTFrame({ children }) {
  return (
    <div className="crt-wrapper">

      {/* Background Effects */}

      <Noise />

      <Scanlines />

      {/* Outer Glow */}

      <div className="crt-glow"></div>

      {/* TV Frame */}

      <div className="crt-frame">

        {/* Screen Reflection */}

        <div className="crt-reflection"></div>

        {/* Screen Content */}

        <div className="crt-screen">

          {children}

        </div>

      </div>

      {/* Vignette */}

      <div className="crt-vignette"></div>

    </div>
  );
}

export default CRTFrame;