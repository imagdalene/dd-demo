import React, { useState, useEffect } from "react";

const defaultUserData = {
  userName: "",
  sessionStart: 0,
};

export default function Message({ msgBody }) {
  const { name, message, reaction = "" } = msgBody;
  const [userData, setUserData] = useState(defaultUserData);
  useEffect(() => {
    const userData = window.localStorage.getItem("user") || defaultUserData;
    setUserData(JSON.parse(userData));
  }, []);

  const isSelfAuthored = userData.userName === name;

  return (
    <div
      className={`single-message-container ${
        isSelfAuthored ? "self-authored" : ""
      }`}
    >
      <div className={`message-unit`}>
        <div
          className={`single-message-text ${
            isSelfAuthored ? "self-authored" : ""
          }`}
        >
          {message}
        </div>
        {!isSelfAuthored && <div className="single-message-author">{name}</div>}
        {reaction && <div>{reaction}</div>}
      </div>
    </div>
  );
}
