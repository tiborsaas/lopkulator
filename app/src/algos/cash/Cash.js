import React from "react";
import deak from "./get-doc-resource.png";

export default function Cash({ userInput }) {
  const Model = {
    weight: 0.0095, // gramm
    unitSize: 1000,
    value: 20000,
  };

  const num = userInput.current.value;
  const { weight, unitSize, value } = Model;

  const items = num / value;
  const totalWeight = items * weight;
  const containers = Math.floor(items / unitSize);

  return (
    <div>
      <div>{parseInt(totalWeight)}kg teljes tömeg</div>
      <div>{containers} köteg Deák. (1 Deák = 100db)</div>
      <div>
        {Array(containers)
          .fill(0)
          .map((_, i) => (
            <img src={deak} key={i} alt="tes" />
          ))}
      </div>
    </div>
  );
}
