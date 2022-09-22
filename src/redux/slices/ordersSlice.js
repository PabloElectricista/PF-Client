import { createSlice } from '@reduxjs/toolkit';

export const ordersSlice = createSlice({
    name: 'orders',
    initialState: {
        orders: [],
        ordersuser: []
    },
    reducers: {
        setallorders(state, action){
            state.filter = action.payload
        },
        setordersuser(state, action){
            state.ordersuser = action.payload
        },
        updateorder(state, action){
            state.filter = action.payload
        }
    }
})

export const { setallorders, setordersuser, updateorder } = ordersSlice.actions;
export default ordersSlice.reducer
