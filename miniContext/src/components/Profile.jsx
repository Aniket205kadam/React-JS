import React from "react";
import { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
    const {user} = useContext(UserContext);

    if (!user) {
        return (
            <h3>Please login</h3>
        );
    } else {
        return (
            <div>Welcome {user.username}</div>
        )
    }
}

export default Profile;