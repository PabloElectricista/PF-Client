import { configureStore } from '@reduxjs/toolkit';
import productsreducer from './slices/productsSlices'
import usersreducer from './slices/usersSlices'
import filterreducer from './slices/filterSlice'

export const store = configureStore({
    reducer: {
        products: productsreducer,
        users: usersreducer,
        filter: filterreducer
    }
});
