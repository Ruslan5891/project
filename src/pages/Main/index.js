import React, { createContext, useState } from "react";
import { MainInfo } from "../../components/MainInfo";
import { SearchForm } from "../../components/SearchForm";
import { Films } from "../../components/Films/Films";

export const SearchContext = createContext();
export const Main = () => {
    const [pageNumber, setPageNumber] = useState(1);
    const [searchQuery, setSearchQuaery] = useState("new");
    return (
        <div>
            <MainInfo />
            <SearchContext.Provider value={{ pageNumber, setPageNumber, searchQuery, setSearchQuaery }}>
                <SearchForm />
                <Films />
            </SearchContext.Provider>
        </div>
    );
};
