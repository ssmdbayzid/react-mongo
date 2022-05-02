import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import AddUser from './component/AddUser/AddUser';
import Home from './Home/Home';
import UpdateUser from './component/UpdateUser/UpdateUser';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/user/addUser' element={<AddUser></AddUser>}></Route>
        <Route path='/user/update-user/:id' element={<UpdateUser></UpdateUser>}></Route>
      </Routes>
    </div>
  );
}

export default App;
