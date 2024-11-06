import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserProvider";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("emgalleg1o@uao.edu.co");
  const [password, setPasword] = useState("0987654321");
  const navegate = useNavigate();
  const { registerUser } = useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault(); // estaba mal escri to  e.preventdefault();
    console.log("enviando datos-->", email, password);
    try {
      await registerUser(email, password);
      console.log("usuario registrado-->", email, password);
      navegate("/");
    } catch (error) {
      console.log(error.code);
    }
  };
  return (
    <>
      <div>
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="pasword"
            value={password}
            onChange={(e) => setPasword(e.target.value)}
          />
          <button type="submit">registrarse</button>
        </form>
      </div>
    </>
  );
};

export default Register;
