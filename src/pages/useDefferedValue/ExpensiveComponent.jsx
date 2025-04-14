import { memo } from "react";

export default memo(function ExpensiveComponent({ number }) {
  return (
    <>
      {Array.from({ length: 1000 }, (_, i) => {
        return (
          <div key={i}>
            number * {i} = {number * i}
          </div>
        );
      })}
    </>
  );
});
