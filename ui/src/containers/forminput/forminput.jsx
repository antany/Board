import React from 'react';
import styles from './forminput.module.css';

const FormInput = (props) => {
    console.log(props)
    let display = null;

    switch(props.type){
        case 'text':
            display = <input type="text" className={styles.forminput} placeholder={props.displayName}/> 
            break;
        case 'password':
            display = <input type="password" className={styles.forminput} placeholder={props.displayName}/> 
            break;    
    }

    return ( 
    <div>
        {display}
    </div> 
    );
}
 
export default FormInput;