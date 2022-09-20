import { Container, Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import SearchBox from "../Search/SearchBox";
import logo from "../../views/assets/micro50.jpg"
import useravatar from "../../views/assets/user.png"
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";

function NavBarComponent() {

    const {user} = useSelector(state => state.users)
    const [islogged, setIslogged] = useState(false)

    useEffect(() => {
        const logstate = localStorage.getItem('logstate')
        console.log(logstate);
        setIslogged(logstate === "true" ? true : false)
    }, [])

    useEffect(() => {
        if (user && user.length !== 0) {
            console.log(user.picture);
        }
    },[user])

    return <div>
        <Navbar bg="dark" variant="dark" fixed="top">
            <Container>
                <LinkContainer to="/">
                    <img
                        src={logo}
                        width="40"
                        height="40"
                        className="d-inline-block align-top"
                        alt="our logo"
                    />
                </LinkContainer>
                <LinkContainer to="/">
                    <Navbar.Brand>Hardware Hot Sales</Navbar.Brand>
                </LinkContainer>
                <SearchBox />
                <Nav className="me-auto  w-100  justify-content-end">
                    {/* {userInfo && userInfo.isAdmin && ( */}
                    {(user && user.length !== 0) ? (
                        <NavDropdown title={user && user.roles === "admin" ? "Admin" :
                            <>
                                <img className="thumbnail-image rounded mx-2"
                                    src={user.picture ? user.picture : useravatar}
                                    alt="avatar"
                                    width="25"
                                    height="25"
                                />
                                {user.isAdmin ? "Admin" : "Account"}
                            </>
                        } id="admin-nav-dropdown" >

                            {user && user.isAdmin && (<>
                                <LinkContainer to="/admin/dashboard">
                                    <NavDropdown.Item>Dashboard</NavDropdown.Item>
                                </LinkContainer>
                                <LinkContainer to="/admin/users">
                                    <NavDropdown.Item>Users</NavDropdown.Item>
                                </LinkContainer>
                            </>)}
                            <LinkContainer to="/admin/products">
                                <NavDropdown.Item>Products</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to="/admin/orders">
                                <NavDropdown.Item>Orders</NavDropdown.Item>
                            </LinkContainer>
                            {user && user.roles === "user" && (
                                <>
                                    <LinkContainer to="/admin/profile">
                                        <NavDropdown.Item>Profile</NavDropdown.Item>
                                    </LinkContainer>
                                </>
                            )}
                        </NavDropdown>
                    ): null}
                </Nav>
            </Container>
        </Navbar>
    </div>
}

export default NavBarComponent;