import './ButtonSearch.css';
import { Dropdown } from '../dropdown/Dropdown'
import { useEffect } from 'react';


export const ButtonSearch =(props)=>{

    useEffect(()=>{
        const cleanInput =()=> props.setAutocomplete([])
        document.getElementById("searchbox").addEventListener("search", cleanInput);
    }, [])
    
    const enterSearch =(e)=> {
        if(e.keyCode === 13 || e.which === 13){
            props.handlerSearch()
        }
    } 

    return (
            <div className= {props.autocomplete.length > 0 ? "search-open flex-row" : "search-close flex-row"}>
                <div className="container-searched">
                    <input 
                        id="searchbox"
                        value={props.input} 
                        onChange={props.handlerInput} 
                        onKeyDown={enterSearch}
                        className="input-search first-input" 
                        type="search" 
                        placeholder="Busca gifs"
                    />
                    <Dropdown 
                        autocomplete={props.autocomplete}
                        setInput={props.setInput}
                        setSearchedText={props.setSearchedText}
                        setSearch={props.setSearch}
                    /> 
                </div>
                <button className={props.autocomplete.length > 0 ? "btn-search btn-open" : "btn-search"} onClick={props.handlerSearch}>
                    <img className="center icon-search" src="./images/icon-search-mod-noc.svg" alt="icono" />
                </button>
            </div>  
    )
}


