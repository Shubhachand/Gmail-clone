import React, { useState } from "react";

function GeminiSidebar({ isOpen, onClose }) {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState("");

  const fetchAIResponse = async () => {
    if (!input) return;
    setLoading(true);
    setResponse("");

    try {
      const res = await fetch(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=no key",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [{ parts: [{ text: input }] }],
          }),
        }
      );

      const data = await res.json();
      setResponse(data?.candidates?.[0]?.content?.parts?.[0]?.text || "No response.");
    } catch (error) {
      setResponse("Error fetching AI response.");
    }

    setLoading(false);
  };

  return (
    <div
      className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 ease-in-out z-50`}
    >
      <div className="p-4 border-b flex justify-between items-center">
        <h2 className="text-lg font-semibold">Gemini AI</h2>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-800">
          ✖
        </button>
      </div>

      <div className="p-4 flex flex-col">
        <input
          type="text"
          placeholder="Ask something..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border rounded-md p-2 w-full"
        />
        <button
          onClick={fetchAIResponse}
          disabled={loading}
          className="mt-3 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition disabled:bg-gray-400"
        >
          {loading ? "Generating..." : "Ask AI"}
        </button>
        {response && (
          <div className="mt-4 p-2 bg-gray-100 rounded-md text-gray-800">
            {response}
          </div>
        )}
      </div>
    </div>
  );
}

export default GeminiSidebar;
