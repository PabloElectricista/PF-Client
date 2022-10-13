import {
  Container,
  Navbar,
  Nav,
  NavDropdown,
  Badge,
  Button,
  Image,
} from "react-bootstrap";
/* eslint-disable react-hooks/exhaustive-deps */
import { LinkContainer } from "react-router-bootstrap";
import SearchBox from "../Search/SearchBox";
import logo from "../../views/assets/micro50.png";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import Signin from "../../views/Signin/Signin";
// import BootstrapSwitchButton from 'bootstrap-switch-button-react'
import { settheme } from "../../redux/slices/themeSlice";
import { Link } from "react-router-dom";
import { Store } from "../../Store";
import { useContext } from "react";

function NavBarComponent() {
  // agregado por nes funcionalidad cart
  const { state } = useContext(Store);
  const { cart } = state;

  const dark = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.users);
  const [islogged, setIslogged] = useState(false);
  const [client, setClient] = useState({});

  useEffect(() => {
    const logstate = localStorage.getItem("islogged");
    setIslogged(logstate === "true" ? true : false);
    const themestate = localStorage.getItem("theme");
    dispatch(settheme(themestate === "true" ? true : false));
    const clientstate = JSON.parse(localStorage.getItem("user"));
    setClient(clientstate === null ? {} : clientstate);
  }, []);

  useEffect(() => {
    if (user && user.username) {
      localStorage.setItem("user", JSON.stringify(user));
      setClient(user);
    }
  }, [user]);

  useEffect(() => {
    localStorage.setItem("theme", dark ? true : false);
  }, [dark]);

  const itemstyle = {
    backgroundColor: "black",
    color: "white",
    // padding: "5px",
    // fontWeight: "bolder",
    margin: "1px",
    // width: "95%",
  };

  return (
    <div>
      
      <Navbar
        bg="dark"
        variant="dark"
        fixed="top"
      // className="d-flex flex-row align-items-baseline"
      >
        <Link to="/">
        <Image
          src={logo}
          width="75"
          height="75"
          className="d-inline-block align-top ms-5 me-0"
          alt="our logo"
          roundedCircle
        />
      </Link>
        <Container className="ms-5 ps-5">

          <LinkContainer to="/">
            <Navbar.Brand className="ms-0">Hardware Hot Sales</Navbar.Brand>
          </LinkContainer>

          {/* <div className="search"> */}
          <SearchBox />
          {/* </div> */}
          <Nav className="my-0 px-4  w-100">
            {/* {userInfo && userInfo.isAdmin && ( */}
            {islogged ? (
              <NavDropdown
                className="align-self-center"
                title={
                  client && client.roles === "admin" ? (
                    "Admin"
                  ) : (
                    <Button variant="outline-secondary" className="mx-1 ">
                      <>
                        {client.picture ? (
                          <img
                            className="thumbnail-image rounded "
                            src={client.picture}
                            alt="avatar"
                            width="60"
                            height="60"
                          />
                        ) : (
                          <p>{localStorage.getItem("name")}</p>
                        )}
                      </>
                    </Button>
                  )
                }
                id="admin-nav-dropdown"
              >
                {/* <LinkContainer to="/admin/messages" style={itemstyle}>
                                <NavDropdown.Item>
                                    <i className="material-icons">mail</i>
                                    Messages
                                </NavDropdown.Item>
                            </LinkContainer> */}
                {client && !client.isBlocked && !client.isAdmin && (
                  <>
                    <LinkContainer to="/admin/orders" style={itemstyle}>
                      <NavDropdown.Item className="d-flex justify-content-center align-items-center">
                        <i className="material-icons me-1">app_registration</i>
                        <span className="fs-6">Orders</span>
                      </NavDropdown.Item>
                    </LinkContainer>
                  </>
                )}
                {!client.isAdmin && (
                  <LinkContainer to="/admin/profile" style={itemstyle}>
                    <NavDropdown.Item className="d-flex justify-content-center align-items-center">
                      <i className="material-icons me-1">person</i>
                      <span className="fs-6">Profile</span>
                    </NavDropdown.Item>
                  </LinkContainer>
                )}
                {client && client.isAdmin && (
                  <>

                    <LinkContainer to="/admin/dashboard" style={itemstyle}>
                      <NavDropdown.Item className="d-flex justify-content-center align-items-center">
                        <i className="material-icons me-1">settings</i>
                        <span className="fs-6">Admin</span>
                      </NavDropdown.Item>
                    </LinkContainer>
                  </>
                )}
              </NavDropdown>
            ) : null}
            <Signin log={islogged} setLog={setIslogged} />
            <Link
              to="/"
              className="nav-link text-light button d-flex justify-content-center align-items-center"
            >
              <i className="material-icons me-1">home</i>
              <span className="fs-5">Home</span>
            </Link>
            {/* <div className="button"> */}
            <Link
              to="/contactus"
              className="nav-link text-light button d-flex justify-content-center align-items-center"
            >
              <i className="material-icons me-1">create</i>
              <span className="fs-5">Contact Us</span>
            </Link>
            <Link
              to="/aboutus"
              className="nav-link text-light button d-flex justify-content-center align-items-center"
            >
              <i className="material-icons me-1">groups</i>
              <span className="fs-5">About Us</span>
            </Link>
            {/* </div> */}

            {/* Cart */}
            <Link to="/cart" className="nav-link text-light fw-bold button d-flex flex-row">
              <div className="d-flex flex-column">
                {cart.cartItems.length > 0 && (
                  <Badge pill bg="danger ">
                    {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                  </Badge>
                )}
                <i className="material-icons me-1">shopping_cart_checkout</i>
              </div>
              <span className="fs-5 ms-1">Cart</span>
            </Link>
            {/* <BootstrapSwitchButton
                        checked={dark ? true : false}
                        onstyle="dark"
                        offstyle="light"
                        onChange={(checked) => dispatch(settheme(checked))}
                        onlabel={<i className="material-icons">mode_night</i>}
                        offlabel={<i className="material-icons">light_mode</i>}
                    /> */}
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBarComponent;