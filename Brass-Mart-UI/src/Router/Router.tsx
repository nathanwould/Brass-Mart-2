import { ComponentType } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import { useMediaQuery } from "@chakra-ui/react";
import ApiProvider from "../API/ApiProvider";
import Home from "../pages/Home/Home";
import Layout from "../Layout/Layout/Layout";
import Instruments from "../pages/Instruments/Instruments";
import SignIn from "../pages/SignIn/SignIn";

interface RouteProps {
  [x: string]: any,
  component: ComponentType<object>;
};

interface Props {
  [x: string]: any;
  children: React.ReactNode
};

function Router() {
  const [isScreen] = useMediaQuery('screen');
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
            {/* <Route
              path="accessories"
              element={<Accessories />}
            /> */}
            <Route
              path="sign-in"
              element={<SignIn />}
            />
            {/* <Route
              path="sign-up"
              element={<SignUp />}
            /> */}
          </Routes>
        </Layout>
      </ApiProvider>
    </BrowserRouter>
  );
}

export default Router;
