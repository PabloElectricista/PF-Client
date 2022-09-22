/* eslint-disable no-unused-vars */
import React from "react";
import { useSelector } from "react-redux";
import OrdersList from "./OrdersList"
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function OrdersProducts() {

    const { products } = useSelector(state => state.products)

    return (
        <div>
            <br></br><br></br><br></br>
            <div className="container" style={{ backgroundColor: "white" }}>
                <Tabs
                    defaultActiveKey="Purchases"
                    className="mb-3"
                >
                    <Tab eventKey="Purchases" title="Purchases">
                        <OrdersList orders={products.slice(0, 3)} />
                    </Tab>
                    <Tab eventKey="Sales" title="Sales">
                        <OrdersList orders={products.slice(3, 6)} />
                    </Tab>
                    <Tab eventKey="Canceled" title="Canceled">
                        <OrdersList orders={products.slice(6, 9)} />
                    </Tab>
                </Tabs>
            </div>
        </div>
    );

}

export default OrdersProducts;
