import React, { useState } from 'react';
import { postProds } from '../../redux/actions/products';
import { useDispatch, useSelector } from 'react-redux';
import style from "./CreateProduct.module.css";
import { toast } from "react-toastify";
import { Button, Card, Col, Form, Row, Image } from 'react-bootstrap';
import prodInf from '../../views/assets/prodInformaticos.jfif'

export default function CreateProduct() {

    const dispatch = useDispatch()
    const [validated, setValidated] = useState(false);
    const dark = useSelector(state => state.theme.theme)
    const [input, setInput] = useState({
        name: "",
        images: [],
        price: 0,
        description: "",
        stock: 1,
        category: "",
        brand: "",
        colors: [],
        summary: "",
        status: ["used"]
    })

    function handleSubmit(e) {
        e.preventDefault()

        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.stopPropagation();
            setValidated(true);
        } else {
            dispatch(postProds(input))
            toast("Product created successfully", {
                type: "success",
                autoClose: 1000
            })
            setInput({
                name: "",
                images: "",
                price: 0,
                description: "",
                category: "",
                stock: 1,
                brand: "",
                summary: "",
                colors: "",
                status: 'Used'
            })
        }
    }


    function handleChange(e) {
        e.preventDefault();
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
    }

    function handleCheck(e) {

        setInput({
            ...input,
            category: e.target.value
        })

    }

    function handleStatus(e) {
        setInput({
            ...input,
            status: input.status === "on" ? "New" : "Used"
        })
    }

    async function handleImageChange(e) {
        if (e.target.files && e.target.files[0]) {
            console.log(e.target.files[0])
            const data = new FormData()
            data.append("file", e.target.files[0])
            data.append("upload_preset", "bx6aojc3")
            fetch(
                "https://api.cloudinary.com/v1_1/dyjgtikqw/upload", {
                method: "POST",
                body: data
                // mode: 'no-cors'
            }
            ).then(resp => resp.json())
                .then(file => {
                    if (file) {
                        setInput({
                            ...input,
                            images: `${file.secure_url}`
                        })
                    }
                })
        }
    }

    return (
        <div className="container mt-5 p-3" style={{ backgroundColor: dark ? "black" : "white", width: "70vw" }}>
            <Card.Title className="fw-bold text-primary text-center">Create a product</Card.Title>
            <Row className={style.container}>
                <Col>
                    <Form className="ms-5" noValidate validated={validated} onSubmit={(e) => handleSubmit(e)}>
                        <Form.Group as={Row} className="mb-3" controlId="productName">
                            <Form.Label column sm={2}>
                                Name:
                            </Form.Label>
                            <Col sm={12}>
                                <Form.Control
                                    type="text"
                                    autoComplete="off"
                                    maxLength="80"
                                    placeholder="Nombre del Producto"
                                    value={input.name}
                                    name="name"
                                    required
                                    onChange={(e) => handleChange(e)} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="productImage">
                            <Form.Label column sm={2}>
                                Image:
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control
                                    type="file"
                                    name="images"
                                    required
                                    onChange={(e) => handleImageChange(e)} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="productPrice">
                            <Form.Label column sm={2}>
                                Price:
                            </Form.Label>
                            <Col sm={12}>
                                <Form.Control
                                    type="number"
                                    required
                                    value={input.price}
                                    name="price"
                                    autoComplete="off"
                                    onChange={(e) => handleChange(e)} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="productSummary">
                            <Form.Label column sm={2}>
                                Summary:
                            </Form.Label>
                            <Col sm={12}>
                                <Form.Control
                                    autoComplete="off"
                                    type="text"
                                    required
                                    value={input.summary}
                                    name='summary'
                                    placeholder="Breve resumen"
                                    onChange={(e) => handleChange(e)} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="productStock">
                            <Form.Label column sm={2}>
                                Stock:
                            </Form.Label>
                            <Col sm={12}>
                                <Form.Control
                                    type="number"
                                    required
                                    value={input.stock}
                                    name="stock"
                                    onChange={(e) => handleChange(e)} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="productBrand">
                            <Form.Label column sm={2}>
                                Brand:
                            </Form.Label>
                            <Col sm={12}>
                                <Form.Control
                                    type="text"
                                    required
                                    autoComplete="off"
                                    placeholder="Marca del Producto"
                                    value={input.brand}
                                    name="brand"
                                    onChange={(e) => handleChange(e)} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="productColors">
                            <Form.Label column sm={2}>
                                Color:
                            </Form.Label>
                            <Col sm={12}>
                                <Form.Control
                                    type="text"
                                    required
                                    autoComplete="off"
                                    placeholder="Color del Producto"
                                    value={input.colors}
                                    name="colors"
                                    onChange={(e) => handleChange(e)} />
                            </Col>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="productDescription">
                            <Form.Label>Enter a description:</Form.Label>
                            <Col sm={12}>
                                <Form.Control
                                    as="textarea"
                                    rows={3}
                                    required
                                    type="text"
                                    value={input.description}
                                    name="description"
                                    onChange={(e) => handleChange(e)} />
                            </Col>
                        </Form.Group>
                        <Col sm={12}>
                            <Form.Select aria-label="Seleccione una categoria"
                                onChange={e => handleCheck(e)}
                                required
                                value={input.category}>
                                <option>Choose a category:</option>
                                <option value="Antenna">Antenna</option>
                                <option value="Audio">Audio</option>
                                <option value="Auriculares">Auriculares</option>
                                <option value="Cam">Cam</option>
                                <option value="Component">Component</option>
                                <option value="Computer">Computer</option>
                                <option value="Cooler">Cooler</option>
                                <option value="Disc">Disc</option>
                                <option value="Gabinete">Gabinete</option>
                                <option value="Graphics">Graphics</option>
                                <option value="Memory">Memory</option>
                                <option value="Monitor">Monitor</option>
                                <option value="Motherboard">Motherboard</option>
                                <option value="PC">PC</option>
                                <option value="Peripheral">Peripheral</option>
                                <option value="Replacement">Replacement</option>
                                <option value="Sillas">Sillas</option>
                                <option value="Teclados">Teclados</option>
                                <option value="Webcam">Webcam</option>
                                <option value="Mouse">Mouse</option>
                            </Form.Select>
                        </Col>
                        <br />
                        <Form.Check
                            type="switch"
                            id="state-switch"
                            label="Check this button if the product is new."
                            onClick={(e) => handleStatus(e)}
                        />
                        <br />
                        <Button variant={dark ? "primary" : "outline-primary"}
                            type="submit"
                            style={{ fontWeight: "bolder" }}
                            className={dark ? "fw-bold text-black" : "fw-bold text-primary"}>
                            Create product
                            <i className="material-icons ms-3">done_outlined</i>
                        </Button>

                    </Form>
                </Col>
                <Col>
                    <Image src={prodInf} width="400px" className="m-5" />
                </Col>
            </Row>
        </div>
    )

}

