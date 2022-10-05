/* eslint-disable react-hooks/exhaustive-deps */
// eslint-disable-next-line
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./views/Home/Home";
import ProductDetail from "./views/ProductDetail/ProductDetail";
import CartScreen from "./views/CartScreen";
import { Container } from "react-bootstrap";
import AdminRoute from "./components/Administrator/AdminRoute";
import Dashboard from "./components/Administrator/Dashboard";
import NavBarComponent from "./components/NavBar/NavBarComponent";
import ProductListScreen from "./components/Administrator/products/ProductListScreen";
import ProductEditScreen from "./views/ProductEdit/ProductEditScreen";
import CreateProduct from "../src/components/CreateProduct/CreateProduct";
import UserProfile from "./components/UserProfile/UserProfile";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { StoreProvider } from "./Store";
import UpdateProduct from "./components/UpdateProduct/UpdateProduct";
import OrdersProducts from "./components/OrdersProducts/OrdersProducts";
import OrderProductsDetails from "./components/OrderProductsDetails/OrderProductsDetails";
import MessagesContainer from "./components/Messages/MessagesContainer";
import MessageDetails from "./components/Messages/MessageDetails";
import Contactform from "./views/ContactUs/Contactform";
import Cookies from "./components/Cookies/Cookies"
import ShippingAddressScreen from "./views/ShippingAddressScreen";
import PaymentMethodScreen from "./views/PaymentMethodScreen";
import PlaceOrderScreen from "./views/PlaceOrderScreen";
import OrderScreen from "./views/OrderScreen";
import Sound from './components/Sound/Sound'

function App() {
  return (
    <>
      <StoreProvider>
        <Router>
          <div className="d-flex flex-column site-container">
            <header>
              <NavBarComponent />
              <Sound />
            </header>
            <main>
              <ToastContainer />
              <Container>
                <Routes>
                  <Route path="/product/:_id" element={<ProductDetail />} />
                  <Route path="/cart" element={<CartScreen />} />
                  <Route path="/" element={<Home />} />
                  <Route path="/shipping" element={<ShippingAddressScreen />} />
                  <Route path="/payment" element={<PaymentMethodScreen />} />
                  <Route path="/placeorder" element={<PlaceOrderScreen />} />
                  <Route path="/order/:id" element={<OrderScreen />} />
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
                    element={<OrdersProducts />}
                    ></Route>
                  <Route
                    path="/admin/ordersdetails/:id"
                    element={<OrderProductsDetails />}
                  ></Route>
                  <Route
                    path="/admin/messages"
                    element={<MessagesContainer />}
                    ></Route>
                  <Route
                    path="/admin/messagedetails/:id"
                    element={<MessageDetails />}
                    ></Route>
                  <Route
                    path="/admin/profile"
                    element={<UserProfile />}
                    ></Route>
                  <Route path="/contactus" element={<Contactform />}></Route>
                </Routes>
              </Container>
            </main>
            <footer>
              <div className="text-center">All rights reserved</div>
            </footer>
          </div>
        </Router>
      </StoreProvider>
      <Cookies></Cookies>
    </>
  );
}

export default App;
