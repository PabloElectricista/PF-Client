import axios from "axios";
import { getAllProducts, getProductById, postProducts } from "../slices/productsSlices"

export const getProds = () => {
    return function (dispatch) {
        let currentsettings =  ''
        let page = localStorage.getItem("page") === null ? "" : localStorage.getItem("page")
        console.log(page);
        currentsettings += page
        let order = localStorage.getItem("order") === null ? "" : localStorage.getItem("order")
        console.log(order);
        currentsettings += order
        let search = localStorage.getItem("search") === null ? "" :  localStorage.getItem("search")
        console.log(search);
        currentsettings += search
        let filter = localStorage.getItem("filter") === null ? "" : localStorage.getItem("filter")
        console.log(filter);
        currentsettings += filter
        console.log(currentsettings);

        axios("/products/?start="+currentsettings)  //"
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
                dispatch(getProductById(res.data))
            })
            .catch(err => console.error(err))
    }
}

export const postProds = (product, tkn) => {
    return function (dispatch) {
        axios.post("/products", product, {
            headers: {
                'credential': tkn
            }
        })
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
            }
        }))
            .then(res => console.log(res.statusText))
            .catch(err => console.error(err))
    }
}
