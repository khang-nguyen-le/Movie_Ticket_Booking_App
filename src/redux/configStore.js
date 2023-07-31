import { configureStore } from '@reduxjs/toolkit'
import userSlice from './slices/userSlice'
import loadingSlice from './slices/loadingSlice'
import theaterSlice from './slices/theaterSlice'
import ticketSlice from './slices/ticketSlice'

export const store = configureStore({
    reducer: {
        user: userSlice,
        loading: loadingSlice,
        theater: theaterSlice,
        ticket: ticketSlice
    }
})