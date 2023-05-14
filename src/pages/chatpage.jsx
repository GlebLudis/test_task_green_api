import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Chat from "../components/Chat/Chat";


function Chatpage() {
    return (
        <div className='app'>
            <div className="app__body">
                <Sidebar />
                <Chat/>
            </div>
        </div>
    );
}

export default Chatpage;