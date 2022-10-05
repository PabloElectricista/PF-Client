import axios from "axios";
import { getAllProducts, getProductById, postProducts } from "../slices/productsSlices"
import { toast } from "react-toastify";

export const getProds = () => {
    return function (dispatch) {
        let currentsettings =  ''
        let page = localStorage.getItem("page") === null ? 0 : localStorage.getItem("page")
        currentsettings += page
        let order = localStorage.getItem("order") === null ? "" : localStorage.getItem("order")
        currentsettings += order
        let search = localStorage.getItem("search") === null ? "" :  localStorage.getItem("search")
        currentsettings += search
        let filter = localStorage.getItem("filter") === null ? "" : localStorage.getItem("filter")
        currentsettings += filter

        axios("/products/?start="+currentsettings)  //"
            .then(res => {
                dispatch(getAllProducts(res.data))
            })
            .catch(error => toast(`${error.message}`, { type: "error" }))
    }
}

export const getProdsById = (id) => {
    return function (dispatch) {
        axios("/products/" + id)
            .then(res => {
                dispatch(getProductById(res.data))
            })
            .catch(error => toast(`${error.message}`, { type: "error" }))
    }
}

export const postProds = (product) => {
    return function (dispatch) {
        axios.post("/products", product, {
            headers: {
                'credential': localStorage.getItem('tkn')
            }
        })
            .then(res => dispatch(postProducts(res.data)))
            .catch(error => toast(`${error.message}`, { type: "error" }))
    }
}
export const updateProduct = (id, payload) => {
    return function () {
        (axios.put(`/products/${id}`, payload, {
            headers: {
                'credential': localStorage.getItem('tkn')
            }
        }))
            .then(res => toast(`${res.statusText}`, { type: "info" }))
            .catch(error => toast(`${error.message}`, { type: "error" }))
    }
}
