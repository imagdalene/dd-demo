import React, { useEffect, useState } from "react";
import DisplayUser from "./displayuser";
import Channel from "./channel";
import "./channel.css";

import * as roomService from "../../service/rooms";

export default function ChannelPanel() {
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    roomService
      .getRooms()
      .then((data) => {
        setChannels(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <div className="channel-container">
      <div>
        <DisplayUser />
      </div>
      <div>
        {Array.isArray(channels) &&
          channels.map((channel) => (
            <Channel channel={channel} key={channel.id} />
          ))}
      </div>
    </div>
  );
}
