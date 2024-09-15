import React, { useState } from "react";

const Register = ({ registar }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmarPassword, setConfirmarPassword] = useState("");

  const valid = (e) => {
    e.preventDefault();
    if (!email || !password || !confirmarPassword) {
        alert("Debe llenar todos los campos");
    } else if (password.length < 6) {
        alert("contraseña de contener un minimo de 6 caracteres");
    } else if (password !== confirmarPassword) {
        alert("Las contraseñas no coinciden");
    } else {
        alert("Registrado correctamente")
        registar(email, password)
        ;
      
      ;
    }
  };

  return (
    <>
        <form style={{
      display:'flex', flexDirection:'column', alignItems: "center"
    }} onSubmit={valid}>
        <h1>Register</h1>
        <h6>Email</h6>
        <input
          type="email"
          placeholder="Ingrese su correo"
          onChange={(e) => setEmail(e.target.value)}
        />
        <h6>Password</h6>
        <input
          type="password"
          placeholder="Ingrese su contraseña"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="Confirmar su contraseña"
          onChange={(e) => setConfirmarPassword(e.target.value)}
        />
        <br />
        <button type="submit" className="btn btn-primary">Register</button>
      </form>   
    </>
  );
};

export default Register;
