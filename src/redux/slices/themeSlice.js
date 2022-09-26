import { createSlice } from '@reduxjs/toolkit';

export const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        theme: false
    },
    reducers: {
        settheme(state, action){
            state.theme = action.payload
        }
    }
})

export const { settheme } = themeSlice.actions;
export default themeSlice.reducer
