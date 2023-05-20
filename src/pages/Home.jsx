// import { useEffect } from "react"
import React, { useEffect, useState } from "react"
import axios from "axios"
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Gamer from "../components/Gamer.jsx"
// import Gamer from "./Users.jsx"


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
                    <div style={{border: "2px solid black"}}>
                        <Link to={`/users/${user.id}`}>
                            <Gamer
                            id={user.id} 
                            name ={user.name} 
                            email={user.email} 
                            username={user.username}  
                            />
                        </Link>
                    </div>
                )
            })}
        </div>
        
    }
    else return <h1>Loading...</h1>;
}


export default Home