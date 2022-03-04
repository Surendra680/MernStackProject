import React,{useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";

function App() {
	const[user, setUser]=useState({})
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={
			user&&user._id?<Home/>:<Login/>
		  } />
          <Route path="/login" element={<Login  setUser={setUser} />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
