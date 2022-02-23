import React from "react";
import deak from "./20k.png";

import "./Cash.css";

export default function Cash({ userInput }) {
  const Model = {
    weight: 0.0095, // gramm
    // https://www.mnb.hu/bankjegy-es-erme/bankjegyeink/megujitott-20-000-forintos-bankjegy
    unitSize: 100,
    value: 20000,
  };

  const num = userInput.current.value;
  const { weight, unitSize, value } = Model;

  const items = num / value;
  const totalWeight = items * weight;
  const containers = Math.floor(items / unitSize);

  return (
    <div className="algo-layout">
      <section>
        <div className="cash-stack">
          {Array(containers)
            .fill(0)
            .map((_, i) => (
              <img src={deak} key={i} alt="tes" className="deak" />
          ))}
        </div>
      </section>
      <aside>
        <div>{containers} köteg (100db Deák)</div>
        <div>{parseInt(totalWeight)}kg teljes tömeg</div>
      </aside>
    </div>
  );
}
