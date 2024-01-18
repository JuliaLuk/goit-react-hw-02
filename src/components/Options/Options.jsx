import { useState } from "react";

export const OptionsBtn = () => {
  const [good, setGoods] = useState(0);
  const [neutral, setNeutrals] = useState(0);
  const [bad, setBads] = useState(0);
  const [total, setTotal] = useState(0);

  const handleGoods = () => {
    setGoods(good + 1);
  };

  const handleNeutrals = () => {
    setNeutrals(neutral + 1);
  };

  const handleBads = () => {
    setBads(bad + 1);
  };

  const handleTotal = () => {
    setTotal(good - bad);
  };

  return (
    <>
      <button onClick={handleGoods}>Good: {good}</button>
      <button onClick={handleNeutrals}>Neutral: {neutral}</button>
      <button onClick={handleBads}>Bad: {bad}</button>
      <button onClick={handleTotal}>Reset: {total}</button>
    </>
  );
};
