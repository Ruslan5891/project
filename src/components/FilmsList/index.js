import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchFilms } from "../../reducers/fetchFilmsSlice";
import { ULElement, LIElement, Title, Container } from "./styled";
import { Link } from "react-router-dom";
export const FilmsList = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchFilms());
    }, [dispatch]);

    const films = useSelector((state) => state.films.films.Search);
    if (!films) {
        return null;
    }
    return (
        <>
            <Container>
                <Title>Most popular films</Title>
                <ULElement>
                    {films.map((film) => (
                        <Link to="/card/" key={film.imdbID} style={{ display: "contents" }}>
                            <LIElement style={{ backgroundImage: `url(${film.Poster})` }} />
                        </Link>
                    ))}
                </ULElement>
            </Container>
        </>
    );
};
