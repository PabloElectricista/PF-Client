import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import profile from "../../views/assets/profile.jpg"

function UserProfile() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  const containerStyle = {
    backgroundColor: "white",
    marginTop: "5rem",
    paddingTop: "5rem"
  }

  return (
    <Container style={containerStyle}>
      <Card.Title >Update account</Card.Title>
      <Row>
        <Col  xs="8">
          <Form className="m-3" noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} md="4" controlId="validationCustom01">
                <Form.Label>First name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="First name"
                  defaultValue="Mark"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustom02">
                <Form.Label>Last name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Last name"
                  defaultValue="Otto"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustom02">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="54 11 12345678"
                  defaultValue="54 11 12345678"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="4" controlId="validationCustom03">
                <Form.Label>Address</Form.Label>
                <Form.Control type="text" placeholder="Your street" required />
              </Form.Group>
              <Form.Group as={Col} md="2" controlId="validationCustom03">
                <Form.Label>Number</Form.Label>
                <Form.Control type="number" placeholder="1234" required />
              </Form.Group>
              <Form.Group as={Col} md="2" controlId="validationCustom03">
                <Form.Label>Floor</Form.Label>
                <Form.Control type="text" placeholder="10º" required />
              </Form.Group>
              <Form.Group as={Col} md="2" controlId="validationCustom03">
                <Form.Label>Department</Form.Label>
                <Form.Control type="text" placeholder="A" required />
              </Form.Group>
              <Form.Group as={Col} md="2" controlId="validationCustom06">
                <Form.Label>Zip</Form.Label>
                <Form.Control type="number" placeholder="2000" required />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid zip.
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="4" controlId="validationCustom04">
                <Form.Label>City</Form.Label>
                <Form.Control type="text" placeholder="City" required />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid city.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustom05">
                <Form.Label>State</Form.Label>
                <Form.Control type="text" placeholder="State" required />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid state.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustom05">
                <Form.Label>Country</Form.Label>
                <Form.Control type="text" placeholder="Country" required />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid Country.
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Button variant='success' type="submit">Update</Button>
          </Form>
        </Col>
        <Col  xs="1">
          <br></br>
          <img src={profile} alt="figure" width="350px"/>
        </Col>
      </Row>
    </Container >
  );
}

export default UserProfile;
