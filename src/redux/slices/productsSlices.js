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
            state.categories = action.payload.categories
        },
        postProducts(state, action){
            state.products = action.payload.products
        },
        putProducts(state, action){
            state.products = action.payload.products
        },
        getProductById(state, actions){
            state.details = actions.payload
        }
    }
})

export const { getAllProducts, getProductById, postProducts, putProducts } = productsSlice.actions;
export default productsSlice.reducer
