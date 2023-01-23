
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from './Layout/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import AddUser from './User/AddUser';
import UserEdit from './User/UserEdit';

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About />} />
          <Route path="/add/user" element={<AddUser />} />
          <Route path="/users/edit/:id" element={<UserEdit />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
