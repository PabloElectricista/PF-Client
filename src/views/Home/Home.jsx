// import { useEffect, useReducer, useState } from "react";
import { Row, Col } from "react-bootstrap";
import Products from "../../components/Products/Products";
import Pagination from "../../components/Pagination/Pagination";
import Filters from '../../components/Filters/Filters'
import Ordercomponent from '../../components/Order/Ordercomponent';
import './Home.css'
import Ads from "../../components/advertisements/Ads";
import Carousel from "../../components/Carousel/Carousel"
// import Sound from "../../components/Sound/Sound";
import Sound from "../../components/Sound/Sound";

function Home() {
    return (
        <div className="homecontainer">
            <Carousel />
            {/* <Sound /> */}

            <Row className="d-flex justify-content-start">
                <Col className="mx-2" xs={3}>
                    <Filters />
                    <Ordercomponent />
                    <Ads />
                </Col>
                <Col xs={8}>
                    <Products />
                </Col>
            </Row>
            <Pagination />
        </div>
    );
}

export default Home;
