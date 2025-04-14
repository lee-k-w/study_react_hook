import { useState } from "react";
import ExpensiveComponent from "./expensiveComponent";

export default function Before() {
  const [input, setInput] = useState("");
  const list =
    input !== ""
      ? Array.from({ length: 300 }, () => {
          return input;
        })
      : [];

  return (
    <div>
      <h3 className="text-2xl m-3">Before</h3>
      <input className="input" type="text" value={input} onChange={(e) => setInput(e.target.value)} />
      <ExpensiveComponent list={list} />
    </div>
  );
}
