import { useWindowSize } from "./useWindowSize";

export default function CustomHook() {
  const { width, height } = useWindowSize();

  return (
    <div>
      <h1>현재 창 크기</h1>
      <p>
        {width} x {height}
      </p>
    </div>
  );
}
