import React from 'react';
import FormInput from '../forminput/forminput';
import styles from './form.module.css';

const Form = (props) => {

    let inputs = "";

    inputs = props.fromElements.map(fromElement=>{
        return (
            <div key={fromElement.label} className={styles["input-filed"]}>
                <FormInput  {...fromElement } onElementChangeEvent={props.onElementChangeEvent}></FormInput>
            </div>
        );

    });

    let buttons= "";

    buttons = props.buttons.map(button=>{
        return(
            <input key={button.label} type={button.type}  className={styles["btn-login"]+" "+styles[button.style]} value={button.label} onClick={button.action}/>
        )
    });



    return (  
        <div className={styles.container}>
            <h1>{props.header}</h1>
            <form method={props.method} onSubmit={props.formSubmit}>
                {inputs}
                <div className={styles["btn-div"]}>
                    {buttons}
                </div>
            </form>
        </div> 
    );
}
 
export default Form;


