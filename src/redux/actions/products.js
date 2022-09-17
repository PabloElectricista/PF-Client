import axios from "axios";
import { getAllProducts, getProductById, postProducts } from "../slices/productsSlices"

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

export const postProds = () => {
    return function (dispatch) {
        axios("/products")
            .then(res => dispatch(postProducts(res.data)))
            .catch(err => console.error(err))
    }
}
