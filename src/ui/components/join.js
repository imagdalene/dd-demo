import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./join.css";

export default function Join({ setUserName, setSessionStart }) {
  const [value, setValue] = useState("");
  const history = useHistory();
  const submitAction = () => {
    window.localStorage.setItem(
      "user",
      JSON.stringify({
        userName: value,
        sessionStart: new Date(),
      })
    );
    history.push(`/chatroom`);
  };
  return (
    <div className="container">
      <div className="form-element-width inputDiv">
        <input
          className="joinInput"
          placeholder="Type your username ..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              submitAction();
            }
          }}
        />
      </div>

      <div className="form-element-width">
        <button className="joinButton" onClick={submitAction}>
          Join the DoorDash chat!
        </button>
      </div>
    </div>
  );
}
