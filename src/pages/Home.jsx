// import { useEffect } from "react"
import React, { useEffect, useState } from "react"
import axios from "axios"

function Home () {
    let [users, setUsers] = useState([]);
    async function main() {
        let { data } = await axios.get("https://jsonplaceholder.typicode.com/users")
        setUsers(data);
    }
    
    useEffect(() => {
       setTimeout(() => {
         main();
       }, 500);
    }, [])
    


    if (users.length > 0) {
        return <div>
            {users.map((user) => {
                return (
                    <div>
                        <div>{user?.id}</div>
                        <div>{user?.name}</div>
                        <div>{user?.email}</div>
                        <div>{user?.username}</div>
                    </div>
                )
            })}
        </div>
        
    }
    else return <h1>Loading...</h1>;
}


export default Home