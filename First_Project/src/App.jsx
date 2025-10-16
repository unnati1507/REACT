import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  const [topics, setTopics] = useState([
    "Basics",
    "Single Page App",
    "Rendering",
    "DOM & Virtual DOM",
    "JSX",
    "React",
  ]);
  const [newTopic, setNewTopic] = useState("");

  const addTopic = () => {
    if (newTopic.trim()) {
      setTopics([...topics, newTopic]);
      setNewTopic("");
    }
  };

  const toggleTheme = () => setDarkMode(!darkMode);
  const resetCount = () => setCount(0);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center", // centers vertically
        height: "100vh", // full screen height
        backgroundColor: darkMode ? "#121212" : "#f5f5f5",
        color: darkMode ? "#f5f5f5" : "#121212",
        transition: "all 0.3s ease",
      }}
    >
      <div
        style={{
          width: "320px",
          backgroundColor: darkMode ? "#1f1f1f" : "#ffffff",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 0 10px rgba(0,0,0,0.2)",
          textAlign: "left",
          transition: "all 0.3s ease",
        }}
      >
        <h2 style={{ textAlign: "center" }}>🌟 React Tutorial</h2>

        <button
          onClick={toggleTheme}
          style={{
            width: "100%",
            padding: "8px",
            backgroundColor: darkMode ? "#444" : "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            marginBottom: "10px",
          }}
        >
          Toggle {darkMode ? "Light" : "Dark"} Mode
        </button>

        <h4>Topics</h4>
        <ul>
          {topics.map((topic, index) => (
            <li key={index}>{topic}</li>
          ))}
        </ul>

        <div style={{ marginTop: "10px" }}>
          <input
            type="text"
            value={newTopic}
            onChange={(e) => setNewTopic(e.target.value)}
            placeholder="Add new topic..."
            style={{
              width: "100%",
              padding: "8px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              marginBottom: "5px",
            }}
          />
          <button
            onClick={addTopic}
            style={{
              width: "100%",
              padding: "8px",
              backgroundColor: "#2196F3",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            ➕ Add Topic
          </button>
        </div>

        <div style={{ marginTop: "20px" }}>
          <button
            onClick={() => setCount(count + 1)}
            style={{
              width: "100%",
              padding: "10px",
              backgroundColor: "#4CAF50",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              marginBottom: "5px",
            }}
          >
            Count: {count}
          </button>
          <button
            onClick={resetCount}
            style={{
              width: "100%",
              padding: "10px",
              backgroundColor: "#f44336",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            🔄 Reset Counter
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
