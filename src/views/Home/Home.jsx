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
import propa1 from '../assets/servTecProp.jfif'
import propa2 from '../assets/alarmas.png'

function Home() {
    return (
        <div className="homecontainer">
            <Carousel />
            {/* <Sound /> */}

            <Row className="d-flex justify-content-start">
                <Col className="mx-2" md={3}>
                    <Filters />
                    <Ordercomponent />
                    <Ads src={propa1}/>
                    <Ads src={propa2}/>
                </Col>
                <Col md={8}>
                    <Products />
                </Col>
            </Row>
            <Pagination />
        </div>
    );
}

export default Home;
