/* eslint-disable array-callback-return */
import Product from "./Product";
import { useSelector } from "react-redux";

function Products() {
    const { products } = useSelector(state => state.products)

    return (
        <div className="container">
            <div className="d-flex flex-row flex-wrap px-2">
                {
                    products && products.length > 0 ?
                    products.map((product, idx) => <Product key={idx} {...product} />)
                    : <span>Loading</span>
                }
            </div>
        </div>
    );
}

export default Products;
