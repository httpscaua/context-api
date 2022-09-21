import React, { useContext } from "react";
import Context from "./Context";

export default function Counter() {
  const [total, setTotal] = useContext(Context);

  
  const random = Math.random()

  return (
    <div>
      <h3>{total}</h3>
      <button type="button" onClick={() => setTotal(total + random)}>
        Contador
      </button>
    </div>
  );
}
