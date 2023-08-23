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

export const fetchSingleEvent = createAsyncThunk('get/event', async(title) => {
    try {
        const { data } = await axios.get(`/api/${title}`)
        return data
    } catch (error) {
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

export const deleteEvent = createAsyncThunk('del/events', async ({title}) => {
    try {
        const {data} = await axios.delete(`/api/?title=${title}`)
        return data
    } catch(error) {
        throw new Error(error.message)
    }
})

const eventSlice = createSlice({
    name: 'events',
    initialState: {
        events: {},
        single_event: {}
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchEvents.fulfilled, (state,action) => {
            state.events = action.payload
        })
        builder.addCase(postEvents.fulfilled, (state,action) => {
            state.events.push(action.payload)
        })
        builder.addCase(fetchSingleEvent.fulfilled, (state,action) => {
            state.single_event = action.payload
        })
        builder.addCase(deleteEvent.fulfilled, (state,action) => {
             const eventToDelete = action.payload
             return state.events.filter(event => event.id !== eventToDelete)
        })
    }
})

export default eventSlice.reducer 