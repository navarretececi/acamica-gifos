import './Card.css';

export const Card =(props)=>{
    return(
        <img className="card" src={props.url} alt="gif"></img>
    )
}