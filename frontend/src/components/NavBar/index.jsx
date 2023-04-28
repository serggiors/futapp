import React, { useState, useEffect } from "react";
import { MenuOutlined } from "@ant-design/icons";
import { animateScroll as scroll } from "react-scroll";
import "./NavBar.css";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
} from "./NavBarElement";
import Sidebar from "../Sidebar";
import { Button } from "../ButtonElement";
import { UserMenu } from "../UserMenu";

import { store } from "../../store";
const { useModelState } = store;

function NavBar({ isLoginModalOpen, setIsLoginModalOpen }) {
  const [openMenu, setOpenMenu] = useState(false);
  const [scrollNav, setScrollNav] = useState(false);

  const { user, token } = useModelState("authentication");

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  const handleModalLogin = () => {
    setIsLoginModalOpen(true);
  };

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            <img className="logo" src="/soccer-logo.png" alt="logo" />
          </NavLogo>
          <MobileIcon>
            <MenuOutlined
              onClick={() => {
                setOpenMenu(true);
              }}
              style={{ color: scrollNav ? "#000" : "#fff" }}
            />
            <Sidebar openMenu={openMenu} setOpenMenu={setOpenMenu} />
          </MobileIcon>
          <NavMenu>

            {token 
              ? <NavItem>
                <NavLinks
                  to="reservas"
                  smooth
                  duration={500}
                  spy
                  exact="true"
                  offset={-80}
                  scrollNav={scrollNav}
                >
                  Mis Reservas
                </NavLinks>
              </NavItem>
              : null}

            <NavItem>
              <NavLinks
                to="nosotros"
                smooth
                duration={500}
                spy
                exact="true"
                offset={-80}
                scrollNav={scrollNav}
              >
                Nosotros
              </NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks
                to="canchas"
                smooth
                duration={500}
                spy
                exact="true"
                offset={-80}
                scrollNav={scrollNav}
              >
                Canchas
              </NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks to="/contact-us" scrollNav={scrollNav}>
                Contact Us
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/profile" scrollNav={scrollNav}>
                Profile
              </NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            {user ? (
              <UserMenu />
            ) : (
              <Button onClick={() => setIsLoginModalOpen(true)}>
                Iniciar Sesión
              </Button>
            )}
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
}

export default NavBar;
