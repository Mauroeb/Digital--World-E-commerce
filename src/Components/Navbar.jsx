import React, {useState} from 'react'
import styled from 'styled-components'
import BurguerButton from './BurguerButton'
import { Link } from "react-router-dom"



const Navbar = () => {
// funcion para cuando se clickea el botón se cambie el estado
  const [clicked, setClicked] = useState(false)

  const click = () => {
    // cuando está false lo pasa a true y cuando está true a false
    setClicked(!clicked)
  }
  return (
    <>
    <NavContainer>
      <div className='logo'>
        <Link to="/">
          <img src="/Navbar-img/LOGO.png" alt="Logo" />
        </Link>
        </div>
        {/* cuando clicked es true se setea la clase active y cuando no lo sea, no se setea nada */}
        <div className={`linksNav ${clicked ? 'active' : ''}`}>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/products">Products</Link>
        </div>
        <BackDiv className={`initial ${clicked ? 'active' : ''}`}></BackDiv>
        <div className='burguerMenu'>
        <BurguerButton clicked={clicked} click={click} />
        </div>
    </NavContainer>
    </>
  )
}

export default Navbar

const NavContainer = styled.nav`
.logo{
    z-index: 1000;
    height: 80px;
}

padding: .9rem;
background-color: #00071a;
display: flex;
align-items: center;
justify-content: space-between;

a{
  color: white;
  text-decoration: none;
  margin-right: 1rem;
}

.linksNav{
  position: absolute;
  top: -700px;
  left: -2000px;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  transition: all .5s ease;

  a{
    color: white;
    font-size: 2rem;
    display: block;
  }

  @media(min-width: 768px){
    width: 500px;
    position: initial;
    margin: 0;
    a{
      font-size: 1rem;
      color: white;
      display: inline;
      &:hover{
        color: #00adf6;
      }
    }
  }
}

.linksNav.active{
  width: 100%;
  display: block;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  top: 30%;
  left: 0;
  right: 0;
  text-align: center;
  z-index: 1000;
  a{
    font-size: 2rem;
    margin-top: 1rem;
    color: white;
    &:hover{
        color: #00adf6;
      }
  }
}

.burguerMenu{
  @media(min-width: 768px){
    display: none;
  }
}
`
const BackDiv = styled.div`
background-color: #00071a;
position: absolute;
top: -1100px;
left: -1000px;
width: 100%;
height: 100%;
z-index: 1;
transition: all .6s ease ;

/* & (ampersand) caracteristica de styled components */
&.active{
border-radius: 0 0 80% 0;
top: 0;
left: 0;
width: 100%;
height: 100%;
}

`
