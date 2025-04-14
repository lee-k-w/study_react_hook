import { useLayoutEffect, useState, useRef } from "react";

export default function CommentList({ message }) {
  const [isfat, setIsFat] = useState(false);
  const listRef = useRef(null);
  useLayoutEffect(() => {
    const width = listRef.current.getBoundingClientRect().width;
    if (width > 200) {
      setIsFat(true);
    }
  }, []);
  return (
    <li className={`card shadow-lg p-4 ${isfat ? "bg-neutral text-neutral-content" : ""}`} ref={listRef}>
      {message.text}
      {!!message.sending && <small> (Sending...)</small>}
    </li>
  );
}
