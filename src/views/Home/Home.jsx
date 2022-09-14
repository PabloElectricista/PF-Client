import { useEffect, useReducer, useState } from "react";
import { Row, Col } from "react-bootstrap";
import Product from "../../components/Products/Product";
import data from "../../data";

function Home() {
  return (
    <>
      <h1>Productos Destacados</h1>
      <div className="products">
        {/* {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>{error}</div>
          ) : ( */}
        <Row>
          {data.products.map((product) => (
            <Col key={product.slug} sm={6} md={4} lg={3} className="mb-3">
              <Product product={product}></Product>
            </Col>
          ))}
        </Row>
        )
      </div>
    </>
  );
}

export default Home;
