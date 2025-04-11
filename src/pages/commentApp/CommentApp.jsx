"use client";

import React, { useState, useDeferredValue, useOptimistic, useTransition, useRef } from "react";
import CommentInput from "./CommentInput.jsx";
import CommentItem from "./CommentItem.jsx";

// 2초 후 댓글 텍스트 반환
const postComment = (text) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(text + " ✅"), 2000);
  });
};

export default function CommentApp() {
  const [comments, setComments] = useState([]); // 정확한 댓글 상태
  const [optimisticComments, addOptimistic] = useOptimistic(comments, (currentState, optimisticValue) => {
    return [...currentState, optimisticValue];
  }); // 낙관적인 댓글 상태 및 디스패치 함수

  const [filter, setFilter] = useState(""); // 댓글 필터 문자열
  const deferredFilter = useDeferredValue(filter); // 지연된 댓글 필터 문자열

  const [isPending, startTransition] = useTransition(); // 다수의 댓글을 업데이트할 useTransition훅
  const inputRef = useRef(); // 댓글 입력창에 대한 ref

  const addComment = (text) => {
    const id = Date.now();
    const tempComment = { id, text, sending: true };

    startTransition(() => {
      addOptimistic(tempComment);
    });

    postComment(text).then((realText) => {
      startTransition(() => {
        setComments((prev) => prev.map((c) => (c.id === id ? { ...c, text: realText, sending: false } : c)));
      });
    });
  };

  //deferredFilter 문자열이 존재하는 필터링된 댓글을 반환
  console.log("comments", comments);
  console.log("optimisticComments", optimisticComments);
  const filteredComments = optimisticComments.filter((item) => item.text.includes(deferredFilter));

  return (
    <div className="max-w-xl mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">댓글 예제</h2>

      <CommentInput onAdd={addComment} inputRef={inputRef} />

      <div className="mt-4 mb-2">
        <label htmlFor="filter">댓글 필터: </label>
        <input id="filter" value={filter} onChange={(e) => setFilter(e.target.value)} className="border p-2 rounded w-full" placeholder="댓글 내용으로 필터링" />
      </div>

      {isPending && <div className="text-sm text-gray-400">업데이트 중...</div>}

      <div className="mt-4">
        {filteredComments.map((item) => (
          <CommentItem key={item.id} text={item.text} pending={item.sending} />
        ))}
      </div>

      <button className="mt-4 text-sm text-blue-600 underline" onClick={() => inputRef.current?.focus()}>
        입력창으로 포커스
      </button>
    </div>
  );
}
