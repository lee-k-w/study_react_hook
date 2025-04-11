"use client";

import React, { useState, useId } from "react";

export default function CommentInput({ onAdd, inputRef }) {
  const inputId = useId();
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = text.trim();
    if (value) {
      onAdd(value);
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
      <label htmlFor={inputId}>댓글</label>
      <input id={inputId} ref={inputRef} value={text} onChange={(e) => setText(e.target.value)} className="border p-2 rounded flex-1" placeholder="댓글을 입력하세요" />
      <button type="submit" className="bg-blue-500 text-white px-3 py-2 rounded">
        등록
      </button>
    </form>
  );
}
