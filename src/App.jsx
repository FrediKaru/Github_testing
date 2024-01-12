import "./App.css";
import { useEffect, useState } from "react";

// components
import { Content } from "./components/Content";
import { Nav } from "./components/Nav";
import { MainContent } from "./components/MainContent";

function App() {
  const [theme, setTheme] = useState("dark-mode");

  function toggleTheme(e) {
    e.preventDefault();
    setTheme((prevTheme) =>
      prevTheme === "dark-mode" ? "light-mode" : "dark-mode"
    );
  }

  // useEffect(() => {
  //   document.body.className = theme;
  // }, [theme]);

  return (
    <>
      <div className={theme}>
        <div className="content-grid">
          <div className="breakout">
            <Nav toggleTheme={toggleTheme} />
          </div>
          <MainContent />
        </div>
      </div>
    </>
  );
}

export default App;
