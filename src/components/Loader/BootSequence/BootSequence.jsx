import "./BootSequence.css";
import bootLogs from "../../../data/bootLogs";
import CRTFrame from "../CRTFrame/CRTFrame";
import Clock from "../Clock/Clock";

function BootSequence({ currentLog, finished }) {
  return (
    <CRTFrame>
      <div className="boot-sequence">

        {/* ================= HEADER ================= */}

        <div className="boot-header">

          <p className="boot-version">
            DEEPVERSE PROTOCOL
          </p>

          <h1>
            NEURAL BOOT SEQUENCE
          </h1>

          <span>
            Creative Reality Interface
          </span>

        </div>

        <div className="boot-divider"></div>

        {/* ================= BOOT LOGS ================= */}

        <div className="boot-logs">

          {bootLogs
            .slice(0, currentLog + 1)
            .map((log) => (
              <div
                key={log.id}
                className="boot-log"
              >
                <span className="boot-title">
                  {log.title}
                </span>

                <span className="boot-dots"></span>

                <span className="boot-status">
                  {log.status}
                </span>
              </div>
            ))}

        </div>

        {/* ================= FOOTER ================= */}

        {finished && (
          <>
            <div className="boot-divider"></div>

            <div className="boot-finished">

              <h2>
                THE EXPERIENCE STARTS NOW...
              </h2>

              <Clock />

            </div>
          </>
        )}

      </div>
    </CRTFrame>
  );
}

export default BootSequence;