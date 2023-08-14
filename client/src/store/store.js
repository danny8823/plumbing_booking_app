import {configureStore} from '@reduxjs/toolkit'
import eventsReducer from '../slice/eventSlice.js'

export const store = configureStore({
    reducer: {
        events: eventsReducer
    }
})