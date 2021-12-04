import { MainInfo } from "../../components/MainInfo";
import { SearchForm } from "../../components/SearchForm";
import { FilmsList } from "../../components/FilmsList";
export const Main = () => {
    return (
        <div>
            <MainInfo />
            <SearchForm />
            <FilmsList />
        </div>
    );
};
