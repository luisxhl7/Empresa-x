import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Avatar } from "@mui/material";
import { useMobileDetect } from "../../../hook";
import { Brightness4 } from '@mui/icons-material';
import NavBarMobile from "./NavBar-mobile";
import images from "../../../assets/image/image";
import "./NavBar.scss";

const NavBar = () => {
  const { isMobile, screenSize } = useMobileDetect()
  const [openOptions, setOpenOptions] = useState(false)
  
  useEffect(() => {

    const handleDocumentClick = (event) => {
      const optionsContainer = document.querySelector('.navBar__content-options');
      if (optionsContainer && !optionsContainer.contains(event.target)) {
        setOpenOptions(false);
      }
    };

    document.addEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);
  
  const handleOpenOptions = () => {
    setOpenOptions(!openOptions)
  }  

  return (
    <>
      {!isMobile ? (
        <nav className="navBar">
          <a href='/' className="navBar__content-logo">
            <figure>
              <img src={images.LogoEmpresaX} alt="logo Empresa x" />
            </figure>
          </a>
          <div className="navBar__content-options">
            <Avatar className="navBar__content-image-user">JL</Avatar>

            <div className="navBar__content-info-user">
              <span className="navBar__content-info-user__name">logan</span>
              <span className="navBar__content-info-user__rol">Admin</span>
            </div>
            
            <div className={`navBar__content-more ${openOptions ? '--isOpen' : ''}`} onClick={handleOpenOptions}>
              <img src={images.More} alt="mas opciones" title="mas opciones" />
            </div>
            {openOptions &&
              <div className="navBar__menu-options">
                <NavLink to='/'>
                  Cerrar sesión
                </NavLink>
                <button className="navBar__menu-options__button-theme">
                  <Brightness4/>
                </button>
              </div>
            }

          </div>
        </nav>
      ) : (
        <NavBarMobile screenSize={screenSize} />
      )}
    </>
  );
};

export default NavBar;
