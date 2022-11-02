import React from 'react'

const SharedInput = ({register, type, placeholder, name}) => {
    return (
      <input {...register(`${name}`)} type={type} placeholder={placeholder} name={name}>
      </input>
    );
  };
  
  export default SharedInput;