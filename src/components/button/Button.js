import './Button.css';

export const Button =(props)=>{
    return(
        <>
            <button className="btn violet-text" value={props.theme} onClick={props.handlerTheme}>
                MODO {props.theme==="light" ? "DARK" : "LIGHT"}
            </button>
        </>
    )
}