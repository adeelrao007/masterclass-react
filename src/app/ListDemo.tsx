import { useState } from "react";

function ListItem({ index, value, onIncrement }: { index: number; value: number; onIncrement: () => void }) {
  return (
    <li>
       {index+1} Item value: {value} <button onClick={onIncrement}>Increment</button>
    </li>
  );
}

export default function ListDemo() {
  const [items, setItems] = useState(Array(10000).fill(0));

  const handleIncrement = (idx: number) => {
    setItems(items => items.map((v, i) => (i === idx ? v + 1 : v)));
  };

  return (
    <ul>
      {items.map((value, idx) => (
        <ListItem key={idx} index={idx} value={value} onIncrement={() => handleIncrement(idx)} />
      ))}
    </ul>
  );
}
