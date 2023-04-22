import React, { useState } from 'react'
import styles from './FormInput.module.css'

const FormInput = ({label, errorMessage, id, onChange , ...inputProps}) => {
  const [focused, setFocused] = useState(false);

  const handleBlur = () => {
    setFocused(true);
  }

  const onFocus = () => {
    inputProps.name === "confirmPassword" && setFocused(true);
  }

  return (
    <div className={styles.forminputdiv}>
      <label className={styles.formlabel}>{label}</label>
      <input 
        onChange={onChange} 
        {...inputProps} 
        className={styles.formInput} 
        onBlur={handleBlur} 
        onFocus={onFocus}
        focused={focused.toString()}
      />
      <span className={styles.formspan}>{errorMessage}</span>
    </div>
  )
}

export default FormInput