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
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserProfile from "./components/UserProfile/UserProfile"
import Signin from "./views/Signin/Signin";
import { useGoogleOneTapLogin } from 'react-google-one-tap-login';
import { useEffect, useState } from "react";
import { getByEmail } from "./redux/actions/users"
import { useDispatch } from "react-redux";

function App() {

    const [user, setUser] = useState({})
    const dispatch = useDispatch()

    // let clientId = "76641969651-1t60doovequmf8pmun1glt7ehj6hr80f.apps.googleusercontent.com"
    let clientId = "837241183537-u5uki0e6odl7v0p8ilkst5e2j3ml9u4p.apps.googleusercontent.com"
    useGoogleOneTapLogin({
        onError: error => console.log(error),
        onSuccess: response => setUser({
            username: `${response.given_name}${response.family_name}`,
            email: response.email,
            password: "12345678",
            picture: response.picture,
            roles: "user"
        }),
        googleAccountConfigs: {
            client_id: clientId
        },
    });

    useEffect(() => {
        if(user && user.email) {
            dispatch(getByEmail(user))
        }
    }, [user])

    return (
        <>
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
                                <Route path="/signin" element={<Signin />} />
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
        </>
    );
}

export default App;
