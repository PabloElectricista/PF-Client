import axios from "axios";
import { setallorders, setordersuser, updateorder } from '../slices/ordersSlice'

export const getOrders = (page, tkn) => {
    return function (dispatch) {
        axios("/orders?start="+page, {
            headers: {
                'credential': tkn
            }
        })
            .then(res => {dispatch(setallorders(res.data))})
            .catch(err => console.error(err))
    }
}

export const getOrdersUser = (userid, tkn) => {
    return function (dispatch) {
        axios("/orders/user/" + userid, {
            headers: {
                'credential': tkn
            }
        })
            .then(res => dispatch(setordersuser(res.data)))
            .catch(err => console.error(err))
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
        console.log(error);
    }
}
