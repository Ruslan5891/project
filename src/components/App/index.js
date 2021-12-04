import React from "react";
import { Route, Routes } from "react-router-dom";
import { Main } from "../../pages/Main";
import { Favorites } from "../../pages/Favorites";
import { History } from "../../pages/History";
import { Registration } from "../../pages/Registration";
import { Card } from "../../pages/Card";
import { SignIn } from "../../pages/SignIn";

function App() {
    return (
        <Routes>
            <Route path="/" exact element={<Main />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/history" element={<History />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/card/:id" element={<Card />} />
            <Route path="/signin" element={<SignIn />} />
        </Routes>
    );
}

export default App;
