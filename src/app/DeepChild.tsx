import React from "react";
import { RenderCounter } from "../shared/RenderCounter";

export default function DeepChild({ value }: any) {
  return (
    <div style={{ marginLeft: 40 }}>
      <h4>DeepChild</h4>
      <RenderCounter label="DeepChild" />
      <div>Value: {value}</div>
    </div>
  );
}
