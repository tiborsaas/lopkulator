import React from "react";

export default function AlgoSelector({ algos, selected, onChange }) {
  const selectEvent = (e) => {
    onChange(e.target.value);
  };

  return (
    <div>
      <article className="algo-selector">
        {algos.map((algo) => (
          <div key={algo.meta.id}>
            <label>
              <input
                type="radio"
                value={algo.meta.id}
                name="algo"
                onChange={selectEvent}
                defaultChecked={algo.meta.id === selected}
              ></input>
              {algo.meta.name}
            </label>
          </div>
        ))}
      </article>
    </div>
  );
}
