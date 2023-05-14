import React from "react";
import "./Chat.css"
import {Avatar} from "@mui/material";

function Chat() {
    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar/>
                <div className="chat__headerInfo">
                    <h3>Chat name</h3>
                    <p>был(а) недавно</p>
                </div>
            </div>

            <div className="chat__body">
                <p className={`chat__message $ { true && 'chat__reciever'}`}>
                    <span className="chat__name"> Иван Иванов</span>
                    Hello, world!
                    <span className="chat__timestamp">15:00</span>
                </p>

            </div>
            <div className="chat__footer"></div>
        </div>
    )
}

export default Chat