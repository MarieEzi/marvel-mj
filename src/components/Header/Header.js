import { Link, useNavigate } from "react-router-dom";
import "./header.css"
//import logo from "./img/logo.png";

    function Header({ token, setUser }) {

        const navigate = useNavigate();


        return (
            <header className="header-component">
                <img  alt="logo-marvel" 
                className="logo" 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/1600px-Marvel_Logo.svg.png?20161025051221"
                onClick={() => {
                    navigate("/");
                } } />

                <div className="nav">

                    <Link to="/Characters">Personnages</Link>
                    <br />
                    <Link to="/Comics">Comics</Link>
                    <br />
                    <Link to="/Favoris">Favoris</Link>
                </div>


                {token === null ? (
                    <div className="auth">
                        <Link to="/signup">S'inscrire</Link>
                        <Link to="/login">Se connecter</Link>
                    </div>
                ) : (
                    <button
                        onClick={() => {
                            setUser(null);
                            navigate("/");
                        } }
                    >
                        Se déconnecter
                    </button>
                )}
            </header>
        );
    }

export default Header;