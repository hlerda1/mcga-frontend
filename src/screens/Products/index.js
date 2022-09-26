import React from "react";
import Link from '../../components/Link/link';
import styles from './products.module.css';

const Products = () => {
  return (
    <div className={styles.container}>
      <div>Products</div>
      <Link text={'Ingresar'} to={'/'}  />
      <table border={3}>Table Products</table>
    </div>
  );
};

export default Products;