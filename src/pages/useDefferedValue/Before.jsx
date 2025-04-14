import { useState } from "react";
import ExpensiveComponent from "./expensiveComponent";

export default function Before() {
  const [input, setInput] = useState("");

  return (
    <div>
      <h3 className="text-2xl m-3">Before</h3>
      <input className="input" type="text" value={input} onChange={(e) => setInput(e.target.value)} />
      <ExpensiveComponent number={input} />
    </div>
  );
}
