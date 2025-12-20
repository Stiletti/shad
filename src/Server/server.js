import { WebSocketServer } from 'ws';
import { v4 as uuidv4 } from 'uuid';

// WebSocket-Server erstelen
const wss = new WebSocketServer({port:8080})

// Auf eingehende Verbindung reagieren
wss.on('connection', ws => { // ws repraesentiert die verbindung zum Client
    const userId = uuidv4();
    console.log(`Ein Client hat sich verbunden.ID: ${userId}`)

    // Nachricht an Client senden
    ws.send(`Verbindung mit sChat erfolgreich. Deine Nutzer-ID: ${userId}`)

    const clients = new Map(); // Map nutzen um userID und username zu speichern

    // Nachrichten vom Client empfangen
    ws.on('message', (message) => {
        const parsedMessage = JSON.parse(message); // enthaltene Nachricht als JSON speichern
        console.log(parsedMessage)
        const { username, text } = parsedMessage;
        clients.set(ws, username); // Store username for this client

        // Nachricht an alle weiteren verbundenen Clients weiterleiten
        wss.clients.forEach((client) => {
            if (client !== ws && client.readyState === ws.OPEN) {
                const sender = clients.get(ws) || 'Unbekannt';
                client.send(`[${sender}]: ${text}`);
            }
        });
    });

    // Verbindung schliessen
    ws.on('close', () => {
        console.log(`Client ${userId} hat die Verbindung getrennt.`)
    })
})

console.log("WebSocket-Server laeuft auf ws://localhost:8080")