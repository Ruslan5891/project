import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import filmsReducer from "../reducers/fetchFilmsSlice";
import statusReducer from "../reducers/statusSlice";
import titlefilmReducer from "../reducers/fetchTitleFilm";
import { MyLogger } from "../midlware/logger";

export default configureStore({
    reducer: {
        films: filmsReducer,
        titleFilm: titlefilmReducer,
        authorization: statusReducer,
    },
    middleware: [MyLogger, ...getDefaultMiddleware()],
});
