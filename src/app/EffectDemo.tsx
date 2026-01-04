import { useState, useEffect } from "react";


export default function EffectDemo() {
  const [count, setCount] = useState(0);
  const [width, setWidth] = useState(() => window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    // Set initial value in case resize happened before effect ran
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);



  return (
    <div>
      <h2>Effect Demo</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(c => c + 1)}>Increment</button>
      <p>Window width: {width}</p>
    </div>
  );
}
