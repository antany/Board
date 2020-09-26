import React from "react";
import FormInput from "../forminput/forminput";
import styles from "./card.module.css";

const Card = (props) => {

  let inputs = null;
  if(props.inputs!==undefined){
  inputs = props.inputs.map((row)=>{
    return (
      <div className={styles.element}>
          {row.showDisplayName && row.displayName}
          <FormInput {...row}/>
      </div>
    )
  });
}

  return (
    <div className={styles.card}>
      <div className={styles.header}>{props.header}</div>
      <div className={styles.body}>
        {inputs}
      </div>
    </div>
  );
};

export default Card;
