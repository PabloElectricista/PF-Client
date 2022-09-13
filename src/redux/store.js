import { configureStore } from '@reduxjs/toolkit';
import productsreducer from './slices/productsSlices'
import usersreducer from './slices/usersSlices'

export const store = configureStore({
    reducer: {
        products: productsreducer,
        users: usersreducer
    }
});
