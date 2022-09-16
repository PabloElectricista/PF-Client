import { createSlice } from '@reduxjs/toolkit';

export const productsSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
        count: 0,
        details: {},
        brand: [],
        colors: [],
        price: [],
        status: []
    },
    reducers: {
        getAllProducts(state, action){
            state.products = action.payload.products
            state.count = action.payload.count
            state.brand = action.payload.brand
            state.colors = action.payload.colors
            state.price = action.payload.price
            state.status = action.payload.status
        },
        getProductById(state, actions){
            state.details = actions.payload
        }
    }
})

export const { getAllProducts, getProductById } = productsSlice.actions;
export default productsSlice.reducer
