import { useParams } from "react-router-dom";
import useDataUsers from "../../../hooks/useDataUsers";
import { useEffect, useState } from "react";
import './style.scss'


const User = () =>{
    let {userId} = useParams();

    const userKey = Number(userId);
    const {data, error} = useDataUsers(`https://jsonplaceholder.typicode.com/users/${userKey}`, userKey);
    
    const [user_data, setUser] = useState([]);
    
    useEffect(()=>{
        setUser(data);
    }, [data]);

        if(user_data !== undefined){
            return(
                <div className="user">
                   <h2>User {userKey}</h2>
                   <p>Name - {user_data.name}</p>
                   <p>Username - {user_data.username}</p>
                   <p>Email - {user_data.email}</p>
                   <p>Website - {user_data.website}</p>
                </div>
            )
        }if(error !== null){
            return <h2>Error {error}</h2>
        }
    return <h2>Wait</h2>
}

export default User;