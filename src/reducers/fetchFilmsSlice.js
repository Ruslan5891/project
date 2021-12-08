import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//const APIKey = '83713537';

export const fetchFilms = createAsyncThunk("films/fetchFilms", async function (payload) {
    const { searchQuery, pageNumber } = payload;

    const response = await fetch(
        `http://www.omdbapi.com/?apikey=83713537&s=${searchQuery}&type=movie&page=${pageNumber}`
    );

    const data = await response.json();
    return data;
});

const filmsSlice = createSlice({
    name: "autorization",
    initialState: {
        films: [],
    },
    reducers: {
        
    },
    extraReducers: {
        [fetchFilms.pending]: (state) => {},
        [fetchFilms.fulfilled]: (state, action) => {
            state.films = action.payload.Search;
        },
        [fetchFilms.rejected]: (state, action) => {},
    },
});
export const {} = filmsSlice.actions;
export default filmsSlice.reducer;
