import React from 'react';
import styles from './sharedform.module.css';
import SharedInput from '../sharedInput';
import SharedButton from '../sharedButton';

const sharedForm = () => {
    return (
      <form className={styles.form}>
        <SharedInput type={'text'} placeholder={'Username'} name={'Username'}/>
        <SharedInput type={'password'} placeholder={'Password'} name={'Password'}/>
        <SharedButton text={'Submit'} onClick={''} type={'submit'} />
      </form>
    );
  };
  
  export default sharedForm;