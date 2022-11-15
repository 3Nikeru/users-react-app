import { useEffect, useState } from "react"

let useDataUsers = (url, id) =>{
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(setData)
        .catch(setError)
    }, [url, id])

    return {
        data,
        error
    }
}

export default useDataUsers;
