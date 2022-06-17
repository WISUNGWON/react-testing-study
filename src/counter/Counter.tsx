import { useState } from "react";

import "./Counter.css";

function Counter() {
  const [count, setCount] = useState(0);
  const handleClickMinusBtn = () => {
    if (count === 0) {
      return;
    }
    setCount(count - 1);
  };
  const [disabled, setDisabled] = useState(false);

  return (
    <div className="Counter">
      <header className="Counter-header">
        <h3 data-testid="counter">{count}</h3>
      </header>
      <section>
        <button
          data-testid="minus-button"
          onClick={handleClickMinusBtn}
          disabled={disabled}
        >
          -
        </button>
        <button
          data-testid="plus-button"
          onClick={() => setCount(count + 1)}
          disabled={disabled}
        >
          +
        </button>
      </section>
      <footer>
        <button
          data-testid="on/off-button"
          style={{ backgroundColor: "blue" }}
          onClick={() => setDisabled(!disabled)}
        >
          on/off
        </button>
      </footer>
    </div>
  );
}

export default Counter;
