import { useEffect, useState } from "react"

let useDataUsers = (url) =>{
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(setData)
        .catch(setError)
    }, [])

    return {
        data,
        error
    }
}

export default useDataUsers;
