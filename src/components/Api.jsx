import { useState, useEffect } from 'react';
import Presentacion from './Presentacion';

const Api = () => {

    const [users,setUsers] = useState([]);

    useEffect(() => {
        fetch('https://reqres.in/api/users')
        .then(data =>data.json())
        .then(json => setUsers(json.data));
    },[])

    console.log({users});

    return (
        <div style={{width:'100%'}}>
            <h2>Ejemplo de Api</h2>
            <ul style={{width:'100%', display:'flex', flexWrap:'wrap', listStyleType: 'none'}}>
                {users.map(user => (
                    <li style ={{flex:'1'}} className='m-2' key={user.id}>
                        <Presentacion user = {user}/>
                    </li>
                ))}
            </ul>
        </div>
    )
}   

export default Api   
