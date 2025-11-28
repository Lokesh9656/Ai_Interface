"use client";

import { useState } from "react";
import ChatBubble from "./components/ChatBubble";
import Sidebar from "./components/Sidebar";
import TopBar from "./components/TopBar";

type Message = {
  text: string;
  type: "user" | "ai";
};

export default function Page() {
  const [messages, setMessages] = useState<Message[]>([
    { text: "Hello Lokesh, how can I help?", type: "ai" },
  ]);

  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;

    setMessages((prev) => [
      ...prev,
      { text: input, type: "user" },
      { text: "Thinking... (sample AI reply)", type: "ai" },
    ]);

    setInput("");
  };

  return (
    <div className="flex h-screen">
      <Sidebar />

      <div className="flex flex-col flex-1">
        <TopBar />

        <div className="flex-1 p-4 space-y-2 overflow-y-auto">
          {messages.map((msg, i) => (
            <ChatBubble key={i} text={msg.text} type={msg.type} />
          ))}
        </div>

        <div className="flex p-4 gap-2 border-t">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 p-2 border rounded"
            placeholder="Type your message..."
          />

          <button
            onClick={sendMessage}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
