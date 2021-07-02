import './Header.css';
import { Button } from '../button/Button';

export const Header =(props)=>{
    return(
        <header className="header flex-row">
            {
                props.theme === "light" ? <img className="logo" src="./images/logo-desktop.svg" alt="logo" /> :
                    <img className="logo" src="./images/logo-mobile-modo-noct.svg" alt="logo" /> 
            }
            <Button 
                theme={props.theme}
                handlerTheme={props.handlerTheme}
            />
        </header>
    )

}