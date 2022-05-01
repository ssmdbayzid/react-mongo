import React, { useEffect, useState } from 'react';

const Home = () => {
   const [user, setUser] = useState([]);

   useEffect(() => {
       fetch('http://localhost:5000/user')
       .then(res => res.json())
       .then(data => setUser(data))
   },[])


   const handleDeleteUser = id =>{
       const proceed = window.confirm('You Want To Delete This User!!!')

       if(proceed){
        console.log("I will Delete This Items who's Id is", id)

       }
   }
    return (
        <div>
            <h1>My Total User: {user.length}</h1>
            {
                user.map(user => <li
                key={user._id}
                ><strong>Name</strong>&nbsp;:&nbsp; {user.name},:&nbsp;&nbsp;  <strong>Email:</strong> {user.email}
                <button onClick={() => handleDeleteUser(user._id)} style={{backgroundColor: 'red', marginLeft: '10px', borderRadius: '2px'}}>X</button>
                </li>)
            }
        </div>
    );
};

export default Home;