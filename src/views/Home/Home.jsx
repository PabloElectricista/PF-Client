import { useEffect, useReducer, useState } from "react";
import { Row, Col } from "react-bootstrap";
import Products from "../../components/Products/Products";
import Pagination from "../../components/Pagination/Pagination";
import Cards from '../../components/Card/Cards'
import Pagination from '../../components/Pagination/Pagination';
import Filterscomponent from '../../components/Filters/Filterscomponent'
import Ordercomponent from '../../components/Order/Ordercomponent';

function Home() {
    return (
        <>
            <h1>Productos Destacados</h1>
            <div className="products">
                <Products />
            </div>
            <Pagination />
            {/* <div className="products">
        {/* {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>{error}</div>
          ) : ( */}
            {/* <Row>
          {data.products.map((product) => (
            <Col key={product.slug} sm={6} md={4} lg={3} className="mb-3">
              
            </Col>
          ))}
        </Row> */}
        </>
    );

    return <div className="container">
            <Ordercomponent />
        <div className="d-flex justify-content-between m-3">
            <Filterscomponent />
            <Cards />
        </div>
        <Pagination />
    </div>
}

export default Home;
