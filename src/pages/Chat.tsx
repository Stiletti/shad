import { useEffect, useState } from "react";
import "./Chat.css";

export function Chat() {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [messages, setMessages] = useState<{ text: string; self: boolean }[]>(
    []
  );
  const [input, setInput] = useState("");
  const [username, setUsername] = useState("");

  useEffect(() => {
    // Nutzernamen per promt eingeben
    const name = prompt("Nutzername: ");
    if (name) {
      setUsername(name);
    } else {
      setUsername("Anonymous");
    }

    // Verbindung zum WebSocket-Server herstellen
    const ws = new WebSocket("ws://localhost:8080");
    setSocket(ws);

    // Nachrichten vom Server empfangen
    ws.onmessage = (e) => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: e.data, self: false }, // Nachricht von anderen Benutzern
      ]);
    };

    // Verbindung schließen
    return () => {
      ws.close();
    };
  }, []);

  function sendMessage() {
    if (socket && input.trim() !== "") {
      const message = JSON.stringify({ username, text: input });
      socket.send(message); // Nachricht als JSON-String an den Server senden
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: `[${username}]: ${input}`, self: true },
      ]);
      setInput(""); // Eingabefeld leeren
    }
  }

  return (
    <>
      <h1 className="text-center border-b-4 w-full">sChat</h1>
      <div id="messages">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.self ? "self" : "other"}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="flex flex-row items-center justify-center p-2 gap-2 border-t-4 w-full">
        <input
          id="messageInput"
          type="text"
          placeholder="Nachricht eingeben..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              sendMessage();
            }
          }}
          className="w-12/13 p-2 border-2 rounded-lg"
        />
        <button
          className="p-2 border-2 rounded-lg"
          id="sendButton"
          onClick={sendMessage}
        >
          Senden
        </button>
      </div>
    </>
  );
}
