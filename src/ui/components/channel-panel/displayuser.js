import React, { useState, useEffect } from "react";
import moment from "moment";

const ms = 1000;
const min = 60 * ms;

const defaultUserData = {
  userName: "",
  sessionStart: 0,
};

export default function DisplayUser() {
  const [userData, setUserData] = useState(defaultUserData);
  const [now, setNow] = useState(moment(new Date()));
  useEffect(() => {
    const userData = window.localStorage.getItem("user") || defaultUserData;
    setUserData(JSON.parse(userData));
  }, []);

  setTimeout(() => {
    setNow(moment(new Date()));
  }, min);

  const { userName, sessionStart } = userData;
  const momentSessionStart = moment(sessionStart);

  return (
    <div className="displayUser">
      <h2>{userName}</h2>
      <span>Online for {now.diff(momentSessionStart, "minutes")} minutes</span>
    </div>
  );
}
