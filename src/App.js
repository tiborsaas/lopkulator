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
          <p>{result && formatNumber(number.current.value)}</p>
          <AlgoSelector algos={Algos} selected={selectedAlgo} onChange={setSelectedAlgo} />
        </form>
        {result && (
          <section className="results">
            <Algo formData={result} userInput={number} />
          </section>
        )}
        {!result && (
          <section className="intro">
            A lopkulátor segít vizualizálni azokat a nagy összegeket, amiket már a hétköznapi életben nehezen látunk át.
            Az alkalmazás remek kiegészítő lehet egy korrupciós cikk olvasása mellé, valamint kezdő, fiatal oligarcháknak is támpontokat biztosít.
          </section>
        )}
      </header>
      <footer>
        Keszitette: <a href="https://twitter.com/tiborsaas">@tiborsaas</a> -
        Forrás: <a href="https://github.com/tiborsaas/lopkulator">GitHub</a>
      </footer>
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
