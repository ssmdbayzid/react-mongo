import React from 'react';

const AddUser = () => {

    const handleFormSubmit = e =>{
        e.preventDefault()
        const name  = e.target.name.value;
        const email  = e.target.email.value;
        const user = {name, email};

        // send data to the server
    
        fetch('http://localhost:5000/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user)
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
            <h1>This is  Add User Field</h1>
        <form onSubmit={handleFormSubmit}>
            <input type="text" name='name' placeholder='Name' required/>
            <br />
            <input type="email" name='email' placeholder='email' required/>
            <br />
            <input type="submit" value="Add User" />
            </form>
        
        </div>
    );
};

export default AddUser;