// import React, { useState } from 'react';

const Form = () => {
    return (
      <form >
        <input type="text" placeholder="Name" required />
        <input type="password" placeholder="Password" required/>
        <button type="submit">Login</button>
      </form>
    );
  };
  
  export default Form;