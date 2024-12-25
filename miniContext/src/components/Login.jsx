import React from "react";
import { useContext } from "react";
import { useState } from "react";
import UserContext from "../context/UserContext";

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const {setUser} = useContext(UserContext);

    
    const handleSubmit = (event) => {
        event.preventDefault();
        setUser({username, password});
    }

    return (
        <div>
            <h2>Login</h2>
            <input 
                type="text" 
                value={username} 
                onChange={(event) => setUsername(event.target.value)} 
                placeholder="username" 
            />
            <br />
            <input 
                type="password" 
                value={password} 
                onChange={(event) => setPassword(event.target.value)} 
                placeholder="password" 
            />
            <br />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}

export default Login;