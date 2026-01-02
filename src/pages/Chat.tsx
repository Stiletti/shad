import { useEffect, useRef, useState } from "react";
import "./Chat.css";

export function Chat() {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [messages, setMessages] = useState<{ text: string; self: boolean }[]>(
    []
  );
  const [input, setInput] = useState("");
  const [username, setUsername] = useState("");
  const messagesEndRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    // Nutzernamen per promt eingeben
    const name = prompt("Nutzername: ");
    if (name) {
      setUsername(name);
    } else {
      setUsername("Anonymous");
    }

    // Verbindung zum WebSocket-Server herstellen
    const ws = new WebSocket("ws://192.168.2.138:8080");
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

  // Auitomatisch zur letzten Nachricht scrollen
  useEffect(() => {
      if (messagesEndRef.current) {
        messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, [messages]);

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
      <h1 className="text-center border-b-4 p-2 w-full">sChat</h1>
      <div id="messages">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.self ? "self" : "other"}`}>
            {msg.text}
          </div>
        ))}
      <div ref={messagesEndRef} />
      </div>
      <div className="flex flex-row items-center justify-center gap-2 border-t-4 p-2 w-full">
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
          className="grow p-2 border-2 rounded-lg bg-white/10"
        />
        <button
          className="p-2 border-2 rounded-lg bg-white/30"
          id="sendButton"
          onClick={sendMessage}
        >
          Senden
        </button>
      </div>
    </>
  );
}
