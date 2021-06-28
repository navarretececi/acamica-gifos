import './Dropdown.css';
import { InputDropdown } from './InputDropdown';

export const Dropdown =(props)=>{
    return(
        <div className="autocomplete">
            {
                props.autocomplete.length > 0 ?
                    props.autocomplete.map((objeto, index)=>{
                    return <InputDropdown key={index} autocomplete={objeto.name}/>
                    }) : null
            }
        </div>
    )
}