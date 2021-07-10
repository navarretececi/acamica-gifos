import React from 'react'
import './Header.css';
import { Button } from '../button/Button';
import { AppContext } from "../../context/ThemeContext";


export const Header =()=>{
    const { theme } = React.useContext(AppContext);

    return(
        <header className="header flex-row">
            {
                theme === "light" ? <img className="logo" src="./images/logo-desktop.svg" alt="logo" /> :
                    <img className="logo" src="./images/logo-mobile-modo-noct.svg" alt="logo" /> 
            }
            <Button />
        </header>
    )

}