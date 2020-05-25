import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";

import ChannelPanel from "./channel-panel";
import ChatPanel from "./chat-panel";
import "./chatroom.css";

export default function Chatroom() {
  const match = useRouteMatch();

  return (
    <div className="chatroom-container">
      <div className="channel-panel">
        <Switch>
          <Route path={`${match.path}/:roomId`}>
            <ChannelPanel />
          </Route>
          <Route path={`${match.path}/`}>
            <ChannelPanel />
          </Route>
        </Switch>
      </div>
      <div className="chatroom-panel">
        <Switch>
          <Route path={`${match.path}/:roomId`}>
            <ChatPanel />
          </Route>
          <Route path={`${match.path}`}>
            <SelectChat />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

function SelectChat() {
  return (
    <div className="no-room">
      <div>
        <h1>Select a Room ...</h1>
      </div>
    </div>
  );
}
