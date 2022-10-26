import React from 'react'

const sharedInput = ({type, placeholder, name}) => {
    return (
      <input type={type} placeholder={placeholder} name={name}>
      </input>
    );
  };
  
  export default sharedInput;