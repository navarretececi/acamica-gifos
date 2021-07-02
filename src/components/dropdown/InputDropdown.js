import './Dropdown.css';

export const InputDropdown =(props)=>{

    const handlerUpdateInput =(e)=>{
        console.log("soy el e " ,e.target.value)
        props.setInput(props.name)
        props.setSearchedText(props.name)
        props.setSearch(true);
    }

    return(  
        <input 
            className={props.name.length > 0 ? "autocomplete-items input-search" : "no-autocomplete"} 
            value={props.name}
            onClick={handlerUpdateInput}
            onChange={() => {}}
            type="text" 
        />
    )
}