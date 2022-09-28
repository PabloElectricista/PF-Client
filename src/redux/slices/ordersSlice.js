import { createSlice } from '@reduxjs/toolkit';

export const ordersSlice = createSlice({
    name: 'orders',
    initialState: {
        orders: [],
        ordersuser: [],
        order: {}
    },
    reducers: {
        setallorders(state, action){
            state.orders = action.payload
        },
        setordersuser(state, action){
            state.ordersuser = action.payload
        },
        updateorder(state, action){
            state.order = action.payload
        }
    }
})

export const { setallorders, setordersuser, updateorder } = ordersSlice.actions;
export default ordersSlice.reducer
