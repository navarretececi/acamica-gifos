import './Dropdown.css';

export const InputDropdown =(props)=>{
    return(  
        <input 
            className={props.autocomplete.length > 0 ? "autocomplete-items input-search" : "no-autocomplete"} 
            value={props.autocomplete}
            type="text" 
        />
    )
}