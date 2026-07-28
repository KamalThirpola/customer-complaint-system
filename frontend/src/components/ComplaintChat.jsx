import { useState } from "react";
import api from "../services/api";

function ComplaintChat({ complaint }) {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const askAI = async () => {
    if (!question) return;

    try {
      const response = await api.post("/ai/chat", {
        complaint,
        question,
      });

      setAnswer(response.data.answer);
    } catch (error) {
  console.log(error);
  console.log(error.response);
  alert(JSON.stringify(error.response?.data || error.message));
}
  };
const startListening = () => {
  if (!("webkitSpeechRecognition" in window)) {
    alert("Speech Recognition is not supported in this browser.");
    return;
  }

  const recognition = new window.webkitSpeechRecognition();

  recognition.lang = "en-US";
  recognition.interimResults = false;
  recognition.continuous = false;

  recognition.onstart = () => {
    alert("Listening...");
  };

  recognition.onresult = (event) => {
    setQuestion(event.results[0][0].transcript);
  };

  recognition.onerror = (event) => {
    alert("Error: " + event.error);
  };

  recognition.start();
};

  return (
    <div
      style={{
        marginTop: "20px",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "10px",
      }}
    >
      <h3>Ask AI About This Complaint</h3>

      <input
        type="text"
        placeholder="Ask me anything about this complaint..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "10px",
        }}
      />

        <button onClick={startListening}>🎤</button>

<button onClick={askAI}>Send</button>

      {answer && (
        <div style={{ marginTop: "20px" }}>
          <strong>AI Answer:</strong>
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}

export default ComplaintChat;