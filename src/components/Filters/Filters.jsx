/* eslint-disable react-hooks/exhaustive-deps */
import Form from 'react-bootstrap/Form';
import Card from "react-bootstrap/Card";
import './Filters.css';
import { Col, Row } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setfilter } from '../../redux/slices/filterSlice';

function Filters() {

    const dispatch = useDispatch()
    const brand = useSelector(state => state.products.brand)
    const colors = useSelector(state => state.products.colors)
    const price = useSelector(state => state.products.price)
    const status = useSelector(state => state.products.status)
    const [query, setQuery] = useState({});
    const [minmax, setMinMax] = useState({
        min: 0,
        max: 10000
    })

    useEffect(() => {
        // localStorage.setItem('items', JSON.stringify(query));
        dispatch(setfilter(query))
    }, [query]);

    useEffect(() => {
        if (price && price.length > 0) setMinMax({
            min: price[0],
            max: price[1]
        })

    }, [price])

    const handleSelect = e => {
        e.preventDefault();
        setQuery({
            ...query,
            [e.target.name]: e.target.value
        });
    }

    const handleprice = e => {
        e.preventDefault();
        const { name, value } = e.target
        console.log(minmax);
        setMinMax({
            ...minmax,
            [name] : parseInt(value)
        })
        setQuery({
            ...query,
            price: `${minmax.min}/${minmax.max}`
        });
    }

    return <Card className="filtersContainer my-3" border="primary" style={{ width: '17rem' }}>
        <Card.Title bg="Info">Filter products</Card.Title>
        {brand ?
            <Form.Group className="brandFilter">
                <Form.Select
                    size="sm"
                    name="brand"
                    onChange={handleSelect}
                >
                    <option>Brand</option>
                    {brand.map((brand, idx) => <option key={idx} value={brand}>{brand}</option>)}
                </Form.Select>
            </Form.Group>
            : null
        }
        {colors ?
            <Form.Group className="colorFilter">
                <Form.Select
                    size="sm"
                    name="colors"
                    onChange={handleSelect}
                >
                    <option>Colors</option>
                    {colors.map((color, idx) => <option key={idx} value={color}>{color}</option>)}
                </Form.Select>
            </Form.Group>
            : null
        }
        {status ?
            <Form.Group className="statusFilter">
                <Form.Select
                    size="sm"
                    name="status"
                    onChange={handleSelect}
                >
                    <option>Status</option>
                    {status.map((status, idx) => <option key={idx} value={status}>{status}</option>)}
                </Form.Select>
            </Form.Group>
            : null
        }
        {!price ?
            <Form.Group className="filterPrice">
                <Row>
                    <Form.Label>Price</Form.Label>
                    <Col>
                        <Form.Label>from {price[0]}</Form.Label>
                        <Form.Control
                            type='Number'
                            name='min'
                            min={price[0]}
                            max={minmax.max}
                            onChange={handleprice}
                            value={minmax.min ? minmax.min : price[0]}
                        />
                    </Col>
                    <Col>
                        <Form.Label>to {price[1]}</Form.Label>
                        <Form.Control
                            type='Number'
                            name='max'
                            min={minmax.min}
                            max={price[1]}
                            onChange={handleprice}
                            value={minmax.max ? minmax.max : price[1]} 
                        />
                    </Col>
                </Row>
            </Form.Group>
            : null
        }
    </Card>
}

export default Filters;