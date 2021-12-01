import React from "react";
import zsak from "./raschel.jpg";

export default function Cash({
  formData: results, userInput
}) {

  const Model = {
    unitPrice: 180, // gramm
    unitWeight: 25,
  };

  const { unitPrice, unitWeight } = Model;

  const num = userInput.current.value;
  const containers = Math.floor(num / (unitPrice * unitWeight));

  console.log(containers);

  return (
    <div>
      <h3>Krumpli renderer</h3>
      <div>
        {Array(containers)
          .fill(0)
          .map(() => `🥔`)}
      </div>
      <img src={zsak}  alt="tes" />
    </div>
  );
}
