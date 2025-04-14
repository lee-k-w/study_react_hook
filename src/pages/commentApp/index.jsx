import { useState, useRef } from "react";
import CommentInput from "./CommentInput.jsx";

async function deliverMessage(message) {
  await new Promise((res) => setTimeout(res, 1000));
  return message;
}

export default function App() {
  const [messages, setMessages] = useState([{ text: "첫 댓글", sending: false, key: 1 }]);
  async function sendMessage(formData) {
    const sentMessage = await deliverMessage(formData.get("message"));

    setMessages((messages) => [...messages, { text: sentMessage }]);
  }
  const inputRef = useRef();
  return (
    <div>
      <h2 className="text-2xl mb-5">CoomentApp</h2>
      <CommentInput messages={messages} sendMessage={sendMessage} inputRef={inputRef} />
      <button
        className="btn mt-10"
        onClick={() => {
          inputRef.current.focus();
        }}
      >
        댓글 입력하기
      </button>
    </div>
  );
}
