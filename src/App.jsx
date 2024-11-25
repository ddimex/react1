import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flexCol">
        <div className="header">
          <div className="text">Lecture 01 domasno</div>
        </div>

        <div className="flexRow">
          <div className="left flexCol">
            <h1 className="subtitle">Hi I'm</h1>
            <h1 className="title">Damjan</h1>
          </div>
          <div className="right"></div>
        </div>
      </div>
    </>
  );
}

export default App;
