/* eslint-disable react-hooks/exhaustive-deps */
import Form from 'react-bootstrap/Form';
import Card from "react-bootstrap/Card";
import './Filters.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setfilter } from '../../redux/slices/filterSlice';
import { Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';

function Filters() {

    const dispatch = useDispatch()
    let brand = useSelector(state => state.products.brand)
    let colors = useSelector(state => state.products.colors)
    let price = useSelector(state => state.products.price)
    let status = useSelector(state => state.products.status)
    let category = useSelector(state => state.products.categories)
    let [query, setQuery] = useState({});
    let [close, setClose] = useState({});
    const [minmax, setMinmax] = useState('');
    let [firstload, setFirstload] = useState(true);
    

    useEffect(() => {
        let closefilterstate = JSON.parse(localStorage.getItem("closefilterstate"))
        let setting = (closefilterstate === null || closefilterstate === undefined) ? {
            brand: false,
            colors: false,
            status: false,
            price: false,
            category: false
        } : closefilterstate
        setClose(setting)
     
        let queryfilterstate = JSON.parse(localStorage.getItem("queryfilterstate"))
        let querysettings = (queryfilterstate === null || queryfilterstate === undefined) ? {} : queryfilterstate
        setQuery(querysettings)
    }, [])

    useEffect(() => {
        dispatch(setfilter(query))
        const keys = Object.keys(query)
            let text = ""
            for (const key of keys) {
                text += `&${key}=${query[key]}`
            }
        localStorage.setItem("filter", text)
    }, [query]);

    useEffect(() => {
        if (price && price.length > 0 && firstload) {
            setMinmax(`${price[0]}/${price[1]}`)
            setFirstload(false)
        }
        if (price[1] === 0) setQuery({
            ...query,
            price: minmax
        })
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
                    console.log(key, query[key]);
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
    }

    return <Card className="filtersContainer my-3" border="primary" style={{ width: '17rem' }}>
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
                            name="categories"
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