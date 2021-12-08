import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchFilm = createAsyncThunk("searchFilm/fetchFilms", async function (id) {
    const response = await fetch(`http://www.omdbapi.com/?i=${id}&apikey=83713537`);
    const data = await response.json();
    return data;
});

const searchFilmSlice = createSlice({
    name: "searchFilm",
    initialState: {
        film: {},
    },
    reducers: {},
    extraReducers: {
        [fetchFilm.pending]: (state) => {},
        [fetchFilm.fulfilled]: (state, action) => {
            state.film = action.payload;
        },
        [fetchFilm.rejected]: (state, action) => {},
    },
});

export default searchFilmSlice.reducer;
