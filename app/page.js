'use client'
import React, { useState } from 'react'
import FormInput from './components/FormInput';
import styles from './page.module.css'

const page = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id:1,
      name:'username',
      placeholder:'UserName',
      type:'text',
      errorMessage:"Username should be 3-16 characters and shouldn't include special characters !",
      label:'UserName',
      pattern:'^[a-zA-Z0-9]{3,16}$',
      required:'true',
    },
    {
      id:2,
      name:'email',
      placeholder:'Email',
      type:'email',
      errorMessage:"Please enter valid email address !",
      label:'Email',
      required:'true',
    },
    {
      id:3,
      name:'password',
      placeholder:'Password',
      type:'password',
      errorMessage:"Password should be 8-20 characters and must include 1 letter, 1 number, 1 special character !",
      label:'Password',
      pattern:'^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{9,20}$',
      required:'true',
    },
    {
      id:4,
      name:'confirmPassword',
      placeholder:'Confirm Password',
      type:'password',
      errorMessage:"Passwords don't match !",
      label:'Confirm Password',
      pattern: values.password,
      required:'true',
    },
  ];

  const onChange = (e) => {
    setValues({...values, [e.target.name] : e.target.value});
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(' Username : ' + values.username ,'\n', 'Email : ' + values.email ,'\n', 'Password : ' + values.password);
  }

  return (
    <div className={styles.maindiv}>
      <form className={styles.formdiv} onSubmit={handleSubmit}>
        <h2 className={styles.heading}>REGISTER NOW</h2>
        {inputs.map((input) => (
          <FormInput 
            key={input.id} 
            {...input} 
            value={values[input.name]} 
            onChange={onChange}
          /> 
        ))}
        <button className={styles.submitbtn}>Submit</button>
      </form>
    </div>
  )
}

export default page;