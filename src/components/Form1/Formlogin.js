import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Formlogin.css"

const Formlogin = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (event) => {
    try {
      event.preventDefault();
      const response = await axios.post (
        `https://marvel-backend-mj.herokuapp.com/user/login`,
        {
          email: email,
          password: password,
        }
      );

      console.log(response.data);
      if (response.data.token) {
        setUser(response.data.token);
        navigate("/");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <h1>Connexion</h1>
      <input
        value={email}
        placeholder="email"
        type="email"
        onChange={(event) => setEmail(event.target.value)}
      />
      <br />
      <input
        type="password"
        placeholder="mot de passe"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <br />
      <input type="submit" value="Se connecter" />
      <br />
    </form>
  );
};

export default Formlogin;