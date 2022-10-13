/* eslint-disable array-callback-return */
import Product from "./Product";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

function Products() {

    const { products } = useSelector(state => state.products)
    const [ search, setSearch] = useState(false)

    useEffect(()=> {
        setSearch(localStorage.getItem('search') !== "")
    }, [products])

    return (
        <div className="container mx-3 pt-2 px-3" style={{minWidth:"600px"}}>
            <div className="d-flex flex-row flex-wrap px-2">
                {
                    products && products.length > 0 ?
                    products.map((product, idx) => <Product key={idx} {...product} />)
                    : <h3 className="text-center text-warning fb-bold">
                        {!search ? "Waiting... loading..." : "Sorry, not found" }
                    </h3>
                }
            </div>
        </div>
    );
}

export default Products;
