/* eslint-disable react-hooks/exhaustive-deps */
import Form from 'react-bootstrap/Form';
import Card from "react-bootstrap/Card";
import { useEffect, useState } from 'react';
import { setfilter } from '../../redux/slices/filterSlice';
import { useDispatch } from 'react-redux';

function Ordercomponent() {

    const [query, setQuery] = useState({});
    const dispatch = useDispatch()

    useEffect(() => {
        // localStorage.setItem('items', JSON.stringify(query));
        dispatch(setfilter(query))
    }, [query]);

    const styles = { 
        width: '17rem' , 
        border: "3px solid #0a58ca", 
        padding: "1.5em"
    }

    const handleSelect = e => {
        e.preventDefault();
        setQuery({
            order: e.target.value
        });
    }

    return <Card className="my-3" border="primary" style={styles}>
        <Card.Title bg="info">Order products</Card.Title>
        <Form.Group>
            <Form.Select 
                size="sm"
                onChange={handleSelect}
            >
                {/* <option value="ratings">good ratings</option> */}
                <option>by price</option>
                <option value="asc">expensive first</option>
                <option value="desc">cheaper first</option>
            </Form.Select>
        </Form.Group>
    </Card>
}

export default Ordercomponent;
