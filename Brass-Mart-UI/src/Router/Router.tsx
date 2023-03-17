import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ApiProvider from "../API/ApiProvider";
import Home from "../pages/Home/Home";
import Layout from "../Layout/Layout/Layout";
import Instruments from "../pages/Instruments/Instruments";
import SignIn from "../pages/SignIn/SignIn";
import SingleProduct from "../pages/SingleProduct/SingleProduct";
import Checkout from "../pages/Checkout/Checkout";
import ThankYou from "../pages/ThankYou/ThankYou";
import Account from '../pages/Account/Account';
import SignUp from '../pages/SignUp/SignUp';
import Accessories from '../pages/Accessories/Accessories';

function Router() {
  return (
    <BrowserRouter>
      <ApiProvider>
        <Layout>
          <Routes>
            <Route path="/"
            element={<Home />}
            />
            <Route
              path="instruments"
              element={<Instruments />}
            />
            <Route
              path="accessories"
              element={<Accessories />}
            />
            <Route
              path="products/:id"
              element={<SingleProduct />}
            />
            <Route
              path="sign-in"
              element={<SignIn />}
            />
            <Route
              path="sign-up"
              element={<SignUp />}
            />
            <Route
              path="checkout/:id"
              element={<Checkout />}
            />
            <Route
              path="thank-you/:id"
              element={<ThankYou />}
            />
            <Route
              path="account"
              element={<Account />}
            />
          </Routes>
        </Layout>
      </ApiProvider>
    </BrowserRouter>
  );
}

export default Router;
