import React, { useEffect } from "react";
import Product from "../Components/Product";
import LoadingBox from "../Components/LoadingBox";
import MessageBox from "../Components/MessageBox";
import { connect } from "react-redux";
import { listProducts } from "../redux/actions/productActions";

function HomeScreen(props) {
  // const dispatch = useDispatch();
  // const productList = useSelector((state) => state.listProductsReducers)
  // const {loading, error, products} = productList;
  // useEffect(() => (
  //  dispatch(listProducts())
  // ),[dispatch])

  const { productList, listProducts } = props;
  const { loading, error, products } = productList;
  useEffect(() => {
    listProducts();
  }, [listProducts]);
  return (
    <>
      {loading ? (
        <LoadingBox />
      ) : !!error ? (
        <MessageBox variant={"danger"} children={error} />
      ) : (
        <div className="row center">
          {products.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </div>
      )}
    </>
  );
}

export default connect(
  (state) => ({
    productList: state.listProductsReducers,
  }),
  { listProducts }
)(HomeScreen);
