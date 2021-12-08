import {
    WrapperFilm,
    HeadTitle,
    MainContentWrapper,
    Container,
    MainImage,
    FilmDescription,
    TitleFilm,
    FilmContent,
    Released,
    Director,
    Button,
    Rating,
} from "./styled";
import { fetchFilm } from "../../reducers/fetchCardFilm";
import { addToFavorites } from "../../reducers/statusSlice";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { useLocation } from "react-router";
export const Card = () => {

    const [add, setAdd] = useState(false);
    const favorites = useSelector((state) => state.authorization.userProfile.favorites);
    const location = useLocation();
    const dispatch = useDispatch();
    const film = useSelector((state) => state.searchFilm.film);
    const isLogin = useSelector((state) => state.authorization.isLogin);
    const filmId = location.pathname.split("/").pop();
    

    useEffect(() => {
        dispatch(fetchFilm(filmId));
        favorites?.includes(filmId) ? setAdd(true) : setAdd(false);
    }, []);

    const handleAddToFavorites = () => {
        dispatch(addToFavorites(filmId));
        setAdd(!add);
    };

    return (
        <>
            <HeadTitle>
                <Container>Home | {film.Title}</Container>
            </HeadTitle>

            <WrapperFilm>
                <Container>
                    <MainContentWrapper>
                        <MainImage style={{ backgroundImage: `url(${film.Poster})` }}></MainImage>
                        <FilmDescription>
                            <TitleFilm>{film.Title}</TitleFilm>
                            <FilmContent>Description: {film.Plot}</FilmContent>
                            <Released>Released: {film.Released} </Released>
                            <Director>Director: {film.Director}</Director>
                            <Rating>Rating: {film.imdbRating}</Rating>
                            {isLogin ? (
                                <Button type="button" onClick={handleAddToFavorites}>
                                    {add ? "REMOVE FROM FAVORITES" : "ADD TO FAVORITES"}
                                </Button>
                            ) : null}
                        </FilmDescription>
                    </MainContentWrapper>
                </Container>
            </WrapperFilm>
        </>
    );
};
