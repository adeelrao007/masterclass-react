import { useState, useCallback } from "react";
import { RenderCounter } from "../shared/RenderCounter";
import DeepChild from "./DeepChild";

export default function Child() {
  const [childState, setChildState] = useState(0);

  // Memoized and inline props for DeepChild
  const memoizedDeepProp = useCallback(() => "deep-memoized", []);

  return (
    <div style={{ marginLeft: 20 }}>
      <h3>Child</h3>
      <button onClick={() => setChildState(c => c + 1)}>Change Child State</button>
      <RenderCounter label="Child" />
      <DeepChild 
        value={childState} 
        inlineProp={{ bar: "baz" }} 
        memoizedProp={memoizedDeepProp} 
      />
    </div>
  );
}
