export function parseFormData(entries) {
  const obj = {};
  for (let entry of entries) {
    obj[entry[0]] = entry[1];
  }
  return obj;
}

export const formatNumber = (num) => {
  const truncatedNum = num / 1e6;

  const n = parseInt(truncatedNum * 100) / 100;
  const m = parseInt(n * 100) / 100000;

  const fixedFloat = n < 1000 ? n : m;

  const postFix = n < 1000 ? "millió" : "milliárd";
  return `${fixedFloat} ${postFix}`;
};

export const getAlgoComponent = (Algos, selectedAlgo) => {
  return Algos.reduce((algo, current) => {
    if (current.meta.id === selectedAlgo) {
      algo = current.component;
    }
    return algo;
  }, null);
}
