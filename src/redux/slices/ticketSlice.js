import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ticketServ } from "../../services/ticketServices";

export const getMovieSeatPlanThunk = createAsyncThunk('ticket/getMovieSeatPlanThunk', async (scheduleId) => {
    const res = await ticketServ.getMovieSeatPlan(scheduleId)

    return res.data.content
})

const initialState = {
    movieSeatPlan: {},
    ticketList: [],
    seatList: []
}


const ticketSlice = createSlice({
    name: 'ticket',
    initialState,
    reducers: {
        setMovieSeatPlan: (state, action) => {
            state.movieSeatPlan = action.payload
        },
        setTicketList: (state, action) => {
            console.log(action)
            const newTicket = action.payload
            const selectedTicketIndex = state.ticketList.findIndex(ticket => ticket.maGhe === newTicket.maGhe)
            console.log(selectedTicketIndex)
            if (selectedTicketIndex < 0) {
                state.ticketList.push({
                    maGhe: newTicket.maGhe,
                    giaVe: newTicket.giaVe
                })
                state.seatList.push(newTicket.soGhe)
            } else {
                state.ticketList.splice(selectedTicketIndex, 1)
                state.seatList.splice(selectedTicketIndex, 1)
            }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getMovieSeatPlanThunk.fulfilled, (state, action) => {
            console.log(action)
            state.movieSeatPlan = action.payload;
        })
        builder.addCase(getMovieSeatPlanThunk.rejected, (state, action) => {
            console.log(action)
        })
    }
})

export const { setMovieSeatPlan, setTicketList } = ticketSlice.actions

export default ticketSlice.reducer