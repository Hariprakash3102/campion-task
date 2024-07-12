import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";







const UserList= () => {

    const [data,SetData] = useState("");
    const [loading,SetLoading] = useState(true)
    // const [error,SetError] = useState(null)
    useEffect ( () => {
        axios.get('https://api.escuelajs.co/api/v1/products')
        .then(response => {
            SetData(response.data);
            SetLoading(false);
        });
        // .catch( e => {/
        //     SetError(e);
        //     SetLoading(false);
        // });
    }, []);

    
    if(loading) return <p>Loading.......</p>

    return(
        <div>
            <ul>
                {data.map(item => (
                    <li key={item.id}>
                        <Link to={`/Dashboard/${item.id}`}>{item}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default UserList;