import { createSlice } from '@reduxjs/toolkit';

export const messagesSlice = createSlice({
    name: 'messages',
    initialState: {
        messages: []
    },
    reducers: {
        setmessages(state, action){
            state.messages = action.payload
        }
    }
})

export const { setmessages } = messagesSlice.actions;
export default messagesSlice.reducer
