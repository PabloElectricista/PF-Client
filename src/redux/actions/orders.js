import axios from "axios";
import { setallorders, setordersuser, updateorder } from '../slices/ordersSlice'
import { toast } from "react-toastify";

export const getOrders = (page) => {
    return function (dispatch) {
        axios("/orders?start="+page, {
            headers: {
                'credential': localStorage.getItem('tkn')
            }
        })
            .then(res => {dispatch(setallorders(res.data))})
            .catch(error => toast(`${error.message}`, { type: "error" }))
    }
}

export const getOrdersUser = (userid) => {
    return function (dispatch) {
        axios("/orders/user/" + userid, {
            headers: {
                'credential': localStorage.getItem('tkn')
            }
        })
            .then(res => dispatch(setordersuser(res.data)))
            .catch(error => toast(`${error.message}`, { type: "error" }))
    }
}

export const updateoneorder = (id, order, tkn) => async (dispatch) => {
    try {
        const res = await axios.put("/orders"+id, order, {
            headers: {
                'credential': tkn
            }
        })
        dispatch(updateorder(res.data))
    } catch (error) {
        toast(`${error.message}`, { type: "error" })
    }
}
