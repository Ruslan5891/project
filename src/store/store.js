import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import filmsReducer from "../reducers/fetchFilmsSlice";
import statusReducer from "../reducers/statusSlice";
import titlefilmReducer from "../reducers/fetchTitleFilm";
import { CheckUserIncluding } from "../midlware/CheckUserIncluding";
import searchFilm from "../reducers/fetchCardFilm";
import { loadState } from "../cookiesStorage";

const persistState = loadState();
export const store = configureStore({
    reducer: {
        searchFilm: searchFilm,
        films: filmsReducer,
        titleFilm: titlefilmReducer,
        authorization: statusReducer,
    },
    middleware: [CheckUserIncluding, ...getDefaultMiddleware()],
    preloadedState: persistState,
});
