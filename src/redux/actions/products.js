import axios from "axios";
import { getAllProducts, getProductById, postProducts } from "../slices/productsSlices"

export const getProds = (page) => {
    return function (dispatch) {
        axios("/products/?start="+page)  //
            .then(res => {
                dispatch(getAllProducts(res.data))
            })
            .catch(err => console.error(err))
    }
}

export const getProdsById = (id) => {
    return function (dispatch) {
        axios("/products/" + id)
            .then(res => {
                console.log(res.data);
                dispatch(getProductById(res.data))
            })
            .catch(err => console.error(err))
    }
}

export const postProds = (product,tkn) => {
    return function (dispatch) {
        axios.post("/products",product, {
            headers: {
            'credential': tkn
          }})
            .then(res => dispatch(postProducts(res.data)))
            .catch(err => console.error(err))
    }
}
export const updateProduct = (id, payload, tkn) => {
    console.log(id, payload, tkn)
    return function () {
                (axios.put(`/products/${id}`, payload, {
            headers: {
            'credential': tkn
          }}))
            .then(res => console.log(res.statusText))
            .catch(err => console.error(err))
    }
}
