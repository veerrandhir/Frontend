import { useEffect, useState } from "react";
import "./App.css";
import { ThemeProvider } from "./context/theme";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = () => {
    setThemeMode("light");
  };

  const darkTheme = () => {
    setThemeMode("dark");
  };

  {
    /* Actual change in a theme done by Js */
  }

  useEffect(() => {
    document.querySelector("html").className.remove("light", "dark ");
  }, [themeMode]);
  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4"></div>
          {/* Theme button */}
          <div className="w-full max-w-sm mx-auto">{/* Theme button */}</div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
