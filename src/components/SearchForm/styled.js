import styled from "styled-components";
export const Form = styled.form``;
export const Label = styled.label`
    padding: 3px;
    display: flex;
    align-items: center;
    border-radius: 5px;
    width: 100%;
    borded: 1px solid black;
    position: relative;
`;
export const Input = styled.input`
    border: none;
    outline: none;
    width: 100%;
    height: 40px;
    background: #000;
    padding: 0 40px;
    border-radius: 30px;
    color: #fff;
    background-color: #696969;
    :: placeholder {
        color: #ffffff;
        opacity: 0.3;
    }
`;
export const Button = styled.button`
    position: absolute;
    right: 20px;
    border: 1px solid #fff;
    color: #fff;
    font-weight: 700;
    background-color: #585858;
    border-radius: 30px;
    padding: 5px 20px;
    &:hover {
        cursor: pointer;
        background-color: #fff;
        color: #000;
    }
`;
export const Container = styled.div`
    width: 100%;
    min-width: 320px;
    max-width: 1240px;
    margin: 0 auto;
    padding: 0 10px;
`;
export const Wrapper = styled.div`
    background-color: #000000;
    min-height: 75px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;
