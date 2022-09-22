/* eslint-disable react-hooks/exhaustive-deps */
// eslint-disable-next-line
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./views/Home/Home";
import ProductDetail from "./views/ProductDetail/ProductDetail";
import { Container } from "react-bootstrap";
import AdminRoute from "./components/Administrator/AdminRoute";
import Dashboard from "./components/Administrator/Dashboard";
import NavBarComponent from "./components/NavBar/NavBarComponent";
import ProductListScreen from "./views/Home/ProductListScreen";
import ProductEditScreen from "./views/ProductEdit/ProductEditScreen";
import CreateProduct from '../src/components/CreateProduct/CreateProduct';
import UserProfile from "./components/UserProfile/UserProfile"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Signin from "./views/Signin/Signin";
import { useGoogleOneTapLogin } from 'react-google-one-tap-login';
import { useEffect, useState } from "react";
import { getByEmail } from "./redux/actions/users"
import { useDispatch } from "react-redux";
import { SnackbarProvider } from 'notistack';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import UpdateProduct from "./components/UpdateProduct/UpdateProduct";

const theme = createTheme({
    palette: {
      primary: {
        main: '#FFC400',
      },
      secondary: {
        main: '#3a0ca3',
      },
    },
  });

import OrdersProducts from './components/OrdersProducts/OrdersProducts'
import OrderProductsDetails from "./components/OrderProductsDetails/OrderProductsDetails"
import MessagesContainer from './components/Messages/MessagesContainer'

function App() {

    return (
        <>
        <ThemeProvider theme={theme}>
        <SnackbarProvider maxSnack={3}>
            <Router>
                <div className="d-flex flex-column site-container">
                    <header>
                        <NavBarComponent />
                    </header>
                    <main>
                        <ToastContainer />
                        <Container>
                            <Routes>
                                <Route path="/product/:_id" element={<ProductDetail />} />
                                <Route path="/" element={<Home />} />
                                {/* <Route path="/search" element={<SearchScreen />} /> */}

                                {/* Admin Routes */}
                                <Route
                                    path="/admin/dashboard"
                                    element={
                                        <AdminRoute>
                                            <Dashboard />
                                        </AdminRoute>
                                    }
                                ></Route>
                                <Route
                                    path="/admin/products"
                                    element={
                                        <AdminRoute>
                                            <ProductListScreen />
                                        </AdminRoute>
                                    }
                                ></Route>
                                <Route
                                    path="/admin/product/:id"
                                    element={
                                        <AdminRoute>
                                            <ProductEditScreen />
                                        </AdminRoute>
                                    }
                                ></Route>
                                <Route
                                    path="/admin/product/createProduct"
                                    element={
                                        <AdminRoute>
                                            <CreateProduct />
                                        </AdminRoute>
                                    }
                                ></Route>
                                <Route
                                    path="/admin/product/updateProduct/:id"
                                    element={
                                        <AdminRoute>
                                            <UpdateProduct />
                                        </AdminRoute>
                                    }
                                ></Route>
                                <Route
                                    path="/admin/orders"
                                    element={
                                        <OrdersProducts />
                                    }
                                ></Route>
                                <Route
                                    path="/admin/ordersdetails/:id"
                                    element={
                                        <OrderProductsDetails />
                                    }
                                ></Route>
                                <Route
                                    path="/admin/messages"
                                    element={
                                        <MessagesContainer />
                                    }
                                ></Route>
                                {/* <Route
                                    path="/admin/messagedetails/:id"
                                    element={
                                        <MessageDetails />
                                    }
                                ></Route> */}
                                <Route
                                    path="/admin/profile"
                                    element={
                                        <UserProfile />
                                    }
                                ></Route>
                            </Routes>
                        </Container>
                    </main>
                    <footer>
                        <div className="text-center">All rights reserved</div>
                    </footer>
                </div>
            </Router>
            </SnackbarProvider>
        </ThemeProvider>
        </>
    );
}

export default App;
