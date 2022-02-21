import React from "react";
import zsak from "./raschel.jpg";

import './Krumpli.css';

export default function Cash({ userInput }) {
  const Model = {
    unitPrice: 180,
    unitWeight: 25, // kg
  };

  const { unitPrice, unitWeight } = Model;

  const num = userInput.current.value;
  const containers = Math.floor(num / (unitPrice * unitWeight));

  const weight = containers * unitWeight;

  return (
    <div className="algo-layout krumpli-algo">
      <section>
        <h3>Zsák krumpli ({weight}kg)</h3>

        <div>
          {Array(containers)
            .fill(0)
            .map(() => `🥔`)}
        </div>
      </section>
      <aside>
        <img src={zsak} alt="tes" />
        <p>Vigyázat, túl sok krumpli le tudja fagyasztani a böngésződ :)</p>
      </aside>
    </div>
  );
}
