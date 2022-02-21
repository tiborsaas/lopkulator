import React from "react";

import './Algo.css';

export default function Algo({ userInput }) {
  const Model = {
    unitPrice: 180, // gramm
    unitWeight: 25,
  };

  const { unitPrice, unitWeight } = Model;

  const num = userInput.current.value;

  return (
    <div className="algo-layout nevezd-at-algo">
      <section>
        <h3>Template algo</h3>
        <p>{num} -- {unitPrice / unitWeight}</p>
      </section>
      <aside>
        <h3>
          Oldalsáv magyarázatnak
        </h3>
      </aside>
    </div>
  );
}
