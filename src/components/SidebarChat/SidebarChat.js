import React from "react";
import "./SidebarChat.css"
import {Avatar} from "@mui/material";

function SidebarChat() {
    return(
        <div className="sidebarChat">
            <Avatar/>
            <div className="sidebarChat__info">
                <h2>Chat Name</h2>
                <p>Последнее сообщение...</p>
            </div>
        </div>
    )
}

export default SidebarChat