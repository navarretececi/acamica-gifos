import React from 'react'
import './Button.css';
import { ThemeContext } from "../../context/ThemeContext";


export const Button =()=>{
    const { theme, handlerTheme } = React.useContext(ThemeContext);

    return(
        <>
            <button className="btn violet-text" value={theme} onClick={handlerTheme}>
                MODO {theme==="light" ? "DARK" : "LIGHT"}
            </button>
        </>
    )
}