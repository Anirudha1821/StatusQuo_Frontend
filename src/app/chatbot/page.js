'use client';
import React, { useState, useEffect } from "react";
import axios from "axios";
import { w3cwebsocket as W3CWebSocket } from "websocket";
import "../chatbot/chatbot.css";

const client = new W3CWebSocket('ws://localhost:5000/chatbot/chatbot-query');

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { user: "assistant", message: "Hey How are you?" },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    client.onopen = () => {
      console.log('WebSocket Client Connected');
    };
    
    client.onmessage = (message) => {
      const data = JSON.parse(message.data);
      console.log("data ,",data);
      setMessages([...messages, { user: "assistant", message: data.response }]);
    };
    
    return () => {
      console.log("---------")
    };
  }, [messages]);
  //clearance func
  // useEffect(() => {

    
  //   return () => {
  //     console.log("---------")
  //     client.close();
  //   };
  // }, []);

  const sendMessage = async () => {
    if (inputValue.trim().length > 0) {
      const newMessage = { user: "user", message: inputValue };
      setMessages([...messages, newMessage]);
      setInputValue("");
      setLoading(true);

      client.send(JSON.stringify({ query: inputValue }));

      setLoading(false);
    }
  };

  return (
    <div className="main h-screen flex flex-col mt-20 bg-white max-w-full">
      <div className="topper bg-gradient-to-tr from-[#13547a] to-[#80d0c7] p-5">
        <div className="name text-white font-bold text-2xl">StatusQuoAI</div>
      </div>
      <div className="msgs_cont flex-grow p-5 overflow-y-auto">
        <ul id="list_cont">
          {messages.map((message, index) => (
            <li
              key={index}
              className={`rchat ${index % 2 === 0 ? "bg-gradient-to-tr from-[#11ba91] to-[#0a6e55]" : "bg-white text-gray-900"
                } p-3 rounded-md w-fit mb-3`}
            >
              {message.message}
            </li>
          ))}
        </ul>
      </div>
      <div className="bottom bg-gray-800 p-5 flex items-center">
        <input
          type="text"
          id="txt"
          placeholder="Send a message"
          className="flex-grow bg-transparent border-b-2 border-gray-600 outline-none text-black p-2 mr-5"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          className="uil uil-messagebg-green-500 w-10 h-10 text-white p-2 bg-blue-500 rounded-md hover:bg-green-600"
          disabled={loading}
          onClick={sendMessage}
        >{">"}</button>
      </div>
    </div>
  );
};

export default Chatbot;
