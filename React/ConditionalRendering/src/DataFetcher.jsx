import React, { useEffect, useState } from "react";

export default function DataFetcher() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setData({ message: "Hello from the API!" });
      setLoading(false);
    }, 2500);
  }, []);

  return (
    <div>
      <h2>Getting the data</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <p>{data.message}</p> 
      )}
    </div>
  );
}