import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import profile from "../../views/assets/profile.jpg"
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../../redux/actions/users'
import { useEffect } from 'react';

function UserProfile() {

    const [tkn, setTkn] = useState("")
    const dark = useSelector(state => state.theme.theme)
    const dispatch = useDispatch()

    useEffect(()=>{
        setTkn(localStorage.getItem('tkn'))
    },[])

    const initialstate = {
        firstName: "",
        lastName: "",
        phone: 0,
        identificationnumber: 0,
        address: "",
        addressnumber: 0,
        floor: 0,
        department: "",
        zipcode: 0,
        city: "",
        state: "",
        country: ""
    }

    const [validated, setValidated] = useState(false);
    const [userdata, setUserdata] = useState(initialstate);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
        }
        setValidated(true);
        dispatch(updateUser(userdata, tkn));
        setUserdata(initialstate)
    };

    const handlechange = e => {
        e.preventDefault();
        setUserdata({
            ...userdata,
            [e.target.name]: e.target.value
        })
    }

    const containerStyle = {
        backgroundColor: dark ? "black" : "white",
        marginTop: "5rem",
        paddingTop: "5rem"
    }

    return (
        <Container style={containerStyle}>
            <Card.Title className="fw-bold text-primary text-center">Update account</Card.Title>
            <Row>
                <Col xs="8">
                    <Form className="m-3" noValidate validated={validated} onSubmit={handleSubmit}>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="4" controlId="validationCustom01">
                                <Form.Label className="fw-bold text-primary">First name</Form.Label>
                                <Form.Control
                                    required
                                    name="firstName"
                                    type="text"
                                    placeholder="First name"
                                    onChange={handlechange}
                                    value={userdata.firstName}
                                    defaultValue="firstName"
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please provide first name
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationCustom02">
                                <Form.Label className="fw-bold text-primary">Last name</Form.Label>
                                <Form.Control
                                    required
                                    name="lastName"
                                    type="text"
                                    placeholder="Last name"
                                    onChange={handlechange}
                                    value={userdata.lastName}
                                    defaultValue="lastName"
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please provide last name
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="4" controlId="validationCustom02">
                                <Form.Label className="fw-bold text-primary">Phone</Form.Label>
                                <Form.Control
                                    required
                                    name="phone"
                                    type="number"
                                    placeholder="54 11 12345678"
                                    onChange={handlechange}
                                    value={userdata.phone}
                                    defaultValue="132131"
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please provide a valid number.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationCustom02">
                                <Form.Label className="fw-bold text-primary">Identification number</Form.Label>
                                <Form.Control
                                    required
                                    name="identificationnumber"
                                    type="number"
                                    placeholder="23 11123456 8"
                                    onChange={handlechange}
                                    value={userdata.identificationnumber}
                                    defaultValue="identificationnumber"
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please provide a valid identification number.
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="4" controlId="validationCustom03">
                                <Form.Label className="fw-bold text-primary">Address</Form.Label>
                                <Form.Control
                                    required
                                    name='address'
                                    type="text"
                                    placeholder="Your street"
                                    onChange={handlechange}
                                    value={userdata.address}
                                    defaultValue="address"
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please provide the name of your street.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="2" controlId="validationCustom03">
                                <Form.Label className="fw-bold text-primary">Number</Form.Label>
                                <Form.Control
                                    required
                                    name='addressnumber'
                                    type="number"
                                    placeholder="1234"
                                    onChange={handlechange}
                                    value={userdata.addressnumber}
                                    defaultValue="addressnumber"
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please provide a number.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="2">
                                <Form.Label className="fw-bold text-primary">Floor</Form.Label>
                                <Form.Control
                                    name="floor"
                                    type="text"
                                    placeholder="10º"
                                    onChange={handlechange}
                                    value={userdata.floor}
                                    defaultValue="floor"
                                />
                            </Form.Group>
                            <Form.Group as={Col} md="2">
                                <Form.Label className="fw-bold text-primary">Department</Form.Label>
                                <Form.Control
                                    name='department'
                                    type="text"
                                    placeholder="A"
                                    onChange={handlechange}
                                    value={userdata.department}
                                    defaultValue="department"
                                />
                            </Form.Group>
                            <Form.Group as={Col} md="2" controlId="validationCustom06">
                                <Form.Label className="fw-bold text-primary">Zip</Form.Label>
                                <Form.Control
                                    required
                                    name='zipcode'
                                    type="number"
                                    placeholder="2000"
                                    onChange={handlechange}
                                    value={userdata.zipcode}
                                    defaultValue="zipcode"
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please provide a valid zip.
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="4" controlId="validationCustom04">
                                <Form.Label className="fw-bold text-primary">City</Form.Label>
                                <Form.Control
                                    required
                                    name='city'
                                    type="text"
                                    placeholder="City"
                                    onChange={handlechange}
                                    value={userdata.city}
                                    defaultValue="city"
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please provide a valid city.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationCustom05">
                                <Form.Label className="fw-bold text-primary">State</Form.Label>
                                <Form.Control
                                    required
                                    name='state'
                                    type="text"
                                    placeholder="State"
                                    onChange={handlechange}
                                    value={userdata.state}
                                    defaultValue="state"
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please provide a valid state.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationCustom05">
                                <Form.Label className="fw-bold text-primary">Country</Form.Label>
                                <Form.Control
                                    required
                                    name='country'
                                    type="text"
                                    placeholder="Country"
                                    onChange={handlechange}
                                    value={userdata.country}
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please provide a valid Country.
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                        <Button
                            variant={dark ? "primary" : "outline-primary"}
                            className={dark ? "fw-bold text-black" : "fw-bold text-primary"}
                            type="submit"
                        >Update</Button>
                    </Form>
                </Col>
                <Col xs="1">
                    <br></br>
                    <img src={profile} alt="figure" width="350px" />
                </Col>
            </Row>
        </Container >
    );
}

export default UserProfile;
