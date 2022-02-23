import { useRef, useState } from "react";

import { Algos } from "./algos";
import AlgoSelector from "./components/algo-selector";
import { formatNumber, getAlgoComponent, parseFormData } from "./utils/utils";

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

  const Algo = getAlgoComponent(Algos, selectedAlgo);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Lopkulátor</h1>
        <form onSubmit={calculate}>
          <input type="number" name="hello" min="0" defaultValue="0" step="100000" ref={number} />
          <button className="compute">Kalkulál</button>
          <p>{result && formatNumber(number.current.value)}</p>
          <AlgoSelector algos={Algos} selected={selectedAlgo} onChange={setSelectedAlgo} />
        </form>
      </header>
      <main>
        {result && (
          <section className="results">
            <Algo formData={result} userInput={number} />
          </section>
        )}
        {!result && (
          <section className="intro">
            A lopkulátor segít vizualizálni azokat a nagy összegeket, amiket már a hétköznapi életben nehezen látunk át.
            Az alkalmazás remek kiegészítő lehet egy korrupciós cikk olvasása mellé, valamint akár kezdő oligarcháknak is támpontokat biztosíthat.
            <h1>Work in progress</h1>
            Az app még erősen protoípus/PoC állapotban van, mindenféle kontribúciót szívesen fogadok pull request vagy egyéb (ötlet, grafika, megosztás) formában.
          </section>
        )}
      </main>
      <footer>
        Forrás: <a href="https://github.com/tiborsaas/lopkulator">GitHub</a>
      </footer>
    </div>
  );
}

export default App;
/**
 * 💰💰💰
 * https://www.cargurus.com/Cars/2017-Lamborghini-Huracan-Price-c26103
 * https://vasarlocsapat.hu/_hirek/_elelmiszerarak/burgonya-arak.shtml
 */
