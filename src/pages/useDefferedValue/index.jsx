import Before1 from "./Before1";

export default function UseDeferredValue() {
  return (
    <div>
      <h2 className="text-2xl mb-5">useDeferredValue</h2>
      <div className="flex w-full">
        <div className="card grow">
          <Before1 />
        </div>
        <div className="divider divider-horizontal"></div>
        <div className="card grow">after</div>
      </div>
    </div>
  );
}
