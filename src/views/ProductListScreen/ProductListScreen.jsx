/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import './ProductListScreen.css';


function ProductListScreen() {

    const navigate = useNavigate();
    // const { search } = useLocation();
    const [products, setProducts] = useState({});
    const { count } = useSelector(state => state.products)

    useEffect(() => {
        getAllproducts()
    }, [])

    const getAllproducts = () => {

        axios(`/products?start=0&limit=${count}`  )
            .then(({ data }) => {
                setProducts(data.products.sort((a, b)=> {
                    if(a.name > b.name) return 1;
                    if(a.name < b.name) return -1;
                    return 0;
                }))
            })
            .catch(error => toast(error.message, { type: "error" }))
    }

    const createHandler = async () => {
        // if (window.confirm("Are you sure to create?")) {
        //   try {
        //     dispatch({ type: "CREATE_REQUEST" });
        //     const { data } = await axios.post(
        //       "/api/products",
        //       {},
        //       {
        //         headers: { Authorization: `Bearer ${userInfo.token}` },
        //       }
        //     );
        //     toast.success("product created successfully");
        //     dispatch({ type: "CREATE_SUCCESS" });
        //     navigate(`/admin/product/${data.product._id}`);
        //   } catch (err) {
        //     toast.error(getError(error));
        //     dispatch({
        //       type: "CREATE_FAIL",
        //     });
        //   }
        // }
    };

    const deleteHandler = async (product) => {
        if (window.confirm("Are you sure to delete?")) {
            try {
                const {data} = await axios.put(`/products/${product._id}`, { isDisabled: true }, {
                    headers: { credential: localStorage.getItem("tkn") },
                });
                if(data === "product delected ok") {
                    getAllproducts()
                    toast(data, { type: "success", autoClose: 1000 });
                } else toast(data, { type: "danger" });
            } catch (err) {
                toast(err, { type: "danger" });
            }
        }
    };

    return (
        <div>
            <br></br><br></br><br></br>
            <Row>
                <Col>
                    <h1>Products</h1>
                </Col>
                <Col className="col text-end">
                    <div>
                        <Link to='/admin/product/createProduct'>
                            <Button className="createButton" type="button" onClick={createHandler}>
                                Create Product
                            </Button>
                        </Link>
                    </div>
                </Col>
            </Row>

            <>
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>NAME</th>
                            <th>PRICE</th>
                            <th>CATEGORY</th>
                            <th>BRAND</th>
                            <th>ACTIONS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products?.length && products.map((product) => (
                            <tr key={product._id}>
                                <td>{product._id}</td>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>{product.category}</td>
                                <td>{product.brand}</td>
                                <td>
                                    <Button
                                        type="button"
                                        variant="light"
                                        onClick={() => {navigate(`/admin/product/updateProduct/${product._id}`)}}
                                    >
                                        Edit
                                    </Button>
                                    &nbsp;
                                    <Button
                                        type="button"
                                        variant="light"
                                        onClick={() => deleteHandler(product)}
                                    >
                                        Delete
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {/* <div>
          {[...Array(pages).keys()].map((x) => (
            <Link
              className={x + 1 === Number(page) ? "btn text-bold" : "btn"}
              key={x + 1}
              to={`/admin/products?page=${x + 1}`}
            >
              {x + 1}
            </Link>
          ))}
        </div> */}
            </>
        </div>
    );
}

export default ProductListScreen;
