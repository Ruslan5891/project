import React from "react";
import { Titled, TitletDescr, Wrapper, Container } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchTitleFilm } from "../../reducers/fetchTitleFilm";
export const MainInfo = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchTitleFilm());
    }, [dispatch]);
    const filmData = useSelector((state) => state.titleFilm.titleFilm);
    const { Title, Plot } = filmData;

    return (
        <Wrapper>
            <Container>
                <Titled> {Title} </Titled>
                <TitletDescr> {Plot}</TitletDescr>
            </Container>
        </Wrapper>
    );
};
