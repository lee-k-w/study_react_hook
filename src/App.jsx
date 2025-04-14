import { useState } from "react";
import Navigation from "./layouts/Navigation.jsx";
import UseDefferedValue from "./pages/useDefferedValue";
import UseTransition from "./pages/useTransition";
import UseId from "./pages/useId";
import CommentApp from "./pages/commentApp";
import CustomHook from "./pages/customHook";

function App() {
  const pageList = [
    {
      name: "useDefferedValue",
      Component: <UseDefferedValue />,
    },
    {
      name: "useTransition",
      Component: <UseTransition />,
    },
    {
      name: "useId",
      Component: <UseId />,
    },
    {
      name: "CommentApp",
      Component: <CommentApp />,
    },
    {
      name: "CustomHook",
      Component: <CustomHook />,
    },
  ];
  const [pageIndex, setPageIndex] = useState(0);
  return (
    <>
      <h1 className="text-3xl m-3">React19 - HOOKS</h1>
      <Navigation pageList={pageList} setPageIndex={setPageIndex} pageIndex={pageIndex} />
      <div className="m-3">{pageList[pageIndex].Component}</div>
    </>
  );
}

export default App;
