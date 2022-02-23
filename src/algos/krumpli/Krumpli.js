import React from "react";
import zsak from "./raschel.jpg";

import { mass } from 'units-converter';

import './Krumpli.css';

export default function Cash({ userInput }) {
  const Model = {
    unitPrice: 180,
    unitWeight: 25, // kg
    cutoffUnits: 15000,
    transportMass: 1000, // kg, amennyit egy T4 transporter elbir
    // http://automdb.com/lang/hu/volkswagen/transporter/transporter-t4/group_minivan/248470
    lorryTransportMass: 25000, // kg, amennyit egy kamion elbir
    // http://www.spedorigo.hu/jarmurakter-adatok/
    lorryLength: 13.6 + 2.318
    // https://www.scania.com/content/dam/scanianoe/market/au/products-and-services/trucks/specification-documents/R730-8x4-Prime-Mover-Chassis-Specification.pdf
  };

  const { unitPrice, unitWeight, cutoffUnits, transportMass, lorryTransportMass, lorryLength } = Model;

  const num = userInput.current.value;
  const containers = Math.floor(num / (unitPrice * unitWeight));

  const massKg = containers * unitWeight;
  const weight = mass(massKg).from('kg').toBest();
  const transporters = Math.floor(massKg / transportMass);
  const lorries = Math.floor(massKg / lorryTransportMass);
  const lorryTrafficJam = Math.floor((lorries * lorryLength) / 1000);
console.log(containers);
  return (
    <div className="algo-layout krumpli-algo">
      <section>
        {containers < cutoffUnits && (
          <>
            <h3>{weight.value}{weight.unit} krumpli lett, maradhat?</h3>
            {Array(containers)
              .fill(0)
              .map(() => `🥔`)}
          </>
        )}
        {containers >= cutoffUnits && containers < cutoffUnits * 20 && (
          <>
            <h3>{transporters} T4-es transportert rendelj</h3>
            {Array(transporters)
              .fill(0)
              .map(() => `🚐`)}
          </>
        )}
        {containers >= cutoffUnits * 20 && containers < cutoffUnits * 400 && (
          <>
            <h3>{lorries} kamiont rendelj</h3>
            {Array(lorries)
              .fill(0)
              .map(() => `🚛`)}
          </>
        )}
        {containers >= cutoffUnits * 400 && (
          <>
            <h3>{lorries} kamiont rendelj és {lorryTrafficJam}km hosszú kamionsorra érdemes számítani.</h3>
          </>
        )}
      </section>
      <aside>
        <img src={zsak} alt="tes" />
        <p>{containers} zsák 🥔</p>
        <p>{weight.value}{weight.unit} teljes tömeg</p>
      </aside>
    </div>
  );
}
