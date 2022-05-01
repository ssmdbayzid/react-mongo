import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import AddUser from './component/AddUser/AddUser';
import Home from './Home/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/user/addUser' element={<AddUser></AddUser>}></Route>
      </Routes>
    </div>
  );
}

export default App;
