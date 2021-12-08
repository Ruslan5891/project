import styled from "styled-components";

export const ULElement = styled.ul`
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;
export const LIElement = styled.li`
    color: #000000;
    min-height: 350px;
    margin-bottom: 20px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    border-radius: 25px;
    width: 18%;
    @media (min-width: 320px) {
        width: 45%;
    }
    @media (min-width: 560px) {
        max-height: 250px;
        width: 40%;
    }
    @media (min-width: 640px) {
        width: 35%;
    }
    @media (min-width: 768px) {
        min-height: 370px;
        width: 23%;
    }
    @media (min-width: 1440px) {
        width: 18%;
    }
`;
export const Title = styled.h2`
    margin: 20px 0;
    color: #000000;
    text-transform: uppercase;
    font-size: 16px;
`;

export const Container = styled.div`
    width: 100%;
    min-width: 320px;
    max-width: 1240px;
    margin: 0 auto;
    padding: 0 10px;
    padding-bottom: 20px;
`;
export const ShowMoreButton = styled.button`
    color: #000000;
    cursor: pointer;
    width: 135px;
`;
export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
`;
