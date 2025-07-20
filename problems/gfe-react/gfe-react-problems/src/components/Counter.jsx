import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  function addCount() {
    setCount((count) => count + 1);
  }
  function subtractCount() {
    if (count > 0) {
      setCount((count) => count - 1);
    }
  }

  return (
    <>
      <button onClick={addCount}>Add count</button>
      <div>{count}</div>
      <button onClick={subtractCount}>Subtract count</button>
    </>
  );
}
