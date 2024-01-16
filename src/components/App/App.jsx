import { useState } from "react";
import "./App.css";

export const App = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Sip Happens Café</h1>
      <p>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
      <ul className="options">
        <li>
          <button onClick={() => setCount((count) => count + 1)}>
            Good
            {count}
          </button>
        </li>
        <li>
          <button onClick={() => setCount((count) => count + 1)}>
            Neutral {count}
          </button>
        </li>
        <li>
          <button onClick={() => setCount((count) => count + 1)}>
            Bad {count}
          </button>
        </li>
        <li>
          <button onClick={() => setCount((count) => count + 1)}>
            Reset {count}
          </button>
        </li>
      </ul>

      <ul className="feedback">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </>
  );
};
