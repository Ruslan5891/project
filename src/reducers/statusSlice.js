import { createSlice } from "@reduxjs/toolkit";

export const statusSlice = createSlice({
    name: "userStatus",
    initialState: {
        isLogin: false,
        userProfile: {},
        allUsers: [],
        errorMessage: "",
    },

    reducers: {
        addProfile(state, action) {
            state.isLogin = true;
            state.userProfile = action.payload;
            if (!state.allUsers.length) {
                state.allUsers = [].concat(action.payload);
            } else {
                state.allUsers = state.allUsers.concat(action.payload);
            }
        },
        getAllUsers(state, action) {
            state.allUsers = action.payload;
        },
        getActiveUser(state, action) {
            state.isLogin = true;
            state.userProfile = action.payload;
        },
        changeStatus(state) {
            state.isLogin = false;
        },
        checkValidity(state, action) {
            state.isLogin = true;
            state.userProfile = action.payload;
        },
        setupError(state, action) {
            state.errorMessage = action.payload;
        },
        setHistory(state, action) {
            state.userProfile = { ...state.userProfile, history: [].concat(action.payload) };
        },
        addToFavorites(state, action) {
            if (!state.userProfile.favorites) {
                state.userProfile = { ...state.userProfile, favorites: [].concat(action.payload) };
                return;
            }
            let include;

            state.userProfile.favorites.forEach((element) => {
                if (element === action.payload) {
                    include = true;
                } else {
                    include = false;
                }
            });

            if (!include) {
                state.userProfile = {
                    ...state.userProfile,
                    favorites: state.userProfile.favorites.concat(action.payload),
                };
                return;
            } else {
                let result = state.userProfile.favorites.filter((el) => el !== action.payload);
                state.userProfile = { ...state.userProfile, favorites: result };
                return;
            }
        },
    },
});

export const {
    getAllUsers,
    addProfile,
    addToFavorites,
    getActiveUser,
    changeStatus,
    setupError,
    checkValidity,
    setHistory,
} = statusSlice.actions;
export default statusSlice.reducer;
