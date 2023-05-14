import React from "react";
import './Sidebar.css';
import SidebarChat from "../SidebarChat/SidebarChat";
import {Avatar, IconButton} from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';

function Sidebar() {
    return (
        <div className="sidebar">
          <div className="sidebar__header">
              <Avatar/>
              <div className="sidebar__headerRight">
                  <IconButton>
                      <MoreVertIcon/>
                  </IconButton>
              </div>
          </div>
            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchIcon/>
                    <input placeholder="Найти пользователя" type="text" />
                </div>
            </div>
                <div className="sidebar__chats">
                <SidebarChat />
                <SidebarChat />
                </div>
        </div>
    )
}

export default Sidebar