import React from "react";
import { ThemeProvider } from "./ThemeContext";
import ThemeButton from "./ThemeButton";

export default function App() {
  return (
    <ThemeProvider>
      <h1>Hello World</h1>
      <ThemeButton />
    </ThemeProvider>
  );
}
