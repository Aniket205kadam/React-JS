import React from "react";
import { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
    const {user} = useContext(UserContext);

    return (
        <h1>Welcome {user}</h1>
    )
}

export default Profile;