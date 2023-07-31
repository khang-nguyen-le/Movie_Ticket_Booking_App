import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    selectedTheater: {},
    defaultTheater: {}
}

const theaterSlice = createSlice({
    name: 'theater',
    initialState,
    reducers: {
        setSelectedTheater: (state, action) => {
            state.selectedTheater = action.payload
        },
        setDefaultTheater: (state, action) => {
            state.defaultTheater = action.payload
        }
    }
})

export const { setSelectedTheater, setDefaultTheater } = theaterSlice.actions

export default theaterSlice.reducer