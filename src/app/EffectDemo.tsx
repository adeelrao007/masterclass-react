import { useState } from "react";
import { useWindowWidth } from "../shared/useWindowWidth";


export default function EffectDemo() {
  const [count, setCount] = useState(0);
  const width = useWindowWidth();

  return (
    <div>
      <h2>Effect Demo</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(c => c + 1)}>Increment</button>
      <p>Window width: {width}</p>
    </div>
  );
}
