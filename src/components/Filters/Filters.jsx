/* eslint-disable react-hooks/exhaustive-deps */
import { Form, Card, Row, Col, Button } from 'react-bootstrap';
import './Filters.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProds } from "../../redux/actions/products";

export let closeinitial = {
    brand: false,
    colors: false,
    status: false,
    category: false,
    price: false
}

function Filters() {
    const dispatch = useDispatch()
    let brand = useSelector(state => state.products.brand)
    let colors = useSelector(state => state.products.colors)
    let price = useSelector(state => state.products.price)
    let status = useSelector(state => state.products.status)
    let category = useSelector(state => state.products.categories)
    let [query, setQuery] = useState({});
    let [close, setClose] = useState(closeinitial);
    const [minmax, setMinmax] = useState('');

    useEffect(() => {
        let closefilterstate = JSON.parse(localStorage.getItem("closefilterstate"))
        setClose(closefilterstate === null ? closeinitial : closefilterstate)
        let queryfilterstate = (JSON.parse(localStorage.getItem("queryfilterstate")))
        setQuery(queryfilterstate === null ? {} : queryfilterstate)
    }, []);

    useEffect(() => {
        if (price && price.length > 0) {
            let setminmax = localStorage.getItem("minmax") ? localStorage.getItem("minmax") : `${price[0]}/${price[1]}`
            setMinmax(setminmax)
            localStorage.setItem("minmax", setminmax)
        }
    }, [price])

    const handleSelect = e => {
        e.preventDefault();
        if (e.target.name === (e.target.value).toLowerCase()) return;
        let querysettings = {
            ...query,
            [e.target.name]: e.target.value
        }
        setQuery(querysettings);
        localStorage.setItem("queryfilterstate", JSON.stringify(querysettings))
        let closesettings = {
            ...close,
            [e.target.name]: true
        }
        setClose(closesettings)
        localStorage.setItem("closefilterstate", JSON.stringify(closesettings))

        const keys = Object.keys(querysettings)
        let text = ""
        for (const key of keys) {
            text += `&${key}=${querysettings[key]}`
        }
        localStorage.setItem("filter", text)
        localStorage.setItem("pagestate", 1)
        localStorage.setItem("page", 0)
        dispatch(getProds())
    }

    const handleClear = e => {
        e.preventDefault();
        var querysettings = {}
        var closesettings = {}
        if (e.target.name === 'price') {
            querysettings = {
                ...query,
                price: minmax
            }
            closesettings = {
                ...close,
                price: false
            }
        } else {
            var keys = Object.keys(query)
            for (const key of keys) {
                if (key !== e.target.name) {
                    querysettings[key] = query[key]
                }
            }
            closesettings = {
                ...close,
                [e.target.name]: false
            }
        }
        setQuery(querysettings);
        localStorage.setItem("queryfilterstate", JSON.stringify(querysettings))
        setClose(closesettings)
        localStorage.setItem("closefilterstate", JSON.stringify(closesettings))

        
        const keys2 = Object.keys(querysettings)
        let text = ""
        for (const key2 of keys2) {
            text += `&${key2}=${querysettings[key2]}`
        }
        localStorage.setItem("filter", text)
        localStorage.setItem("pagestate", 1)
        localStorage.setItem("page", 0)
        dispatch(getProds())
    }

    return <Card className="filtersContainer my-3" border="primary" style={{ width: '15rem' }}>
        <Card.Title bg="Info">Filter products</Card.Title>
        {brand ?
            <Form.Group>
                <Row>
                    <Col xs={8}>
                        <Form.Select
                            size="sm"
                            name="brand"
                            onChange={handleSelect}
                        >
                            <option>Brand</option>
                            {brand.map((brand, idx) => <option key={idx} value={brand}>{brand}</option>)}
                        </Form.Select>
                    </Col>
                    <Col xs={1}>
                        <Button
                            className={close.brand ? 'visible' : 'invisible'}
                            variant="danger"
                            size="sm"
                            name="brand"
                            onClick={handleClear}
                        >x</Button>
                    </Col>
                </Row>
            </Form.Group>
            : null
        }
        {category ?
            <Form.Group>
                <Row>
                    <Col xs={8}>
                        <Form.Select
                            size="sm"
                            name="category"
                            onChange={handleSelect}
                        >
                            <option>Categories</option>
                            {category.map((category, idx) => <option key={idx} value={category}>{category}</option>)}
                        </Form.Select>
                    </Col>
                    <Col xs={1}>
                        <Button
                            className={close.category ? 'visible' : 'invisible'}
                            variant="danger"
                            size="sm"
                            name="category"
                            onClick={handleClear}
                        >x</Button>
                    </Col>
                </Row>
            </Form.Group>
            : null
        }
        {colors ?
            <Form.Group>
                <Row>
                    <Col xs={8}>
                        <Form.Select
                            size="sm"
                            name="colors"
                            onChange={handleSelect}
                        >
                            <option>Colors</option>
                            {colors.map((color, idx) => <option key={idx} value={color}>{color}</option>)}
                        </Form.Select>
                    </Col>
                    <Col xs={1}>
                        <Button
                            className={close.colors ? 'visible' : 'invisible'}
                            variant="danger"
                            size="sm"
                            name="colors"
                            onClick={handleClear}
                        >x</Button>
                    </Col>
                </Row>
            </Form.Group>
            : null
        }
        {status ?
            <Form.Group>
                <Row>
                    <Col xs={8}>
                        <Form.Select
                            size="sm"
                            name="status"
                            onChange={handleSelect}
                        >
                            <option>Status</option>
                            {status.map((status, idx) => <option key={idx} value={status}>{status}</option>)}
                        </Form.Select>
                    </Col>
                    <Col xs={1}>
                        <Button
                            className={close.status ? 'visible' : 'invisible'}
                            variant="danger"
                            size="sm"
                            name="status"
                            onClick={handleClear}
                        >x</Button>
                    </Col>
                </Row>
            </Form.Group>
            : null
        }
        {price ?
            <Form.Group>
                <Row>
                    <Col xs={8}>
                        <Form.Select
                            size="sm"
                            name="price"
                            onChange={handleSelect}>
                            <option>Price</option>
                            <option key={1} value={`${price[0]}/${price[1] / 4}`}>from {price[0]} to {price[1] / 4}</option>
                            <option key={2} value={`${price[1] / 4}/${price[1] / 2}`}>from {price[1] / 4} to {price[1] / 2}</option>
                            <option key={3} value={`${price[1] / 2}/${price[1]}`}>from {price[1] / 2} to {price[1]}</option>
                        </Form.Select>
                    </Col>
                    <Col xs={1}>
                        <Button
                            className={close.price ? 'visible' : 'invisible'}
                            variant="danger"
                            size="sm"
                            name="price"
                            onClick={handleClear}
                        >x</Button>
                    </Col>
                </Row>
            </Form.Group>
            : null
        }
    </Card>
}

export default Filters;