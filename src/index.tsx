import React from "react";
import { render } from "react-dom";
import { Counter } from "./components/Counter";

const App: React.FC<{}> = () => {
  return (
    <div>
      <h1>Hello World</h1>

      <h2>Counter</h2>
      <Counter />
    </div>
  );
};

render(<App />, document.getElementById("root"));
