import { useState, useDeferredValue } from "react";
import ExpensiveComponent from "./expensiveComponent";

export default function After() {
  const [input, setInput] = useState("");
  const defferedInput = useDeferredValue(input);

  return (
    <div>
      <h3 className="text-2xl m-3">After</h3>
      <input className="input" type="text" value={input} onChange={(e) => setInput(e.target.value)} />
      <ExpensiveComponent number={defferedInput} />
    </div>
  );
}
