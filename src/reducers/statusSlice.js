import { createSlice } from "@reduxjs/toolkit";

export const statusSlice = createSlice({
    name: "userStatus",
    initialState: {
        isLogin: false,
        userProfile: {},
        allUsers: [],
    },
    reducers: {
        addProfile(state, action) {
            state.isLogin = true;
            state.userProfile = action.payload;
            if (state.allUsers.length === 0) {
                state.allUsers = state.allUsers.concat(action.payload);
                localStorage.setItem("allUsers", JSON.stringify(state.allUsers));
                localStorage.setItem("currentUser", JSON.stringify(action.payload));
            } else {
                state.allUsers = state.allUsers.concat(action.payload);
                localStorage.setItem("allUsers", JSON.stringify(state.allUsers));
                localStorage.setItem("currentUser", JSON.stringify(action.payload));
            }
        },
        getAllUsers(state, action) {
            state.allUsers = [].concat(action.payload);
        },
        getActiveUser(state, action) {
            state.isLogin = true;
            state.userProfile = action.payload;
        },
        changeStatus(state) {
            state.isLogin = false;
            localStorage.removeItem('currentUser');
        },
        checkValidity(state, action) {
            state.isLogin = true;
            state.userProfile = action.payload;
            
        }
    },
});

export const { getAllUsers, addProfile, getActiveUser, changeStatus, checkValidity } = statusSlice.actions;
export default statusSlice.reducer;
