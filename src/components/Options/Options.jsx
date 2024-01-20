import { useState, useEffect } from "react";

export const OptionsBtn = () => {
  const [good, setGoods] = useState(() => {
    const savedClicks = window.localStorage.getItem("ile good");
    if (savedClicks !== null) {
      return JSON.parse(savedClicks);
    }
    return 0;
  });
  const [neutral, setNeutrals] = useState(0);
  const [bad, setBads] = useState(0);

  useEffect(() => {
    console.log("code inside useEfect", good);
    window.localStorage.setItem("ile good", good);
  }, [good]);

  const handleGoods = () => {
    setGoods(good + 1);
  };

  const handleNeutrals = () => {
    setNeutrals(neutral + 1);
  };

  const handleBads = () => {
    setBads(bad + 1);
  };

  return (
    <>
      <button onClick={handleGoods}>Good: {good}</button>
      <button onClick={handleNeutrals}>Neutral: {neutral}</button>
      <button onClick={handleBads}>Bad: {bad}</button>
      <button onClick={() => setGoods(0)}>Reset</button>
    </>
  );
};
