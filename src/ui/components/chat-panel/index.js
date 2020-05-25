import React, { useState, useEffect } from "react";
import Message from "./message";
import Compose from "./compose";
import ChannelDetails from "./channel-deets";
import { useParams } from "react-router-dom";
import * as roomService from "../../service/rooms";
import { w3cwebsocket } from "websocket";
import "./chat-panel.css";

const baseURL = process.env.WSS_PUBLIC_URL || "ws://localhost:8080";

export default function ChatPanel() {
  const { roomId } = useParams();
  const [currentRoomId, setCurrentRoomid] = useState("");

  const [messages, setMessages] = useState([]);
  const [channelDetails, setChannelDetails] = useState({});
  const [client, setClient] = useState(
    new w3cwebsocket(baseURL + "/rooms/" + roomId)
  );

  useEffect(() => {
    if (currentRoomId !== roomId) {
      roomService
        .getRoomMessages(roomId)
        .then((data) => {
          setMessages(data);
        })
        .catch((error) => {
          console.error(error);
        });
      roomService
        .getRoomDetails(roomId)
        .then((data) => {
          setChannelDetails(data);
        })
        .catch((error) => {
          console.error(error);
        });
      client.close();
      const newClient = new w3cwebsocket(baseURL + "/rooms/" + roomId);
      setClient(newClient);
      newClient.onopen = () => {
        console.log("Client opened");
      };

      setCurrentRoomid(roomId);
    }

    client.onmessage = (message) => {
      const data = JSON.parse(message.data);
      if (data.roomId == roomId) {
        setMessages([...messages, JSON.parse(message.data)]);
      }
    };
  }, [roomId, messages]);

  return (
    <div className="chat-container">
      <ChannelDetails details={channelDetails} />

      <div className="message-container">
        {Array.isArray(messages) &&
          messages.map((msgBody) => (
            <Message msgBody={msgBody} key={msgBody.id} />
          ))}
      </div>
      <Compose
        sendMessage={(userName, message, reaction = "") => {
          client.send(
            JSON.stringify({ roomId, name: userName, message, reaction })
          );
          // roomService.postRoomMessage(roomId, userName, message, reaction);
        }}
      />
    </div>
  );
}
