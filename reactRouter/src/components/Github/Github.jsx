import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
    // const [data, setData] = useState([]);

    // useEffect(() => {
    //     fetch('https://api.github.com/users/aniket205kadam')
    //     .then(response => response.json())
    //     .then((response) => {
    //         setData(response);
    //     }) 
    // }, []);

    const data = useLoaderData();

    return (
        <div className="text-center m-4 bg-green-500 text-white text-3xl"> 
        Github Follower: {data.followers}
        <div class="w-24 h-24 rounded-full overflow-hidden">
        <img src={data.avatar_url} alt={data.name} class="w-full h-full object-cover" />
        </div>
        </div>
    )
}

export default Github;

export const githubInfoLoader = async () => {
    console.log('githubInfoLoader() function is called');
    const response = await fetch('https://api.github.com/users/hiteshchoudhary');
    return response.json();
}