import Home from "./pages/Home";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Pizza from "./pages/Pizza";
import { Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound";
import { CartProvider } from "./context/CartContext";
import Profile from "./components/Profile";
import  ApiProvider  from "./context/ApiContext";



const App=()=> {
  const [user, setUser] = useState(null);
  const handleRegister = (email, password) => {
    setUser({ email, password });
  };
  
  
  return (
    
    <>
    <ApiProvider>
    <CartProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/register" element={<Register registar={handleRegister}/>} />
        <Route path="/login" element={<Login user={user}/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/pizza/p001" element={<Pizza/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/*" element={<NotFound/>} />        
      </Routes>
      <Footer />
      </CartProvider>
      </ApiProvider>
    </>
  );
}

export default App;
