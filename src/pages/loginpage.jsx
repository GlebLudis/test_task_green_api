import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";

const Loginpage = () => {
    const [err, setErr] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = e.target[0].value;
        const password = e.target[1].value;

        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate("/");
        } catch (err) {
            setErr(true);
        }
    };

    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">CHATAPP</span>
                <form onSubmit={handleSubmit}>
                    <TextField id="standard-basic" label="E-mail" variant="standard" />
                    <TextField id="standard-basic" label="Password" variant="standard" />
                    <Button variant="contained" type="submit">
                        Login
                    </Button>
                    {err && <span>Something went wrong</span>}
                </form>
                <p>
                    You don't have an account? <Link to="/register">Register </Link>
                </p>
            </div>
        </div>
    );
};

export default Loginpage;