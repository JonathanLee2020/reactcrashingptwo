import { useParams } from "react-router-dom"
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import axios from "axios"
import { useEffect, useState } from "react";
import Gamer from "../components/Gamer.jsx"

function Users() {
    //lets get the data first
    //now we store the data into a state variable, initialised as a data structure matching the raw data from
    //now we run the funciotn with useEffect
    //next we return our information to the page
    //we export out information
    let [user, getId] = useState({});
    let { id } = useParams();
    async function getData () {
        let { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        getId(data);
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <Gamer 
            id = {user.id}
            name = {user.name}
            email = {user.email}
            username = {user.username}
        />
    )
}

export default Users