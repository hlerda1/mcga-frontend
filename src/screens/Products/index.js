import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProducts } from "../../redux/Products/thunks";
// import Link from '../../components/Link/link';


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
      {products?.map((product) => <h2>{product.name}</h2>
      )}
    </div>
  );
}

export default Products;