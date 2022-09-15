import { createSlice } from '@reduxjs/toolkit';

export const productsSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
        count: 0,
        details: {}
    },
    reducers: {
        getAllProducts(state, action){
            state.products = action.payload.products
            state.count = action.payload.count
        },
        getProductById(state, actions){
            state.details = actions.payload
        }
    }
})

export const { getAllProducts, getProductById } = productsSlice.actions;
export default productsSlice.reducer
