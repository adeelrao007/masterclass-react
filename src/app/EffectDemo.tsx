import { useState } from "react";

export default function EffectDemo() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Effect Demo</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(c => c + 1)}>Increment</button>
    </div>
  );
}
