import React from "react";
import { useContext } from "react";
import { useState } from "react";
import UserContext from "../context/UserContext";

function Login() {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const {setUser} = useContext(UserContext);

    return (
        <div>
            <h1>Login</h1>
            <input 
                type="text"
                value={username}
                name="username"
                id="username"
                onChange={(event) => {setUsername(event.target.value)}}
            />
            <br />
            <input 
                type="password"
                value={password}
                name="pass"
                id="pass"
                onChange={(event) => {setPassword(event.target.value)}} 
            />
            <br />
            <button
                onClick={(event) => {
                    event.preventDefault();
                    setUser({
                        username,
                        password
                    });
                }}
            >login</button>
        </div>
    )
}

export default Login;