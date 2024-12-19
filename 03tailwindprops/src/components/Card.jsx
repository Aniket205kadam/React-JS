import React from "react";

// function Card(props) {
function Card({user, btnText="visit me"}) {
    // btnText="visit me" set the default value
    return (
        <div className="relative h-[400px] w-[400px] rounded-lg mb-4 mt-4">
            <img
            // src={props.user.avatarUrl}
            src={user.avatarUrl}
            // alt={props.user.username}
            alt={user.username}
            className="z-0 h-full w-full rounded-md object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-left">
                 {/* <h1 className="text-lg font-semibold text-white">{props.user.username}</h1> */}
                 <h1 className="text-lg font-semibold text-white">{user.username}</h1>
                <p className="mt-2 text-sm text-gray-300">
                {/* {props.user.aboutUs} */}
                {user.aboutUs}
                </p>
                <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
                {/* {btnText || "visit me"} */}
                {btnText}
                </button>
            </div>
        </div>
    )
}

export default Card;