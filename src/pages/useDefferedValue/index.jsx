import Before from "./Before";
import After from "./After";

export default function UseDeferredValue() {
  return (
    <div>
      <h2 className="text-2xl mb-5">useDeferredValue</h2>
      <div className="flex w-full">
        <div className="card grow">
          <Before />
        </div>
        <div className="divider divider-horizontal"></div>
        <div className="card grow">
          <After />
        </div>
      </div>
    </div>
  );
}
