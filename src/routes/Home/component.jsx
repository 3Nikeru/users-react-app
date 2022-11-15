import {Link, Outlet} from 'react-router-dom';

const Home = () =>{
    return(
        <div>
            <h2 style={{textAlign: 'center'}}>Welcome to the homepage!</h2>
            <nav style={{textAlign: 'center', padding: '30px 0'}}>
                <Link to="users">Users</Link> | {" "}
                <Link to="expanses">Expenses</Link>
            </nav>
            <p style={{textAlign: "center"}}>Hello, this app you can use when you need to find more information from your big data. I hope it would be helpful:)</p>
            <Outlet/>
        </div>
    )
}

export default Home;