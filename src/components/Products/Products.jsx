/* eslint-disable array-callback-return */
import Product from "./Product";
import { useSelector } from "react-redux";
import { Col, Row } from "react-bootstrap";

function Products() {
    const { products } = useSelector(state => state.products)

    return (
        <div className="container">
            <Row>
                {products && products.length > 0 ?
                    <Col sm={6} md={4} lg={3} className="mx-3">
                        {products.map((product, idx) => {
                            if (idx < 3) return <Product key={idx} {...product} />
                        })}
                    </Col> :
                    <Col>
                        <span>Loading</span>
                    </Col>}
                {products && products.length > 0 ?
                    <Col sm={6} md={4} lg={3} className="mx-3">{
                        products.map((product, idx) => {
                            if (2 < idx && idx < 6) return <Product key={idx} {...product} />
                        })
                    }</Col> :
                    null}
                {products && products.length > 0 ?
                    <Col sm={6} md={4} lg={3} className="mx-3">
                        {products.map((product, idx) => {
                            if (idx > 5) return <Product key={idx} {...product} />
                        })}
                    </Col> :
                    null}
            </Row>
        </div>
    );
}

export default Products;