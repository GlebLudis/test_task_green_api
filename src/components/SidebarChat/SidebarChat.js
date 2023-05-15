import React from "react";
import "./SidebarChat.css"
import {Avatar} from "@mui/material";

function SidebarChat(props) {
    const { userData } = props;
    return(
        <div className="sidebarChat">
            <Avatar/>
            <div className="sidebarChat__info">
                <h2>00000</h2>
                <p>Последнее сообщение...</p>
            </div>
        </div>
    )
}

export default SidebarChat