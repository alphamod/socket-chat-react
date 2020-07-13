import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";

import "./chat.css";

import InfoBar from '../InfoBar/InfoBar';
import Input from '../Input/Input';
import Messages from "../Messages/Messages";
import UserContainer from "../UserContainer/UserContainer";

let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);

  const ENDPOINT = "https://socket-react-chat-server.herokuapp.com/";

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);
    socket = io(ENDPOINT);
    setName(name);
    setRoom(room);

    socket.emit("join", { name, room }, () => {
      // if (error) {
      //   alert(error);
      // }
    });


    return () => {
      socket.emit("disconnect");
      socket.off();
    };
  }, [ENDPOINT, location.search]);

  useEffect(() => {
    socket.on("message", message => {
      setMessages(msgs => [...msgs, message]);
    });

    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });

  }, []);

  const sendMessage = (event) => {
    event.preventDefault();
    //   console.log('works');
    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };

  // console.log(message, messages);

  return (
    <div className="container-fluid container-bg vh-100">
      <div className="container">
        <div className="row vh-100">
          <div className="col-xl-8 bg-white shadow-lg d-flex flex-column chat-window rounded p-0 m-auto">
            <InfoBar room={room} />
            <div className="d-flex full-height">
              <UserContainer users={users} />
              <div className="w-100">
                <Messages messages={messages} name={name} />
              </div>
            </div>
            <div className="mt-auto rounded-bottom border-top shadow-lg">
              <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Chat;
