import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {useAuth} from "../context/AuthContext";


const Loginpage = ({ user, setUser }) => {
    const { authData, setAuthData, handleSubmit, state } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (state.user) {
            navigate("/");
        } else {
            navigate("/login");
        }
    }, []);

    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setAuthData(Object.assign(authData, { [name]: value }));
    };

    return (
        <div>
                <form onSubmit={handleSubmit} className="login__form">
                    <label htmlFor="instance">idInstance</label>
                    <input id="instance" type="text"
                           onChange={handleChange}/>
                    <label htmlFor="token">apiTokenInstance</label>
                    <input id="token" type="text"
                           onChange={handleChange}/>
                    <button type="submit">Войти</button>
                </form>
        </div>
    );
};

export default Loginpage;