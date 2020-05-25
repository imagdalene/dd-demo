import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Join from "./components/join";
import Chatroom from "./components/Chatroom";
import "./App.css";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Join} />
      <Route path="/chatroom" component={Chatroom} />
    </Router>
  );
}

export default App;
