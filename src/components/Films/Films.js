import { useSelector, useDispatch } from "react-redux";
import { useEffect, useContext } from "react";
import { fetchFilms } from "../../reducers/fetchFilmsSlice";
import { ULElement, LIElement, Title, Container, ShowMoreButton, ButtonWrapper } from "./styled";
import { Link } from "react-router-dom";
import { SearchContext } from "../../pages/Main";
export const Films = () => {
    const dispatch = useDispatch();

    const seachContext = useContext(SearchContext);
    const { pageNumber, setPageNumber, searchQuery } = seachContext;
    const films = useSelector((state) => state.films.films);
    
    const handlePreviousPage = () => {
        setPageNumber((prevPageNumber) => prevPageNumber - 1);
    };

    const handleNextPage = () => {
        setPageNumber((prevPageNumber) => prevPageNumber + 1);
    };
    useEffect(() => {
        const payload = {
            pageNumber,
            searchQuery,
        };
        dispatch(fetchFilms(payload));
    }, [pageNumber]);

    if (!films) {
        return null;
    }
    return (
        <>
            <Container>
                <Title>Most popular films</Title>
                <ULElement>
                    {films.map((film) => (
                        <LIElement key={film.imdbID} style={{ backgroundImage: `url(${film.Poster})` }}>
                            <Link to={`/film/${film.imdbID}`} style={{ display: "block", height: "100%" }} />
                        </LIElement>
                    ))}
                </ULElement>
                <ButtonWrapper>
                    <ShowMoreButton
                        type="button"
                        onClick={handlePreviousPage}
                        disabled={pageNumber <= 1 ? true : false}
                        style={{ opacity: pageNumber <= 1 ? 0.5 : 1 }}
                    >
                        Previous Page
                    </ShowMoreButton>
                    <ShowMoreButton type="button" onClick={handleNextPage}>
                        Next Page
                    </ShowMoreButton>
                </ButtonWrapper>
            </Container>
        </>
    );
};
