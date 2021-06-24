import './ButtonSearch.css';


export const ButtonSearch =(props)=>{
    return (
        <div className="container-input-search flex-row">
                <input value={props.input} onChange={props.handlerInput} className="input-search" type="search" placeholder="Busca gifs"/>
                <button className="btn-search" onClick={props.handlerSearch}>
                    <img className="center icon-search" src="./images/icon-search-mod-noc.svg" alt="icono" />
                </button>
        </div>
    )
}