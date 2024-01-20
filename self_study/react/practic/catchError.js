import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Users() {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        async function fetchUser() {
            try{
            const response = await axios.get(
                `https://${window.location.hostname}:8190/`
            );
            setUsers(response.data);}
            catch(e){
                setError("에러 발생!")
            }

        
        };
        fetchUser();
    }, []);
    
    const userName = users.map(
        (user) => (<li key={user.id}> {user.name} </li>)
    );

    if (error) return <h4>에러 발생!</h4>;
    return (
        <>
            <h4>사용자 리스트</h4>
            <div> {userName} </div>
        </>
    );
}

export default Users;
