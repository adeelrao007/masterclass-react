import { useState } from "react";

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
  return (
    <ul>
      {Array.from({ length: 10 }).map((_, idx) => (
        <ListItem key={idx} index={idx} />
      ))}
    </ul>
  );
}
