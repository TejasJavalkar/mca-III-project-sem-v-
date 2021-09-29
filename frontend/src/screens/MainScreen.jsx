import React, { useEffect } from "react";
import { listProducts } from "../actions/productAction";
import HomeScreen from "../screens/HomeScreen";

import { useDispatch, useSelector } from "react-redux";

const MainScreen = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);
  return <>{loading ? <HomeScreen /> : <h1>loading</h1>}</>;
};

export default MainScreen;
