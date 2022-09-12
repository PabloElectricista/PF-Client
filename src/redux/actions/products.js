import axios from "axios";
import { getAllProducts, getProductById } from "../slices/productsSlices"

export const getProds = () => {
    return function (dispatch) {
        axios("/products")
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
