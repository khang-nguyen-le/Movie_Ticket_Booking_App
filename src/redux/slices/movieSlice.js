import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { movieServ } from "../../services/movieServices"

export const getMovieDetailsThunk = createAsyncThunk('movie/getMovieDetailsThunk', async (movieId) => {
    const res = await movieServ.getMovieDetails(movieId)

    console.log(res)
})

const initialState = {
    movie: {}
}

const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getMovieDetailsThunk.fulfilled, (state, action) => {
            state.movie = action.payload
        })
    }
})

export const movieActions = movieSlice.actions

export default movieSlice.reducer