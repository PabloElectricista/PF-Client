import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import SearchBox from "../Search/SearchBox";
import logo from "../../views/assets/micro50.jpg"
import useravatar from "../../views/assets/user.png"
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import Signin from '../../views/Signin/Signin'

function NavBarComponent() {

    const { user } = useSelector(state => state.users)
    const [islogged, setIslogged] = useState(false)

    useEffect(() => {
        const logstate = localStorage.getItem('islogged')
        setIslogged(logstate === "true" ? true : false)
    }, [])

    const dropstyle = {
        backgroundColor: "white",
        color: "black",
        borderRadius: "10px"
    }

    const itemstyle = {
        backgroundColor: "black",
        color: "white",
        padding: "5px",
        fontWeight: "bolder",
        margin: "5px",
        width: "95%",
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
                    <Navbar.Brand>Hardware Hot Sales</Navbar.Brand>
                </LinkContainer>
                <SearchBox />
                <Nav className="me-auto  w-100  justify-content-end">
                    {/* {userInfo && userInfo.isAdmin && ( */}
                    {islogged ? (
                        <NavDropdown style={dropstyle} title={user && user.roles === "admin" ? "Admin" :
                            <img className="thumbnail-image rounded mx-3"
                                src={user.picture ? user.picture : useravatar}
                                alt="avatar"
                                width="30"
                                height="30"
                            />
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
                </Nav>
            </Container>
        </Navbar>
    </div>
}

export default NavBarComponent;
