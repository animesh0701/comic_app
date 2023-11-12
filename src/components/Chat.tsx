import React from "react";
import { useEffect } from "react";

const Chat = () => {
  const connect = () => console.log("Connected to Chat server");
  const disconnect = () => console.log("Disconnect from Chat server");

  useEffect(() => {
    connect();

    return () => disconnect();
  });

  return <div>Chat</div>;
};

export default Chat;
