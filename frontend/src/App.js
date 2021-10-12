import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useSelector } from "react-redux";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
//import "../node_modules/h8k-design/dist/index.css";
import "../node_modules/bootstrap-icons/bootstrap-icons.svg";

import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductDetails from "./screens/ProductDetails";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";

import CartScreen from "./screens/CartScreen";

function App() {
  const { cartItems } = useSelector((state) => state.cartItems);

  let count = cartItems.length;
  return (
    <>
      <Router>
        <Header count={count} />
        <div className="dropdown-divider"></div>
        <main>
          <Route exact path={`/`} component={HomeScreen}></Route>
          <Route path={`/product/:id`} component={ProductDetails}></Route>
          <Route path={`/login`} component={LoginScreen} />
          <Route path={`/profile`} component={ProfileScreen} />
          <Route path={`/register`} component={RegisterScreen} />
          <Route path={`/usercart`}>
            <CartScreen count={count} />
          </Route>
        </main>
        <div className="dropdown-divider"></div>

        <Footer />
      </Router>
    </>
  );
}

export default App;
