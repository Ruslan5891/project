import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const fetchFavoriteFilms = createAsyncThunk("searchFilm/fetchFilms", async function (id) {
    const response = await fetch(`http://www.omdbapi.com/?i=${id}&apikey=83713537`);
    const data = await response.json();
    return data;
});


const searchFavoriteFilmsSlice = createSlice({
    name: "searchFavoriteFilms",
    initialState: {
        films: [],
    },
    reducers: {},
    extraReducers: {
        [fetchFavoriteFilms.pending]: (state) => {},
        [fetchFavoriteFilms.fulfilled]: (state, action) => {
            state.films = action.payload ;
        },
        [fetchFavoriteFilms.rejected]: (state, action) => {},
     
    },
});

export default searchFavoriteFilmsSlice.reducer;