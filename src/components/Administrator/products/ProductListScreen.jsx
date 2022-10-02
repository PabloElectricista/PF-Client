/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function ProductListScreen({ products, setId, id }) {

    const navigate = useNavigate();

    const deleteHandler = async (product) => {
        if (window.confirm("Are you sure to delete?")) {
            try {
                const { data } = await axios.put(`/products/${product._id}`, { isDisabled: true }, {
                    headers: { credential: localStorage.getItem("tkn") },
                });
                if (data === "product delected ok") {
                    // getAllproducts()
                    toast(data, { type: "success", autoClose: 1000 });
                } else toast(data, { type: "danger" });
            } catch (err) {
                toast(err, { type: "danger" });
            }
        }
    };

    return <div className="container m-3 p-2">
            <Table size="sm" hover bordered className="text-primary">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>NAME</th>
                        <th>STOCK</th>
                        <th>PRICE</th>
                        <th>ACTIONS</th>
                    </tr>
                </thead>
                <tbody>
                    {products?.length && products.map((product, idx) => (
                        <tr key={product._id}
                            onClick={() => setId(product._id)}
                            className={product._id === id ? "table-active" : ""}
                        >
                            <td>{idx + 1}</td>
                            <td>{product.name}</td>
                            <td>{product.stock}</td>
                            <td>$ {product.price}</td>
                            <td>
                                <Button
                                    type="button"
                                    variant="outline-primary"
                                    onClick={() => { navigate(`/admin/product/updateProduct/${product._id}`) }}
                                >
                                    Edit
                                </Button>
                                &nbsp;
                                <Button
                                    type="button"
                                    variant="outline-primary"
                                    onClick={() => deleteHandler(product)}
                                >
                                    Delete
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
}

export default ProductListScreen;
