import React from 'react'
import { Tab, Tabs } from 'react-bootstrap'
import ProductListScreen from '../../views/ProductListScreen/ProductListScreen'
import AdminSearch from './AdminSearch'
import AllUsers from './AllUsers'
import AllOrders from './AllOrders'

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
                </Tabs>
            </div>
        </>
    )
}

export default Dashboard