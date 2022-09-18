// import { useEffect, useReducer, useState } from "react";
import { Row, Col } from "react-bootstrap";
import Products from "../../components/Products/Products";
import Pagination from "../../components/Pagination/Pagination";
import Filters from '../../components/Filters/Filters'
import Carousel from "../../components/Carousel/Carousel"
import Ordercomponent from '../../components/Order/Ordercomponent';
import './Home.css'
import Ads from "../../components/advertisements/Ads";

function Home() {
    return (
        <div className="homecontainer">
            <Carousel />
            <Row className="d-flex justify-content-start">
                <Col  xs={3}>
                    <Filters />
                    <Ordercomponent />
                    <Ads />
                </Col>
                <Col xs={9}>
                    <Products />
                </Col>
            </Row>
            <Pagination />
        </div>
    );
}

export default Home;
