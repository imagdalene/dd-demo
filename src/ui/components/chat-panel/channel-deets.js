import React, { useState, useEffect } from "react";

import "./chat-panel.css";

const defaultUserData = {
  userName: "",
  sessionStart: 0,
};

export default function ChannelDeets({ details }) {
  const { name, users = [] } = details;
  const [userData, setUserData] = useState(defaultUserData);
  useEffect(() => {
    const userData = window.localStorage.getItem("user") || defaultUserData;
    setUserData(JSON.parse(userData));
  }, []);
  const userNameInChat = users.find((u) => u === userData.userName);
  return (
    <div className="channel-deets">
      <h2>{name}</h2>
      <div>
        {userNameInChat ? null : (
          <span className="userNames self">{userData.userName},</span>
        )}
        {users.map((user, idx) => (
          <span
            key={user}
            className={`userNames ${user === userData.userName ? "self" : ""}`}
          >
            {user}
            {idx !== users.length - 1 ? "," : ""}
          </span>
        ))}
      </div>
    </div>
  );
}
