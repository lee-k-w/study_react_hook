import { useState, Suspense } from "react";
import View from "./View";

export default function Before1() {
  const [input, setInput] = useState("");

  return (
    <div>
      <input
        className="input"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <View data={input} />
    </div>
  );
}
