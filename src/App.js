import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './pages/home/Navbar';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './pages/Login/Login';







function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar/>}/>
        **<Route path="loginadmin" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
