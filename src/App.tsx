import { Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar";
import Home from "./pages/home";
import Register from "./pages/register";
import Login from "./pages/login";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
