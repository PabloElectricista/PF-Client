// eslint-disable-next-line
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./views/Home/Home";
import ProductDetail from "./views/ProductDetail/ProductDetail";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import SearchBox from "./components/Search/SearchBox";
import AdminRoute from "./components/Administrator/AdminRoute";
import Dashboard from "./components/Administrator/Dashboard";
import ProductListScreen from "./views/Home/ProductListScreen";
import ProductEditScreen from "./views/ProductEdit/ProductEditScreen";
import Signin from "./views/Signin";

import CreateProduct from "./views/CreateProduct/CreateProduct";

function App() {
  return (
    <>
      <Router>
        <div className="d-flex flex-column site-container">
          <header>
            <Navbar bg="dark" variant="dark">
              <Container>
                <LinkContainer to="/">
                  <Navbar.Brand>Our Ecommerce</Navbar.Brand>
                </LinkContainer>
                <SearchBox />
                <Nav className="me-auto  w-100  justify-content-end">
                  {/* {userInfo && userInfo.isAdmin && ( */}
                  {true && (
                    <NavDropdown title="Admin" id="admin-nav-dropdown">
                      <LinkContainer to="/admin/dashboard">
                        <NavDropdown.Item>Dashboard</NavDropdown.Item>
                      </LinkContainer>
                      <LinkContainer to="/admin/products">
                        <NavDropdown.Item>Products</NavDropdown.Item>
                      </LinkContainer>
                      <LinkContainer to="/admin/orders">
                        <NavDropdown.Item>Orders</NavDropdown.Item>
                      </LinkContainer>
                      <LinkContainer to="/admin/users">
                        <NavDropdown.Item>Users</NavDropdown.Item>
                      </LinkContainer>
                    </NavDropdown>
                  )}
                </Nav>
              </Container>
            </Navbar>
          </header>
          <main>
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
              </Routes>
            </Container>
          </main>
          <footer>
            <div className="text-center">All rights reserved</div>
          </footer>
        </div>
      </Router>

      {/* <Router>
                <Navbar />
                <ToastContainer />
                <Routes>
                    <Route exact path="/" element={<LandingPage />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/createproduct" element={<CreateProduct />} />
                </Routes>
                <Footer />
            </Router> */}
    </>
  );
}

export default App;
