// import { useEffect, useReducer, useState } from "react";
import { Row, Col } from "react-bootstrap";
import Products from "../../components/Products/Products";
import Pagination from "../../components/Pagination/Pagination";
import Filters from '../../components/Filters/Filters'
import Carousel from "../Carousel/Carousel"
// import Cards from '../../components/Card/Cards'
// import Ordercomponent from '../../components/Order/Ordercomponent';

function Home() {
    return (
        <>
            <Carousel />

            <Row className="d-flex justify-content-start">
                <Col  xs={3}>
                    <Filters />
                </Col>
                <Col xs={9}>
                    <Products />
                </Col>
            </Row>
            <Pagination />
        </>
    );
}

export default Home;
