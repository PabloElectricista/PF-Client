import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
    name: 'filter',
    initialState: {
        filter: ""
    },
    reducers: {
        setfilter(state, action){
            state.filter = action.payload
        }
    }
})

export const { setfilter } = filterSlice.actions;
export default filterSlice.reducer
