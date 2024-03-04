import React from "react";
import images from "../../../assets/image";
import "./NavBar.scss";

const NavBar = () => {
  return (
    <nav className="navBar">
      <a href="/" className="navBar__content-logo" >
        <figure>
          <img src={images.LogoEmpresaX} alt="logo Empresa x" />
        </figure>
      </a>

      <div className="navBar__content-options">
        <figure className="navBar__content-image-user">
          <img src={images.Avatar} alt="avatar"/>
        </figure>

        <div className="navBar__content-info-user">
          <p>Logan</p>
          <p>Admin</p>
        </div>
        
        <div className="navBar__content-more">
          <img src={images.More} alt="mas opciones" title="mas opciones" />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
