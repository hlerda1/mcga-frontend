import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProducts } from "../../redux/Products/thunks";
// import Link from '../../components/Link/link';
import styles from './products.module.css';


const Products = () => {
  const dispatch = useDispatch();
const { isLoadingProducts, products } = useSelector ((state) => state.products) 
console.log(String(isLoadingProducts))
useEffect(() => {
  dispatch(() => getProducts(dispatch))
}, [])


if (isLoadingProducts) return <div>cargando</div>
  // return (
    // <div className={styles.container}>
    //   <div>Products</div>
    //   {/* <Link text={'Ingresar'} to={'/'}  /> */}
    //   <button type="button" onClick={() => dispatch(setLoading())}>
    //     Product Loading
    //   </button>
    //   <button type="button" onClick={() => dispatch(dismissLoading())}>
    //     Product Not Loading
    //   </button>
    //   <table border={3}>Table Products</table>
    // </div>
  //  <div> {products?.map((product) => <div>{product.name}</div>)}</div>
   return (
    <div>  
      <table className={styles}>    
        <tr><th>Id Code</th><th>Name</th><th>Price</th><th>Stock</th></tr>
        {products.map((product) =>         
          <tr>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>{product.stock}</td>
          </tr>
        )}      
      </table>
    </div>
  );
}

export default Products;