import { useEffect, useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
    return () => {
    };
  }, [count]);

  return (
    <main style={{ padding: 24, fontFamily: "system-ui" }}>
      <h1>Counter + Title Sync</h1>
      <p>Count: <strong>{count}</strong></p>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
      <button onClick={() => setCount((c) => c - 1)} style={{ marginLeft: 8 }}>
        -
      </button>
      <button onClick={() => setCount(0)} style={{ marginLeft: 8 }}>
        reset
      </button>
    </main>
  );
}
