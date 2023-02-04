import { useState, useEffect } from "react";

export function Counter() {
  const [message, setMessage] = useState("");
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("render");
  }, [counter]);

  return (
    <div>
      <input onChange={(e) => setMessage(e.target.value)}></input>
      <button
        onClick={() => {
          alert("El mensaje es: " + message);
        }}
      >
        Save
      </button>
      <hr></hr>

      <h1>Counter {counter}</h1>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Incrementar
      </button>
    </div>
  );
}
