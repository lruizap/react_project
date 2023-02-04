import { useState } from "react";

export function Counter() {
  const [message, setMessage] = useState("");

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
    </div>
  );
}
