import React from "react";
// import Link from '../../components/Link/link';
import Form from '../../components/Form/form';
import styles from './login.module.css';

const Login = () => {
  return (
    <div className={styles.container}>
      <div>Login</div>
      {/* <Link text={'Ingresar'} to={'/'}  /> */}
      <Form></Form>
    </div>
  );
};

export default Login;