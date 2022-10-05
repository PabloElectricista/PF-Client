
import { Container, Navbar, Nav, NavDropdown, Badge, Button, Image } from "react-bootstrap";
/* eslint-disable react-hooks/exhaustive-deps */
import { LinkContainer } from "react-router-bootstrap";
import SearchBox from "../Search/SearchBox";
import logo from "../../views/assets/micro50.png"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import Signin from '../../views/Signin/Signin'
// import BootstrapSwitchButton from 'bootstrap-switch-button-react'
import { settheme } from '../../redux/slices/themeSlice'
import { Link } from 'react-router-dom';
import { Store } from '../../Store';
import { useContext } from 'react'

function NavBarComponent() {


    // agregado por nes funcionalidad cart
    const { state } = useContext(Store);
    const { cart } = state;

    const dark = useSelector(state => state.theme.theme)
    const dispatch = useDispatch();

    const { user } = useSelector(state => state.users)
    const [islogged, setIslogged] = useState(false)
    const [client, setClient] = useState({})

    useEffect(() => {
        const logstate = localStorage.getItem('islogged')
        setIslogged(logstate === "true" ? true : false)
        const themestate = localStorage.getItem('theme')
        dispatch(settheme(themestate === "true" ? true : false))
        const clientstate = JSON.parse(localStorage.getItem('user'))
        setClient(clientstate === null ? {} : clientstate)
    }, [])

    useEffect(() => {
        if (user && user.username) {
            localStorage.setItem("user", JSON.stringify(user))
            setClient(user)
        }
    }, [user])

    useEffect(() => {
        localStorage.setItem('theme', dark ? true : false)
    }, [dark])

    const itemstyle = {
        backgroundColor: "black",
        color: "white",
        padding: "5px",
        fontWeight: "bolder",
        margin: "5px",
        width: "95%"
    }

    return <div>
        <Navbar bg="dark" variant="dark" fixed="top" className="d-flex flex-row align-items-baseline">
            <Container>
                <LinkContainer to="/">
                    <Image
                        src={logo}
                        width="50"
                        height="50"
                        className="d-inline-block align-top mx-3 outlie-light"
                        alt="our logo"
                        roundedCircle
                    />
                </LinkContainer>
                <LinkContainer to="/">
                    <Navbar.Brand>
                        <p
                            style={{ FontFace: "Helvetica Neue", fontFamily: "italic" }}
                            className="d-inline-block mx-3 justify-content-center"
                        >Hardware Hot Sales</p>
                    </Navbar.Brand>
                </LinkContainer>

                <SearchBox />


                <Nav className="my-0  w-100">
                    {/* {userInfo && userInfo.isAdmin && ( */}
                    {islogged ? (
                        <NavDropdown className="align-self-center" title={client && client.roles === "admin" ? "Admin" :
                            <Button variant="outline-secondary" className="mx-1 ">
                                <>
                                    {client.picture ? <img
                                        className="thumbnail-image rounded "
                                        src={client.picture}
                                        alt="avatar"
                                        width="60"
                                        height="60"
                                    /> :
                                        <p>{localStorage.getItem("name")}</p>}
                                </>
                            </Button>
                        } id="admin-nav-dropdown" >
                            {/* <LinkContainer to="/admin/messages" style={itemstyle}>
                                <NavDropdown.Item>
                                    <i className="material-icons">mail</i>
                                    Messages
                                </NavDropdown.Item>
                            </LinkContainer> */}
                            {client && !client.isBlocked && !client.isAdmin && <>
                                <LinkContainer to="/admin/orders" style={itemstyle}>
                                    <NavDropdown.Item>
                                        <i className="material-icons">app_registration</i>
                                        Orders
                                    </NavDropdown.Item>
                                </LinkContainer>
                            </>}
                            {!client.isAdmin && <LinkContainer to="/admin/profile" style={itemstyle}>
                                <NavDropdown.Item>
                                    <i className="material-icons">person</i>
                                    Profile</NavDropdown.Item>
                            </LinkContainer>}
                            {client && client.isAdmin && (
                                <>
                                    <NavDropdown.Divider />
                                    <LinkContainer to="/admin/dashboard" style={itemstyle}>
                                        <NavDropdown.Item>
                                            <i className="material-icons">settings</i>
                                            Admin
                                        </NavDropdown.Item>
                                    </LinkContainer>
                                </>
                            )}
                        </NavDropdown>
                    ) : null}
                    <Signin log={islogged} setLog={setIslogged} />
                    <Button size="sm" bg="white" variant="outline-info" className="m-2">
                        <Link to="/" className="nav-link">
                            <i className="material-icons">home</i>
                            Home
                        </Link>
                    </Button>
                    <Button
                        size="sm"
                        href="/contactus"
                        variant="outline-warning"
                        className="m-2"
                    >
                        <i className="material-icons">create</i>
                        Contact us
                    </Button>
                    {/* Cart */}
                    <Button size="sm" className="mx-2" variant="outline-success"><Link to="/cart" className="nav-link">
                        <i className="material-icons">shopping_cart_checkout</i>
                        Cart {cart.cartItems.length > 0 && (
                            <Badge pill bg="danger ">
                                {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                            </Badge>
                        )}
                    </Link></Button>
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
}

export default NavBarComponent;
