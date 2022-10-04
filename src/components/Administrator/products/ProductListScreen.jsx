
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
                    toast(data, { type: "success", autoClose: 500 });
                } else toast(data, { type: "danger" });
            } catch (err) {
                toast(err, { type: "danger" });
            }
            window.location.reload();
        }
    };

    return <div className="container mt-3 p-2">
            {products?.length && (<Table size="sm" hover bordered className="text-primary">
                <thead>
                    <tr className="text-danger">
                        <th>#</th>
                        <th>NAME</th>
                        <th className="text-center">STOCK</th>
                        <th className="text-center">PRICE</th>
                        <th className="text-center">ACTIONS</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, idx) => (
                        <tr key={product._id}
                            onClick={() => setId(product._id)}
                            className={product._id === id ? "table-active" : ""}
                        >
                            <td>{idx + 1}</td>
                            <td>{product.name}</td>
                            <td className="text-success text-center mx-2">
                                {product.stock}
                            </td>
                            <td className="text-success text-center mx-2">
                                $ {product.price}
                            </td>
                            <td>
                                <Button
                                    className="mx-2"
                                    type="button"
                                    variant="outline-primary"
                                    onClick={() => { navigate(`/admin/product/updateProduct/${product._id}`) }}
                                >
                                    Edit
                                </Button>
                                <Button
                                className="mx-2"
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
            </Table>)}
        </div>
}

export default ProductListScreen;


/* &nbsp; */