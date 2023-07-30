import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import avatar from "../../../assets/img/user.png";
import { getMessages, sendMessage } from "../../../services/paymentService";
import { IMessages } from "../../../interfaces/serviceInterfaces";
import clip from "../../../assets/icons/clip.svg";
import send from "../../../assets/icons/send.svg";
import { useLocation } from "react-router-dom";

interface ChatProps {
  myName: string;
}
const Chat = ({ myName }: ChatProps) => {
  const [messageText, setMessageText] = useState("");
  const token = localStorage.getItem("token") || "";
  const [messages, setMessages] = useState<IMessages>();
  const pathname = useLocation().pathname;

  const getAllMessages = async () => {
    const { data } = await getMessages(
      +pathname.split("/")[3],
      token.replace(/"/g, "")
    );
    setMessages(data);
  };

  useEffect(() => {
    const interval = setInterval(() => getAllMessages(), 3000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className={styles.main}>
      <div className={styles.topBlock}>
        <img src={avatar} alt="" className={styles.avatar} />
        <p className={styles.userName}>User Name</p>
      </div>
      <div className={styles.chatContent}>
        {messages?.data.map((item, index) => (
          <div
            className={`${
              myName === item.user.login ? styles.myMessage : styles.message
            }`}
            key={index}
          >
            <p className={styles.messageUser}>{item.user.login}</p>
            <p className={styles.messageText}>{item.text}</p>
          </div>
        ))}
      </div>
      <div className={styles.bottomBlock}>
        <div className={styles.inputBlock}>
          <img src={clip} alt="" className={styles.clip} />
          <input
            type="text"
            placeholder="Введите сообщение"
            className={styles.input}
            value={messageText}
            onChange={(e) => setMessageText(e.target.value)}
          />
        </div>
        <img
          src={send}
          alt=""
          className={styles.send}
          onClick={() => {
            sendMessage(messageText, 1, token.replace(/"/g, ""));
            setMessageText("");
          }}
        />
      </div>
    </div>
  );
};
export default Chat;
