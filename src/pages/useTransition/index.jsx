import Before from "./Before";
import After from "./After";

export default function useTransition() {
  return (
    <div>
      <h2 className="text-2xl mb-5">useTransition</h2>
      <div className="flex w-full">
        <div className="card grow shrink basis-1/2">
          <Before />
        </div>
        <div className="divider divider-horizontal"></div>
        <div className="card grow shrink basis-1/2">
          <After />
        </div>
      </div>
    </div>
  );
}
