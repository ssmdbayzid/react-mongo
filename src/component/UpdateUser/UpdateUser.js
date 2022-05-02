import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateUser = () => {
    const {id} = useParams();
    const [user, setUser] = useState([]);

    useEffect(() => {
        const url = `http://localhost:5000/user/${id}`
        fetch(url)
        .then(res => res.json())
        .then(data => setUser(data))
    }, []);

    const handleFormSubmit = e => {
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const updateUser = { name, email };

        // send data to the server
        const url = `http://localhost:5000/user/${id}`

        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updateUser)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data)
                e.target.reset()
            })
            .catch(error => {
                console.error('This is error', error)
            })
    }



    return (
        <div>
            <h1>My Update User: {user.name}</h1>
            <form onSubmit={handleFormSubmit}>
                <input type="text" name='name' placeholder='Name' required />
                <br />
                <input type="email" name='email' placeholder='email' required />
                <br />
                <input type="submit" value="Update User" />
            </form>
        </div>
    );
};

export default UpdateUser;