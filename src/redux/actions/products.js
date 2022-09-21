import axios from "axios";
import { getAllProducts, getProductById, postProducts, putProducts } from "../slices/productsSlices"

export const getProds = (page) => {
    return function (dispatch) {
        axios("/products?start="+page)
            .then(res => dispatch(getAllProducts(res.data)))
            .catch(err => console.error(err))
    }
}

export const getProdsById = (id) => {
    return function (dispatch) {
        axios("/products" + id)
            .then(res => dispatch(getProductById(res.data)))
            .catch(err => console.error(err))
    }
}

export const postProds = (product,tkn) => {
    return function (dispatch) {
        axios.post("/products",product, {
            headers: {
            'x-access-token': tkn
          }})
            .then(res => dispatch(postProducts(res.data)))
            .catch(err => console.error(err))
    }
}
export const updateProduct = (id, payload, tkn) => {
    return function (dispatch) {
        const response = (axios.put(`/products/${id}`,payload, {
            headers: {
            'x-access-token': tkn
          }}))
            console.log("accionesssssssssssss", response)
            .then(res => dispatch(putProducts(res.data)))
            .catch(err => console.error(err))
    }
}

