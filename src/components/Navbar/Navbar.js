import React, {useEffect,useState, Link} from 'react'
import "./Navbar.css";


function Navbar() {
    const [toggleMenu, setToggleMenu] = useState(false);
const [largeur, setLargeur] = useState((window.innerWidth))

    const toggleNavSmallScreen = () =>{
        setToggleMenu (!toggleMenu)
    }
useEffect (( )=> {

    const changeWidth = () =>{
setLargeur(window.innerWidth);

if(window.innerewidth >500) {
    setToggleMenu (false);
}
    }
window.addEventListener ('resize', changeWidth)

return () => {
    window.removeEventListener ('resize', changeWidth)
}
}, [])

  return (
    <nav>
        {(toggleMenu || largeur > 500) && ( 

     <ul className="liste">
         <li className="items"><Link to="./Characters"> Personnages</Link> </li>
         <li className="items">Comics</li>
         <li className="items">Favoris</li>
     </ul>
     )}

     <button onClick= {toggleNavSmallScreen} class Name="btn">BTN</button>
    </nav>
  )
}

export default Navbar;