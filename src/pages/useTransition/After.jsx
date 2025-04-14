import { useState, useTransition } from "react";
import ExpensiveComponent from "./expensiveComponent";

export default function After() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  const [isPending, startTransition] = useTransition();

  function changeHendler(e) {
    const { value } = e.target;
    setInput(value);
    startTransition(() => {
      setList(
        value !== ""
          ? Array.from({ length: 300 }, () => {
              return value;
            })
          : []
      );
    });
  }

  return (
    <div>
      <h3 className="text-2xl m-3">After</h3>
      <input className="input" type="text" value={input} onChange={changeHendler} />
      <ExpensiveComponent list={list} isPending={isPending} />
    </div>
  );
}
