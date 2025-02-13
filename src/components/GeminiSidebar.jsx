import React, { useState } from "react";

function GeminiSidebar({ isOpen, onClose }) {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hey, how are you?", sender: "bot" }, // Default message
  ]);

  const fetchAIResponse = async () => {
    if (!input) return;
    setLoading(true);

    // Add user query to messages
    setMessages((prev) => [...prev, { text: input, sender: "user" }]);

    try {
      const res = await fetch(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=no_key",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [{ parts: [{ text: input }] }],
          }),
        }
      );

      const data = await res.json();
      const botResponse =
        data?.candidates?.[0]?.content?.parts?.[0]?.text || "No response.";

      setMessages((prev) => [...prev, { text: botResponse, sender: "bot" }]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { text: "Error fetching AI response.", sender: "bot" },
      ]);
    }

    setInput("");
    setLoading(false);
  };

  return (
    <div
      className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl rounded-l-lg transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 ease-in-out z-50 flex flex-col`}
    >
      {/* Header */}
      <div className="p-4 border-b flex justify-between items-center bg-blue-600 text-white rounded-t-lg">
        <h2 className="text-lg font-semibold">Gemini AI</h2>
        <button
          onClick={onClose}
          className="text-white hover:text-gray-200 transition"
        >
          ✖
        </button>
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-100">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-3 rounded-md max-w-[75%] ${
              msg.sender === "bot"
                ? "bg-blue-500 text-white self-start"
                : "bg-gray-300 text-black self-end"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      {/* Input Field */}
      <div className="p-4 border-t bg-white flex">
        <input
          type="text"
          placeholder="Ask Gemini..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border flex-1 rounded-md p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={fetchAIResponse}
          disabled={loading}
          className="ml-3 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition disabled:bg-gray-400"
        >
          {loading ? "..." : "Send"}
        </button>
      </div>
    </div>
  );
}

export default GeminiSidebar;
