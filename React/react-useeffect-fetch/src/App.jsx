import { useEffect, useState } from "react";

const URL = "https://jsonplaceholder.typicode.com/todos/1";

export default function App() {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    setStatus("loading");
    fetch(URL)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((json) => {
        if (!isMounted) return;
        setData(json);
        setStatus("success");
      })
      .catch((err) => {
        if (!isMounted) return;
        setError(err.message);
        setStatus("error");
      });
    return () => { isMounted = false; };
  }, []);
  return (
    <main style={{ padding: 24, fontFamily: "system-ui" }}>
      <h1>Fetch on Mount (useEffect [])</h1>
      {status === "loading" && <p>Loading…</p>}
      {status === "error" && <p style={{ color: "black" }}>Error: {error}</p>}
      {status === "success" && (
    <pre
      style={{
        background: "#222",
        padding: 12,
        color: "#eee",
        fontSize: "14px",
        borderRadius: "8px",
        overflowX: "auto"
      }}
    >
      {JSON.stringify(data, null, 2)}
    </pre>
      )}
    </main>
  );
}
