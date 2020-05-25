import React from "react";
import { Link, useParams } from "react-router-dom";
import "./channel.css";

export default function Channel({ channel }) {
  const { name, id } = channel;
  const { roomId } = useParams();
  return (
    <div className={`linkRow selected-${roomId + "" == id + ""}`}>
      <Link
        activeClassName="active"
        className={`channel-selector`}
        to={`/chatroom/${id}`}
      >
        {name}
      </Link>
    </div>
  );
}
