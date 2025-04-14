import { useRef, useOptimistic, useState, useDeferredValue, useImperativeHandle } from "react";
import CommentList from "./CommentList";

export default function CommentInput({ messages, sendMessage, inputRef }) {
  const formRef = useRef();
  const [filterInput, setFilterInput] = useState("");
  const defferedFilterInput = useDeferredValue(filterInput);

  async function formAction(formData) {
    addOptimisticMessage(formData.get("message"));
    formRef.current.reset();
    await sendMessage(formData);
  }
  const [optimisticMessages, addOptimisticMessage] = useOptimistic(messages, (state, newMessage) => [
    ...state,
    {
      text: newMessage,
      sending: true,
    },
  ]);

  const filteredMessages = optimisticMessages.filter((message) => {
    if (message.text.toLowerCase().includes(defferedFilterInput.toLowerCase())) {
      return message;
    }
  });

  const commentInputRef = useRef();
  useImperativeHandle(inputRef, () => ({
    focus: () => commentInputRef.current.focus(),
  }));

  return (
    <>
      <div className="flex flex-col gap-2 mb-5">
        <form className="flex gap-2 items-start" action={formAction} ref={formRef}>
          <input className="input" ref={commentInputRef} type="text" name="message" placeholder="댓글을 입력하세요" autoComplete="off" />
          <button className="btn btn-primary" type="submit">
            댓글 입력
          </button>
        </form>
        <input className="input" onChange={(e) => setFilterInput(e.target.value)} type="text" placeholder="필터를 입력하세요" autoComplete="off" />
      </div>
      <ul className="flex flex-wrap gap-2">
        {filteredMessages.map((message, index) => (
          <CommentList message={message} key={index} />
        ))}
      </ul>
    </>
  );
}
