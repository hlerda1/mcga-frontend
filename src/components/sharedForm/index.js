import React from 'react';
import styles from './sharedform.module.css';
import SharedInput from '../sharedInput';
import SharedButton from '../sharedButton';
import { useForm } from "react-hook-form";

const SharedForm = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const userWatch = watch('userName')
  const submission = (data) => console.log(data);
  console.log(userWatch)
    return (
      <form className={styles.form} onSubmit={() => handleSubmit(submission)()}>
        <SharedInput register={register} type={'text'} placeholder={'Username'} name={'userName'}/>
        <SharedInput register={register} type={'password'} placeholder={'Password'} name={'Password'}/>
        <SharedButton text={'Submit'} onClick={() => null} type={'submit'} />
      </form>      
    );
  };
  
  export default SharedForm;