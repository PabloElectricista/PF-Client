/* eslint-disable no-unused-vars */
// eslint-disable-next-line

import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import data from "../../data";

function ProductListScreen() {
  const navigate = useNavigate();
  // eslint-disable-next-line
  const { search } = useLocation();

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
    // if (window.confirm("Are you sure to delete?")) {
    //   try {
    //     await axios.delete(`/api/products/${product._id}`, {
    //       headers: { Authorization: `Bearer ${userInfo.token}` },
    //     });
    //     toast.success("product deleted successfully");
    //     dispatch({ type: "DELETE_SUCCESS" });
    //   } catch (err) {
    //     toast.error(getError(error));
    //     dispatch({
    //       type: "DELETE_FAIL",
    //     });
    //   }
    // }
  };

  return (
    <div>
      <Row>
        <Col>
          <h1>Products</h1>
        </Col>
        <Col className="col text-end">
          <div>
            <Link to='/admin/product/createProduct'>
            <Button type="button" onClick={createHandler}>
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
            {data.products.map((product) => (
              <tr key={product.slug}>
                <td>{product.slug}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.category}</td>
                <td>{product.brand}</td>
                <td>
                  <Button
                    type="button"
                    variant="light"
                    onClick={() => navigate(`/admin/product/${product.slug}`)}
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
