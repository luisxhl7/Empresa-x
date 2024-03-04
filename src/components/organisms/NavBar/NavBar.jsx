import React from "react";
import { Avatar } from "@mui/material";
import { useMobileDetect } from "../../../hook";
import NavBarMobile from "./NavBar-mobile";
import images from "../../../assets/image";
import "./NavBar.scss";

const NavBar = () => {
  const { isMobile, screenSize } = useMobileDetect()

  return (
    <>
      {!isMobile ? (
        <nav className="navBar">
          <a href="/" className="navBar__content-logo">
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
            
            <div className="navBar__content-more">
              <img src={images.More} alt="mas opciones" title="mas opciones" />
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
