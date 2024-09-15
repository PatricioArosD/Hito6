import React, { useState } from "react";

const Login = ({ user }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");



  const validarLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Complete todos los campos");
    } else if (email == user.email && password != user.password) {
      alert("contraseña Incorrecta");
    } else if (email != user.email && password == user.password) {
      alert("Email Incorrecto");
    } else {
      alert("bienvenido");
      setEmail("");
      setPassword("");
    }
  };
  return (
    <div style={{
      display:'flex', flexDirection:'column', gap:'1rem', alignItems: "center"
    }}>
      <h1>Login</h1>
      <form onSubmit={validarLogin} >
        <h6>Email</h6>
        <input
          type="email"
          placeholder="Ingrese su correo"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <h6>Password</h6>

        <input
          type="password"
          placeholder="Ingrese tu contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    </div>
  );
};

export default Login;
