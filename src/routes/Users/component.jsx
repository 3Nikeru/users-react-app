import {NavLink, Outlet, Link} from 'react-router-dom';
import { useState, useEffect } from 'react';
import useDataUsers from '../../hooks/useDataUsers';
import './style.scss';

const Users = () =>{
    const {data} = useDataUsers('https://jsonplaceholder.typicode.com/users');
    
    const [user_data, setUser] = useState([]);

    useEffect(()=>{
        setUser(data);
    }, [data]);

    return(
        <div>
            <div style={{display: "flex", justifyContent: "center", marginBottom: "20px"}}>
            <Link to="/" style={{textAlign: "center", display: "block", marginRight: "10px" }}>Home</Link>
            <Link to="/expenses" style={{textAlign: "center", display: "block" }}>Expenses</Link>
            </div>
            <nav className='users'>
                    {user_data.map(user => (
                    <NavLink
                        style={({ isActive }) => {
                            return {
                                display: "block",
                                margin: "1rem 0",
                                color: isActive ? "#343434" : ""
                            };
                        }}
                        to={`/users/${user.id}`}
                        key={user.id}
                    >
                        {user.name}
                    </NavLink>
                    ))}
            </nav>
            <Outlet/>
        </div>
    )
}

export default Users;