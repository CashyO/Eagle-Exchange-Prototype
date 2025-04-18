import React, { useState } from "react"

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
        const timestamp = new Date().toLocaleTimeString();
      setMessages([...messages, { text: newMessage, time: timestamp }]);
      setNewMessage("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
};

  return (
    <div>
      <h1>Messages</h1>
      <div>
        {messages.map((message, index) => (
          <p key={index}>{message.text}{" "} <span style={{ fontSize: '0.8em', color: 'gray' }}>{message.time}</span></p>
        ))}
      </div>
      <input
        type="text"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Type a message"
      />
      <button onClick={handleSendMessage}>Send</button>
      <button onClick={() => setMessages([])}>Clear Messages</button>
    </div>
  );
};

export default Messages;