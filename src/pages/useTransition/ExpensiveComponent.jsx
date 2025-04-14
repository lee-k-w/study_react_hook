export default function ExpensiveComponent({ list, isPending }) {
  if (list.length === 0) {
    return <div>텍스트를 입력해주세요</div>;
  }
  return (
    <>
      <div className="flex w-full flex-wrap">
        {isPending
          ? "업데이트 중..."
          : list.map((text, i) => {
              return (
                <div className="card shadow-sm" key={i}>
                  <div className="card-body">text : {text}</div>
                </div>
              );
            })}
      </div>
    </>
  );
}
