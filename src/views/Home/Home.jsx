// import { useEffect, useReducer, useState } from "react";
// import { Row, Col } from "react-bootstrap";
import Products from "../../components/Products/Products";
import Pagination from "../../components/Pagination/Pagination";
// import Cards from '../../components/Card/Cards'
// import Filterscomponent from '../../components/Filters/Filterscomponent'
// import Ordercomponent from '../../components/Order/Ordercomponent';

function Home() {
    return (
        <>
            <h1>Productos Destacados</h1>
            <div className="products">
                <Products />
            </div>
            <Pagination />
        </>
    );
}

export default Home;
