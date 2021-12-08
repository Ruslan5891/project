import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//const APIKey = '83713537';

export const fetchFilms = createAsyncThunk("films/fetchFilms", async function () {
    const response = await fetch("http://www.omdbapi.com/?apikey=83713537&s=all&type=movie");

    const data = await response.json();
    return data;
});

// export const fetchTitleFilm = createAsyncThunk("films/fetchFilms", async function () {
//     const response = await fetch("http://www.omdbapi.com/?apikey=83713537&i=tt0842926");

//     const data = await response.json();
//     return data;
// });

const filmsSlice = createSlice({
    name: "autorization",
    initialState: {
        films: [],
    },
    reducers: {
        getAllFilms() {},
    },
    extraReducers: {
        [fetchFilms.pending]: (state) => {
        },
        [fetchFilms.fulfilled]: (state, action) => {
            state.films = action.payload;
        },
        [fetchFilms.rejected]: (state, action) => {},
        // [fetchTitleFilm.pending]: () => {},
        // [fetchTitleFilm.fulfilled]: (state, action) => {
        //     state.titleFilm = action.payload;
        // },
        // [fetchTitleFilm.rejected]: () => {},
    },
});
export const { getAllFilms } = filmsSlice.actions;
export default filmsSlice.reducer;
