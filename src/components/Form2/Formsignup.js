import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = ({ setUser }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleSignup = async (event) => {
    try {
      event.preventDefault();
      setErrorMessage("");
   
      const response = await axios.post(
        `https://marvel-backend-mj.herokuapp.com/user/signup`,
        {
          username: username,
          email: email,
          password: password,
        }
      );

      if (response.data) {
        console.log("J'ai bien réussi à créer un compte");
        setUser(response.data.token);
        navigate("/");
      }
    } catch (error) {
      console.log(error.response.status);
      if (error.response.status === 409) {
        setErrorMessage("Cet email a déjà un compte !");
      }
    }
  };
  return (
    <div>
      <form onSubmit={handleSignup}>
      <h1>Inscription</h1>
        <input
          value={username}
          type="text"
          placeholder="pseudo"
          onChange={(event) => setUsername(event.target.value)}
        />
        <br />

        <input
          value={email}
          type="email"
          placeholder="email"
          onChange={(event) => setEmail(event.target.value)}
        />
        <br />

        <input
          value={password}
          type="password"
          placeholder="mot de passe"
          onChange={(event) => setPassword(event.target.value)}
        />
        <br />
        <input type="submit" value="S'inscrire" />
        <p style={{ color: "red" }}>{errorMessage}</p>
      </form>
    </div>
  );
};

export default Signup;