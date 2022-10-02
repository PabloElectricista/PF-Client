import React from 'react'
import { Tab, Tabs } from 'react-bootstrap'
import AllUsers from './users/AllUsers'
import AllOrders from './orders/AllOrders'
import AllProducts from './products/AllProducts'
import Balance from './balance/Balance'

function Dashboard() {
    return (
        <>
            <div style={{ backgroundColor: "white", marginTop: "7rem" }}>
                <Tabs
                    defaultActiveKey="products"
                >
                    <Tab eventKey="products" title="products">
                        {/* <AdminSearch select={"Products"} /> */}
                        <AllProducts />
                    </Tab>
                    <Tab eventKey="users" title="users">
                        {/* <AdminSearch select={"Users"} /> */}
                        <AllUsers />
                    </Tab>
                    <Tab eventKey="orders" title="orders">
                        {/* <AdminSearch select={"Orders"} /> */}
                        <AllOrders />
                    </Tab>
                    <Tab eventKey="balance" title="balance">                        
                        <Balance />
                    </Tab>
                </Tabs>
            </div>
        </>
    )
}

export default Dashboard