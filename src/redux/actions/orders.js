import axios from "axios";
import { setallorders, setordersuser, updateorder } from '../slices/ordersSlice'

export const getOrders = (tkn) => {
    return function (dispatch) {
        axios("/orders", {
            headers: {
                'credentials': tkn
            }
        })
            .then(res => {dispatch(setallorders(res.data))})
            .catch(err => console.error(err))
    }
}

export const getOrdersByUser = (id, tkn) => {
    return function (dispatch) {
        axios("/orders/" + id, {
            headers: {
                'credentials': tkn
            }
        })
            .then(res => dispatch(setordersuser(res.data)))
            .catch(err => console.error(err))
    }
}

export const updateorderUser = (order) => async (dispatch) => {
    try {
        const res = await axios.put("/orders", order)
        dispatch(updateorder(res.data))
    } catch (error) {
        console.log(error);
    }
}
