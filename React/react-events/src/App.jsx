import { useState } from "react";

export default function App() {
  const [text, setText] = useState("");

  const handleChange = (e) => setText(e.target.value);
  const handleClear = () => setText("");

  return (
    <div classname="app">
      <todolist/>
    </div>
  );
}
