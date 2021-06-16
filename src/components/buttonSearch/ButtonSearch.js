import './ButtonSearch.css';


export const ButtonSearch =(props)=>{
    return (
        <div className="container-input-search flex-row">
                <input className="input-search" type="search" placeholder="Busca gifs"/>
                <button className="btn-search" value={props.searchState} onClick={props.handlerSearchState}>
                    <img className="center icon-search" src="./images/icon-search-mod-noc.svg" alt="icono" />
                </button>
                
        </div>
    )
}