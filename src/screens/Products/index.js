import React from "react";
import { useDispatch, useSelector } from "react-redux";
// import Link from '../../components/Link/link';
import styles from './products.module.css';
import { setLoading, dismissLoading } from "../../redux/Products/actions";


const Products = () => {
  const dispatch = useDispatch();
const { isLoadingProducts } = useSelector ((state) => state.products) 
console.log(String(isLoadingProducts))
  return (
    <div className={styles.container}>
      <div>Products</div>
      {/* <Link text={'Ingresar'} to={'/'}  /> */}
      <button type="button" onClick={() => dispatch(setLoading())}>
        Product Loading
      </button>
      <button type="button" onClick={() => dispatch(dismissLoading())}>
        Product Not Loading
      </button>
      <table border={3}>Table Products</table>
    </div>
  );
};

export default Products;