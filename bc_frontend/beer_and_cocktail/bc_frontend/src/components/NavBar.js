import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import '../css/Nav.css';
import slogo from '../images/slogo.png'
import styled from 'styled-components'


function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [navbar, setNavbar] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  const changeBackground = () => {
    if(window.scrollY >= 80){
    setNavbar(true)
  } else {
    setNavbar(false)
  }
}; 

window.addEventListener('scroll', changeBackground);
 
  return (
    <>
      <nav className={navbar ? 'navbar active' : 'navbar'}>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          <img src={slogo} alt=""/>
          </Link>
          <Search>
          <div class="input-group">
          <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search"
            aria-describedby="search-addon" />
          <button type="button" class="btn btn-outline-primary">Search</button>
          </div>
            </Search>
            <Check>
            <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        Beer
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        Cocktails
                      </label>
                    </div>
            </Check>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/register'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Register
              </Link>
            </li>
            <li className='register'>
              <Link
                to='/login'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Login
              </Link>
            </li>

            <li>
              <Link
                to='/logout'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;


const Search = styled.div`
  text-decoration: none;
  color: rgba(0, 0, 0, 0.8);
  background: rgb(0, 0, 0);
  font-weight: normal;
  text-transform: uppercase;
  transition: all 0.5s ease-in-out;
button:hover{
  background: #21ebff;
  color: #111;
  box-shadow: 0 0 50px #ff2121;
  transition-delay: 0.5ms;
}
`

const Check = styled.div`
padding-left: 30px;
`



