import React from 'react'
import './Dropdown.css';
import { InputDropdown } from './InputDropdown';
import { AppContext } from '../../context/AppContext'; 

export const Dropdown =()=>{
    const { autocomplete } = React.useContext(AppContext);

    return(
        <div className="autocomplete">
            {
                autocomplete.length > 0 ?
                    autocomplete.map((objeto, index)=>{
                    return <InputDropdown 
                            key={index} 
                            name={objeto.name}
                            />}) : null
            }
        </div>
    )
}