import React from "react";
import {useContact} from "../../context/UsersContext";
import './Sidebar.css';
import SidebarChat from "../SidebarChat/SidebarChat";
import {Avatar, IconButton} from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import {contactList} from "../../Data";
import {METHODS} from "../../consts";


function Sidebar() {

    const { state, dispatch } = useContact();

    const handleChangeName = (e) => {
        e.preventDefault();
        const { value } = e.target;
        dispatch({
            type: "addName",
            payload: value,
        });
    };

    const handleChange = (e) => {
        e.preventDefault();
        const { value } = e.target;
        dispatch({
            type: METHODS.Whatsapp,
            payload: value,
        });
    };


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
                    <input placeholder="Найти пользователя" name="idChat" type="text" onChange={handleChange} />
                </div>
            </div>

            {contactList.map((userData) => (
                <Sidebar userData={userData} />
            ))}
                <div className="sidebar__chats">
                <SidebarChat />
                <SidebarChat />
                </div>
        </div>
    )
}

export default Sidebar