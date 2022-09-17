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
        postProducts(state, action){
            state.products = action.payload.products
        },
        getProductById(state, actions){
            state.details = actions.payload
        }
    }
})

export const { getAllProducts, getProductById, postProducts } = productsSlice.actions;
export default productsSlice.reducer
