import React from 'react'
import './ButtonSearch.css';
import { Dropdown } from '../dropdown/Dropdown'
import { useEffect } from 'react';
import { AppContext } from '../../context/AppContext';


export const ButtonSearch =()=>{
    const { input, handlerInput, autocomplete, setAutocomplete, handlerSearch } = React.useContext(AppContext);

    useEffect(()=>{
        const cleanInput =()=> setAutocomplete([])
        document.getElementById("searchbox").addEventListener("search", cleanInput);
    }, [setAutocomplete])
    
    const enterSearch =(e)=> {
        if(e.keyCode === 13 || e.which === 13){
            handlerSearch()
        }
    } 

    return (
        <div className= {autocomplete.length > 0 ? "search-open flex-row" : "search-close flex-row"}>
            <div className="container-searched">
                <input 
                    id="searchbox"
                    autocomplete="off" 
                    value={input} 
                    onChange={handlerInput} 
                    onKeyDown={enterSearch}
                    className="input-search first-input" 
                    type="search" 
                    placeholder="Busca gifs"
                />
                <Dropdown /> 
            </div>
            <button className={autocomplete.length > 0 ? "btn-search btn-open" : "btn-search"} onClick={handlerSearch}>
                <img className="center icon-search" src="./images/icon-search-mod-noc.svg" alt="icono" />
            </button>
        </div>  
    )
}


