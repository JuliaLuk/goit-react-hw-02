import { useState } from "react";

export const Options = () => {
  const [good, setClicks] = useState(0);

  const handleClick = () => {
    setClicks(good + 1);
  };

  return <button onClick={handleClick}>Good: {good}</button>;
};
