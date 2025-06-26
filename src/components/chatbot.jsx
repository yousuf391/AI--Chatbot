<<<<<<< HEAD

import { useState, useRef, useEffect } from "react";
import axios from "axios";
import './chatbot.css';
import 'bootstrap/dist/css/bootstrap.min.css';
=======
import { useState } from "react";
import axios from "axios";
import "./chatbot.css";
>>>>>>> b60dafb104fd81f370d9d2dbebe824dba75fc7c2

export default function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
<<<<<<< HEAD
  const chatBoxRef = useRef(null); // Ref for the chat box

  // Auto-scroll to the bottom when messages change
  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [messages]);
=======
>>>>>>> b60dafb104fd81f370d9d2dbebe824dba75fc7c2

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMessage = { sender: "user", text: input };
    setMessages([...messages, userMessage]);
    setInput("");

    try {
<<<<<<< HEAD
      const url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyAsuOEJ8gyStKEVY0u6UUaamqUF8dNhAsM";
=======
      const url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyDsbfqVUqx4pF7Ew5snJH1H9dKzJrYySv8";
>>>>>>> b60dafb104fd81f370d9d2dbebe824dba75fc7c2
      
      const response = await axios.post(
        url,
        {
          contents: [{ parts: [{ text: input }] }]
        }
      );

      const botMessage = {
        sender: "bot",
        text: response.data.candidates[0].content.parts[0].text,
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error fetching response:", error);
    }
  };

  return (
    <div className="chat-container bg-gray-900 text-white p-4 rounded-xl w-96 mx-auto shadow-lg">
<<<<<<< HEAD
      <div className="chat-box h-64 overflow-y-auto p-2 bg-gray-800 rounded-lg" ref={chatBoxRef}>
=======
      <div className="chat-box h-64 overflow-y-auto p-2 bg-gray-800 rounded-lg">
>>>>>>> b60dafb104fd81f370d9d2dbebe824dba75fc7c2
        {messages.map((msg, index) => (
          <div key={index} className={`mb-2 ${msg.sender === "user" ? "text-right" : "text-left"}`}>
            <span className={`inline-block p-2 rounded-lg ${msg.sender === "user" ? "bg-blue-500" : "bg-gray-600"}`}>
              {msg.text}
            </span>
          </div>
        ))}
      </div>
      <div className="input-box mt-2 flex">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-grow p-2 rounded-l-lg text-black"
          placeholder="Ask me something..."
        />
        <button onClick={handleSend} className="bg-blue-500 p-2 rounded-r-lg">Send</button>
      </div>
    </div>
  );
}
<<<<<<< HEAD
// Removed duplicate export statement
=======
>>>>>>> b60dafb104fd81f370d9d2dbebe824dba75fc7c2
