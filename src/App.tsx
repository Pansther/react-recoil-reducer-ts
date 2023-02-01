import useCounter from "./hooks/useCounter";

import "./App.css";

function App() {
  const [{ count }, { dispatch }] = useCounter();

  return (
    <div className="App">
      <div>{count}</div>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>increment</button>
      <button onClick={() => dispatch({ type: "ADD", payload: { num: 20 } })}>
        add 20
      </button>
      <button onClick={() => dispatch({ type: "SET", payload: { num: 9999 } })}>
        set to 9999
      </button>
    </div>
  );
}

export default App;
