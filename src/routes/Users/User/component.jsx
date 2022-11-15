import { useParams } from "react-router-dom";
import useDataUsers from "../../../hooks/useDataUsers";
import { useEffect, useState } from "react";
import './style.scss'


const User = () =>{
    let {userId} = useParams();

    const {data, error} = useDataUsers('https://jsonplaceholder.typicode.com/users');
    
    const [user_data, setUser] = useState([]);
    
    useEffect(()=>{
        setUser(data);
    }, [data]);

    function getUser(usersId){
        return user_data.find(user => user.id === usersId)
    }
    let user = getUser(Number(userId));
    console.log(user);
        if(user !== undefined){
            return(
                <div className="user">
                   <h2>User {userId}</h2>
                   <p>Name - {user.name}</p>
                   <p>Username - {user.username}</p>
                   <p>Email - {user.email}</p>
                   <p>Website - {user.website}</p>
                </div>
            )
        }if(error !== null){
            return <h2>Error {error}</h2>
        }
    return <h2>Wait</h2>
}

export default User;