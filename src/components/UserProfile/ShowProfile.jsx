import { Form, Row, Col } from "react-bootstrap";

function ShowProfile() {

    

    return <>
        <Form>
        <Row className="mb-3">
                <Form.Group as={Col} md="6">
                    <Form.Label className="fw-bold text-primary">First name</Form.Label>
                    <Form.Control
                        disabled
                        name="firstName"
                        type="text"
                        // value={userdata.firstName}
                    />
                </Form.Group>
                <Form.Group as={Col} md="6">
                    <Form.Label className="fw-bold text-primary">Last name</Form.Label>
                    <Form.Control
                        disabled
                        name="lastName"
                        type="text"
                        // value={userdata.lastName}
                    />
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} md="6">
                    <Form.Label className="fw-bold text-primary">Phone</Form.Label>
                    <Form.Control
                        disabled
                        name="phone"
                        type="number"
                        // value={userdata.phone}
                    />
                </Form.Group>
                <Form.Group as={Col} md="6">
                    <Form.Label className="fw-bold text-primary">Identification number</Form.Label>
                    <Form.Control
                        disabled
                        name="identificationnumber"
                        type="number"
                        // value={userdata.identificationnumber}
                    />
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} md="4">
                    <Form.Label className="fw-bold text-primary">Address</Form.Label>
                    <Form.Control
                        disabled
                        name='address'
                        type="text"
                        // value={userdata.address}
                    />
                </Form.Group>
                <Form.Group as={Col} md="2">
                    <Form.Label className="fw-bold text-primary">Number</Form.Label>
                    <Form.Control
                        disabled
                        name='addressnumber'
                        type="number"
                        // value={userdata.addressnumber}
                    />
                </Form.Group>
                <Form.Group as={Col} md="2">
                    <Form.Label className="fw-bold text-primary">Floor</Form.Label>
                    <Form.Control
                        disabled
                        name="floor"
                        type="text"
                        // value={userdata.floor}
                    />
                </Form.Group>
                <Form.Group as={Col} md="2">
                    <Form.Label className="fw-bold text-primary">Department</Form.Label>
                    <Form.Control
                        disabled
                        name='department'
                        type="text"
                        // value={userdata.department}
                    />
                </Form.Group>
                <Form.Group as={Col} md="2">
                    <Form.Label className="fw-bold text-primary">Zip</Form.Label>
                    <Form.Control
                        disabled
                        name='zipcode'
                        type="number"
                        // value={userdata.zipcode}
                    />
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} md="4">
                    <Form.Label className="fw-bold text-primary">City</Form.Label>
                    <Form.Control
                        disabled
                        name='city'
                        type="text"
                        // value={userdata.city}
                    />
                </Form.Group>
                <Form.Group as={Col} md="4">
                    <Form.Label className="fw-bold text-primary">State</Form.Label>
                    <Form.Control
                        disabled
                        name='state'
                        type="text"
                        // value={userdata.state}
                    />
                </Form.Group>
                <Form.Group as={Col} md="4">
                    <Form.Label className="fw-bold text-primary">Country</Form.Label>
                    <Form.Control
                        disabled
                        name='country'
                        type="text"
                        // value={userdata.country}
                    />
                </Form.Group>
            </Row>
        </Form>
    </>
}

export default ShowProfile;