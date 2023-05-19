import { useParams } from "react-router-dom"

function Users () {
    let {userName} = useParams();
    return <h1>{userName}</h1>
}

export default Users