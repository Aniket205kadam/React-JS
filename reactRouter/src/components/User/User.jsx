import React from "react";
import { useParams } from "react-router-dom";

function User() {
    const {userId} = useParams();
    return (
        <div className="flex justify-center items-center h-screen bg-orange-400 text-white text-6xl">
            User: {userId}
        </div>
    )
}

export default User;