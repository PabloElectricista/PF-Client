import { Button, Card, Col, Form, Image, Row } from "react-bootstrap";
import listen from '../assets/listen.jpg'
import { sendcontact } from '../../redux/actions/messages'
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

function Contactform() {
    const dark = useSelector(state => state.theme.theme)
    const dispatch = useDispatch()
    const initialstate = {
        message: " ",
        name: " ",
        email: " ",
        subject: " ",
    }
    const [mail, setMail] = useState(initialstate)
    const [validated, setValidated] = useState(false);

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
        }
        setValidated(true);
        dispatch(sendcontact({
            ...mail,
            message: `${mail.message} 
    ${mail.name}`
        }))
        setMail(initialstate)
    }

    const handleChange = e => {
        e.preventDefault();
        setMail({
            ...mail,
            [e.target.name]: e.target.value
        })
    };

    return <div style={{ marginTop: "7rem" }}>
        <div className="container mt-5 p-3" style={{ backgroundColor: dark ? "black" : "white", width: "70vw" }}>
        <Card.Title className="fw-bold text-primary text-center">Contact us</Card.Title>
            <Row>
                <Col>
                    <Form className="ms-5" noValidate validated={validated} onSubmit={handleSubmit}>
                        <Form.Group className="my-3" controlId="validationCustom01">
                            <Form.Label className="fw-bold text-primary">Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="your name"
                                name="name"
                                onChange={handleChange}
                                value={mail.name}
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                tell us your name, please.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="validationCustom02">
                            <Form.Label className="fw-bold text-primary">Your email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="name@example.com"
                                name="email"
                                onChange={handleChange}
                                value={mail.email}
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                enter a valid email address
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="my-3" controlId="validationCustom03">
                            <Form.Label className="fw-bold text-primary">Subject</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="subject message"
                                name="subject"
                                onChange={handleChange}
                                value={mail.subject}
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                enter a reason, please
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="validationCustom04">
                            <Form.Label className="fw-bold text-primary ">Message</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={5}
                                placeholder={`questions feedbacks doubts`}
                                name="message"
                                onChange={handleChange}
                                value={mail.message}
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                what do you need to tell us
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Button
                            variant={dark ? "primary" : "outline-primary"}
                            type="submit"
                            style={{ fontWeight: "bolder" }}
                            className={dark ? "fw-bold text-black" : "fw-bold text-primary"}
                        >
                            Submit
                            <i className="material-icons ms-3">done_outlined</i>
                        </Button>
                    </Form>
                </Col>
                <Col>
                    <Image src={listen} width="400px" className="m-5" />
                </Col>
            </Row>
        </div>
    </div>
}

export default Contactform;
