import React, { useState } from "react";
import { Menu, Close } from "@mui/icons-material";
import images from "../../../assets/image";
import "./NavBar.scss";
import { Avatar } from "@mui/material";

const NavBarMobile = ({ screenSize }) => {
    const [isOpenMenu, setIsOpenMenu] = useState(false);

    const handleOpenMenu = () => {
        if (screenSize <= 761) {
            if (isOpenMenu) {
                setIsOpenMenu(false);
            } else {
                setIsOpenMenu(true);
            }
        }
    };
    
    return (
        <nav className="navBar">
            <a href="/" className="navBar__content-logo">
                <figure>
                <img src={images?.LogoEmpresaX} alt="logo Empresa x" />
                </figure>
            </a>
            <button onClick={handleOpenMenu} className="navBar-mobile__button-open">
                <Menu />
            </button>

            {isOpenMenu && (
                <div className="navBar-mobile">
                    <button
                        onClick={handleOpenMenu}
                        className="navBar-mobile__button-close"
                    >
                        <Close />
                    </button>
                    <Avatar className="navBar-mobile__content-image-user">JL</Avatar>
                    <div className="navBar-mobile__content-info-user">
                        <span className="navBar-mobile__content-info-user__name">
                            logan
                        </span>
                        <span className="navBar-mobile__content-info-user__rol">Admin</span>
                    </div>
                    <a href="/" className="navBar-mobile__button-link">
                        Home
                    </a>
                </div>
            )}
        </nav>
    );
};

export default NavBarMobile