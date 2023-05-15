import axios from "axios";
import React, { createContext, useContext, useReducer } from "react";
import { useAuth } from "./AuthContext";
import { messagesList } from "../Data";
import {API, METHODS} from "../consts";
import {useContact} from "./UsersContext";

export const chatContext = createContext();
export const useChat = () => {
    return useContext(chatContext);
};

const INIT_STATE = {
    message: "",
    idMessage: "",
    senderID: 0,
};

const reducer = (chatState = INIT_STATE, action) => {
    switch (action.type) {
        case METHODS.SendMessage:
            return {
                ...chatState,
                message: action.payload,
            };
        case "send":
            return {
                ...chatState,
                idMessage: action.payload,
            };
        default:
            return chatState;
    }
};

const ChatContextProvider = ({ children }) => {
    const [chatState, dispatch] = useReducer(reducer, INIT_STATE);
    const { authData } = useAuth();
    const { state } = useContact();
    console.log(chatState);

    const getMessage = () => {
        axios
            .get(
                API +
                authData.idInstance +
                "/" +
                METHODS.ReceiveNotification +
                "/" +
                authData.apiTokenInstance
            )
            .then((res) => {
                console.log(res.data.body);
            });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const body = {
            chatId: state.phoneNumber + "@c.us",
            message: chatState.message,
        };
        console.log(body);
        axios
            .post(
                API +
                authData.idInstance +
                "/" +
                METHODS.SendMessage +
                "/" +
                authData.apiTokenInstance,
                body
            )
            .then((res) => {
                console.log(res.data);
                dispatch({
                    type: "send",
                    payload: res.data.idMessage,
                });
                messagesList.push(chatState);
                console.log(messagesList);
                // getMessage();
            })
            .catch((error) => {
                alert(
                    "no whapp"
                );
            });
    };
    const values = { dispatch, chatState, handleSubmit };

    return <chatContext.Provider value={values}>{children}</chatContext.Provider>;
};

export default ChatContextProvider;