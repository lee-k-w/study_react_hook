import Input1 from "./Input1";
import Input2 from "./Input2";

export default function UseId() {
  return (
    <div>
      <h2 className="text-2xl mb-5">useId</h2>
      <Input1 />
      {Array.from({ length: 10 }, (_, index) => (
        <Input2 key={index} index={index} />
      ))}
    </div>
  );
}
