import { useId } from "react";
export default function Input2({ index }) {
  const id = useId();
  const labelId = `input-${id}`;
  return (
    <div className="card shadow-lg p-5">
      <div className="flex items-center gap-5">
        <label htmlFor={labelId} className="text-2xl">
          Label 2-{index}
        </label>
        <input className="input input-primary" id={labelId} type="text" />
      </div>
    </div>
  );
}
