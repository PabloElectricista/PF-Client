/* eslint-disable react-hooks/exhaustive-deps */
import { Container, Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import SearchBox from "../Search/SearchBox";
import logo from "../../views/assets/micro50.jpg"
import useravatar from "../../views/assets/user.png"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import Signin from '../../views/Signin/Signin'
import BootstrapSwitchButton from 'bootstrap-switch-button-react'
import { settheme } from '../../redux/slices/themeSlice'

function NavBarComponent() {

    const dark = useSelector(state => state.theme.theme)
    const dispatch = useDispatch();
    const { user } = useSelector(state => state.users)
    const [islogged, setIslogged] = useState(false)

    useEffect(() => {
        const logstate = localStorage.getItem('islogged')
        const themestate = localStorage.getItem('theme')
        setIslogged(logstate === "true" ? true : false)
        dispatch(settheme(themestate === "true" ? true : false))
    }, [])

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
        <Navbar bg="dark" variant="dark" fixed="top">
            <Container>
                <LinkContainer to="/">
                    <img
                        src={logo}
                        width="40"
                        height="40"
                        className="d-inline-block align-top mx-3"
                        alt="our logo"
                    />
                </LinkContainer>
                <LinkContainer to="/">
                    <Navbar.Brand>
                        <p 
                            style={{FontFace: "Helvetica Neue", fontFamily: "italic"}}
                            className="d-inline-block mx-3 justify-content-center"
                        >Hardware Hot Sales</p>
                    </Navbar.Brand>
                </LinkContainer>
                <SearchBox />
                <Nav className="me-auto  w-100  justify-content-end">
                    {/* {userInfo && userInfo.isAdmin && ( */}
                    {islogged ? (
                        <NavDropdown /* style={dropstyle}  */ title={user && user.roles === "admin" ? "Admin" :
                            <Button variant="outline-secondary" /* className="px-1 " */>
                                <img 
                                    className="thumbnail-image rounded mx-1"
                                    src={user.picture ? user.picture : useravatar}
                                    alt="avatar"
                                    width="20"
                                    height="20"
                                />
                            </Button>
                        } id="admin-nav-dropdown" >
                            <LinkContainer to="/admin/messages" style={itemstyle}>
                                <NavDropdown.Item>
                                    <i className="material-icons">mail</i>
                                    Messages
                                </NavDropdown.Item>
                            </LinkContainer>
                            {user && !user.isBlocked && <>
                                <LinkContainer to="/admin/orders" style={itemstyle}>
                                    <NavDropdown.Item>
                                        <i className="material-icons">app_registration</i>
                                        Orders
                                    </NavDropdown.Item>
                                </LinkContainer>
                            </>}
                            <LinkContainer to="/admin/profile" style={itemstyle}>
                                <NavDropdown.Item>
                                    <i className="material-icons">person</i>
                                    Profile</NavDropdown.Item>
                            </LinkContainer>
                            {user && user.isAdmin && (
                                <>
                                    <NavDropdown.Divider />
                                    <LinkContainer to="/admin/products" style={itemstyle}>
                                        <NavDropdown.Item>
                                            <i className="material-icons">dataset</i>
                                            Products
                                        </NavDropdown.Item>
                                    </LinkContainer>
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
                    <Button
                        href="/contactus"
                        variant="outline-warning"
                        className="me-2"

                    >
                        <i className="material-icons">create</i>
                        Contact us
                    </Button>
                    <BootstrapSwitchButton
                        checked={dark ? true : false}  
                        onstyle="dark" 
                        offstyle="light"
                        onChange={(checked) => dispatch(settheme(checked))} 
                        onlabel={<i className="material-icons">mode_night</i>}
                        offlabel={<i className="material-icons">light_mode</i>}
                    />
                </Nav>
            </Container>
        </Navbar>
    </div>
}

export default NavBarComponent;
