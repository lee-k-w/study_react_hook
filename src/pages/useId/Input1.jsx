import { useId } from "react";
export default function Input1() {
  const id = useId();
  return (
    <div className="card shadow-lg p-5">
      <div className="flex items-center gap-5">
        <label htmlFor={id} className="text-2xl">
          Label 1
        </label>
        <input className="input" id={id} type="text" />
      </div>
    </div>
  );
}
