import { useState, useCallback } from "react";
import { RenderCounter } from "../shared/RenderCounter";
import Child from "./Child";

export default function Parent() {
  const [parentCount, setParentCount] = useState(0);
  const [childCount, setChildCount] = useState(0);

  // Memoized and inline props
  const memoizedProp = useCallback(() => "memoized", []);

  return (
    <div>
      <h2>Parent</h2>
      <button onClick={() => setParentCount(c => c + 1)}>Change Parent State</button>
      <br />
      <p>Parent count: {parentCount}</p>
      <button onClick={() => setChildCount(c => c + 1)}>Change Child State</button>
      <p>Child count: {childCount}</p>
      <RenderCounter label="Parent" />
      <Child 
        count={childCount} 
        inlineProp={{ foo: "bar" }} 
        memoizedProp={memoizedProp} 
      />
    </div>
  );
}
