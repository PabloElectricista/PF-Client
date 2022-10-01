/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import axios from "axios";
import { Row, Col, Container, Button } from "react-bootstrap";
import { Stack, Pagination } from 'react-bootstrap';
import { Link } from "react-router-dom";
import ProductListScreen from "./ProductListScreen";
import ProductSelected from "./ProductSelected";

function AllProducts() {

    const [products, setProducts] = useState([])
    const [product, setProduct] = useState(null)
    const [count, setCount] = useState(1)
    const [id, setId] = useState(null)
    const [pages, setPages] = useState([1])
    const [current, setCurrent] = useState(1)

    useEffect(() => {
        if (products && products.length === 0) {
            getProducts(0)
        }
    }, [])

    const getProducts = async (start) => {
        setId(null)
        try {
            let { data } = await axios(`/products?start=${start}&limit=20`)
            setProducts(data.products.sort((a, b) => {
                if (a.name > b.name) return 1;
                if (a.name < b.name) return -1;
                return 0;
            }));
            setCount(data.count)
        } catch (error) { console.log(error) }

    }

    useEffect(() => {
        if (count > 0) {
            const maxpages = Math.ceil(count / 20);
            var numbers = []
            for (let i = 1; i <= maxpages; i++) {
                numbers.push(i);
            }
            setPages(numbers)
        }
    }, [count])

    useEffect(() => {
        let selected = products.find(user => user._id === id)
        setProduct(selected)
    }, [id])

    return <div>
        <Container className="m-3 p-3">
            <Row>
                <Col>
                    <h1 className="ms-5 ws-bold text-primary">Products</h1>
                </Col>
                <Col className="text-end">
                    <Link to='/admin/product/createProduct'>
                        <Button
                            variant="success m-3 p-3"
                        >
                            Publish a Product
                        </Button>
                    </Link>
                </Col>
            </Row>
            <Row>
                <Col xs={1}>
                    <Pagination size="sm">
                        <Stack gap={1}>
                            {pages?.map(page => <>
                                <Pagination.Item
                                    key={page}
                                    active={page === current}
                                    onClick={() => {
                                        setCurrent(page)
                                        getProducts(page - 1)
                                    }}
                                >{page}
                                </Pagination.Item>
                            </>)}
                        </Stack>
                    </Pagination>
                </Col>
                <Col xs={7}>
                    <ProductListScreen products={products} setId={setId} id={id} />
                </Col>
                <Col xs={4}>
                    <ProductSelected product={product} />
                </Col>
            </Row>
        </Container>
    </div>
}

export default AllProducts;