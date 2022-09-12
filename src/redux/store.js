import { configureStore } from '@reduxjs/toolkit';
import productsreducer from './slices/productsSlices'

export const store = configureStore({
    reducer: {
        products: productsreducer

    }
});
