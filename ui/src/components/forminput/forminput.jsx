import React from 'react';
import Aux from '../../root/root';

const FormInput = (props) => {
    let display = null;

    let property = {
        type:props.type,
        name:props.name,
        value:props.value
    }

    let required = props.isRequired?"required":"";

   
    display = 
        <Aux> 
            <input {...property} required={required} onChange={props.onElementChangeEvent} />
            <label> {props.label} </label> 
        </Aux>

    return ( 
    <div>
        {display}
    </div> 
    );
}
 
export default FormInput;