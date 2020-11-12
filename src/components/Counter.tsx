import React, { useState } from "react";

type CounterProps = {};

export const Counter: React.FC<CounterProps> = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div>Count: {count}</div>
      <div>
        <button onClick={() => setCount((prev) => prev + 1)}>UP</button>
        <button onClick={() => setCount((prev) => prev - 1)}>DOWN</button>
      </div>
    </div>
  );
};
