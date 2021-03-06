import styled from "styled-components";

export const HeaderElem = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
    background: #000000;
`;
export const Wrapper = styled.div`
    background: #000000;
`;
export const Button = styled.button`
    margin-left: 10px;
    border-radius: 15px;
    padding: 8px;
    cursor: pointer;
    background-color: #696969;
    color: #fff;
    border: 1px;
`;
export const LoginButton = styled.button`
    border-radius: 15px;
    padding: 7px;
    background-color: #696969;
    border: 1px;
    @media (max-width: 505px) {
        margin-bottom: 10px;
    }
`;
export const Container = styled.div`
    width: 100%;
    min-width: 320px;
    max-width: 1240px;
    margin: 0 auto;
    padding: 0 10px;
`;
export const ButtonWrapper = styled.div`
    @media (max-width: 505px) {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
`;
export const LogoImg = styled.img`
    width: 100%;
    height: 100%;
    max-width: 120px;
`;
