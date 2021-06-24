import './Notification.css';

export const Notification =(props)=>{
    return(
        <div className="notification">
            <p className="violet-text">{props.notification}</p>
        </div>
    )
}