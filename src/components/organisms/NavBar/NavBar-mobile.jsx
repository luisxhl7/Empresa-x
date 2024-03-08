import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, Close } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import images from "../../../assets/image/image";
import "./NavBar.scss";

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
            <NavLink to='/' className="navBar__content-logo">
                <figure>
                    <img src={images?.LogoEmpresaX} alt="logo Empresa x" />
                </figure>
            </NavLink>
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
                    <NavLink to='/' className="navBar-mobile__button-link">
                        Home
                    </NavLink>
                    <NavLink to='/' className="navBar-mobile__button-link">
                        Perfil
                    </NavLink>
                    <NavLink to='/' className="navBar-mobile__button-link">
                        Ajustes
                    </NavLink>
                    <NavLink to='/' className="navBar-mobile__button-link">
                        Cerrar sesión
                    </NavLink>
                    {/* <button className="navBar-mobile__button-theme">
                        <Brightness4/>
                    </button> */}
                </div>
            )}
        </nav>
    );
};

export default NavBarMobile