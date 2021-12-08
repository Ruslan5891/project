import React from "react";
import { Route, Routes } from "react-router-dom";
import { Main } from "../../pages/Main";
import { Favorites } from "../../pages/Favorites";
import { History } from "../../pages/History";
import { Registration } from "../../pages/Registration";
import { Card } from "../../pages/Card";
import { SignIn } from "../../pages/SignIn";
import { useEffect } from "react";
import {  getAllUsers, getActiveUser } from "../../reducers/statusSlice";
import {  useDispatch } from "react-redux";
import { Header } from "../Header";

function App() {    
    const dispatch = useDispatch();
    useEffect(() => {
        const users =JSON.parse(localStorage.getItem("allUsers"));
        if (!users) {
            return [];
        }
        dispatch(getAllUsers(users));

        const activeUser = JSON.parse(localStorage.getItem('currentUser'));
        if(!activeUser) {
            return null;
        }
        dispatch(getActiveUser(activeUser));
    }, [dispatch]);
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" exact element={<Main />} />
                <Route path="/favorites" element={<Favorites />} />
                <Route path="/history" element={<History />} />
                <Route path="/registration" element={<Registration />} />
                <Route path="/card/:id" element={<Card />} />
                <Route path="/signin" element={<SignIn />} />
            </Routes>
        </>
    );
}

export default App;
