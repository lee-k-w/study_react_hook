export default function View({ data }) {
  if (data === "") {
    return <div>텍스트를 입력하세요</div>;
  }

  return <div>{data}</div>;
}
