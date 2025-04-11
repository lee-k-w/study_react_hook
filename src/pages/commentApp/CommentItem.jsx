"use client";

import React, { useRef, useState, useLayoutEffect } from "react";

export default function CommentItem({ text, sending }) {
  const ref = useRef(null);
  const [dark, setDark] = useState(false);

  useLayoutEffect(() => {
    if (ref.current) {
      const height = ref.current.offsetHeight;
      setDark(height > 50); // 높이가 2줄 이상이면 배경 진하게
    }
  }, [text]);

  return (
    <div ref={ref} className={`p-2 my-1 border rounded ${dark ? "bg-gray-400" : "bg-gray-100"}`}>
      {text} {sending && <span className="text-sm text-gray-400">전송중...</span>}
    </div>
  );
}
