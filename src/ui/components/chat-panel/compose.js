import React, { useState, useEffect } from "react";

import "./channel.css";

const defaultUserData = {
  userName: "",
  sessionStart: 0,
};

export default function Compose({ sendMessage }) {
  const [value, setValue] = useState("");
  const [userData, setUserData] = useState(defaultUserData);
  useEffect(() => {
    const userData = window.localStorage.getItem("user") || defaultUserData;
    setUserData(JSON.parse(userData));
  }, []);
  return (
    <div className="channel-compose">
      <div className="compose-input-container">
        <input
          className="compose-input"
          placeholder="Type a message"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              setValue("");
              sendMessage(userData.userName, value);
            }
          }}
        />
      </div>
      <div
        className="compose-button-div"
        role="button"
        onClick={() => {
          setValue("");
          sendMessage(userData.userName, value);
        }}
      >
        Send
      </div>
    </div>
  );
}
