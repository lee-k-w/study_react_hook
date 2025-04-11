import { useState } from "react";
import Navigation from "./layouts/Navigation.jsx";
import CommentApp from "./pages/commentApp/CommentApp.jsx";

function App() {
  const pageList = [
    {
      name: "CommentApp",
      Component: <CommentApp />,
    },
  ];
  const [pageIndex, setPageIndex] = useState(0);
  return (
    <>
      <h1 className="text-3xl m-3">react19 - hooks</h1>
      <Navigation pageList={pageList} setPageIndex={setPageIndex} pageIndex={pageIndex} />
      <div className="m-3">{pageList[pageIndex].Component}</div>
    </>
  );
}

export default App;
