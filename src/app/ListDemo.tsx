
import { useState, useEffect } from "react";

function ListItem({ index }: { index: number }) {
  const [value, setValue] = useState(0);
  return (
    <li>
      {index + 1} Item value: {value}
      <button onClick={() => setValue(v => v + 1)}>Increment</button>
    </li>
  );
}

export default function ListDemo() {
  const [count, setCount] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    // Simulate fetching the number of items from an API
    fetch("/api/items/count")
      .then(res => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then(data => {
        setCount(data.count);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (count === null) return null;

  return (
    <ul>
      {Array.from({ length: count }).map((_, idx) => (
        <ListItem key={idx} index={idx} />
      ))}
    </ul>
  );
}
