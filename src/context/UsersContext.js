import axios from "axios";
import React, { createContext, useContext, useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import { contactList } from "../Data";
import {API, METHODS} from "../consts";

export const contactContext = createContext();
export const useContact = () => {
    return useContext(contactContext);
};

const INIT_STATE = {
    phoneNumber: "",
    whatsapp: false,
    name: "",
    time: new Date().getHours() + ":" + new Date().getMinutes(),
};

const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case METHODS.CheckWhatsapp:
            return {
                ...state,
                phoneNumber: action.payload,
            };
        case "add":
            return {
                ...state,
                whatsapp: action.payload,
            };
        case "addName":
            return {
                ...state,
                name: action.payload,
            };
        default:
            return state;
    }
};

const ContactContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE);
    const { authData } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const body = { phoneNumber: state.phoneNumber };
        axios
            .post(
                API +
                authData.idInstance +
                "/" +
                METHODS.CheckWhatsapp +
                "/" +
                authData.apiTokenInstance,
                body
            )
            .then((res) => {
                if (!res.data.Whatsapp) {
                    alert(
                        "Не найден такой контакт. Проверьте корректность номера телефона или же его подвяску к WhatsApp"
                    );
                } else {
                    dispatch({
                        type: "add",
                        payload: res.data.Whatsapp,
                    });
                    contactList.push(state);
                    alert("Контакт успешно добавлен");
                }
            })
            .catch((error) => {
                alert(
                    "Не найден такой контакт. Проверьте корректность номера телефона или же его подвяску к WhatsApp"
                );
            });
    };

    const values = {
        dispatch,
        state,
        handleSubmit,
    };

    return (
        <contactContext.Provider value={values}>{children}</contactContext.Provider>
    );
};

export default ContactContextProvider;