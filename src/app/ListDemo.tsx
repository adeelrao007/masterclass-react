
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

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
  const { data, isLoading, error } = useQuery({
    queryKey: ["itemCount"],
    queryFn: async () => {
      const res = await fetch("/api/items/count");
      if (!res.ok) throw new Error("Network response was not ok");
      return res.json();
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {(error as Error).message}</div>;
  if (!data || typeof data.count !== "number") return null;

  return (
    <ul>
      {Array.from({ length: data.count }).map((_, idx) => (
        <ListItem key={idx} index={idx} />
      ))}
    </ul>
  );
}
