/* eslint-disable react-hooks/exhaustive-deps */
import Form from 'react-bootstrap/Form';
import Card from "react-bootstrap/Card";
import { setfilter } from '../../redux/slices/filterSlice';
import { useDispatch } from 'react-redux';

function Ordercomponent() {

    const styles = {
        width: '17rem',
        border: "3px solid #0a58ca",
        padding: "1.5em"
    }
    const dispatch = useDispatch()

    const handleSelect = e => {
        e.preventDefault();
        const { name, value } = e.target
        if (name === (value).toLowerCase()) return
        localStorage.setItem("order", `&order=${value}`)
        dispatch(setfilter({ order: `&order=${value}` }))
    }

    return <Card className="my-3" border="primary" style={styles}>
        <Card.Title bg="info">Order products</Card.Title>
        <Form.Group>
            <Form.Select
                size="sm"
                name="price"
                onChange={handleSelect}
            >
                <option>price</option>
                {/* <option value="rating/desc">top rated</option> */}
                <option value="price/desc">expensive first</option>
                <option value="price/asc">cheaper first</option>
            </Form.Select>
        </Form.Group>
    </Card>
}

export default Ordercomponent;
