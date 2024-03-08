import React, { useEffect, useState } from "react";
import { Avatar } from "@mui/material";
import { useMobileDetect } from "../../../hook";
import NavBarMobile from "./NavBar-mobile";
import images from "../../../assets/image/image";
import "./NavBar.scss";
import { AccountMenu } from "./AccountMenu";

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
            
            <div className={`navBar__content-more ${openOptions ? '--isOpen' : ''}`}>
              <AccountMenu openOptions={openOptions} setOpenOptions={setOpenOptions}/>
            </div>
          </div>
        </nav>
      ) : (
        <NavBarMobile screenSize={screenSize} />
      )}
    </>
  );
};

export default NavBar;
