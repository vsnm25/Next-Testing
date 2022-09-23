import { ChangeEvent, useCallback, useEffect, useState } from "react";

const Counter = ({ initialCount = 0 }) => {
  const [count, setCount] = useState(initialCount);
  const [increment, setIncrement] = useState(1);
  const [bigEnough, setBigEnough] = useState(initialCount >= 15);

  const handleMinus = useCallback(() => {
    setTimeout(() => {
      setCount((prev) => prev - increment);
    }, 200);
  }, [increment]);

  const handlePlus = useCallback(() => {
    setTimeout(() => {
      setCount((prev) => prev + increment);
    }, 200);
  }, [increment]);

  const handleIncrement = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setIncrement(parseInt(e.target.value) || 1);
  }, []);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (count >= 15) {
      timeoutId = setTimeout(() => {
        setBigEnough(true);
      }, 300);
    }
    return () => {
      clearTimeout(timeoutId);
    };
  }, [count]);

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
      {!bigEnough && <div>I am too small</div>}
    </div>
  );
};

export default Counter;
