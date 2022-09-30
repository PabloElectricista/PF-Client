import React from 'react'
import { Tab, Tabs } from 'react-bootstrap'
import ProductListScreen from '../../views/ProductListScreen/ProductListScreen'
import AdminSearch from './AdminSearch'
import AllUsers from './users/AllUsers'
import AllOrders from './orders/AllOrders'

function Dashboard() {
    return (
        <>
            <div className="container p-3" style={{ backgroundColor: "white", marginTop: "7rem" }}>
                <Tabs
                    defaultActiveKey="products"
                >
                    <Tab eventKey="products" title="products">
                        <AdminSearch select={"Products"} />
                        <ProductListScreen />
                    </Tab>
                    <Tab eventKey="users" title="users">
                        <AdminSearch select={"Users"} />
                        <AllUsers />
                    </Tab>
                    <Tab eventKey="orders" title="orders">
                        <AdminSearch select={"Orders"} />
                        <AllOrders />
                    </Tab>
                    <Tab eventKey="balance" title="balance">
                        <br></br><br></br><br></br><br></br>
                        <h1>Total Balance</h1>
                        <p>profit</p>
                        <p>profit</p>
                        <p>bla bla bla</p>
                    </Tab>
                </Tabs>
            </div>
        </>
    )
}

export default Dashboard