import React from "react";
// import Link from '../../components/Link/link';
// import Form from '../../components/Form/form';
import SharedForm from "../../components/sharedForm";
import styles from './login.module.css';

const Login = () => {
  return (
    <div className={styles.container}>
      <div>Login</div>
      {/* <Link text={'Ingresar'} to={'/'}  /> */}
      {/* <Form></Form> */}
      <SharedForm></SharedForm>
    </div>
  );
};

export default Login;