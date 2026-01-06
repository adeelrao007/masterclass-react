import { useRef } from "react";

export function RenderCounter({ label }: { label: string }) {
  const renders = useRef(0);
  renders.current++;

  console.log(label, "rendered", renders.current);
  
  return null;
}
