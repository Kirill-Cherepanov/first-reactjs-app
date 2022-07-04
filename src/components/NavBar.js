import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import './NavBar.css';

export default function NavBar() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isButtonShown, setButtonShown] = useState(window.innerWidth >= 960);

  const handleClick = () => setMenuOpen(!isMenuOpen);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setButtonShown(window.innerWidth >= 960);
    });
  }, []);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            TRVL <i className="fab fa-typo3"></i>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={isMenuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
          </div>
          <ul className={isMenuOpen ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/services" onClick={closeMenu}>
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products" onClick={closeMenu}>
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link-mobile"
                to="/sign-up"
                onClick={closeMenu}
              >
                Sign up
              </Link>
            </li>
          </ul>
          {isButtonShown && (
            <Button buttonStyle={'btn--outline'}>SIGN UP</Button>
          )}
        </div>
      </nav>
    </>
  );
}
