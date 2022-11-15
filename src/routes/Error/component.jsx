import {Link} from 'react-router-dom';

const Error = () =>{
    return(
        <div>
        <main>
            <h2 style={{textAlign: 'center'}}>404 not found</h2>
        </main>
        <nav style={{textAlign: 'center'}}>
            <Link to="/">Back Home</Link>
        </nav>
        </div>
    )
}

export default Error;