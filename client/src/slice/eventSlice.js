import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchEvents = createAsyncThunk('get/events', async ()=> {
    try {
        const {data} = await axios.get('/api/')
        return data
    } catch(error) {
        throw new Error(error.message)
    }
})

export const postEvents = createAsyncThunk('post/events', async ({title,start,end,desc}) => {
    try {
        const {data} = await axios.post('/api/', {
            title,start,end,desc
        })
        return data
    } catch(error) {
        throw new Error(error.message)
    }
})

const eventSlice = createSlice({
    name: 'events',
    initialState: {},
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchEvents.fulfilled, (state,action) => {
            return action.payload
        })
        builder.addCase(postEvents.fulfilled, (state,action) => {
            state.push(action.payload)
        })
    }
})

export default eventSlice.reducer 