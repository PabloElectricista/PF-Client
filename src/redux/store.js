import { configureStore } from '@reduxjs/toolkit';
import productsreducer from './slices/productsSlices'
import usersreducer from './slices/usersSlices'
import ordersreducer from './slices/ordersSlice'
import messagesreducer from './slices/messagesSlices'
import themereducer from "./slices/themeSlice";

export const store = configureStore({
    reducer: {
        products: productsreducer,
        users: usersreducer,
        orders: ordersreducer,
        messages: messagesreducer,
        theme: themereducer
    }
});
