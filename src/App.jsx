
import Loader from "./components/Loader/Loader";
import useLoader from "./hooks/useLoader";

function App() {
  const loader = useLoader();

  return (
    <>
      {!loader.showLanding ? (
        <Loader
          screen={loader.screen}
          currentLog={loader.currentLog}
          finished={loader.finished}
        />
      ) : (
        <main
          style={{
            width: "100%",
            height: "100vh",
            background: "#050505",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#F4D27A",
            fontFamily: "JetBrains Mono",
            fontSize: "52px",
            letterSpacing: "6px",
          }}
        >
          DEEPVERSE
        </main>
      )}
    </>
  );
}

export default App;