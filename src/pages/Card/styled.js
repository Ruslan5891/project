import styled from "styled-components";

export const WrapperFilm = styled.div`
    height: 80vh;
    display: flex;
    align-items: center;
    background-color: #ffffff;
`;
export const HeadTitle = styled.div`
    background-color: #696969;
    height: 50px;
    display: flex;
    align-items: end;
`;
export const MainContentWrapper = styled.div`
    min-height: 400px;
    display: flex;
    box-shadow: 0px 2px 12px 10px rgb(0 0 40 / 20%);
    padding: 20px 0;
`;
export const Container = styled.div`
    width: 100%;
    min-width: 320px;
    max-width: 1240px;
    margin: 0 auto;
    padding: 0 10px;
    padding-bottom: 20px;
`;
export const MainImage = styled.div`
    width: 50%;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
`;
export const FilmDescription = styled.div`
    padding: 20px;
    width: 100%;
    color: #000000;
`;

export const TitleFilm = styled.h2`
    margin-bottom: 60px;
    color: #000000;
    font-size: 30px;
`;
export const FilmContent = styled.p`
    color: #000000;
    margin-bottom: 20px;
`;
export const Released = styled.p`
    margin-bottom: 20px;
    color: #000000;
`;
export const Director = styled.p`
    margin-bottom: 20px;
    color: #000000;
`;
export const Button = styled.button`
    color: black;
`;
export const Rating = styled.p`
    margin-bottom: 50px;
    color: #000000;
`;
