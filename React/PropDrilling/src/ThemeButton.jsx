import React from "react";
import { useTheme } from "./ThemeContext";

export default function ThemeButton() {
  const { theme, toggleTheme } = useTheme();
  return <button onClick={toggleTheme}>Switch to {theme === "light" ? "dark" : "light"} mode</button>;
}