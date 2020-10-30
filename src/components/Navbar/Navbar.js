import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  ΜobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
} from "./Navbar.elements";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

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

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/" onClick={closeMobileMenu}>
          <NavIcon />
          ZisisSpatis
        </NavLogo>
        <ΜobileIcon onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </ΜobileIcon>
        <NavMenu onClick={handleClick} click={click}>
          <NavItem>
            <NavLinks to="/">Home</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="#about-us">About</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="#projects">Projects</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="#footer">Contact</NavLinks>
          </NavItem>
        </NavMenu>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
