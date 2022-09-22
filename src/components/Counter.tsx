import { ChangeEvent, useCallback, useState } from "react";

const Counter = ({ initialCount = 0 }) => {
  const [count, setCount] = useState(initialCount);
  const [increment, setIncrement] = useState(1);

  const handleMinus = useCallback(() => {
    setCount((prev) => prev - increment);
  }, [increment]);

  const handlePlus = useCallback(() => {
    setCount((prev) => prev + increment);
  }, [increment]);

  const handleIncrement = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setIncrement(parseInt(e.target.value) || 1);
  }, []);

  return (
    <div>
      <h1 style={{ margin: "0px 0px 50px" }}>Counter</h1>
      <div>
        <label>
          Incrementor
          <input type={"number"} value={increment} onChange={handleIncrement} />
        </label>
        <button onClick={handleMinus}>-</button>
        count: {count}
        <button onClick={handlePlus}>+</button>
      </div>
    </div>
  );
};

export default Counter;
