import React from 'react'
import { Tab, Tabs } from 'react-bootstrap'
import AllUsers from './users/AllUsers'
import AllOrders from './orders/AllOrders'
import AllProducts from './products/AllProducts'
import Balance from './balance/Balance'
import { useState } from 'react'
import { useEffect } from 'react'

function Dashboard() {

    const [key, setKey] = useState('products');

    useEffect(() => {
        const statekey = localStorage.getItem('key')
        setKey(statekey === null ? "products" : statekey)
    }, [])

    return (
        <div style={{ backgroundColor: "white", marginTop: "8rem" }}>
            <Tabs
                activeKey={key}
                onSelect={(k) => {
                    setKey(k)
                    localStorage.setItem('key', k)
                }}
                className="mb-3"
                fill
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
    )
}

export default Dashboard