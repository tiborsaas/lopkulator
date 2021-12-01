import { useRef, useState } from "react";

import { Algos } from "./algos";
import AlgoSelector from "./components/algo-selector";
import { formatNumber, parseFormData } from "./utils/utils";

import "./App.css";

function App() {
  const number = useRef(0);
  const [result, setResult] = useState(null);
  const [selectedAlgo, setSelectedAlgo] = useState("cash");

  const calculate = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = parseFormData(formData.entries());
    setResult(data);
  };

  const Algo = Algos.reduce((algo, current) => {
    if (current.meta.id === selectedAlgo) {
      algo = current.component;
    }
    return algo;
  }, null);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Lopkulátor</h1>
        <form onSubmit={calculate}>
          <input type="number" name="hello" ref={number} />
          <button>Kalkulál</button>
          <br />
          {result && formatNumber(number.current.value)}
          <br />
          <br />
          <AlgoSelector algos={Algos} selected={selectedAlgo} onChange={setSelectedAlgo} />
        </form>
        {result && (
          <section className="results">
            <Algo formData={result} userInput={number} />
          </section>
        )}
      </header>
    </div>
  );
}

export default App;

/**
 * 💰
 * https://www.mnb.hu/bankjegy-es-erme/bankjegyeink/megujitott-20-000-forintos-bankjegy
 * https://www.cargurus.com/Cars/2017-Lamborghini-Huracan-Price-c26103
 * https://vasarlocsapat.hu/_hirek/_elelmiszerarak/burgonya-arak.shtml
 */
