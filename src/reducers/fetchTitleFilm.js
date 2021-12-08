import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//const APIKey = '83713537';

export const fetchTitleFilm = createAsyncThunk("titlefilms/fetchFilms", async function () {
    const response = await fetch( 'http://www.omdbapi.com/?i=tt3896198&apikey=83713537' ) 
    ///"http://www.omdbapi.com/?apikey=83713537&i=tt3896198");

    const data = await response.json();
    return data;
});

const titlefilmSlice = createSlice({
    name: "titleFilm",
    initialState: {
        titleFilm: {},
    },
    reducers: {},
    extraReducers: {
        [fetchTitleFilm.pending]: (state) => {},
        [fetchTitleFilm.fulfilled]: (state, action) => {
            state.titleFilm = action.payload;
        },
        [fetchTitleFilm.rejected]: (state, action) => {},
    },
});

export default titlefilmSlice.reducer;
